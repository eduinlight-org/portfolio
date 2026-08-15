import type { ProfileContent } from "~/content/types";

export const profile: ProfileContent = {
	name: "Eduin Garcia",

	hero: {
		headline: ["Senior software", "& DevOps engineer"],
		lead: "A decade building web, mobile and desktop applications — and the cloud-native infrastructure they run on. I take products from an empty repository to production, and I keep them there.",
		figure: {
			placeholder: "Eduin Garcia — portrait",
			ratio: "4 / 5",
			src: "/headshot.jpeg",
			alt: "Eduin Garcia",
		},
	},

	profile: {
		heading: { index: 1, title: "Profile", meta: "Valencia, Spain" },
		summary:
			"I build products end to end — React and Rust clients, Node and NestJS services on PostgreSQL and MongoDB, and the Kubernetes, Terraform and CI/CD they run on. Four of them went from an empty repository to production, one of those solo as co-founder. Another was a 268k-line legacy platform I moved onto a micro-frontend architecture without stopping delivery.",
		facts: [
			{ label: "Role", value: "Senior Software Engineer · DevOps & Platform" },
			{ label: "Based", value: "Valencia, Spain · remote" },
			{
				label: "Languages",
				value: "Spanish (native), English (professional working proficiency)",
			},
			{
				label: "Education",
				value: "B.Sc. in Computer Engineering — Universidad de Granma",
			},
		],
	},

	record: {
		sheet: {
			title: "Eduin Garcia — engineering record",
			badges: ["Sheet 01", "2016 – 2026"],
			note: "Figures current as of 2026. Detail per role in section 04.",
		},
		measures: [
			{
				no: "01",
				measure: "Years building software",
				value: "10+",
				remark: "Frontend, mobile, desktop, backend, infrastructure",
			},
			{
				no: "02",
				measure: "Products shipped",
				value: "6",
				remark: "Four built from an empty repository",
			},
			{
				no: "03",
				measure: "Largest platform migrated",
				value: "268k",
				remark: "Lines of PHP and JavaScript — Qollabi",
			},
			{
				no: "04",
				measure: "Cloud environments owned",
				value: "3",
				remark: "AWS dev, stage and prod — HolaPlace",
			},
		],
	},

	capabilities: {
		heading: { index: 2, title: "Capabilities", meta: "Four practices" },
		items: [
			{
				index: "01",
				title: "Product frontends",
				body: "React, React Router 7 and Remix applications with server-side rendering, complex state in Redux and XState, realtime updates over WebSockets and Server-Sent Events.",
			},
			{
				index: "02",
				title: "Mobile & desktop apps",
				body: "Shared codebases rather than one per platform — React Native for iOS and Android, Rust and Dioxus for desktop and mobile from a single source tree, Qt and QML for native desktop.",
			},
			{
				index: "03",
				title: "APIs & platforms from scratch",
				body: "Node.js, NestJS and Express services over PostgreSQL, MongoDB, Redis and Elasticsearch — CQRS where it earns its keep, built test-first and documented for handover.",
			},
			{
				index: "04",
				title: "DevOps & infrastructure",
				body: "GitOps pipelines and CI/CD, Docker Swarm and Kubernetes with Kustomize, Terraform on AWS and Proxmox, observability on Grafana, Loki, Tempo and Prometheus.",
			},
		],
	},

	work: {
		heading: {
			index: 3,
			title: "Selected work",
			meta: "Six case studies · 2018 – 2026",
		},
		order: [
			"lightnotes",
			"qollabi-ai",
			"caxper",
			"holaplace",
			"qollabi",
			"myaltafit",
		],
	},

	experience: {
		heading: { index: 4, title: "Experience", meta: "2016 – 2026" },
		roles: [
			{
				period: "Jan 2024 — Apr 2026",
				company: "Qollabi",
				title: "Senior Software Developer & DevOps Engineer",
				bullets: [
					"Built Qollabi 2.0, the ground-up TypeScript rewrite of the platform — Remix and Bun workspaces, CQRS and PostgreSQL row-level security for multi-tenancy across seven deployables.",
					"Introduced a micro-frontend architecture into the legacy platform — a React 18 Module Federation remote consumed at runtime by the React 16 host, so both codebases could ship independently.",
					"Maintained and extended the legacy platform: 268k lines of PHP behind a GraphQL API, with a React 16 SPA on top.",
					"Built a Server-Sent Events client on PostgreSQL's LISTEN/NOTIFY, so the apps push updates without adding a broker.",
					"Built the Docker-based development environment and the UAT and production deployment pipelines, including per-branch ephemeral environments with their own database and Keycloak realm.",
					"Maintained the Terraform codebase and the Docker Swarm cluster, owned the AWS footprint — Route 53, RDS, Amazon MQ, S3 and IAM — and set up the VPN and reverse tunnel used for development access.",
					"Developed AWS Lambda functions and Activepieces automation infrastructure, and wrote the Salesforce data migration scripts used to onboard clients.",
				],
			},
			{
				period: "Jun 2020 — Dec 2023",
				company: "HolaPlace",
				title: "Senior Software Developer",
				bullets: [
					"Built holaplace.com from scratch with a six-person team — 399 REST endpoints on NestJS and MongoDB, seven Socket.IO gateways and three AWS environments in Terraform.",
					"Developed the React SPA — Redux and XState for the booking and checkout flows, TanStack Query for server state, Socket.IO for chat, notifications and calendar sync.",
					"Implemented the Stripe Connect money flow end to end: deposits, holds, split charges, transfers, payouts, claims and refunds, with separate platform and connect webhook processors.",
					"Built the backend services on NestJS and Express over MongoDB, Elasticsearch, Redis and AWS S3.",
					"Containerized the stack with Docker and Docker Compose, with LocalStack standing in for AWS locally.",
					"Worked test-first with Jest across unit, integration and end-to-end suites.",
					"Automated deployments with Terraform across dev, stage and production, and reviewed code across the team.",
				],
			},
			{
				period: "Nov 2019 — Jun 2020",
				company: "Front10",
				title: "Software Developer",
				bullets: [
					"Maintained and extended a React component library used across airline applications.",
					"Automated testing and deployment with GitLab CI/CD.",
					"Wrote unit and end-to-end tests with Jest and Cypress.",
					"Contributed to the company-wide migration from JavaScript to TypeScript.",
				],
			},
			{
				period: "Mar 2016 — Oct 2019",
				company: "Melkart Outsourcing & Business",
				title: "Full-stack Software Engineer",
				bullets: [
					"Built and delivered web applications on the MERN stack for a rotating set of clients.",
					"Shipped a full-stack Clojure and ClojureScript project.",
					"Built backend services with Node.js, Express and Sails.js.",
					"Ran three to four concurrent client projects.",
				],
			},
		],
	},

	skills: {
		heading: { index: 5, title: "Skills", meta: "Seven groups" },
		groups: [
			{
				name: "Frontend",
				items: [
					"React",
					"React Router 7",
					"Remix",
					"Redux",
					"XState",
					"TypeScript",
					"Micro-frontends",
					"TanStack Query",
					"Tailwind CSS",
				],
			},
			{
				name: "Mobile & desktop",
				items: ["React Native", "Rust", "Dioxus", "Qt", "QML", "C++", "C"],
			},
			{
				name: "Backend",
				items: [
					"Node.js",
					"Bun",
					"NestJS",
					"Express",
					"Hono",
					"PHP / Symfony",
					"Clojure",
					"REST APIs",
					"GraphQL",
					"WebSockets",
					"CQRS",
					"Stripe Connect",
				],
			},
			{
				name: "Data & messaging",
				items: [
					"PostgreSQL",
					"MongoDB",
					"MySQL",
					"SQLite",
					"Redis",
					"Elasticsearch",
					"Kafka",
					"RabbitMQ",
				],
			},
			{
				name: "DevOps & platform",
				items: [
					"GitOps",
					"CI/CD",
					"Docker",
					"Docker Swarm",
					"Kubernetes",
					"Kustomize",
					"ArgoCD",
					"Terraform",
					"Ansible",
					"AWS",
					"Proxmox",
					"Grafana / Loki / Tempo / Prometheus",
					"Keycloak",
					"WireGuard",
					"TLS / OpenSSL",
					"Bash",
				],
			},
			{
				name: "Testing",
				items: ["Jest", "Vitest", "Cypress", "Playwright", "TDD"],
			},
			{
				name: "Architecture & practice",
				items: [
					"Clean Architecture",
					"Design Patterns",
					"Monorepos",
					"Internationalization",
					"Agile / Scrum",
				],
			},
		],
	},

	openSource: {
		heading: {
			index: 6,
			title: "Open source",
			meta: "github.com/eduinlight",
		},
		allReposLabel: "More on GitHub →",
		allReposUrl: "https://github.com/eduinlight?tab=repositories",
		repos: [
			{
				name: "wireguard-server",
				tag: "Infrastructure",
				desc: "WireGuard server on wg-easy with an access control list, allowing or denying VPN users access to specific IPs.",
				url: "https://github.com/eduinlight/wireguard-server",
			},
			{
				name: "lego-route53-auto",
				tag: "Infrastructure",
				desc: "Automated TLS certificate issuing and renewal with lego and AWS Route 53.",
				url: "https://github.com/eduinlight/lego-route53-auto",
			},
			{
				name: "kubernetes-devspace-vite-development",
				tag: "Infrastructure",
				desc: "Kubernetes development workflow with DevSpace for a Vite application.",
				url: "https://github.com/eduinlight/kubernetes-devspace-vite-development",
			},
			{
				name: "gitlab-devops-helpers",
				tag: "Tooling",
				desc: "Helper tooling for GitLab CI/CD pipelines.",
				url: "https://github.com/eduinlight/gitlab-devops-helpers",
			},
			{
				name: "c-web-server",
				tag: "Systems",
				desc: "Web server written in C.",
				url: "https://github.com/eduinlight/c-web-server",
			},
			{
				name: "c-raylib-hot-reloading",
				tag: "Systems",
				desc: "Hot-reloading setup for C projects using raylib.",
				url: "https://github.com/eduinlight/c-raylib-hot-reloading",
			},
			{
				name: "event-driven-nest",
				tag: "Backend",
				desc: "Event-driven architecture with NestJS.",
				url: "https://github.com/eduinlight/event-driven-nest",
			},
			{
				name: "kafka-poc",
				tag: "Backend",
				desc: "Proof of concept for messaging with Apache Kafka.",
				url: "https://github.com/eduinlight/kafka-poc",
			},
			{
				name: "actix_web-htmx-tera-alpinejs-tailwindcss-template",
				tag: "Web",
				desc: "Starter template pairing Actix Web with htmx, Tera, Alpine.js and Tailwind CSS.",
				url: "https://github.com/eduinlight/actix_web-htmx-tera-alpinejs-tailwindcss-template",
			},
			{
				name: "battery_notifier",
				tag: "Desktop",
				desc: "Battery level notifier for Linux desktops.",
				url: "https://github.com/eduinlight/battery_notifier",
			},
		],
	},

	background: {
		heading: {
			index: 7,
			title: "Background",
			meta: "Education · honours · references",
		},
		cards: [
			{
				kicker: "Education",
				title: "B.Sc. in Computer Engineering",
				body: "Universidad de Granma · September 2009 – June 2014",
			},
			{
				kicker: "Honours & awards",
				title: "ACM-ICPC",
				body: "ICPC Caribbean Local Contest — 2011, 2012, 2013. Cuban National Contest — 2011, 2012.",
			},
			{
				kicker: "References",
				title: "",
				body: "Available on request.",
			},
		],
	},

	contact: {
		heading: { index: 8, title: "Contact" },
		headline: ["Let's build", "something solid"],
		lead: "Open to senior engineering and DevOps roles across frontend, mobile, desktop and platform engineering. Based in Valencia, Spain — remote across European time zones, onsite in Valencia.",
		email: "eduinlight@gmail.com",
		phone: "+34 662638746",
		showPhone: true,
		links: [
			{ label: "GitHub", value: "github.com/eduinlight" },
			{ label: "LinkedIn", value: "linkedin.com/in/eduinlight" },
		],
	},

	footer: {
		left: "Eduin Garcia — Senior Software Engineer · DevOps & Platform",
		right: "Valencia, Spain · 2026",
	},

	seo: {
		title: "Eduin Garcia — Senior Software & DevOps Engineer",
		description:
			"Senior software and DevOps engineer in Valencia, Spain. 10+ years building web, mobile and desktop products and the infrastructure they run on.",
	},
};
