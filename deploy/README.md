# Deployment

The site runs at **https://eduindev.com** on the Lightsail box (`51.44.40.82`), behind the Traefik that already fronts the other services there.

```
push to main
  └─ GitHub Actions (self-hosted runner)
       ├─ check   lint, typecheck, test, build
       └─ deploy  build image ──► ghcr.io/eduinlight-org/portfolio:sha-<commit>
                  ssh ──────────► server runs ~/services/portfolio/deploy.sh
                                    docker pull → compose up → wait for healthy
```

Every job is pinned to `runs-on: self-hosted`.

## Layout on the server

Follows the same shape as the other services on the box:

```
~/services/portfolio/
  docker-compose.yml     mirror of deploy/server/docker-compose.yml
  deploy.sh              mirror of deploy/server/deploy.sh
  .env                   PORTFOLIO_IMAGE + VITE_SITE_URL (0600)
```

`docker-compose.yml` and `deploy.sh` are tracked in this repo under `deploy/server/`. They are **not** copied by the pipeline — if you change them here, scp them across:

```sh
scp deploy/server/docker-compose.yml deploy/server/deploy.sh \
    admin@51.44.40.82:~/services/portfolio/
```

## Routing

Traefik's `letsencrypt` resolver uses a Route53 DNS-01 challenge, and the existing `*.eduindev.com` cert already carries the apex as a SAN, so no new certificate is issued for this service.

Two details worth remembering:

- **Router priority is 50, and it has to be.** The `frps` service publishes a catch-all `HostRegexp(^.+\.eduindev\.com$)` router at priority 0 to forward tunnelled subdomains (that's how `caxper.eduindev.com` reaches the homelab). At the default priority `www.eduindev.com` would be swallowed by it — as it was before this service existed, which is why www used to return "no route found".
- **The apex is not matched by that regex** (it requires a leading label), so `eduindev.com` was simply an unrouted 404 until now.

`www` 301s to the apex, and `http` 301s to `https`.

## Owner

The repo lives under the **`eduinlight-org`** organisation, so that the org's self-hosted runner can serve it.

The workflow derives the image path from `${{ github.repository_owner }}`, so it follows the repo automatically. The host does not: it only accepts images from the repository named in `ALLOWED_IMAGE_REPO` in `~/services/portfolio/.env`. Moving the repo again means changing that one line.

Note that **Actions secrets do not survive a repository transfer** — re-add the four below afterwards.

## Required repository secrets

| Secret | Value |
|---|---|
| `DEPLOY_SSH_KEY` | Private half of the deploy keypair (the whole PEM, including the BEGIN/END lines) |
| `DEPLOY_HOST` | `51.44.40.82` |
| `DEPLOY_USER` | `admin` |
| `DEPLOY_HOST_KEY` | The server's SSH host key line, for strict host-key checking |

## One-time setup

The GHCR package is created private on first push, even though the repo is public. Until it is made public the server cannot pull it, and `deploy.sh` will say so explicitly.

After the first successful `deploy` job, go to
`https://github.com/orgs/eduinlight-org/packages/container/portfolio/settings`
→ **Danger Zone** → **Change visibility** → **Public**.

## The deploy key is not a shell

The key is pinned in `~/.ssh/authorized_keys` with a forced command:

```
command="/home/admin/services/portfolio/deploy.sh",restrict ssh-ed25519 AAAA…
```

so it can only roll this one service to a named image. `deploy.sh` additionally refuses anything that is not a tag of the repository named by `ALLOWED_IMAGE_REPO` in the host's `.env`, and `restrict` disables port/agent/X11 forwarding and pty allocation. A leaked `DEPLOY_SSH_KEY` cannot read the filesystem, reach other containers, or touch the other services on the box.

## Rolling back

Images are tagged with the immutable commit sha, so any previous build can be restored:

```sh
ssh admin@51.44.40.82
cd ~/services/portfolio
sed -i 's|^PORTFOLIO_IMAGE=.*|PORTFOLIO_IMAGE=ghcr.io/eduinlight-org/portfolio:sha-<older>|' .env
docker compose up -d
```

`deploy.sh` prints the outgoing image at the top of every run, so the value to roll back to is in the job log.

## Operating notes

- The box has **1.9 GB of RAM and no swap**, which is why images are built on the runner and only pulled here. The container is capped at 512 MB; it idles around 100 MB.
- `deploy.sh` pulls *before* rewriting `.env`, so a failed pull leaves the running container and its config untouched and exits non-zero.
- It then waits for the container to report healthy and fails the deploy if it does not, so a broken build does not silently pass.
- Old images are pruned after 14 days.

```sh
# health
ssh admin@51.44.40.82 'cd ~/services/portfolio && docker compose ps'
# logs
ssh admin@51.44.40.82 'cd ~/services/portfolio && docker compose logs -f --tail 100'
```
