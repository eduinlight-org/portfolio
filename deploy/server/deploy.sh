#!/usr/bin/env bash
# Forced command for the GitHub Actions deploy key.
#
# The key in ~/.ssh/authorized_keys is pinned to this script, so the only thing
# it can do is roll this service to a named image — it cannot open a shell. The
# image reference arrives as $SSH_ORIGINAL_COMMAND and is validated below.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

# The repository this host will accept images from. Kept in .env rather than
# hardcoded here so that moving the repo between owners or organisations is a
# one-line config change on the box, not a code change.
ALLOWED_IMAGE_REPO="$(grep -E '^ALLOWED_IMAGE_REPO=' .env | cut -d= -f2- || true)"

if [[ -z "$ALLOWED_IMAGE_REPO" ]]; then
	echo "misconfigured: ALLOWED_IMAGE_REPO is not set in $DIR/.env" >&2
	exit 2
fi

IMAGE="${SSH_ORIGINAL_COMMAND:-}"

if [[ -z "$IMAGE" ]]; then
	echo "usage: ssh <host> '${ALLOWED_IMAGE_REPO}:<tag>'" >&2
	exit 2
fi

if [[ "$IMAGE" != "${ALLOWED_IMAGE_REPO}:"* ]] ||
	[[ ! "${IMAGE#"${ALLOWED_IMAGE_REPO}:"}" =~ ^[A-Za-z0-9][A-Za-z0-9._-]*$ ]]; then
	echo "refused: '$IMAGE' is not a ${ALLOWED_IMAGE_REPO} tag" >&2
	exit 2
fi

echo "==> deploying $IMAGE"

# Record the previous image so a failed roll can be undone by hand.
PREVIOUS="$(grep -E '^PORTFOLIO_IMAGE=' .env | cut -d= -f2- || true)"
echo "    previous: ${PREVIOUS:-<none>}"

# A registry token may arrive on stdin. GitHub creates GHCR packages private and
# offers no API to publish them, so the deploy carries its own short-lived
# credential over the ssh channel instead: it is used for this one pull, never
# written to disk, and discarded on exit. With a public package, no token is
# sent and the pull is anonymous.
REGISTRY_TOKEN=""
if [[ ! -t 0 ]]; then
	REGISTRY_TOKEN="$(timeout 5 cat || true)"
fi

if [[ -n "$REGISTRY_TOKEN" ]]; then
	trap 'docker logout ghcr.io >/dev/null 2>&1 || true' EXIT
	if ! printf '%s' "$REGISTRY_TOKEN" |
		docker login ghcr.io -u x-access-token --password-stdin >/dev/null 2>&1; then
		echo "registry login failed" >&2
		exit 1
	fi
	REGISTRY_TOKEN=""
	echo "    registry: authenticated for this pull"
fi

if ! docker pull "$IMAGE"; then
	cat >&2 <<-EOF

		Pull failed. If this is a 401/denied, either the deploy sent no registry
		token or it lacked read access to ${ALLOWED_IMAGE_REPO#ghcr.io/}.
	EOF
	exit 1
fi

# Only rewrite .env once the image is actually on the box.
if grep -qE '^PORTFOLIO_IMAGE=' .env; then
	sed -i "s|^PORTFOLIO_IMAGE=.*|PORTFOLIO_IMAGE=${IMAGE}|" .env
else
	echo "PORTFOLIO_IMAGE=${IMAGE}" >>.env
fi

docker compose up -d --remove-orphans

# Wait for the container to report healthy before calling the deploy good.
for i in $(seq 1 30); do
	state="$(docker inspect -f '{{.State.Health.Status}}' portfolio 2>/dev/null || echo starting)"
	[[ "$state" == "healthy" ]] && break
	if [[ "$state" == "unhealthy" ]]; then
		echo "container went unhealthy" >&2
		docker compose logs --tail 50 portfolio >&2
		exit 1
	fi
	sleep 2
done

if [[ "${state:-}" != "healthy" ]]; then
	echo "timed out waiting for health (last state: ${state:-unknown})" >&2
	docker compose logs --tail 50 portfolio >&2
	exit 1
fi

docker image prune -f --filter 'until=336h' >/dev/null 2>&1 || true

echo "==> deployed $IMAGE"
docker compose ps --format 'table {{.Name}}\t{{.Image}}\t{{.Status}}'
