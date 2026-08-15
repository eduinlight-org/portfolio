import { bold, mono, type Project, txt } from "~/content/types";

export const caxper: Project = {
	slug: "caxper",
	name: "Caxper",
	kicker: "Co-founder & sole engineer · Multi-tenant SaaS",
	headline: ["Insurance SaaS, built", "as the sole engineer"],
	lead: "Multi-tenant SaaS for independent insurance agents — client and policy management, a commission and income ledger, expenses, tax reporting, renewals, and license and continuing-education tracking, all on Stripe-billed subscriptions.",
	sublead:
		"I co-founded Caxper with a US-based business partner and built the entire product — architecture, apps, API and infrastructure — as the sole engineer.",
	link: { label: "caxper.eduindev.com", href: "https://caxper.eduindev.com/" },
	linkAsButton: true,

	hero: {
		placeholder: "Drop a Caxper screenshot",
		src: "/work/caxper-hero.webp",
		alt: "Caxper client management view",
		ratio: "16 / 9",
		caption: "Fig. 01 — Agent dashboard",
	},

	band: [
		{ value: "~150k", label: "Lines of TypeScript" },
		{ value: "217", label: "REST endpoints" },
		{ value: "62", label: "Database entities" },
		{ value: "44", label: "Migrations" },
		{ value: "6 + 9", label: "Apps & shared packages" },
	],

	sections: [
		{
			index: 1,
			title: "Architecture",
			meta: "pnpm workspaces monorepo",
			kind: "bullets",
			items: [
				[
					bold("pnpm workspaces monorepo"),
					txt(
						" — 6 applications + 9 internal packages, fully typed end to end.",
					),
				],
				[
					bold("CQRS"),
					txt(" with "),
					mono("@nestjs/cqrs"),
					txt(
						" — thin controllers dispatching to Command/Query buses, event-driven side effects via ",
					),
					mono("EventBus"),
					txt("."),
				],
				[
					bold("Multi-tenancy via PostgreSQL Row-Level Security"),
					txt(" — every read/write scoped by an "),
					mono("app.current_tenant_id"),
					txt(
						" GUC set per-request inside a transaction; a tenant-aware repository layer auto-stamps tenant IDs.",
					),
				],
				[
					bold("Layered guard chain"),
					txt(
						" — Keycloak auth → tenant resolution → RBAC permissions → subscription status → plan entitlements.",
					),
				],
				[
					bold("Contract-first API"),
					txt(
						" — OpenAPI spec generated from NestJS, consumed by Orval to auto-generate a fully typed Axios + React Query SDK shared by every frontend.",
					),
				],
			],
		},
		{
			index: 2,
			title: "Apps in the monorepo",
			meta: "6 apps · 9 packages",
			kind: "cards",
			columns: 3,
			items: [
				{
					title: "app",
					body: "Main agent-facing SPA (React Router 7, Vite).",
				},
				{ title: "admin", body: "Internal back-office SPA." },
				{
					title: "website",
					body: "SSR marketing site (React Router 7 + @react-router/serve).",
				},
				{ title: "api", body: "NestJS API." },
				{
					title: "worker",
					body: "BullMQ worker + React Email preview server.",
				},
				{
					title: "docs",
					body: "VitePress developer documentation site (Vue 3).",
				},
			],
		},
		{
			index: 3,
			title: "Stack",
			meta: "TypeScript end to end",
			kind: "tagGroups",
			groups: [
				{
					name: "Backend",
					items: [
						"Node.js 22",
						"TypeScript 6",
						"NestJS 11",
						"Express 5",
						"PostgreSQL 17",
						"TypeORM 0.3",
						"BullMQ 5",
						"Redis 7",
						"Keycloak 26",
						"Zod 4",
						"Stripe 17",
						"Resend",
						"AWS S3",
						"react-pdf",
						"pdfjs-dist",
						"OpenAPI 3",
						"Pino",
						"Jest",
					],
				},
				{
					name: "Frontend",
					items: [
						"React 19",
						"Vite 8",
						"React Router 7",
						"Tailwind CSS 4",
						"shadcn/ui",
						"Radix UI",
						"TanStack Query 5",
						"Redux Toolkit",
						"React Hook Form",
						"TanStack Table 8",
						"Recharts 3",
						"i18next",
						"SSE",
						"Vitest",
					],
				},
				{
					name: "Infrastructure & DevOps",
					items: [
						"Docker Compose",
						"Docker Swarm",
						"GitLab CI/CD",
						"Nginx",
						"frp tunneling",
						"Makefile",
						"Custom Keycloak image",
						"Biome",
						"Husky",
					],
				},
				{
					name: "Delivery pipeline",
					body: [
						txt(
							"Install → SDK generation → lint + test → tagged image build & push to a private registry → ",
						),
						mono("docker stack deploy"),
						txt(" → automated post-deploy health validation."),
					],
				},
			],
		},
		{
			index: 4,
			title: "Engineering highlights",
			meta: "Six decisions",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "Tenancy the database enforces",
					body: [
						txt(
							"Postgres row-level security is the tenancy boundary, with an auto-injector that adds ",
						),
						mono("enable_rls()"),
						txt(
							" calls into generated migrations, so a new table cannot ship unscoped.",
						),
					],
				},
				{
					title: "Idempotent commission generation",
					body: "A rule-based automation engine generates commission and income entries against deduplication keys, so a replayed import cannot pay an agent twice.",
				},
				{
					title: "Plan changes as a state machine",
					body: "Every plan × billing-interval transition is modelled explicitly, with Stripe proration and entitlement side effects hanging off the transition rather than the caller.",
				},
				{
					title: "One import pipeline, many carriers",
					body: "Pluggable PDF adapters normalize each carrier's export into the same wizard pipeline as CSV and XLSX, so a new carrier is an adapter rather than a new flow.",
				},
				{
					title: "Locales without migrations",
					body: "A three-table normalized translation model resolves copy at runtime, so adding a language requires no schema change and no deploy.",
				},
				{
					title: "Read-only forecasting",
					body: "The residual-income forecast replays the same calculator as the ledger in read-only mode, so projections can never write a real commission row.",
				},
			],
		},
	],

	gallery: [
		{
			placeholder: "Policies or ledger view",
			ratio: "4 / 3",
			src: "/work/caxper-ledger.webp",
			alt: "Caxper income and commission tracking",
		},
		{
			placeholder: "Reporting or billing view",
			ratio: "4 / 3",
			src: "/work/caxper-reports.webp",
			alt: "Caxper tax reports view",
		},
	],

	card: {
		kicker: "caxper.eduindev.com · co-founder",
		title: "Caxper",
		body: "Multi-tenant SaaS for independent insurance agents — policies, commission ledger, tax reporting and Stripe billing, built as the sole engineer.",
		meta: "NestJS · React 19 · Postgres RLS",
		placeholder: "Caxper screenshot",
		src: "/work/caxper-card.webp",
		alt: "Caxper",
	},

	seo: {
		title: "Caxper",
		description:
			"Multi-tenant SaaS for insurance agents, built solo — policies, commission ledger, tax reporting and Stripe billing on NestJS, React 19 and Postgres RLS.",
	},
};
