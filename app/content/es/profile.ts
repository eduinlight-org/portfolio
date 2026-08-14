// TODO: translate to Spanish.
// Copied verbatim from ../en so the site renders in both locales today. The
// structure must stay identical to the English module — the `Content` type is
// what keeps the two in step.

import type { ProfileContent } from "~/content/types";

export const profile: ProfileContent = {
	name: "Eduin Garcia",

	hero: {
		headline: ["Senior software", "engineer & devops"],
		lead: "Ten years building web, mobile and desktop applications — and the cloud-native infrastructure they run on. I take products from an empty repository to a running platform, and I keep them running.",
		figure: {
			placeholder: "Drop your headshot",
			ratio: "4 / 5",
		},
	},

	profile: {
		heading: { index: 1, title: "Profile", meta: "Valencia, Spain" },
		summary:
			"Senior Software Engineer with 10+ years of experience building web, mobile, and desktop applications. Strong background in MERN stack, cloud-native architectures, and DevOps practices. Proven ability to build platforms from scratch, lead technical initiatives, review code, and collaborate in cross-functional teams. Passionate about scalable systems, real-time applications, and clean, testable code.",
		facts: [
			{ label: "Role", value: "Senior Software Engineer / DevOps" },
			{ label: "Based", value: "Valencia, Spain · remote" },
			{ label: "Languages", value: "Spanish (native), English (professional)" },
			{
				label: "Education",
				value: "B.Sc. Computer Software Engineering, Granma University",
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
				remark: "Frontend, mobile, desktop, backend, platform",
			},
			{
				no: "02",
				measure: "Products in production",
				value: "6",
				remark: "Two built from an empty repository",
			},
			{
				no: "03",
				measure: "Public repositories",
				value: "112",
				remark: "github.com/eduinlight",
			},
			{
				no: "04",
				measure: "ACM-ICPC contests",
				value: "5",
				remark: "Caribbean local 2011–13, national 2011–12",
			},
		],
	},

	capabilities: {
		heading: { index: 2, title: "Capabilities", meta: "Four practices" },
		items: [
			{
				index: "01",
				title: "Product front ends",
				body: "React and Remix applications with server-side rendering, complex state handled with Redux and XState, real-time updates over WebSockets and server-sent events.",
			},
			{
				index: "02",
				title: "Mobile & desktop apps",
				body: "One codebase across platforms — React Native for iOS and Android, Rust and Dioxus for desktop and mobile, QT and QML for native work.",
			},
			{
				index: "03",
				title: "APIs & platforms from scratch",
				body: "Node.js, NestJS and Express services over PostgreSQL, MongoDB, Redis and Elasticsearch — CQRS where it earns its keep, built test-first and documented for handover.",
			},
			{
				index: "04",
				title: "DevOps & infrastructure",
				body: "GitOps pipelines and CI/CD, Docker Swarm and Kubernetes with Kustomize, Terraform on AWS and Proxmox, observability on the LGTM stack.",
			},
		],
	},

	work: {
		heading: {
			index: 3,
			title: "Selected work",
			meta: "Six products · a page each",
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
				title: "Senior Software Developer / DevOps",
				bullets: [
					"Developed the new Qollabi AI product using the Remix framework.",
					"Created Docker setup for development and UAT/production deployment pipelines.",
					"Developed and maintained AWS Lambda functions and ActivePieces infrastructure.",
					"Built Salesforce data migration scripts for clients.",
					"Implemented server-side events client using PostgreSQL LISTEN/NOTIFY API.",
					"Maintained Terraform code and Docker Swarm cluster.",
					"Managed AWS services: Route53, RDS, MQ, S3, IAM.",
					"Maintained and extended a legacy SPA with a Symfony backend.",
					"Introduced micro-frontend architecture on legacy project.",
					"Set up VPN and tunnel for development usage.",
				],
			},
			{
				period: "Jun 2020 — Dec 2023",
				company: "HolaPlace",
				title: "Senior Software Developer",
				bullets: [
					"Built holaplace.com platform from scratch using the MERN stack.",
					"Developed a React SPA using Redux, React Router, XState for complex state management, and Socket.IO for real-time features.",
					"Implemented backend services with NestJS and Express, integrating MongoDB, Elasticsearch, Stripe, Redis, and AWS S3.",
					"Containerized services with Docker and Docker Compose; used AWS LocalStack for local cloud development.",
					"Applied TDD with Jest, covering unit, integration, and end-to-end tests.",
					"Managed repositories with Git and GitLab; automated deployments using Terraform.",
					"Performed code reviews and collaborated in a 6-person cross-functional team.",
				],
			},
			{
				period: "Nov 2019 — Jun 2020",
				company: "Front10",
				title: "Software Developer",
				bullets: [
					"Maintained and extended a React component library for airline applications.",
					"Implemented automated testing and deployment with GitLab CI/CD.",
					"Wrote unit and e2e tests using Jest and Cypress.",
					"Contributed to the company-wide migration from JavaScript to TypeScript.",
				],
			},
			{
				period: "Mar 2016 — Oct 2019",
				company: "Melkart Outsourcing & Business",
				title: "Full Stack Software Engineer",
				bullets: [
					"Developed multiple web applications using the MERN stack.",
					"Delivered one full project using Clojure and ClojureScript.",
					"Built backend services with Node.js, Express, and SailsJS.",
					"Managed and delivered 3-4 concurrent projects while meeting deadlines.",
				],
			},
		],
	},

	skills: {
		heading: { index: 5, title: "Skills", meta: "Six groups" },
		groups: [
			{
				name: "Frontend",
				items: [
					"React",
					"Remix",
					"Redux",
					"XState",
					"TypeScript",
					"Micro-frontends",
					"TanStack Query",
					"Tailwind CSS",
					"HTML",
					"CSS",
				],
			},
			{
				name: "Mobile & desktop",
				items: ["React Native", "Rust", "Dioxus", "QT", "QML", "C++", "C"],
			},
			{
				name: "Backend & data",
				items: [
					"Node.js",
					"NestJS",
					"Express",
					"REST APIs",
					"WebSockets",
					"GraphQL",
					"CQRS",
					"PostgreSQL",
					"MongoDB",
					"MySQL",
					"SQLite",
					"Redis",
					"Elasticsearch",
					"Kafka",
					"Firebase",
					"Clojure",
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
					"Terraform",
					"AWS",
					"Proxmox",
					"LGTM stack",
					"Keycloak",
					"WireGuard",
					"TLS / OpenSSL",
					"BASH",
				],
			},
			{ name: "Testing", items: ["Jest", "Vitest", "Cypress", "TDD"] },
			{
				name: "Practice",
				items: [
					"Clean Architecture",
					"Design Patterns",
					"Algorithms",
					"Data Structures",
					"Internationalization",
					"Monorepos",
					"Code Reviews",
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
		allReposLabel: "All 112 repositories →",
		allReposUrl: "https://github.com/eduinlight?tab=repositories",
		repos: [
			{
				name: "tel-bot-youtube-downloader",
				tag: "Bot",
				desc: "Telegram bot that downloads media from YouTube.",
				url: "https://github.com/eduinlight/tel-bot-youtube-downloader",
			},
			{
				name: "gitlab-devops-helpers",
				tag: "DevOps",
				desc: "Helper tooling for GitLab CI/CD and DevOps workflows.",
				url: "https://github.com/eduinlight/gitlab-devops-helpers",
			},
			{
				name: "hono-htmx-app",
				tag: "Web",
				desc: "Web application built with Hono and htmx.",
				url: "https://github.com/eduinlight/hono-htmx-app",
			},
			{
				name: "actix_web-htmx-tera-alpinejs-tailwindcss-template",
				tag: "Rust template",
				desc: "Starter template pairing Actix Web with htmx, Tera, Alpine.js and Tailwind CSS.",
				url: "https://github.com/eduinlight/actix_web-htmx-tera-alpinejs-tailwindcss-template",
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
				name: "c-web-server",
				tag: "Systems",
				desc: "A web server written in C.",
				url: "https://github.com/eduinlight/c-web-server",
			},
			{
				name: "c-raylib-hot-reloading",
				tag: "Systems",
				desc: "Hot-reloading setup for C projects using raylib.",
				url: "https://github.com/eduinlight/c-raylib-hot-reloading",
			},
			{
				name: "cpp-boilerplate-make",
				tag: "Systems",
				desc: "C++ project boilerplate with a Make build.",
				url: "https://github.com/eduinlight/cpp-boilerplate-make",
			},
			{
				name: "battery_notifier",
				tag: "Desktop",
				desc: "Battery level notifier for the desktop.",
				url: "https://github.com/eduinlight/battery_notifier",
			},
			{
				name: "kubernetes-devspace-vite-development",
				tag: "Kubernetes",
				desc: "Kubernetes development workflow with DevSpace for a Vite app.",
				url: "https://github.com/eduinlight/kubernetes-devspace-vite-development",
			},
			{
				name: "lego-route53-auto",
				tag: "Infrastructure",
				desc: "Automated TLS certificate issuing and renewal with lego and AWS Route53.",
				url: "https://github.com/eduinlight/lego-route53-auto",
			},
			{
				name: "wireguard-server",
				tag: "Infrastructure",
				desc: "WireGuard server with an Access Control List, built on wg-easy, allowing or denying VPN users' access to specific IPs.",
				url: "https://github.com/eduinlight/wireguard-server",
			},
			{
				name: "private-public-encrypt-test",
				tag: "Security",
				desc: "Experiments with public and private key encryption.",
				url: "https://github.com/eduinlight/private-public-encrypt-test",
			},
			{
				name: "file-service-backend",
				tag: "Backend",
				desc: "A file server for my local PC — the Clojure API behind the file-service front end.",
				url: "https://github.com/eduinlight/file-service-backend",
			},
			{
				name: "file-service-frontend",
				tag: "Frontend",
				desc: "A file server for a local machine, with a ClojureScript front end served on localhost.",
				url: "https://github.com/eduinlight/file-service-frontend",
			},
			{
				name: "formValidator",
				tag: "Library",
				desc: "A validation library for JavaScript.",
				url: "https://github.com/eduinlight/formValidator",
			},
			{
				name: "my-wife-star",
				tag: "Graphics",
				desc: "Drawing a star with HTML5 canvas.",
				url: "https://github.com/eduinlight/my-wife-star",
			},
		],
	},

	background: {
		heading: {
			index: 7,
			title: "Background",
			meta: "Education · honors · references",
		},
		cards: [
			{
				kicker: "Education",
				title: "B.Sc. Computer Software Engineering",
				body: "Granma University · September 2009 – June 2014",
			},
			{
				kicker: "Honors & awards",
				title: "ACM-ICPC",
				body: "Caribbean Local Contest — 2011, 2012, 2013. Caribbean National Contest — 2011, 2012.",
			},
			{
				kicker: "References — to fill in",
				title: "",
				body: "Send two LinkedIn recommendations or client quotes — text, name and role — and they print here as pull quotes.",
				pending: true,
			},
		],
	},

	contact: {
		heading: { index: 8, title: "Contact" },
		headline: ["Let's build", "something solid"],
		lead: "Open to senior engineering and DevOps work across frontend, mobile, desktop and platform. Based in Valencia, Spain, working remotely.",
		email: "eduinlight@gmail.com",
		phone: "+34 662638746",
		showPhone: true,
		links: [
			{ label: "GitHub", value: "github.com/eduinlight" },
			{ label: "LinkedIn", value: "linkedin.com/in/eduinlight" },
		],
	},

	footer: {
		left: "Eduin Garcia — Senior Software Engineer / DevOps",
		right: "Valencia, Spain · 2026",
	},

	seo: {
		title: "Eduin Garcia",
		description:
			"Senior Software Engineer and DevOps with 10+ years building web, mobile and desktop applications and the cloud-native infrastructure they run on. Based in Valencia, Spain.",
	},
};
