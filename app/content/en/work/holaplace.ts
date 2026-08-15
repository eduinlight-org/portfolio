import { bold, mono, type Project, txt } from "~/content/types";

export const holaplace: Project = {
	slug: "holaplace",
	name: "HolaPlace",
	kicker: "HolaPlace · Senior Software Developer · Jun 2020 – Dec 2023",
	headline: ["A two-sided venue", "marketplace, from scratch"],
	lead: "A marketplace for booking event venues and the supplier services that go with them — listings and onboarding, availability calendars, a request and negotiation flow, chat between guests and hosts, reviews, invoicing and contracts. The hard parts were the money — Stripe Connect deposits, holds, split charges, payouts, claims and refunds — and keeping host calendars in sync in both directions over iCal.",
	link: { label: "holaplace.com", href: "https://holaplace.com" },
	linkAsButton: true,

	hero: {
		placeholder: "Drop a HolaPlace screenshot",
		src: "/work/holaplace-hero.webp",
		alt: "HolaPlace venue search",
		ratio: "16 / 9",
	},

	sheet: {
		title: "HolaPlace — platform scale",
		badges: ["4 repositories", "Sheet 01"],
		note: "~228k lines of TypeScript across four repositories, plus ~3.3k lines of Terraform across three environments.",
		stats: [
			{ value: "~228k", label: "Lines of TypeScript" },
			{ value: "399", label: "REST endpoints" },
			{ value: "55", label: "Mongoose models" },
			{ value: "152", label: "Migrations" },
			{ value: "42", label: "API domain modules" },
			{ value: "7", label: "Socket.IO gateways" },
			{ value: "4", label: "Repositories" },
			{ value: "3", label: "AWS environments" },
		],
	},

	sections: [
		{
			index: 1,
			title: "My role",
			meta: "Six-person team",
			kind: "bullets",
			items: [
				[
					bold("One of six, from the empty repository onwards"),
					txt(
						" — I was on the platform from the first commit to the last, across the API, the SPA and the infrastructure.",
					),
				],
				[
					bold("The React SPA"),
					txt(
						" — Redux and XState for the booking and checkout flows, TanStack Query for server state, Socket.IO for chat, notifications and calendar sync.",
					),
				],
				[
					bold("The money"),
					txt(
						" — the Stripe Connect flow end to end: deposits, holds, split charges, transfers, payouts, claim adjudication and refunds, with separate platform and connect webhook processors.",
					),
				],
				[
					bold("Backend services"),
					txt(
						" — NestJS and Express modules over MongoDB, Elasticsearch, Redis and S3, worked test-first with Jest across unit, integration and end-to-end suites.",
					),
				],
				[
					bold("Delivery"),
					txt(
						" — Docker and Docker Compose locally with LocalStack standing in for AWS, GitLab pipelines per repository and Terraform deployments across dev, stage and production.",
					),
				],
			],
		},
		{
			index: 2,
			title: "Architecture",
			meta: "Polyrepo · modular NestJS",
			kind: "bullets",
			items: [
				[
					bold("Polyrepo"),
					txt(" — 4 independent GitLab repos ("),
					mono("api"),
					txt(", "),
					mono("hola-place-front"),
					txt(", "),
					mono("holaplace-scheduler"),
					txt(", "),
					mono("holaplace-infra"),
					txt(
						") plus a separate admin front, each with its own pipeline and Docker image.",
					),
				],
				[
					bold("Modular NestJS monolith"),
					txt(" — 42 feature modules, a shared "),
					mono("data_manager"),
					txt(
						" module owning every Mongoose model and repository, and a dedicated ",
					),
					mono("api"),
					txt(" module holding all HTTP controllers, guards and interceptors."),
				],
				[
					bold("Externalized scheduling"),
					txt(
						" — a standalone NestJS scheduler service owns cron definitions and calls back into the API over signed HTTP, with per-run audit trails in DynamoDB, so no cron state lives inside the API.",
					),
				],
				[
					bold("Realtime layer"),
					txt(
						" — 7 Socket.IO gateways (chat, notifications, payments, calendar sync, CRUD, presence) fanned out across API instances via a Redis adapter.",
					),
				],
				[
					bold("Resource-guard chain"),
					txt(" — JWT/Passport auth → existence guards ("),
					mono("exist_booking"),
					txt(", "),
					mono("exist_venue"),
					txt("…) → ownership guards ("),
					mono("is_host_booking"),
					txt(", "),
					mono("is_supplier_service"),
					txt(
						"…) → field-level response interceptors that whitelist what each role may see.",
					),
				],
				[
					bold("Bot-aware SEO edge"),
					txt(
						" — Traefik routes crawler user-agents to a Bun prerender service that renders the SPA with headless Chromium and caches HTML in Redis.",
					),
				],
			],
		},
		{
			index: 3,
			title: "Backend",
			meta: "NestJS 9 · MongoDB · Stripe Connect",
			kind: "rows",
			rows: [
				{
					label: "Runtime",
					value: "Node.js 18, TypeScript 5 (ts-node, nest build)",
				},
				{ label: "Framework", value: "NestJS 9, Express 4" },
				{
					label: "Database",
					value:
						"MongoDB 5 (replica set), Mongoose 6 + mongoose-autopopulate, mongo-migrate-ts (152 migrations)",
				},
				{
					label: "Secondary stores",
					value:
						"DynamoDB (cookie-consent audit log), Redis 7 (ioredis, cache-manager-redis-store)",
				},
				{
					label: "Queues",
					value:
						"Bull 4 on Redis — factory-built queues with event subscribers",
				},
				{
					label: "Realtime",
					value: "Socket.IO (@nestjs/websockets) + @socket.io/redis-adapter",
				},
				{
					label: "Auth",
					value:
						"Passport + passport-jwt, @nestjs/jwt, bcrypt, Facebook/Google social login",
				},
				{
					label: "Validation",
					value:
						"class-validator / class-transformer DTOs, Joi for env-schema validation",
				},
				{
					label: "Payments",
					value:
						"Stripe 8 Connect — connected accounts, KYC person mapping, payment intents, manual payouts, transfers & reversals, deposit claims, dual webhook listeners (platform + connect)",
				},
				{
					label: "Email / CRM",
					value:
						"Brevo (formerly Sendinblue) + EJS templates, Pipedrive deals, ClickUp bug intake, Slack Web API notifications",
				},
				{
					label: "Messaging",
					value: "WhatsApp & SMS services with per-domain message catalogs",
				},
				{
					label: "Storage / media",
					value:
						"AWS S3, Sharp + Jimp image processing, express-fileupload, JSZip",
				},
				{
					label: "Documents",
					value:
						"Puppeteer (invoice/contract PDFs from EJS views), csv-writer, ical-generator + node-ical",
				},
				{
					label: "Geo",
					value: "Mapbox, geolib, geo-tz, city/province/country seed data",
				},
				{
					label: "Scheduling",
					value:
						"@nestjs/schedule for in-process tasks; sitemap generation task pushing to S3",
				},
				{ label: "API docs", value: "@nestjs/swagger → OpenAPI 3, Compodoc" },
				{
					label: "Observability",
					value:
						"Winston (nest-winston) with Loki + Slack-webhook transports, Morgan + rotating file streams, prom-client via @willsoto/nestjs-prometheus, OpenProfiling heap profiler",
				},
				{
					label: "Security",
					value:
						"Helmet, ip-range-check (webhook CIDR allowlisting), cookie-parser",
				},
				{
					label: "CLI",
					value:
						"nestjs-command — seeders and data-manager maintenance scripts (anonymization, backfills, S3 migration, payouts)",
				},
				{
					label: "Testing",
					value:
						"Jest 29, ts-jest, Supertest, mongodb-memory-server, @golevelup/ts-jest",
				},
			],
		},
		{
			index: 4,
			title: "Frontend",
			meta: "React 18 · pnpm workspace",
			kind: "rows",
			rows: [
				{
					label: "Core",
					value:
						"React 18, TypeScript 4.7, Webpack 5 + Babel 7 (pnpm workspace on Node 22)",
				},
				{
					label: "Routing",
					value: "React Router 5 — 22 lazy-loaded route bundles",
				},
				{
					label: "Styling",
					value:
						"Tailwind CSS 3 + PostCSS and Sass, MUI 4 (core, lab, pickers) + @mui/base",
				},
				{ label: "Server state", value: "TanStack Query 4 (+ devtools)" },
				{
					label: "Client state",
					value: "Redux 4 + React Redux 8 + Redux Saga, Immer",
				},
				{
					label: "State machines",
					value: "XState 4 + @xstate/react (booking/checkout flows)",
				},
				{
					label: "Forms",
					value:
						"React Hook Form 7, @eduinlight/input-validator, validator, react-text-mask",
				},
				{
					label: "Payments",
					value: "Stripe Elements (@stripe/react-stripe-js)",
				},
				{
					label: "Maps",
					value:
						"Leaflet + React Leaflet, Mapbox GL + mapbox-gl-leaflet, Google Places autocomplete",
				},
				{ label: "Realtime", value: "socket.io-client" },
				{ label: "Dates", value: "Day.js (+ @date-io/dayjs pickers adapter)" },
				{
					label: "UI/UX",
					value:
						"Notistack, Downshift, react-beautiful-dnd, react-virtuoso, Slick/Slideshow carousels, react-avatar-edit, emoji picker, ScrollReveal, Lucide icons",
				},
				{
					label: "SEO / meta",
					value:
						"react-helmet-async, react-snap prerendering, workbox service worker",
				},
				{
					label: "Testing",
					value: "Jest 29 + Testing Library + jsdom, Cypress 12 e2e",
				},
				{
					label: "Build / deploy",
					value:
						"Brotli + gzip compression plugins, webpack-s3-plugin (static assets → S3/CloudFront), served by Nginx",
				},
			],
		},
		{
			index: 5,
			title: "Satellite services",
			meta: "SEO prerender · scheduler",
			kind: "cards",
			columns: 2,
			titleStyle: "mono",
			items: [
				{
					title: "apps/seo",
					body: [
						txt("Bun 1.x + Hono 4, rendering with "),
						mono("puppeteer-core"),
						txt(
							" on system Chromium, Redis 7 caching the rendered HTML with an invalidation endpoint, Zod-validated config. A Traefik v3 ",
						),
						mono("HeaderRegexp(User-Agent, …)"),
						txt(
							" rule routes ~30 crawler and AI-bot agents here; everything else goes to the SPA, with static assets proxied through.",
						),
					],
				},
				{
					title: "holaplace-scheduler",
					body: [
						txt(
							"NestJS 8 on Node 16 with Croner 5 — a task registry of declarative cron expressions, task definitions and run records in DynamoDB, Axios + ",
						),
						mono("axios-retry"),
						txt(
							" callbacks into the API through a token service, Joi-validated env plus AWS Secrets Manager and Slack error reporting behind a health endpoint.",
						),
					],
				},
			],
		},
		{
			index: 6,
			title: "Infrastructure & DevOps",
			meta: "Terraform · AWS eu-west-3",
			kind: "bullets",
			items: [
				[
					bold("Terraform ≥ 1.1.4"),
					txt(", AWS provider 4.29, region "),
					mono("eu-west-3"),
					txt(", state in a GitLab-hosted HTTP backend, three environments ("),
					mono("dev"),
					txt(" / "),
					mono("stage"),
					txt(" / "),
					mono("prod"),
					txt(") composed from a single reusable "),
					mono("environment"),
					txt(" module plus small "),
					mono("components"),
					txt(" modules."),
				],
				[
					bold("EC2 Auto Scaling Groups per service"),
					txt(
						" (front, api, admin, scheduler, db, elk) built from launch templates and ",
					),
					mono("user_data"),
					txt(" bootstrap scripts that pull a "),
					mono("docker-compose-<service>.yml"),
					txt(
						" from S3 and start the ECR image; lifecycle hooks for graceful drain, instance-refresh deploys.",
					),
				],
				[
					bold("Networking"),
					txt(
						" — public and internal ALBs, 9 target groups and listener rules, ACM certs with Route 53 DNS validation, a Route 53 public zone plus ",
					),
					mono("holaplace.internal"),
					txt(", a WAFv2 web ACL and 8 security groups."),
				],
				[
					bold("CloudFront"),
					txt(
						" for static assets with a long-cache policy and Lambda@Edge (viewer-request + origin-request) that routed bot traffic to Prerender.io — since superseded by the self-hosted Bun/Traefik prerender path.",
					),
				],
				[
					bold("Managed data services"),
					txt(
						" — ElastiCache Redis, 3 DynamoDB tables (scheduler tasks, run events, cookie-consent log), EFS mounted by the API instances, S3 buckets (uploads, static assets, sitemaps, mongo dumps, ALB access logs) and SSM Parameter Store for runtime config.",
					),
				],
				[
					bold("Self-hosted MongoDB"),
					txt(
						" on EC2 with an attached data volume, a DLM snapshot lifecycle policy and nightly ",
					),
					mono("mongodump"),
					txt(" to S3; "),
					bold("ELK"),
					txt(
						" (Elasticsearch / Logstash / Kibana) on its own instance alongside the CloudWatch agent, with Grafana Loki and Prometheus metrics from the API.",
					),
				],
				[
					bold("GitLab CI/CD per repo"),
					txt(" — test ("),
					mono("tsc"),
					txt(
						" + lint) → multi-stage Docker build with per-environment build args → push to a private ECR → deploy by terminating/refreshing ASG instances, with separate migration-runner scripts for the API; a self-hosted GitLab Runner on Lightsail and the registry are their own Terraform stacks.",
					),
				],
				[
					bold("Local dev"),
					txt(
						" — Docker Compose stacks with a Mongo replica set and auto-restored S3 dump, Mongo Express, Redis, LocalStack (Terraform-provisioned AWS mocks), two Stripe CLI webhook listeners and Traefik v3 in the front repo to reproduce the production SPA/SEO split.",
					),
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
					title: "Stripe Connect money flow",
					body: "The full marketplace lifecycle: deposit holds, split charges, transfers and reversals, manual payouts, deposit-claim adjudication with its own money service, and separate platform and connect webhook processors.",
				},
				{
					title: "Externalized cron",
					body: "The scheduler service holds every recurring job as a registry entry, invokes the API over authenticated callbacks, and writes an auditable run history to DynamoDB, so API instances stay stateless and horizontally scalable.",
				},
				{
					title: "Bot-aware rendering split at the proxy",
					body: "Traefik user-agent matching sends crawlers to a Bun + Hono + Puppeteer renderer with a Redis HTML cache and an invalidation API, replacing a paid Lambda@Edge / Prerender.io setup.",
				},
				{
					title: "Two-way calendar sync",
					body: "iCal generation plus node-ical/CalDAV ingestion, with a dedicated realtime gateway pushing availability changes to connected clients.",
				},
				{
					title: "Runtime translation model",
					body: "A response interceptor and @Lang() decorator localize payloads per request without duplicating endpoints.",
				},
				{
					title: "Field-level response shaping",
					body: "A family of pick-*/omit-fields interceptors projects entity responses per role and context, keeping host, guest and admin views on one controller.",
				},
				{
					title: "Immutable infrastructure on plain EC2",
					body: "No ECS or EKS — ASGs boot from S3-hosted compose files and deploys are instance refreshes, giving container-style rollout on a low-cost footprint.",
				},
				{
					title: "Data-manager script suite",
					body: "One-off maintenance commands (anonymization, timezone/geo backfills, upload→S3 migration, balance payouts) versioned alongside the 152-file migration history.",
				},
			],
		},
	],

	gallery: [
		{
			placeholder: "Second screenshot",
			ratio: "4 / 3",
			src: "/work/holaplace-venue.webp",
			alt: "HolaPlace venue detail page",
		},
		{
			placeholder: "Third screenshot",
			ratio: "4 / 3",
			src: "/work/holaplace-mobile.webp",
			alt: "HolaPlace venue page on mobile",
		},
	],

	card: {
		kicker: "holaplace.com · 2020–2023",
		title: "HolaPlace",
		body: "Two-sided venue marketplace built from scratch — 399 endpoints, Stripe Connect split payments, iCal sync and 7 realtime gateways.",
		meta: "NestJS · React · Stripe Connect",
		placeholder: "HolaPlace screenshot",
		src: "/work/holaplace-card.webp",
		alt: "HolaPlace",
	},

	seo: {
		title: "HolaPlace",
		description:
			"A two-sided venue marketplace built from scratch — 399 REST endpoints on NestJS and MongoDB, Stripe Connect split payments and seven realtime gateways.",
	},
};
