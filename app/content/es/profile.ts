import type { ProfileContent } from "~/content/types";

export const profile: ProfileContent = {
	name: "Eduin Garcia",

	hero: {
		headline: ["Ingeniero de software", "senior y devops"],
		lead: "Diez años construyendo aplicaciones web, móviles y de escritorio — y la infraestructura cloud-native sobre la que funcionan. Llevo productos desde un repositorio vacío hasta una plataforma en producción, y me encargo de que siga funcionando.",
		figure: {
			placeholder: "Añade tu foto",
			ratio: "4 / 5",
			src: "/headshot.jpeg",
			alt: "Eduin Garcia",
		},
	},

	profile: {
		heading: { index: 1, title: "Perfil", meta: "Valencia, España" },
		summary:
			"Ingeniero de Software Senior con más de 10 años de experiencia construyendo aplicaciones web, móviles y de escritorio. Sólida base en stack MERN, arquitecturas cloud-native y prácticas DevOps. Capacidad demostrada para levantar plataformas desde cero, liderar iniciativas técnicas, revisar código y colaborar en equipos multidisciplinares. Me apasionan los sistemas escalables, las aplicaciones en tiempo real y el código limpio y testeable.",
		facts: [
			{ label: "Rol", value: "Ingeniero de Software Senior / DevOps" },
			{ label: "Ubicación", value: "Valencia, España · en remoto" },
			{ label: "Idiomas", value: "Español (nativo), inglés (profesional)" },
			{
				label: "Formación",
				value: "Ingeniería Informática, Universidad de Granma",
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
				remark: "Frontend, móvil, escritorio, backend, plataforma",
			},
			{
				no: "02",
				measure: "Productos en producción",
				value: "6",
				remark: "Dos levantados desde un repositorio vacío",
			},
			{
				no: "03",
				measure: "Repositorios públicos",
				value: "112",
				remark: "github.com/eduinlight",
			},
			{
				no: "04",
				measure: "Concursos ACM-ICPC",
				value: "5",
				remark: "Caribe local 2011–13, nacional 2011–12",
			},
		],
	},

	capabilities: {
		heading: { index: 2, title: "Capacidades", meta: "Cuatro prácticas" },
		items: [
			{
				index: "01",
				title: "Front ends de producto",
				body: "Aplicaciones React y Remix con renderizado en servidor, estado complejo gestionado con Redux y XState, y actualizaciones en tiempo real sobre WebSockets y server-sent events.",
			},
			{
				index: "02",
				title: "Apps móviles y de escritorio",
				body: "Una sola base de código para todas las plataformas — React Native para iOS y Android, Rust y Dioxus para escritorio y móvil, QT y QML para desarrollo nativo.",
			},
			{
				index: "03",
				title: "APIs y plataformas desde cero",
				body: "Servicios en Node.js, NestJS y Express sobre PostgreSQL, MongoDB, Redis y Elasticsearch — CQRS donde aporta valor, construido con tests desde el principio y documentado para el traspaso.",
			},
			{
				index: "04",
				title: "DevOps e infraestructura",
				body: "Pipelines GitOps y CI/CD, Docker Swarm y Kubernetes con Kustomize, Terraform sobre AWS y Proxmox, observabilidad con el stack LGTM.",
			},
		],
	},

	work: {
		heading: {
			index: 3,
			title: "Proyectos destacados",
			meta: "Seis productos · una página cada uno",
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
				title: "Desarrollador de Software Senior / DevOps",
				bullets: [
					"Desarrollé el nuevo producto Qollabi AI con el framework Remix.",
					"Creé el entorno Docker para desarrollo y los pipelines de despliegue a UAT y producción.",
					"Desarrollé y mantuve funciones AWS Lambda y la infraestructura de ActivePieces.",
					"Construí scripts de migración de datos desde Salesforce para clientes.",
					"Implementé un cliente de server-sent events usando la API LISTEN/NOTIFY de PostgreSQL.",
					"Mantuve el código Terraform y el clúster de Docker Swarm.",
					"Gestioné servicios de AWS: Route53, RDS, MQ, S3, IAM.",
					"Mantuve y amplié una SPA heredada con backend en Symfony.",
					"Introduje una arquitectura de micro-frontends en el proyecto heredado.",
					"Configuré la VPN y el túnel para el entorno de desarrollo.",
				],
			},
			{
				period: "Jun 2020 — Dic 2023",
				company: "HolaPlace",
				title: "Desarrollador de Software Senior",
				bullets: [
					"Construí la plataforma holaplace.com desde cero con el stack MERN.",
					"Desarrollé una SPA en React usando Redux, React Router, XState para el estado complejo y Socket.IO para las funcionalidades en tiempo real.",
					"Implementé los servicios de backend con NestJS y Express, integrando MongoDB, Elasticsearch, Stripe, Redis y AWS S3.",
					"Contenericé los servicios con Docker y Docker Compose; usé AWS LocalStack para desarrollo cloud en local.",
					"Apliqué TDD con Jest, cubriendo tests unitarios, de integración y end-to-end.",
					"Gestioné los repositorios con Git y GitLab; automaticé los despliegues con Terraform.",
					"Realicé revisiones de código y colaboré en un equipo multidisciplinar de 6 personas.",
				],
			},
			{
				period: "Nov 2019 — Jun 2020",
				company: "Front10",
				title: "Desarrollador de Software",
				bullets: [
					"Mantuve y amplié una librería de componentes React para aplicaciones de aerolíneas.",
					"Implementé testing y despliegue automatizados con GitLab CI/CD.",
					"Escribí tests unitarios y end-to-end con Jest y Cypress.",
					"Contribuí a la migración de JavaScript a TypeScript en toda la empresa.",
				],
			},
			{
				period: "Mar 2016 — Oct 2019",
				company: "Melkart Outsourcing & Business",
				title: "Ingeniero de Software Full Stack",
				bullets: [
					"Desarrollé múltiples aplicaciones web con el stack MERN.",
					"Entregué un proyecto completo usando Clojure y ClojureScript.",
					"Construí servicios de backend con Node.js, Express y SailsJS.",
					"Gestioné y entregué 3-4 proyectos simultáneos cumpliendo los plazos.",
				],
			},
		],
	},

	skills: {
		heading: { index: 5, title: "Tecnologías", meta: "Seis grupos" },
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
				name: "Móvil y escritorio",
				items: ["React Native", "Rust", "Dioxus", "QT", "QML", "C++", "C"],
			},
			{
				name: "Backend y datos",
				items: [
					"Node.js",
					"NestJS",
					"Express",
					"APIs REST",
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
				name: "DevOps y plataforma",
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
					"Stack LGTM",
					"Keycloak",
					"WireGuard",
					"TLS / OpenSSL",
					"BASH",
				],
			},
			{ name: "Testing", items: ["Jest", "Vitest", "Cypress", "TDD"] },
			{
				name: "Metodología",
				items: [
					"Clean Architecture",
					"Patrones de diseño",
					"Algoritmos",
					"Estructuras de datos",
					"Internacionalización",
					"Monorepos",
					"Revisiones de código",
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
		allReposLabel: "Los 112 repositorios →",
		allReposUrl: "https://github.com/eduinlight?tab=repositories",
		repos: [
			{
				name: "tel-bot-youtube-downloader",
				tag: "Bot",
				desc: "Bot de Telegram que descarga contenido de YouTube.",
				url: "https://github.com/eduinlight/tel-bot-youtube-downloader",
			},
			{
				name: "gitlab-devops-helpers",
				tag: "DevOps",
				desc: "Herramientas de apoyo para flujos de CI/CD y DevOps en GitLab.",
				url: "https://github.com/eduinlight/gitlab-devops-helpers",
			},
			{
				name: "hono-htmx-app",
				tag: "Web",
				desc: "Aplicación web construida con Hono y htmx.",
				url: "https://github.com/eduinlight/hono-htmx-app",
			},
			{
				name: "actix_web-htmx-tera-alpinejs-tailwindcss-template",
				tag: "Plantilla Rust",
				desc: "Plantilla inicial que combina Actix Web con htmx, Tera, Alpine.js y Tailwind CSS.",
				url: "https://github.com/eduinlight/actix_web-htmx-tera-alpinejs-tailwindcss-template",
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
				name: "c-web-server",
				tag: "Sistemas",
				desc: "Un servidor web escrito en C.",
				url: "https://github.com/eduinlight/c-web-server",
			},
			{
				name: "c-raylib-hot-reloading",
				tag: "Sistemas",
				desc: "Configuración de hot-reloading para proyectos en C usando raylib.",
				url: "https://github.com/eduinlight/c-raylib-hot-reloading",
			},
			{
				name: "cpp-boilerplate-make",
				tag: "Sistemas",
				desc: "Plantilla base de proyecto C++ con build en Make.",
				url: "https://github.com/eduinlight/cpp-boilerplate-make",
			},
			{
				name: "battery_notifier",
				tag: "Escritorio",
				desc: "Notificador del nivel de batería para el escritorio.",
				url: "https://github.com/eduinlight/battery_notifier",
			},
			{
				name: "kubernetes-devspace-vite-development",
				tag: "Kubernetes",
				desc: "Flujo de desarrollo en Kubernetes con DevSpace para una app Vite.",
				url: "https://github.com/eduinlight/kubernetes-devspace-vite-development",
			},
			{
				name: "lego-route53-auto",
				tag: "Infraestructura",
				desc: "Emisión y renovación automática de certificados TLS con lego y AWS Route53.",
				url: "https://github.com/eduinlight/lego-route53-auto",
			},
			{
				name: "wireguard-server",
				tag: "Infraestructura",
				desc: "Servidor WireGuard con lista de control de acceso, sobre wg-easy, que permite o deniega a los usuarios de la VPN el acceso a IPs concretas.",
				url: "https://github.com/eduinlight/wireguard-server",
			},
			{
				name: "private-public-encrypt-test",
				tag: "Seguridad",
				desc: "Experimentos con cifrado de clave pública y privada.",
				url: "https://github.com/eduinlight/private-public-encrypt-test",
			},
			{
				name: "file-service-backend",
				tag: "Backend",
				desc: "Un servidor de ficheros para mi PC local — la API en Clojure detrás de file-service.",
				url: "https://github.com/eduinlight/file-service-backend",
			},
			{
				name: "file-service-frontend",
				tag: "Frontend",
				desc: "Un servidor de ficheros para una máquina local, con front end en ClojureScript servido en localhost.",
				url: "https://github.com/eduinlight/file-service-frontend",
			},
			{
				name: "formValidator",
				tag: "Librería",
				desc: "Una librería de validación para JavaScript.",
				url: "https://github.com/eduinlight/formValidator",
			},
			{
				name: "my-wife-star",
				tag: "Gráficos",
				desc: "Dibujando una estrella con canvas de HTML5.",
				url: "https://github.com/eduinlight/my-wife-star",
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
				body: "Concurso Local del Caribe — 2011, 2012, 2013. Concurso Nacional del Caribe — 2011, 2012.",
			},
			{
				kicker: "Referencias — pendiente",
				title: "",
				body: "Envía dos recomendaciones de LinkedIn o citas de clientes — texto, nombre y cargo — y aparecerán aquí como testimonios.",
				pending: true,
			},
		],
	},

	contact: {
		heading: { index: 8, title: "Contacto" },
		headline: ["Construyamos algo", "sólido"],
		lead: "Disponible para trabajos senior de ingeniería y DevOps en frontend, móvil, escritorio y plataforma. Con base en Valencia, España, trabajando en remoto.",
		email: "eduinlight@gmail.com",
		phone: "+34 662638746",
		showPhone: true,
		links: [
			{ label: "GitHub", value: "github.com/eduinlight" },
			{ label: "LinkedIn", value: "linkedin.com/in/eduinlight" },
		],
	},

	footer: {
		left: "Eduin Garcia — Ingeniero de Software Senior / DevOps",
		right: "Valencia, España · 2026",
	},

	seo: {
		title: "Eduin Garcia",
		description:
			"Ingeniero de Software Senior y DevOps con más de 10 años construyendo aplicaciones web, móviles y de escritorio y la infraestructura cloud-native sobre la que funcionan. Con base en Valencia, España.",
	},
};
