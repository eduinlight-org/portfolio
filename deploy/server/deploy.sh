#!/usr/bin/env bash
# Forced command for the GitHub Actions deploy key.
#
# The key in ~/.ssh/authorized_keys is pinned to this script, so the only thing
# it can do is roll this service to a named image — it cannot open a shell. The
# image reference arrives as $SSH_ORIGINAL_COMMAND and is validated below.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

IMAGE="${SSH_ORIGINAL_COMMAND:-}"

if [[ -z "$IMAGE" ]]; then
	echo "usage: ssh <host> 'ghcr.io/eduinlight/portfolio:<tag>'" >&2
	exit 2
fi

if [[ ! "$IMAGE" =~ ^ghcr\.io/eduinlight/portfolio:[A-Za-z0-9][A-Za-z0-9._-]*$ ]]; then
	echo "refused: '$IMAGE' is not a ghcr.io/eduinlight/portfolio tag" >&2
	exit 2
fi

echo "==> deploying $IMAGE"

# Record the previous image so a failed roll can be undone by hand.
PREVIOUS="$(grep -E '^PORTFOLIO_IMAGE=' .env | cut -d= -f2- || true)"
echo "    previous: ${PREVIOUS:-<none>}"

if ! docker pull "$IMAGE"; then
	cat >&2 <<-'EOF'

		Pull failed. If this is a 401/denied, the GHCR package is still private:
		  https://github.com/users/eduinlight/packages/container/portfolio/settings
		  -> Danger Zone -> Change visibility -> Public
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
