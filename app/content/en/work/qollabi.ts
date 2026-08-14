import { bold, em, mono, type Project, txt } from "~/content/types";

export const qollabi: Project = {
	slug: "qollabi",
	name: "Qollabi",
	kicker: "Qollabi · Senior Software Developer / DevOps · Jan 2024 – Apr 2026",
	headline: ["Strangling a 268k-line", "legacy platform"],
	lead: "Qollabi is multi-tenant B2B SaaS for channel & partner sales teams — account planning, OKR tracking, joint business plans shared with partners, activities & campaigns, reporting periods, benchmarks, smart updates, bulk import/export and CRM integrations.",
	link: { label: "qollabi.com", href: "https://qollabi.com" },
	linkAsButton: true,

	hero: {
		placeholder: "Drop a Qollabi screenshot",
		ratio: "16 / 9",
	},

	sheet: {
		title: "Qollabi — platform scale",
		badges: ["3 repositories", "Sheet 01"],
		note: "~268k lines of PHP across 3,700+ files, ~49k lines of TypeScript in the federated frontend, ~142k lines of JavaScript in the legacy frontend.",
		stats: [
			{ value: "230", label: "GraphQL queries" },
			{ value: "331", label: "GraphQL mutations" },
			{ value: "273", label: "GraphQL types" },
			{ value: "47", label: "Event-sourced aggregates" },
			{ value: "65", label: "MongoDB documents" },
			{ value: "163", label: "Database migrations" },
			{ value: "60+", label: "Console commands" },
			{ value: "170+", label: "Test files" },
		],
	},

	sections: [
		{
			index: 1,
			title: "My work",
			meta: "Frontend · backend · platform",
			kind: "bullets",
			items: [
				"Maintained and extended a legacy SPA with a Symfony backend.",
				"Introduced micro-frontend architecture on legacy project.",
				"Created Docker setup for development and UAT/production deployment pipelines.",
				"Maintained Terraform code and Docker Swarm cluster.",
				"Managed AWS services: Route53, RDS, MQ, S3, IAM.",
				"Built Salesforce data migration scripts for clients.",
				"Set up VPN and tunnel for development usage.",
			],
		},
		{
			index: 2,
			title: "Architecture",
			meta: "Strangler fig, enforced in CI",
			kind: "bullets",
			items: [
				[
					bold("Micro-frontend via Webpack 5 Module Federation"),
					txt(" — a new React 18 + TypeScript "),
					em("remote"),
					txt(
						" exposes routes and components consumed at runtime by the React 16 legacy ",
					),
					em("host"),
					txt(", letting both codebases ship independently."),
				],
				[
					bold("Strangler Fig migration, enforced in CI"),
					txt(" — "),
					mono("phpat"),
					txt(" architecture tests ("),
					mono("StranglerFigTest"),
					txt(", "),
					mono("LayeredArchitectureTest"),
					txt(", "),
					mono("LegacyArchitectureTest"),
					txt(") fail the build when new code depends on legacy layers."),
				],
				[
					bold("Shadow DOM isolation"),
					txt(
						" — federated modules mount inside a shadow root with their own style tree, so Mantine and Tailwind never collide with the legacy Ant Design/Less stylesheet.",
					),
				],
				[
					bold("CQRS + Event Sourcing"),
					txt(
						" — EventSauce aggregates behind Tactician command/query buses, with dedicated projectors rebuilding MongoDB read models from the event stream.",
					),
				],
				[
					bold("Database-per-tenant multi-tenancy"),
					txt(
						" — each customer gets its own MongoDB database, resolved per request from an ",
					),
					mono("X-Tenant-Id"),
					txt(" header via a resettable Doctrine document manager."),
				],
				[
					bold("GraphQL-first API"),
					txt(
						" — a custom Symfony GraphQL bundle serves the schema; the federated frontend consumes it through a GraphQL Mesh gateway with fully typed generated documents.",
					),
				],
			],
		},
		{
			index: 3,
			title: "Repositories",
			meta: "Backend · remote · host",
			kind: "cards",
			columns: 3,
			titleStyle: "mono",
			items: [
				{
					title: "qollabi-sfa-core",
					body: "Symfony/GraphQL backend, event store, projections, workers, CLI, cron.",
				},
				{
					title: "qollabi-rja-federation",
					body: [
						txt("Module Federation remote: "),
						mono("app"),
						txt(
							" shell, feature modules (integration-layer, smart-updates, tableau-demo, common), shared packages and Storybook.",
						),
					],
				},
				{
					title: "qollabi-rja-brm",
					body: [
						txt("Mounted as "),
						mono("legacy/"),
						txt(" — the original React 16 SPA, now the federation host."),
					],
				},
			],
		},
		{
			index: 4,
			title: "Backend",
			meta: "PHP 8.2 · Symfony 5.4",
			kind: "rows",
			rows: [
				{ label: "Runtime", value: "PHP 8.2, PHP-FPM" },
				{
					label: "Framework",
					value: "Symfony 5.4 (Flex, Framework/Security/Twig bundles)",
				},
				{
					label: "Database",
					value:
						"MongoDB 7 (replica set), Doctrine MongoDB ODM 2, devture/mongodb-migrations",
				},
				{
					label: "API",
					value:
						"GraphQL — custom qollabi/sfx-graphql-bundle, field-level authorization voters",
				},
				{
					label: "CQRS",
					value:
						"League Tactician (command/query/event buses) + Symfony Messenger with per-bus middleware",
				},
				{
					label: "Event sourcing",
					value:
						"EventSauce 0.8 + Doctrine message repository, projector layer for read models",
				},
				{
					label: "Queues",
					value:
						"RabbitMQ 3 (ext-amqp, kcs/messenger-extra) — quorum queues, dead-letter exchanges, delivery limits, dedicated integration-layer transport",
				},
				{
					label: "Cache / locks",
					value: "Redis 5 (predis, snc/redis-bundle), Symfony Lock & Cache",
				},
				{
					label: "Auth",
					value:
						"Auth0 (auth0-php, Management API), firebase/php-jwt, S3-distributed JWT certs",
				},
				{
					label: "Storage",
					value:
						"AWS SDK for PHP + Flysystem (S3 adapter, oneup/flysystem-bundle)",
				},
				{
					label: "Email",
					value:
						"Symfony Mailer + SendGrid, Twig with Inky, CSS inliner and Markdown extras",
				},
				{
					label: "Spreadsheets",
					value:
						"PhpSpreadsheet — bulk account/objective import & export pipelines",
				},
				{
					label: "i18n",
					value:
						"php-translation/symfony-bundle + willdurand/js-translation-bundle (catalogs shared with the frontend)",
				},
				{
					label: "Feature flags",
					value: "Opensoft Rollout (qollabi/phx-rollout-bundle)",
				},
				{
					label: "Observability",
					value: "Rollbar, Monolog, Blackfire SDK, Symfony Stopwatch/Profiler",
				},
				{
					label: "Quality",
					value:
						"PHPSpec 7, PHPUnit, Symfony Panther, PHPStan level 6, phpat architecture rules, PHP-CS-Fixer, Rector",
				},
			],
		},
		{
			index: 5,
			title: "Federated app",
			meta: "React 18 · TypeScript 5.3",
			kind: "rows",
			rows: [
				{ label: "Core", value: "React 18, TypeScript 5.3, Webpack 5" },
				{
					label: "Federation",
					value:
						"@module-federation/enhanced — remote exposing modules & components to the legacy host",
				},
				{
					label: "Monorepo",
					value:
						"Yarn workspaces — 4 feature modules, 11 shared packages, 6 shared build configs, 1 Storybook workspace",
				},
				{
					label: "Components",
					value:
						"Mantine 7 (core, dates, hooks, notifications), mantine-datatable, PrimeReact 10 — wrapped in a shared @qollabi/ui design system",
				},
				{
					label: "Styling",
					value:
						"Tailwind CSS 3, PostCSS (postcss-preset-mantine), Sass, class-variance-authority, clsx, tailwind-merge",
				},
				{
					label: "Server state",
					value:
						"TanStack Query 5 (suspense queries) over graphql-request + TypedDocumentNode generated documents",
				},
				{ label: "Client state", value: "Zustand 5" },
				{ label: "Forms", value: "React Hook Form 7 + Yup resolvers" },
				{
					label: "i18n",
					value: "i18next + react-i18next (shared @qollabi/i18n)",
				},
				{ label: "Dates", value: "Day.js and Luxon" },
				{
					label: "Icons",
					value: "FontAwesome Pro (light/regular/solid), Tabler Icons",
				},
				{
					label: "Misc",
					value:
						"react-error-boundary, notistack, SortableJS, Zod (build-time env-var validation)",
				},
				{
					label: "Tooling",
					value:
						"Storybook 7, Jest + ts-jest, ESLint + Prettier shared configs, Husky",
				},
			],
		},
		{
			index: 6,
			title: "Legacy app",
			meta: "React 16 · the federation host",
			kind: "rows",
			rows: [
				{
					label: "Core",
					value:
						"React 16, Webpack 5 (migrated off CRA), Babel, partial Flow typing",
				},
				{
					label: "Data",
					value:
						"Apollo Client 2 / react-apollo 3, GraphQL, 70 .graphql documents, batched HTTP link",
				},
				{
					label: "Components",
					value: "Ant Design 3 (Less theming), PrimeReact 5",
				},
				{ label: "Routing", value: "React Router 5" },
				{
					label: "Forms",
					value:
						"Final Form + react-final-form (arrays, focus, field-data), React Hook Form 5, Yup, validator",
				},
				{
					label: "Rich text",
					value: "TipTap 2 (mentions, links, lists) and Slate 0.82",
				},
				{
					label: "Interaction",
					value:
						"react-beautiful-dnd, react-dnd, react-sortable-hoc, react-virtualized, react-dates",
				},
				{ label: "Charts", value: "Recharts 1" },
				{
					label: "Dates",
					value: "Moment + moment-timezone + moment-range, @vvo/tzdb",
				},
				{ label: "Auth", value: "Auth0 React SDK, jsonwebtoken" },
				{
					label: "Analytics",
					value: "Rollbar, FullStory, Smartlook, Intercom",
				},
				{
					label: "Testing",
					value: "Cypress 4 + Mocha JUnit reporters, Storybook 7",
				},
			],
		},
		{
			index: 7,
			title: "Infrastructure & DevOps",
			meta: "Swarm · GitLab CI · Ansible",
			kind: "bullets",
			items: [
				[
					bold("Docker Compose local stacks driven by Makefile targets"),
					txt(
						" — PHP-FPM, Nginx, MongoDB replica set, RabbitMQ, Redis and mongo-express on the backend; remote + legacy dev servers, Storybook, and a tunnel container for Auth0 callbacks on the frontend.",
					),
				],
				[
					bold("GitLab CI/CD"),
					txt(
						" — install → lint → PHPStan → PHPSpec/PHPUnit with coverage → tagged multi-image build (php, nginx, cron) → deploy → post-deploy validation, with UAT/PRD tag-format gating.",
					),
				],
				[
					bold("Docker Swarm deployment"),
					txt(" — "),
					mono("prd.yaml"),
					txt(" / "),
					mono("uat.yaml"),
					txt(
						" stacks with separate images per role and dedicated start scripts for FPM, async workers, import workers, queue setup and migrations.",
					),
				],
				[
					bold("Ansible + AWS CloudFormation"),
					txt(
						" — provisioning playbooks across nine production instances plus preprod, review and demo environments, with Supervisor-managed worker processes.",
					),
				],
				[
					bold("Cron image"),
					txt(
						" running per-customer scheduled jobs (due-date emails, responsible-assignment notifications, hourly smart-update processing) with Slack log channels.",
					),
				],
				[
					bold("Quality gates"),
					txt(
						" — PHPStan baseline, architecture tests, CodeClimate, Husky + lint-staged and Prettier across both repos.",
					),
				],
			],
		},
		{
			index: 8,
			title: "Engineering highlights",
			meta: "Six decisions",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "Runtime micro-frontend bridge",
					body: "A remoteLazyComponent / remoteLazyModule HOC pair on the legacy side lazily pulls federated exports and injects host context (language, router history, tenant, translation mode), so new React 18 modules render as first-class citizens inside a React 16 app.",
				},
				{
					title: "Architecture tests as migration policy",
					body: "The strangler-fig boundary is a build-breaking rule, not a convention, which keeps a 268k-line legacy codebase from re-entangling itself.",
				},
				{
					title: "Outbound integration layer",
					body: "18 typed routing keys over a direct RabbitMQ exchange, each with quorum queues, dead-letter routing and a custom message serializer, pushing plans, objectives, activities and access control to external CRMs.",
				},
				{
					title: "Salesforce OAuth in the browser",
					body: "The full flow runs client-side with credential encryption before the token ever reaches storage.",
				},
				{
					title: "Projection replay tooling",
					body: "CLI commands to rebuild read models, replay benchmark history and repair event versions against a live event store.",
				},
				{
					title: "Per-customer batch orchestration",
					body: "A single cron entry fans a console command across every tenant database, so scheduled work scales with customer count without extra infrastructure.",
				},
			],
		},
	],

	gallery: [
		{ placeholder: "Second screenshot", ratio: "4 / 3" },
		{ placeholder: "Third screenshot", ratio: "4 / 3" },
	],

	card: {
		kicker: "qollabi.com · 2024–2026",
		title: "Qollabi",
		body: "Legacy SPA on a Symfony backend, maintained and extended — and moved toward a micro-frontend architecture.",
		meta: "SPA · Symfony · Micro-frontends",
		placeholder: "Qollabi screenshot",
	},

	seo: {
		title: "Qollabi",
		description:
			"Strangling a 268k-line Symfony and React 16 platform with Webpack Module Federation, event sourcing on MongoDB and a GraphQL-first API — with the migration boundary enforced by architecture tests in CI.",
	},
};
