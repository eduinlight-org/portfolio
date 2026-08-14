# Portfolio — Eduin Garcia

A React Router 7 SSR site: a one-page engineering profile plus six project case studies, built on the **Industry** design system (steel-blue on a light technical ground, Barlow Condensed over Barlow, everything framed as a blueprint object).

## Quick start

Everything runs through Docker, so no local Node toolchain is required:

```sh
make install     # build the dev image, install deps, start the stack
```

Then open <http://localhost:3000>.

If you would rather run it natively (Node 22, pnpm 10):

```sh
cp .env.dist .env
pnpm install
pnpm dev
```

## Commands

| Command | What it does |
|---------|-------------|
| `make install` | Build the image, install dependencies, start the stack. |
| `make start` / `make stop` / `make restart` | Control the Compose stack. |
| `make logs` / `make shell` | Follow the dev server / open a container shell. |
| `make check` | Biome format + lint + import sorting. Run after every change. |
| `make tsc` | React Router typegen + `tsc -b`. |
| `make test` | Vitest. |
| `make build` | Production build. |
| `make full-check` | `tsc` + `check` + `test` + `build`. Run before opening a PR. |
| `make prod-build` / `prod-up` / `prod-down` | The production SSR image. |
| `make reset` | Tear down and reinstall from scratch. |

## Deployment

`deploy/Dockerfile` builds a four-stage production image that serves the app with `react-router-serve` on port 3000. Set `VITE_SITE_URL` at build time — it feeds the canonical links, Open Graph tags and the sitemap.

```sh
docker build -f deploy/Dockerfile --build-arg VITE_SITE_URL=https://example.com -t portfolio .
docker run -p 3000:3000 -e VITE_SITE_URL=https://example.com portfolio
```

## Structure

- `app/routes/home/` — the profile page's eight sections.
- `app/routes/work.$slug/` — all six project pages, rendered from data.
- `app/content/{en,es}/` — every word on the site, as typed modules.
- `app/styles/industry.css` — the vendored design system. Don't edit it.

Adding a project is a new file in `app/content/<locale>/work/` plus an entry in that directory's `index.ts` — no new components. See [CLAUDE.md](./CLAUDE.md) for the conventions in full.

## Images

Real screenshots live in `public/work/`, captured from each project's live site (and, for lightnotes, from the screenshots shipped in its repo). They are padded to the frame's exact aspect ratio so nothing is cropped, and served as WebP — the whole set is under 1 MB.

**My Altafit is deliberately still a placeholder.** `myaltafit.provis.es` now serves a later, non-React implementation by another vendor, so a screenshot of that domain would not show this work.

To add or replace one: drop a file into `public/work/` and set `src` (and `alt`) on the matching `Figure` in *both* locales' content modules. The frame, aspect ratio and duotone treatment stay as they are.

Photographs are washed into the steel accent by the design system's `.duotone` wrapper. To show one at its natural colours, drop the `duotone` class from `ImageSlot` in `app/components/common/image-slot.tsx`.

## Languages

English and Spanish, selected by the `portfolio_lang` cookie and read server-side so the first paint is already in the right language. Both locales are fully written — `app/content/en/` and `app/content/es/` hold the copy, and a test asserts the two trees stay structurally identical.
