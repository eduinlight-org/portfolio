import { bold, mono, type Project, txt } from "~/content/types";

export const holaplace: Project = {
	slug: "holaplace",
	name: "HolaPlace",
	kicker: "HolaPlace · Desarrollador de Software Senior · Jun 2020 – Dic 2023",
	headline: ["Un marketplace de espacios", "de doble cara, desde cero"],
	lead: "Un marketplace para reservar espacios de eventos y los servicios de proveedores que los acompañan — publicación y alta de espacios, calendarios de disponibilidad, flujo de solicitud y negociación, chat entre huéspedes y anfitriones, reseñas, facturación y contratos. Lo difícil fue el dinero — depósitos, retenciones, cargos divididos, liquidaciones, reclamaciones y reembolsos con Stripe Connect — y mantener los calendarios de los anfitriones sincronizados en ambos sentidos por iCal.",
	link: { label: "holaplace.com", href: "https://holaplace.com" },
	linkAsButton: true,

	hero: {
		placeholder: "Añade una captura de HolaPlace",
		src: "/work/holaplace-hero.webp",
		alt: "Búsqueda de espacios en HolaPlace",
		ratio: "16 / 9",
	},

	sheet: {
		title: "HolaPlace — escala de la plataforma",
		badges: ["4 repositorios", "Hoja 01"],
		note: "~228k líneas de TypeScript repartidas en cuatro repositorios, más ~3,3k líneas de Terraform en tres entornos.",
		stats: [
			{ value: "~228k", label: "Líneas de TypeScript" },
			{ value: "399", label: "Endpoints REST" },
			{ value: "55", label: "Modelos de Mongoose" },
			{ value: "152", label: "Migraciones" },
			{ value: "42", label: "Módulos de dominio de la API" },
			{ value: "7", label: "Gateways de Socket.IO" },
			{ value: "4", label: "Repositorios" },
			{ value: "3", label: "Entornos de AWS" },
		],
	},

	sections: [
		{
			index: 1,
			title: "Mi papel",
			meta: "Equipo de seis personas",
			kind: "bullets",
			items: [
				[
					bold("Uno de seis, desde el repositorio vacío"),
					txt(
						" — estuve en la plataforma desde el primer commit hasta el último, entre la API, la SPA y la infraestructura.",
					),
				],
				[
					bold("La SPA en React"),
					txt(
						" — Redux y XState para los flujos de reserva y pago, TanStack Query para el estado de servidor, Socket.IO para chat, notificaciones y sincronización de calendarios.",
					),
				],
				[
					bold("El dinero"),
					txt(
						" — el flujo de Stripe Connect de principio a fin: depósitos, retenciones, cargos divididos, transferencias, liquidaciones, resolución de reclamaciones y reembolsos, con procesadores de webhooks separados para plataforma y connect.",
					),
				],
				[
					bold("Los servicios de backend"),
					txt(
						" — módulos de NestJS y Express sobre MongoDB, Elasticsearch, Redis y S3, trabajados con tests desde el principio con Jest en las suites unitarias, de integración y end-to-end.",
					),
				],
				[
					bold("La entrega"),
					txt(
						" — Docker y Docker Compose en local con LocalStack sustituyendo a AWS, pipelines de GitLab por repositorio y despliegues con Terraform en dev, stage y producción.",
					),
				],
			],
		},
		{
			index: 2,
			title: "Arquitectura",
			meta: "Polyrepo · NestJS modular",
			kind: "bullets",
			items: [
				[
					bold("Polyrepo"),
					txt(" — 4 repositorios independientes en GitLab ("),
					mono("api"),
					txt(", "),
					mono("hola-place-front"),
					txt(", "),
					mono("holaplace-scheduler"),
					txt(", "),
					mono("holaplace-infra"),
					txt(
						") más un frontend de administración aparte, cada uno con su propio pipeline e imagen Docker.",
					),
				],
				[
					bold("Monolito modular en NestJS"),
					txt(" — 42 módulos de funcionalidad, un módulo compartido "),
					mono("data_manager"),
					txt(
						" que concentra todos los modelos y repositorios de Mongoose, y un módulo ",
					),
					mono("api"),
					txt(
						" dedicado que agrupa todos los controladores HTTP, guards e interceptores.",
					),
				],
				[
					bold("Planificación externalizada"),
					txt(
						" — un servicio NestJS independiente gestiona las definiciones de cron y llama de vuelta a la API por HTTP firmado, con trazas de auditoría por ejecución en DynamoDB, de modo que ningún estado de cron vive dentro de la API.",
					),
				],
				[
					bold("Capa de tiempo real"),
					txt(
						" — 7 gateways de Socket.IO (chat, notificaciones, pagos, sincronización de calendario, CRUD, presencia) distribuidos entre instancias de la API mediante un adaptador de Redis.",
					),
				],
				[
					bold("Cadena de guards por recurso"),
					txt(" — autenticación JWT/Passport → guards de existencia ("),
					mono("exist_booking"),
					txt(", "),
					mono("exist_venue"),
					txt("…) → guards de propiedad ("),
					mono("is_host_booking"),
					txt(", "),
					mono("is_supplier_service"),
					txt(
						"…) → interceptores de respuesta a nivel de campo que filtran qué puede ver cada rol.",
					),
				],
				[
					bold("Borde SEO consciente de los bots"),
					txt(
						" — Traefik enruta los user-agents de rastreadores hacia un servicio de prerenderizado en Bun que renderiza la SPA con Chromium headless y cachea el HTML en Redis.",
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
					label: "Base de datos",
					value:
						"MongoDB 5 (replica set), Mongoose 6 + mongoose-autopopulate, mongo-migrate-ts (152 migraciones)",
				},
				{
					label: "Almacenes secundarios",
					value:
						"DynamoDB (registro de auditoría de consentimiento de cookies), Redis 7 (ioredis, cache-manager-redis-store)",
				},
				{
					label: "Colas",
					value:
						"Bull 4 sobre Redis — colas construidas por factoría con suscriptores de eventos",
				},
				{
					label: "Tiempo real",
					value: "Socket.IO (@nestjs/websockets) + @socket.io/redis-adapter",
				},
				{
					label: "Autenticación",
					value:
						"Passport + passport-jwt, @nestjs/jwt, bcrypt, login social con Facebook y Google",
				},
				{
					label: "Validación",
					value:
						"DTOs con class-validator / class-transformer, Joi para el esquema de variables de entorno",
				},
				{
					label: "Pagos",
					value:
						"Stripe 8 Connect — cuentas conectadas, mapeo de personas para KYC, payment intents, liquidaciones manuales, transferencias y reversiones, reclamaciones de depósito y listeners de webhook duales (plataforma y connect)",
				},
				{
					label: "Correo / CRM",
					value:
						"Brevo (antes Sendinblue) + plantillas EJS, deals de Pipedrive, entrada de bugs en ClickUp, notificaciones con la Web API de Slack",
				},
				{
					label: "Mensajería",
					value:
						"Servicios de WhatsApp y SMS con catálogos de mensajes por dominio",
				},
				{
					label: "Almacenamiento / medios",
					value:
						"AWS S3, procesamiento de imágenes con Sharp y Jimp, express-fileupload, JSZip",
				},
				{
					label: "Documentos",
					value:
						"Puppeteer (PDFs de facturas y contratos desde vistas EJS), csv-writer, ical-generator + node-ical",
				},
				{
					label: "Geo",
					value:
						"Mapbox, geolib, geo-tz, datos semilla de ciudades, provincias y países",
				},
				{
					label: "Planificación",
					value:
						"@nestjs/schedule para tareas en proceso; tarea de generación de sitemap que publica en S3",
				},
				{
					label: "Documentación de API",
					value: "@nestjs/swagger → OpenAPI 3, Compodoc",
				},
				{
					label: "Observabilidad",
					value:
						"Winston (nest-winston) con transports a Loki y webhook de Slack, Morgan con rotación de ficheros, prom-client vía @willsoto/nestjs-prometheus, profiler de heap con OpenProfiling",
				},
				{
					label: "Seguridad",
					value:
						"Helmet, ip-range-check (lista blanca de CIDR para webhooks), cookie-parser",
				},
				{
					label: "CLI",
					value:
						"nestjs-command — seeders y scripts de mantenimiento del data manager (anonimización, backfills, migración a S3, liquidaciones)",
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
			meta: "React 18 · workspace pnpm",
			kind: "rows",
			rows: [
				{
					label: "Núcleo",
					value:
						"React 18, TypeScript 4.7, Webpack 5 + Babel 7 (workspace pnpm sobre Node 22)",
				},
				{
					label: "Enrutado",
					value: "React Router 5 — 22 bundles de ruta con carga perezosa",
				},
				{
					label: "Estilos",
					value:
						"Tailwind CSS 3 + PostCSS y Sass, MUI 4 (core, lab, pickers) + @mui/base",
				},
				{ label: "Estado de servidor", value: "TanStack Query 4 (+ devtools)" },
				{
					label: "Estado de cliente",
					value: "Redux 4 + React Redux 8 + Redux Saga, Immer",
				},
				{
					label: "Máquinas de estado",
					value: "XState 4 + @xstate/react (flujos de reserva y pago)",
				},
				{
					label: "Formularios",
					value:
						"React Hook Form 7, @eduinlight/input-validator, validator, react-text-mask",
				},
				{
					label: "Pagos",
					value: "Stripe Elements (@stripe/react-stripe-js)",
				},
				{
					label: "Mapas",
					value:
						"Leaflet + React Leaflet, Mapbox GL + mapbox-gl-leaflet, autocompletado de Google Places",
				},
				{ label: "Tiempo real", value: "socket.io-client" },
				{
					label: "Fechas",
					value: "Day.js (+ adaptador de pickers @date-io/dayjs)",
				},
				{
					label: "UI/UX",
					value:
						"Notistack, Downshift, react-beautiful-dnd, react-virtuoso, carruseles Slick/Slideshow, react-avatar-edit, selector de emojis, ScrollReveal, iconos de Lucide",
				},
				{
					label: "SEO / meta",
					value:
						"react-helmet-async, prerenderizado con react-snap, service worker con workbox",
				},
				{
					label: "Testing",
					value: "Jest 29 + Testing Library + jsdom, Cypress 12 end-to-end",
				},
				{
					label: "Build / despliegue",
					value:
						"Plugins de compresión Brotli y gzip, webpack-s3-plugin (assets estáticos → S3/CloudFront), servido con Nginx",
				},
			],
		},
		{
			index: 5,
			title: "Servicios satélite",
			meta: "Prerender SEO · planificador",
			kind: "cards",
			columns: 2,
			titleStyle: "mono",
			items: [
				{
					title: "apps/seo",
					body: [
						txt("Bun 1.x + Hono 4, renderizando con "),
						mono("puppeteer-core"),
						txt(
							" sobre el Chromium del sistema, Redis 7 cacheando el HTML renderizado con un endpoint de invalidación y configuración validada con Zod. Una regla de Traefik v3 ",
						),
						mono("HeaderRegexp(User-Agent, …)"),
						txt(
							" enruta aquí a unos 30 rastreadores y bots de IA; el resto va a la SPA, con los assets estáticos servidos por proxy.",
						),
					],
				},
				{
					title: "holaplace-scheduler",
					body: [
						txt(
							"NestJS 8 sobre Node 16 con Croner 5 — un registro de tareas con expresiones cron declarativas, definiciones de tarea y registros de ejecución en DynamoDB, llamadas de vuelta a la API con Axios + ",
						),
						mono("axios-retry"),
						txt(
							" a través de un servicio de tokens, entorno validado con Joi más AWS Secrets Manager, y notificación de errores a Slack tras un endpoint de salud.",
						),
					],
				},
			],
		},
		{
			index: 6,
			title: "Infraestructura y DevOps",
			meta: "Terraform · AWS eu-west-3",
			kind: "bullets",
			items: [
				[
					bold("Terraform ≥ 1.1.4"),
					txt(", proveedor de AWS 4.29, región "),
					mono("eu-west-3"),
					txt(", estado en un backend HTTP alojado en GitLab, tres entornos ("),
					mono("dev"),
					txt(" / "),
					mono("stage"),
					txt(" / "),
					mono("prod"),
					txt(") compuestos desde un único módulo reutilizable "),
					mono("environment"),
					txt(" más pequeños módulos "),
					mono("components"),
					txt("."),
				],
				[
					bold("Auto Scaling Groups de EC2 por servicio"),
					txt(
						" (front, api, admin, scheduler, db, elk) construidos desde launch templates y scripts de arranque ",
					),
					mono("user_data"),
					txt(" que descargan un "),
					mono("docker-compose-<servicio>.yml"),
					txt(
						" desde S3 y arrancan la imagen de ECR; hooks de ciclo de vida para el drenado ordenado y despliegues por instance refresh.",
					),
				],
				[
					bold("Redes"),
					txt(
						" — ALBs públicos e internos, 9 target groups y reglas de listener, certificados ACM con validación DNS en Route 53, una zona pública de Route 53 más ",
					),
					mono("holaplace.internal"),
					txt(", un web ACL de WAFv2 y 8 security groups."),
				],
				[
					bold("CloudFront"),
					txt(
						" para los assets estáticos con política de caché larga y Lambda@Edge (viewer-request y origin-request) que enrutaba el tráfico de bots a Prerender.io — después sustituido por el prerenderizado autoalojado con Bun y Traefik.",
					),
				],
				[
					bold("Servicios de datos gestionados"),
					txt(
						" — ElastiCache Redis, 3 tablas de DynamoDB (tareas del planificador, eventos de ejecución, registro de consentimiento de cookies), EFS montado por las instancias de la API, buckets de S3 (subidas, assets estáticos, sitemaps, volcados de mongo, logs de acceso del ALB) y SSM Parameter Store para la configuración en ejecución.",
					),
				],
				[
					bold("MongoDB autoalojado"),
					txt(
						" en EC2 con un volumen de datos adjunto, una política de ciclo de vida de snapshots con DLM y ",
					),
					mono("mongodump"),
					txt(" nocturno a S3; "),
					bold("ELK"),
					txt(
						" (Elasticsearch / Logstash / Kibana) en su propia instancia junto al agente de CloudWatch, con Grafana Loki y métricas de Prometheus desde la API.",
					),
				],
				[
					bold("GitLab CI/CD por repositorio"),
					txt(" — test ("),
					mono("tsc"),
					txt(
						" y lint) → build Docker multi-etapa con build args por entorno → publicación en un ECR privado → despliegue terminando o refrescando las instancias del ASG, con scripts separados para ejecutar las migraciones de la API; un GitLab Runner autoalojado en Lightsail y el registro son sus propios stacks de Terraform.",
					),
				],
				[
					bold("Desarrollo local"),
					txt(
						" — entornos con Docker Compose con un replica set de Mongo restaurado automáticamente desde un volcado en S3, Mongo Express, Redis, LocalStack (mocks de AWS aprovisionados con Terraform), dos listeners de webhook de la CLI de Stripe y Traefik v3 en el repositorio del frontend para reproducir la separación SPA/SEO de producción.",
					),
				],
			],
		},
		{
			index: 7,
			title: "Decisiones técnicas destacadas",
			meta: "Ocho decisiones",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "Flujo de dinero con Stripe Connect",
					body: "El ciclo completo del marketplace: retenciones de depósito, cargos divididos, transferencias y reversiones, liquidaciones manuales, resolución de reclamaciones de depósito con su propio servicio de dinero y procesadores de webhook separados para plataforma y connect.",
				},
				{
					title: "Cron externalizado",
					body: "El servicio de planificación mantiene cada trabajo recurrente como una entrada de registro, invoca la API mediante callbacks autenticados y escribe un histórico auditable de ejecuciones en DynamoDB, de modo que las instancias de la API permanecen sin estado y escalan horizontalmente.",
				},
				{
					title: "Separación del renderizado en el proxy según el bot",
					body: "El emparejado de user-agent en Traefik envía los rastreadores a un renderizador Bun + Hono + Puppeteer con caché de HTML en Redis y API de invalidación, sustituyendo una configuración de pago con Lambda@Edge y Prerender.io.",
				},
				{
					title: "Sincronización de calendario bidireccional",
					body: "Generación de iCal más ingesta con node-ical/CalDAV, con un gateway de tiempo real dedicado que envía los cambios de disponibilidad a los clientes conectados.",
				},
				{
					title: "Modelo de traducción en tiempo de ejecución",
					body: "Un interceptor de respuesta y un decorador @Lang() localizan los payloads por petición sin duplicar endpoints.",
				},
				{
					title: "Modelado de respuestas a nivel de campo",
					body: "Una familia de interceptores pick-*/omit-fields proyecta las respuestas de cada entidad según el rol y el contexto, manteniendo las vistas de anfitrión, huésped y administración sobre un mismo controlador.",
				},
				{
					title: "Infraestructura inmutable sobre EC2 puro",
					body: "Sin ECS ni EKS — los ASG arrancan desde ficheros compose alojados en S3 y los despliegues son instance refreshes, logrando un despliegue al estilo contenedor sobre una infraestructura de bajo coste.",
				},
				{
					title: "Suite de scripts del data manager",
					body: "Comandos de mantenimiento puntuales (anonimización, backfills de zona horaria y geolocalización, migración de subidas a S3, liquidaciones de saldo) versionados junto al histórico de 152 migraciones.",
				},
			],
		},
	],

	gallery: [
		{
			placeholder: "Segunda captura",
			ratio: "4 / 3",
			src: "/work/holaplace-venue.webp",
			alt: "Página de detalle de un espacio en HolaPlace",
		},
		{
			placeholder: "Tercera captura",
			ratio: "4 / 3",
			src: "/work/holaplace-mobile.webp",
			alt: "Página de espacio de HolaPlace en móvil",
		},
	],

	card: {
		kicker: "holaplace.com · 2020–2023",
		title: "HolaPlace",
		body: "Marketplace de espacios de doble cara construido desde cero — 399 endpoints, pagos divididos con Stripe Connect, sincronización iCal y 7 gateways de tiempo real.",
		meta: "NestJS · React · Stripe Connect",
		placeholder: "Captura de HolaPlace",
		src: "/work/holaplace-card.webp",
		alt: "HolaPlace",
	},

	seo: {
		title: "HolaPlace",
		description:
			"Un marketplace de espacios de doble cara construido desde cero — 399 endpoints REST sobre NestJS y MongoDB, pagos divididos con Stripe Connect y siete gateways de tiempo real.",
	},
};
