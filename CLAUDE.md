# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Eduin Garcia's portfolio: a React Router 7 SSR app rendering a one-page profile plus six project case-study pages, built on the **Industry** design system.

## Commands

All day-to-day commands run through the `Makefile` via Docker, so no local Node toolchain is required. Every target also works directly with `pnpm` if you prefer.

| Command | What it does |
|---------|-------------|
| `make install` | Build the dev image, install dependencies, start the stack, print the banner. |
| `make start` / `make stop` | Start / stop the Docker Compose stack. |
| `make check` | Biome format + lint + import sorting. **Run after every change.** |
| `make tsc` | `react-router typegen && tsc -b`. |
| `make test` | Vitest. |
| `make build` | Production build. |
| `make full-check` | `tsc` + `check` + `test` + `build`. Run before opening a PR. |
| `make logs` / `make shell` | Follow the dev server / open a shell in the container. |
| `make prod-build` / `prod-up` / `prod-down` | The production SSR image from `deploy/Dockerfile`. |
| `make reset` | Tear the stack down and reinstall from scratch. |

## TypeScript

- Always use `type` over `interface` for type declarations.
- Avoid `any` — use proper types, `unknown`, or `Record<string, unknown>`.

## Project structure

```
app/
  root.tsx                  Document shell, locale from the cookie, ErrorBoundary
  routes.ts                 Route table
  entry.server.tsx          Streaming SSR entry
  styles.css                Tailwind + the @theme alias layer over Industry
  styles/industry.css       The vendored design system — do not edit or reformat
  routes/
    home/                   The one-page profile (8 sections)
    work.$slug/             All six project pages
    sitemap[.]xml.tsx  robots.txt.tsx
  components/
    blueprint/              <Blueprint> — the framed-object primitive
    common/                 SectionHeader, SpecSheet, StatGrid, StatsBand,
                            FigureFrame, Tag, TagList, Rich, PageSection
    sections/               The six section-block renderers + SectionRenderer
    layout/                 SiteHeader, WorkHeader, SiteFooter, LanguageToggle
  content/
    types.ts                Section union, Project, ProfileContent
    en/  es/                Authored content, one module tree per locale
  lib/                      i18n, prefs.server, seo, utils
```

The import alias is `~/*` → `./app/*`. There is no `@/*`.

## Design system — Industry

`app/styles/industry.css` is **vendored verbatim** from the design system and is the source of truth for every color, font, space, radius and shadow. Do not edit it, do not reformat it (`biome.json` excludes it), and never hard-code a hex, a font name or a px value the tokens already carry.

Tailwind's `--color-*` / `--font-*` namespaces collide with Industry's own variable names, and aliasing a variable to itself makes a CSS cycle that silently blanks the value. So `app/styles.css` maps them to distinct utility names:

| Utility | Industry token |
|---|---|
| `bg-paper` / `text-ink` / `border-rule` / `bg-panel` | `--color-bg` / `--color-text` / `--color-divider` / `--color-surface` |
| `text-steel-700`, `bg-steel-900`, … | `--color-accent-100…900` |
| `text-ash-600`, `bg-ash-100`, … | `--color-neutral-100…900` |
| `font-display` / `font-sans` | Barlow Condensed / Barlow |

`industry.css` is imported into Tailwind's `components` layer on purpose. Unlayered CSS outranks layered CSS, so importing it plainly would make `.btn`, `a` and `body` beat every Tailwind utility.

**Rules the system enforces:**

- Every framed object — card, figure, primary button — uses `<Blueprint>`, which draws the hairline border *and* the four `+` registration marks. Dropping the marks is a violation; that is why they live in the component rather than at each call site.
- No rounded corners and no filled card surfaces. Cards and figures are transparent line drawings. The solid accent primary button is the one deliberate exception.
- Photographs go through the `.duotone` wrapper so they take the accent.
- Icons are Lucide at `strokeWidth={1.5}`.
- Interactive states come from the accent ramp, and keyboard focus is the 2px accent `:focus-visible` ring `industry.css` already defines. Never restyle them per page.
- **There is no dark mode.** Industry is a light-only mono scheme — one steel accent on a light ground. Do not add a `.dark` variant or a theme toggle.

## Frontend component architecture

- **One component per file.**
- **Lists need two components minimum** — one for the item, one for the container (`BulletItem` + `BulletList`, `WorkCard` + `SelectedWork`, `Tag` + `TagList`).
- **Route files are thin orchestrators.** They compose sub-components; they do not implement layout logic.
- **Every route is a directory** — `route.tsx` + `index.ts` + `components/`. Never a flat `*-route.tsx` file.
- `components/common/` is reusable across routes; `components/layout/` is page chrome; `components/sections/` renders the project-page section union.

## Content

All authored copy lives in `app/content/<locale>/`, never inline in a component.

Project pages are **data, not code**. Each project exports a `Project` whose `sections` is an array of a six-way discriminated union — `bullets`, `rows`, `nameDesc`, `cards`, `tagGroups`, `prose` — and `SectionRenderer` switches on `kind`. Adding a seventh project is a new file in `app/content/<locale>/work/` plus an entry in that directory's `index.ts`; it should not require a new component.

Two orderings exist and are deliberately separate:

- `content/<locale>/work/index.ts` — the design's prev/next chain (lightnotes → Qollabi 2.0 → Qollabi → HolaPlace → Caxper → My Altafit). It **does not wrap**: the first page has no previous, the last has no next.
- `profile.work.order` — the order of the Selected work grid on the home page.

Copy that needs inline `<strong>`, `<em>` or `<code>` uses the `bold()` / `em()` / `mono()` / `txt()` builders from `content/types.ts` and renders through `<Rich>` — never `dangerouslySetInnerHTML`.

Image regions are `Figure` objects. With no `src` they render as a labelled blueprint placeholder; adding `src` turns the same frame into the picture. Screenshots belong in `public/`.

## i18n

Two mechanisms, split by what they are good at:

- **UI chrome** (nav labels, buttons, aria text) goes through i18next — `app/lib/translations/{en,es}.ts`, read with `useAppTranslation()`.
- **Long-form structured content** goes in `app/content/<locale>/`, because i18next has no good story for arrays of typed objects.

Never hard-code user-facing text in a component. When you add a key, add it to both catalogs — `es.ts` is typed against `en.ts`, so a missing key fails the build. When you add content, write it in both `en/` and `es/`; `app/content/content.test.ts` asserts the two trees stay structurally identical. Both locales are fully translated — do not leave a new section English-only in `es/`.

Route-level `meta` exports **replace** the root's rather than merging, so anything document-level (charSet, viewport) has to be repeated. `generateMeta()` in `app/lib/seo.ts` already does this; use it rather than hand-rolling a `meta` export.

Language lives in the `portfolio_lang` cookie, read in the root loader by `getLocale()`. That is what lets SSR emit the right language with no hydration flash — do not move it to `localStorage`. It is read straight off the request header rather than through `createCookie`, which base64-JSON-encodes its values and so cannot read the plain value the toggle writes.

The i18next instance is created per render tree, not as a module singleton, so two concurrent SSR requests in different languages cannot overwrite each other's language.

## Responsiveness

The source design was drawn at desktop width with fixed grids and no media queries. Every grid here collapses to a single column below `md`, and the header's anchor nav becomes a native `<details>` disclosure — no JavaScript, so it works before hydration. Keep that pattern when adding sections.
