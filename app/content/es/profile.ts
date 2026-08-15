import type { ProfileContent } from "~/content/types";

export const profile: ProfileContent = {
	name: "Eduin Garcia",

	hero: {
		headline: ["Ingeniero senior de", "software y DevOps"],
		lead: "Una década construyendo aplicaciones web, móviles y de escritorio — y la infraestructura cloud-native sobre la que funcionan. Llevo productos desde un repositorio vacío hasta producción, y los mantengo ahí.",
		figure: {
			placeholder: "Eduin Garcia — retrato",
			ratio: "4 / 5",
			src: "/headshot.jpeg",
			alt: "Eduin Garcia",
		},
	},

	profile: {
		heading: { index: 1, title: "Perfil", meta: "Valencia, España" },
		summary:
			"Construyo productos de principio a fin — clientes en React y Rust, servicios en Node y NestJS sobre PostgreSQL y MongoDB, y el Kubernetes, el Terraform y el CI/CD sobre los que funcionan. Cuatro de ellos fueron de un repositorio vacío a producción, uno en solitario como cofundador. Otro era una plataforma heredada de 268k líneas que llevé a una arquitectura de micro-frontends sin parar las entregas.",
		facts: [
			{
				label: "Rol",
				value: "Ingeniero de Software Senior · DevOps y Plataforma",
			},
			{ label: "Ubicación", value: "Valencia, España · en remoto" },
			{
				label: "Idiomas",
				value: "Español (nativo), inglés (competencia profesional)",
			},
			{
				label: "Formación",
				value: "Ingeniería Informática — Universidad de Granma",
			},
		],
	},

	record: {
		sheet: {
			title: "Eduin Garcia — historial técnico",
			badges: ["Hoja 01", "2016 – 2026"],
			note: "Datos actualizados a 2026. Detalle por puesto en la sección 04.",
		},
		measures: [
			{
				no: "01",
				measure: "Años construyendo software",
				value: "10+",
				remark: "Frontend, móvil, escritorio, backend, infraestructura",
			},
			{
				no: "02",
				measure: "Productos entregados",
				value: "6",
				remark: "Cuatro levantados desde un repositorio vacío",
			},
			{
				no: "03",
				measure: "Mayor plataforma migrada",
				value: "268k",
				remark: "Líneas de PHP y JavaScript — Qollabi",
			},
			{
				no: "04",
				measure: "Entornos cloud gestionados",
				value: "3",
				remark: "AWS dev, stage y prod — HolaPlace",
			},
		],
	},

	capabilities: {
		heading: { index: 2, title: "Capacidades", meta: "Cuatro prácticas" },
		items: [
			{
				index: "01",
				title: "Frontends de producto",
				body: "Aplicaciones React, React Router 7 y Remix con renderizado en servidor, estado complejo en Redux y XState, y actualizaciones en tiempo real sobre WebSockets y Server-Sent Events.",
			},
			{
				index: "02",
				title: "Apps móviles y de escritorio",
				body: "Bases de código compartidas en lugar de una por plataforma — React Native para iOS y Android, Rust y Dioxus para escritorio y móvil desde un solo árbol de fuentes, Qt y QML para escritorio nativo.",
			},
			{
				index: "03",
				title: "APIs y plataformas desde cero",
				body: "Servicios en Node.js, NestJS y Express sobre PostgreSQL, MongoDB, Redis y Elasticsearch — CQRS donde aporta valor, construido con tests desde el principio y documentado para el traspaso.",
			},
			{
				index: "04",
				title: "DevOps e infraestructura",
				body: "Pipelines GitOps y CI/CD, Docker Swarm y Kubernetes con Kustomize, Terraform sobre AWS y Proxmox, observabilidad con Grafana, Loki, Tempo y Prometheus.",
			},
		],
	},

	work: {
		heading: {
			index: 3,
			title: "Proyectos destacados",
			meta: "Seis casos de estudio · 2018 – 2026",
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
		heading: { index: 4, title: "Experiencia", meta: "2016 – 2026" },
		roles: [
			{
				period: "Ene 2024 — Abr 2026",
				company: "Qollabi",
				title: "Desarrollador de Software Senior e Ingeniero DevOps",
				bullets: [
					"Construí Qollabi 2.0, la reescritura íntegra de la plataforma en TypeScript — Remix y Bun workspaces, CQRS y row-level security de PostgreSQL para la multi-tenencia en siete desplegables.",
					"Introduje una arquitectura de micro-frontends en la plataforma heredada — un remote de Module Federation en React 18 consumido en tiempo de ejecución por el host de React 16, para que ambas bases de código pudieran publicarse por separado.",
					"Mantuve y amplié la plataforma heredada: 268k líneas de PHP tras una API GraphQL, con una SPA de React 16 encima.",
					"Construí un cliente de Server-Sent Events sobre LISTEN/NOTIFY de PostgreSQL, para que las apps reciban actualizaciones sin añadir un broker.",
					"Construí el entorno de desarrollo basado en Docker y los pipelines de despliegue a UAT y producción, incluidos entornos efímeros por rama con su propia base de datos y su propio realm de Keycloak.",
					"Mantuve el código Terraform y el clúster de Docker Swarm, gestioné la infraestructura de AWS — Route 53, RDS, Amazon MQ, S3 e IAM — y configuré la VPN y el túnel inverso usados para el acceso de desarrollo.",
					"Desarrollé funciones AWS Lambda y la infraestructura de automatización de Activepieces, y escribí los scripts de migración de datos desde Salesforce usados para dar de alta a clientes.",
				],
			},
			{
				period: "Jun 2020 — Dic 2023",
				company: "HolaPlace",
				title: "Desarrollador de Software Senior",
				bullets: [
					"Construí holaplace.com desde cero con un equipo de seis personas — 399 endpoints REST sobre NestJS y MongoDB, siete gateways de Socket.IO y tres entornos de AWS en Terraform.",
					"Desarrollé la SPA en React — Redux y XState para los flujos de reserva y pago, TanStack Query para el estado de servidor, Socket.IO para chat, notificaciones y sincronización de calendarios.",
					"Implementé el flujo de dinero de Stripe Connect de principio a fin: depósitos, retenciones, cargos divididos, transferencias, liquidaciones, reclamaciones y reembolsos, con procesadores de webhooks separados para plataforma y connect.",
					"Construí los servicios de backend sobre NestJS y Express con MongoDB, Elasticsearch, Redis y AWS S3.",
					"Contenericé el stack con Docker y Docker Compose, con LocalStack sustituyendo a AWS en local.",
					"Trabajé con tests desde el principio usando Jest en las suites unitarias, de integración y end-to-end.",
					"Automaticé los despliegues con Terraform en dev, stage y producción, y revisé código de todo el equipo.",
				],
			},
			{
				period: "Nov 2019 — Jun 2020",
				company: "Front10",
				title: "Desarrollador de Software",
				bullets: [
					"Mantuve y amplié una librería de componentes React usada en aplicaciones de aerolíneas.",
					"Automaticé los tests y el despliegue con GitLab CI/CD.",
					"Escribí tests unitarios y end-to-end con Jest y Cypress.",
					"Contribuí a la migración de JavaScript a TypeScript en toda la empresa.",
				],
			},
			{
				period: "Mar 2016 — Oct 2019",
				company: "Melkart Outsourcing & Business",
				title: "Ingeniero de Software Full-stack",
				bullets: [
					"Construí y entregué aplicaciones web sobre el stack MERN para una cartera rotativa de clientes.",
					"Entregué un proyecto full-stack en Clojure y ClojureScript.",
					"Construí servicios de backend con Node.js, Express y Sails.js.",
					"Llevé de tres a cuatro proyectos de cliente en paralelo.",
				],
			},
		],
	},

	skills: {
		heading: { index: 5, title: "Competencias", meta: "Siete grupos" },
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
				name: "Móvil y escritorio",
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
					"APIs REST",
					"GraphQL",
					"WebSockets",
					"CQRS",
					"Stripe Connect",
				],
			},
			{
				name: "Datos y mensajería",
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
				name: "DevOps y plataforma",
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
				name: "Arquitectura y práctica",
				items: [
					"Clean Architecture",
					"Patrones de diseño",
					"Monorepos",
					"Internacionalización",
					"Agile / Scrum",
				],
			},
		],
	},

	openSource: {
		heading: {
			index: 6,
			title: "Código abierto",
			meta: "github.com/eduinlight",
		},
		allReposLabel: "Más en GitHub →",
		allReposUrl: "https://github.com/eduinlight?tab=repositories",
		repos: [
			{
				name: "wireguard-server",
				tag: "Infraestructura",
				desc: "Servidor WireGuard sobre wg-easy con lista de control de acceso, que permite o deniega a los usuarios de la VPN el acceso a IPs concretas.",
				url: "https://github.com/eduinlight/wireguard-server",
			},
			{
				name: "lego-route53-auto",
				tag: "Infraestructura",
				desc: "Emisión y renovación automática de certificados TLS con lego y AWS Route 53.",
				url: "https://github.com/eduinlight/lego-route53-auto",
			},
			{
				name: "kubernetes-devspace-vite-development",
				tag: "Infraestructura",
				desc: "Flujo de desarrollo en Kubernetes con DevSpace para una aplicación Vite.",
				url: "https://github.com/eduinlight/kubernetes-devspace-vite-development",
			},
			{
				name: "gitlab-devops-helpers",
				tag: "Herramientas",
				desc: "Herramientas de apoyo para pipelines de CI/CD en GitLab.",
				url: "https://github.com/eduinlight/gitlab-devops-helpers",
			},
			{
				name: "c-web-server",
				tag: "Sistemas",
				desc: "Servidor web escrito en C.",
				url: "https://github.com/eduinlight/c-web-server",
			},
			{
				name: "c-raylib-hot-reloading",
				tag: "Sistemas",
				desc: "Configuración de hot-reloading para proyectos en C usando raylib.",
				url: "https://github.com/eduinlight/c-raylib-hot-reloading",
			},
			{
				name: "event-driven-nest",
				tag: "Backend",
				desc: "Arquitectura orientada a eventos con NestJS.",
				url: "https://github.com/eduinlight/event-driven-nest",
			},
			{
				name: "kafka-poc",
				tag: "Backend",
				desc: "Prueba de concepto de mensajería con Apache Kafka.",
				url: "https://github.com/eduinlight/kafka-poc",
			},
			{
				name: "actix_web-htmx-tera-alpinejs-tailwindcss-template",
				tag: "Web",
				desc: "Plantilla inicial que combina Actix Web con htmx, Tera, Alpine.js y Tailwind CSS.",
				url: "https://github.com/eduinlight/actix_web-htmx-tera-alpinejs-tailwindcss-template",
			},
			{
				name: "battery_notifier",
				tag: "Escritorio",
				desc: "Notificador del nivel de batería para escritorios Linux.",
				url: "https://github.com/eduinlight/battery_notifier",
			},
		],
	},

	background: {
		heading: {
			index: 7,
			title: "Trayectoria",
			meta: "Formación · premios · referencias",
		},
		cards: [
			{
				kicker: "Formación",
				title: "Ingeniería Informática",
				body: "Universidad de Granma · septiembre 2009 – junio 2014",
			},
			{
				kicker: "Premios y reconocimientos",
				title: "ACM-ICPC",
				body: "Concurso Local del Caribe ICPC — 2011, 2012, 2013. Concurso Nacional de Cuba — 2011, 2012.",
			},
			{
				kicker: "Referencias",
				title: "",
				body: "Disponibles a petición.",
			},
		],
	},

	contact: {
		heading: { index: 8, title: "Contacto" },
		headline: ["Construyamos algo", "sólido"],
		lead: "Disponible para puestos senior de ingeniería y DevOps en frontend, móvil, escritorio e ingeniería de plataforma. Con base en Valencia, España — en remoto en husos horarios europeos, presencial en Valencia.",
		email: "eduinlight@gmail.com",
		phone: "+34 662638746",
		showPhone: true,
		links: [
			{ label: "GitHub", value: "github.com/eduinlight" },
			{ label: "LinkedIn", value: "linkedin.com/in/eduinlight" },
		],
	},

	footer: {
		left: "Eduin Garcia — Ingeniero de Software Senior · DevOps y Plataforma",
		right: "Valencia, España · 2026",
	},

	seo: {
		title: "Eduin Garcia — Ingeniero senior de software y DevOps",
		description:
			"Ingeniero senior de software y DevOps en Valencia, España. Más de 10 años construyendo productos web, móviles y de escritorio y su infraestructura.",
	},
};
