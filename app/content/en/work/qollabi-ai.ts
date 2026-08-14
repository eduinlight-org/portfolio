import { bold, em, mono, type Project, txt } from "~/content/types";

export const qollabiAi: Project = {
	slug: "qollabi-ai",
	name: "Qollabi 2.0",
	kicker: "Qollabi · Senior Software Developer / DevOps · Jan 2024 – Apr 2026",
	headline: ["Qollabi 2.0 — the", "greenfield rewrite"],
	lead: [
		txt(
			"Multi-tenant B2B SaaS for partner & channel management — workspaces, partner and customer entities, opportunities, key metrics (OKRs), campaigns with a visual email builder, smart lists, shared partner spaces, CSV import and a taxonomy/attribute system. A ground-up TypeScript rewrite of the legacy PHP/React platform, deployed under the internal project name ",
		),
		mono("qollabi-ai"),
		txt("."),
	],
	link: { label: "qollabi.com", href: "https://qollabi.com" },
	linkAsButton: true,

	hero: {
		placeholder: "Drop a Qollabi 2.0 screenshot",
		src: "/work/qollabi-ai-hero.webp",
		alt: "Qollabi platform",
		ratio: "16 / 9",
	},

	sheet: {
		title: "Qollabi 2.0 — platform scale",
		badges: ["Bun workspaces", "Sheet 01"],
		stats: [
			{ value: "~205k", label: "Lines of TypeScript" },
			{ value: "7 + 26", label: "Apps & shared packages" },
			{ value: "77", label: "PostgreSQL tables" },
			{ value: "64", label: "Migrations" },
			{ value: "163", label: "Command handlers" },
			{ value: "545", label: "Route modules" },
			{ value: "81", label: "Design-system components" },
			{ value: "19", label: "Background jobs" },
		],
	},

	sections: [
		{
			index: 1,
			title: "My work",
			meta: "Product · pipelines · cloud",
			kind: "bullets",
			items: [
				"Developed the new Qollabi AI product using the Remix framework.",
				"Created Docker setup for development and UAT/production deployment pipelines.",
				"Developed and maintained AWS Lambda functions and ActivePieces infrastructure.",
				"Implemented server-side events client using PostgreSQL LISTEN/NOTIFY API.",
				"Maintained Terraform code and Docker Swarm cluster.",
				"Managed AWS services: Route53, RDS, MQ, S3, IAM.",
				"Built Salesforce data migration scripts for clients.",
				"Set up VPN and tunnel for development usage.",
			],
		},
		{
			index: 2,
			title: "Architecture",
			meta: "Bloom · CQRS · RLS tenancy",
			kind: "bullets",
			items: [
				[
					bold("Bun workspaces monorepo"),
					txt(
						" — end-to-end TypeScript with no build step between packages; apps import backend logic directly as a workspace dependency rather than over HTTP.",
					),
				],
				[
					bold("“Bloom” — a homegrown application framework"),
					txt(" — a "),
					mono("Kernel"),
					txt(
						" with a build/boot plugin lifecycle, a typed DI service container, Zod-validated per-plugin env schemas and recursive plugin dependency resolution; every capability (CQRS, queue, KV, auth, wizard, emitter) ships as a Bloom plugin.",
					),
				],
				[
					bold("CQRS + domain events"),
					txt(" — "),
					mono("Command"),
					txt(" / "),
					mono("CommandHandler"),
					txt(" / "),
					mono("DomainEvent"),
					txt(" primitives with an extensible "),
					em("stamp"),
					txt(" metadata system ("),
					mono("eventId"),
					txt(", "),
					mono("aggregateId"),
					txt(", "),
					mono("occurredOn"),
					txt(
						", versioning) and an event recorder that only dispatches events once the command commits, so failed requests never emit side effects.",
					),
				],
				[
					bold("Multi-tenancy via PostgreSQL Row-Level Security"),
					txt(
						" — a Hono middleware opens a pooled connection, starts a transaction, sets ",
					),
					mono("SET LOCAL ROLE tenant_user"),
					txt(" and "),
					mono("app.current_workspace_id"),
					txt(" from the JWT, and pins the transaction into "),
					mono("AsyncLocalStorage"),
					txt(
						" so every repository call inside the request is tenant-scoped automatically; a separate non-isolated middleware exists solely for the cross-workspace admin dashboard.",
					),
				],
				[
					bold("Backend-as-a-library"),
					txt(" — "),
					mono("@qollabi/backend"),
					txt(
						" exposes no HTTP API of its own; the Remix apps, webhooks service and worker each mount it and dispatch commands/queries in-process.",
					),
				],
				[
					bold("Postgres as the only infrastructure dependency"),
					txt(
						" — relational store, job queue (Graphile Worker), KV store (Keyv) and pub/sub (a reconnecting ",
					),
					mono("LISTEN"),
					txt("/"),
					mono("NOTIFY"),
					txt(" emitter) all run on the same database."),
				],
			],
		},
		{
			index: 3,
			title: "Apps in the monorepo",
			meta: "Seven deployables",
			kind: "nameDesc",
			items: [
				{
					name: "shelf",
					desc: "Customer-facing Remix SPA/SSR app for partnerships, opportunities and key metrics (473 route modules).",
				},
				{
					name: "dashboard",
					desc: "Internal admin app for organizations, workspaces and campaign/smart-list templates.",
				},
				{ name: "spaces", desc: "Externally shared partner spaces app." },
				{
					name: "backend",
					desc: "The domain layer: schemas, repositories, commands, events and jobs, consumed in-process by the apps.",
				},
				{
					name: "worker",
					desc: "Graphile Worker process (3 replicas locally) plus a React Email preview server.",
				},
				{
					name: "webhooks",
					desc: "Standalone Hono service for inbound webhooks (Postmark, integrations).",
				},
				{
					name: "public-api",
					desc: "Pylon GraphQL surface for third-party integrations.",
				},
			],
		},
		{
			index: 4,
			title: "Backend",
			meta: "Bun · Hono · PostgreSQL 17",
			kind: "rows",
			rows: [
				{ label: "Runtime", value: "Bun 1.2 / Node 22, TypeScript 5.5" },
				{
					label: "Framework",
					value: "Bloom (in-house kernel + plugin system), Hono 4",
				},
				{
					label: "Database",
					value:
						"PostgreSQL 17, Drizzle ORM 0.36 + drizzle-zod, postgres / pg drivers",
				},
				{
					label: "Migrations",
					value:
						"Custom @bloom/drizzle-migrations CLI on Drizzle Kit — generate, up/down, status, rebase, validate, fresh, refresh (Jest-tested)",
				},
				{
					label: "Auth",
					value:
						"Keycloak 26 (OIDC) via remix-auth-oauth2, jsonwebtoken, Keycloak Admin Client SDK wrapper, bcrypt-edge",
				},
				{
					label: "Queues / jobs",
					value:
						"Graphile Worker (Postgres-backed), typed job registry, 19 background jobs",
				},
				{
					label: "Pub/Sub",
					value:
						"@bloom/postgres-emitter — LISTEN/NOTIFY client with channel mapping, auto-reconnect and backoff",
				},
				{
					label: "KV / cache",
					value: "Keyv with a PostgreSQL adapter (@keyv/postgres)",
				},
				{
					label: "Validation",
					value:
						"Zod 3 everywhere — command schemas, env schemas, @hono/zod-validator, zod-validation-error",
				},
				{
					label: "Email",
					value:
						"Postmark (transactional + inbound webhooks), React Email for templates, Maily for the customer-facing drag-and-drop builder",
				},
				{
					label: "Storage",
					value: "AWS S3 SDK v3 + presigned URLs (LocalStack in dev)",
				},
				{
					label: "Data import",
					value:
						"Streaming CSV pipeline — csv-parser, chardet + iconv-lite encoding detection, S3 staging, chunked job processing",
				},
				{
					label: "i18n",
					value:
						"i18next + remix-i18next, per-module translation catalogs (en / fr / nl)",
				},
				{ label: "Logging", value: "Pino (pino-pretty in dev)" },
				{ label: "Errors", value: "Sentry (toucan-js) and Rollbar" },
				{
					label: "Public API",
					value:
						"@getcronit/pylon — GraphQL generated from plain TypeScript functions (early scaffold)",
				},
			],
		},
		{
			index: 5,
			title: "Frontend",
			meta: "Remix 2 SSR · React 18.3",
			kind: "rows",
			rows: [
				{
					label: "Core",
					value: "React 18.3, TypeScript 5.5, Remix 2 (Vite 5), SSR",
				},
				{
					label: "Routing",
					value:
						"remix-flat-routes, typed search params via nuqs, remix-hono server adapter",
				},
				{
					label: "Components",
					value:
						"shadcn/ui on Radix UI primitives (~22 packages) — shared @bloom/ui-web with 81 components + blocks, hooks and themes",
				},
				{
					label: "Styling",
					value:
						"Tailwind CSS 3.4, tailwindcss-animate, class-variance-authority, clsx, tailwind-merge, Poppins via Fontsource",
				},
				{
					label: "Forms",
					value: "React Hook Form 7 + remix-hook-form + Zod resolvers",
				},
				{
					label: "Client state",
					value: "Redux Toolkit + React Redux (shelf), nuqs for URL state",
				},
				{
					label: "Tables & lists",
					value:
						"react-virtuoso (virtualized lists), react-easy-sort, emblor (tag input)",
				},
				{ label: "Charts", value: "Recharts 2" },
				{ label: "Maps", value: "Mapbox GL / MapLibre GL via react-map-gl" },
				{
					label: "Rich text",
					value: "TipTap 3 (inside the Maily email editor)",
				},
				{ label: "Dates", value: "date-fns + date-fns-tz, react-day-picker" },
				{
					label: "Multi-step forms",
					value:
						"@bloom/wizard — type-safe wizards with pluggable cookie / KV / memory storage backends and automatic namespaced state",
				},
				{ label: "Icons", value: "Lucide, FontAwesome Pro" },
				{
					label: "Misc",
					value:
						"Sonner, Vaul, cmdk, Embla, Motion, input-otp, react-phone-number-input, react-currency-input-field, next-themes, NProgress",
				},
				{
					label: "Mobile",
					value:
						"@bloom/ui-mobile — React Native primitives (@rn-primitives, NativeWind-style CVA) and an Expo tsconfig/CI workflow, prepared for a mobile client",
				},
			],
		},
		{
			index: 6,
			title: "Infrastructure & DevOps",
			meta: "Swarm · GitLab CI · ephemeral UAT",
			kind: "bullets",
			items: [
				[
					bold("Docker Compose + Makefile"),
					txt(
						" — the full local stack in one command: 3 Remix apps, worker (×3), webhooks, PostgreSQL 17 (multi-database init), Keycloak 26 with a custom theme, LocalStack S3, pgAdmin, Drizzle Studio and a React Email preview server; ",
					),
					mono("make install / start / reinstall / uninstall"),
					txt(" wrap the whole lifecycle."),
				],
				[
					bold("GitLab CI/CD"),
					txt(
						" — Biome CI → migration validation → multi-target image build (shelf, spaces, dashboard, worker, webhooks, commands, migrations) → ",
					),
					mono("docker stack deploy"),
					txt(
						" → automated post-deploy image-digest validation, gated by UAT/PRD tag formats.",
					),
				],
				[
					bold("Per-branch ephemeral UAT environments"),
					txt(
						" — the pipeline parses the ticket ID from the tag, provisions a dedicated ",
					),
					mono("qollabi_db_<ticket>"),
					txt(
						" database, rewrites every Postgres URL (app, KV, queue, notifier) to point at it, deploys an isolated Swarm stack, and tears down the stack, Keycloak realm and database on cleanup.",
					),
				],
				[
					bold("Docker Swarm"),
					txt(
						" production/UAT stacks with a single multi-stage Dockerfile producing 7 targets from shared install/build layers, plus the AWS RDS TLS bundle baked in.",
					),
				],
				[
					bold("Playwright end-to-end suite"),
					txt(" with a Keycloak login setup project and a dedicated "),
					mono("docker-compose-test.yaml"),
					txt(" environment ("),
					mono("make e2e"),
					txt(" / "),
					mono("e2e-ui"),
					txt(
						"); GitHub Actions run alongside GitLab for code quality, backend, dashboard and Expo checks.",
					),
				],
				[
					bold("Biome"),
					txt(" (format + lint + CI), Husky hooks, "),
					mono("@manypkg/cli"),
					txt(
						" and dependency-version consistency checks to keep workspace versions aligned; ",
					),
					mono("frpc"),
					txt(" reverse tunneling for exposing local environments."),
				],
			],
		},
		{
			index: 7,
			title: "Engineering highlights",
			meta: "Eight decisions",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "An in-house framework, not a framework-shaped folder",
					body: "Bloom's kernel, plugin lifecycle, DI container and CQRS bus are versioned packages with their own docs, letting six deployables share one composition model.",
				},
				{
					title: "RLS + AsyncLocalStorage tenancy",
					body: "Tenant scoping is enforced by the database inside a per-request transaction rather than by query-building convention, so a forgotten where clause cannot leak data across workspaces.",
				},
				{
					title: "Transactional event dispatch",
					body: "The event recorder buffers domain events and flushes them only on successful command completion, eliminating the “email sent for a rolled-back write” class of bug.",
				},
				{
					title: "Custom migration tooling",
					body: "Validation runs in CI, and rebase resolves the migration-ordering conflicts that plague long-lived branches on a shared Drizzle schema.",
				},
				{
					title: "Ephemeral per-ticket environments",
					body: "Full database and identity-provider isolation, provisioned and destroyed by the pipeline.",
				},
				{
					title: "Postgres-only infrastructure",
					body: "Queue, KV and pub/sub all ride the primary database, removing Redis and a broker from the operational surface while keeping jobs transactional with the data they touch.",
				},
				{
					title: "Two-sided email system",
					body: "A Maily/TipTap drag-and-drop builder for customer campaigns and React Email templates for system mail, both rendered through a shared @bloom/maily-renderer package.",
				},
				{
					title: "AI-assisted development conventions",
					body: ".cursor/rules and .prompts encode backend and frontend scaffolding conventions in the repo, so generated code matches the architecture.",
				},
			],
		},
	],

	gallery: [
		{
			placeholder: "Second screenshot",
			ratio: "4 / 3",
			src: "/work/qollabi-ai-2.webp",
			alt: "Qollabi smart lists",
		},
		{
			placeholder: "Third screenshot",
			ratio: "4 / 3",
			src: "/work/qollabi-ai-3.webp",
			alt: "Qollabi on mobile",
		},
	],

	card: {
		kicker: "qollabi.com · 2024–2026",
		title: "Qollabi 2.0",
		body: "Greenfield TypeScript rewrite of the platform on Remix — ~205k lines across 7 apps, Postgres RLS tenancy and an in-house application framework.",
		meta: "Remix · Bun · Postgres RLS",
		placeholder: "Qollabi AI screenshot",
		src: "/work/qollabi-ai-card.webp",
		alt: "Qollabi platform",
	},

	seo: {
		title: "Qollabi 2.0",
		description:
			"A greenfield TypeScript rewrite of a multi-tenant B2B partner-management platform — Remix, Bun workspaces, an in-house application framework and PostgreSQL row-level security across seven deployables.",
	},
};
