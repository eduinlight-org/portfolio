import { bold, em, mono, type Project, txt } from "~/content/types";

export const qollabiAi: Project = {
	slug: "qollabi-ai",
	name: "Qollabi 2.0",
	kicker:
		"Qollabi · Desarrollador de Software Senior / DevOps · Ene 2024 – Abr 2026",
	headline: ["Qollabi 2.0 — la", "reescritura desde cero"],
	lead: [
		txt(
			"SaaS B2B multi-tenant para gestión de partners y canal — espacios de trabajo, entidades de partner y cliente, oportunidades, métricas clave (OKR), campañas con editor visual de correo, listas inteligentes, espacios compartidos con partners, importación CSV y un sistema de taxonomías y atributos. Una reescritura íntegra en TypeScript de la plataforma heredada en PHP/React, desplegada bajo el nombre interno de proyecto ",
		),
		mono("qollabi-ai"),
		txt("."),
	],
	link: { label: "qollabi.com", href: "https://qollabi.com" },
	linkAsButton: true,

	hero: {
		placeholder: "Añade una captura de Qollabi 2.0",
		ratio: "16 / 9",
	},

	sheet: {
		title: "Qollabi 2.0 — escala de la plataforma",
		badges: ["Bun workspaces", "Hoja 01"],
		stats: [
			{ value: "~205k", label: "Líneas de TypeScript" },
			{ value: "7 + 26", label: "Apps y paquetes compartidos" },
			{ value: "77", label: "Tablas de PostgreSQL" },
			{ value: "64", label: "Migraciones" },
			{ value: "163", label: "Manejadores de comandos" },
			{ value: "545", label: "Módulos de ruta" },
			{ value: "81", label: "Componentes del sistema de diseño" },
			{ value: "19", label: "Trabajos en segundo plano" },
		],
	},

	sections: [
		{
			index: 1,
			title: "Mi trabajo",
			meta: "Producto · pipelines · cloud",
			kind: "bullets",
			items: [
				"Desarrollé el nuevo producto Qollabi AI con el framework Remix.",
				"Creé el entorno Docker para desarrollo y los pipelines de despliegue a UAT y producción.",
				"Desarrollé y mantuve funciones AWS Lambda y la infraestructura de ActivePieces.",
				"Implementé un cliente de server-sent events usando la API LISTEN/NOTIFY de PostgreSQL.",
				"Mantuve el código Terraform y el clúster de Docker Swarm.",
				"Gestioné servicios de AWS: Route53, RDS, MQ, S3, IAM.",
				"Construí scripts de migración de datos desde Salesforce para clientes.",
				"Configuré la VPN y el túnel para el entorno de desarrollo.",
			],
		},
		{
			index: 2,
			title: "Arquitectura",
			meta: "Bloom · CQRS · tenancy con RLS",
			kind: "bullets",
			items: [
				[
					bold("Monorepo con Bun workspaces"),
					txt(
						" — TypeScript de extremo a extremo sin paso de compilación entre paquetes; las apps importan la lógica de backend directamente como dependencia del workspace en lugar de hacerlo por HTTP.",
					),
				],
				[
					bold("«Bloom» — un framework de aplicación propio"),
					txt(" — un "),
					mono("Kernel"),
					txt(
						" con ciclo de vida de plugins en build y boot, contenedor de inyección de dependencias tipado, esquemas de entorno por plugin validados con Zod y resolución recursiva de dependencias entre plugins; cada capacidad (CQRS, colas, KV, autenticación, asistentes, emisor de eventos) se distribuye como un plugin de Bloom.",
					),
				],
				[
					bold("CQRS y eventos de dominio"),
					txt(" — primitivas "),
					mono("Command"),
					txt(" / "),
					mono("CommandHandler"),
					txt(" / "),
					mono("DomainEvent"),
					txt(" con un sistema extensible de metadatos "),
					em("stamp"),
					txt(" ("),
					mono("eventId"),
					txt(", "),
					mono("aggregateId"),
					txt(", "),
					mono("occurredOn"),
					txt(
						", versionado) y un registrador de eventos que solo los despacha una vez que el comando ha confirmado, de modo que las peticiones fallidas nunca provocan efectos secundarios.",
					),
				],
				[
					bold("Multi-tenancy mediante Row-Level Security de PostgreSQL"),
					txt(
						" — un middleware de Hono abre una conexión del pool, inicia una transacción, fija ",
					),
					mono("SET LOCAL ROLE tenant_user"),
					txt(" y "),
					mono("app.current_workspace_id"),
					txt(" a partir del JWT, y ancla la transacción en "),
					mono("AsyncLocalStorage"),
					txt(
						" para que toda llamada a repositorio dentro de la petición quede acotada al tenant automáticamente; existe un middleware separado sin aislamiento únicamente para el panel de administración entre espacios de trabajo.",
					),
				],
				[
					bold("El backend como librería"),
					txt(" — "),
					mono("@qollabi/backend"),
					txt(
						" no expone ninguna API HTTP propia; las apps Remix, el servicio de webhooks y el worker lo montan y despachan comandos y consultas en proceso.",
					),
				],
				[
					bold("Postgres como única dependencia de infraestructura"),
					txt(
						" — almacén relacional, cola de trabajos (Graphile Worker), almacén KV (Keyv) y pub/sub (un emisor ",
					),
					mono("LISTEN"),
					txt("/"),
					mono("NOTIFY"),
					txt(" con reconexión) corren todos sobre la misma base de datos."),
				],
			],
		},
		{
			index: 3,
			title: "Apps del monorepo",
			meta: "Siete desplegables",
			kind: "nameDesc",
			items: [
				{
					name: "shelf",
					desc: "App Remix SPA/SSR de cara al cliente para partnerships, oportunidades y métricas clave (473 módulos de ruta).",
				},
				{
					name: "dashboard",
					desc: "App interna de administración para organizaciones, espacios de trabajo y plantillas de campañas y listas inteligentes.",
				},
				{
					name: "spaces",
					desc: "App de espacios compartidos externamente con partners.",
				},
				{
					name: "backend",
					desc: "La capa de dominio: esquemas, repositorios, comandos, eventos y trabajos, consumidos en proceso por las apps.",
				},
				{
					name: "worker",
					desc: "Proceso de Graphile Worker (3 réplicas en local) más un servidor de vista previa de React Email.",
				},
				{
					name: "webhooks",
					desc: "Servicio Hono independiente para webhooks entrantes (Postmark, integraciones).",
				},
				{
					name: "public-api",
					desc: "Superficie GraphQL con Pylon para integraciones de terceros.",
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
					value: "Bloom (kernel y sistema de plugins propios), Hono 4",
				},
				{
					label: "Base de datos",
					value:
						"PostgreSQL 17, Drizzle ORM 0.36 + drizzle-zod, drivers postgres / pg",
				},
				{
					label: "Migraciones",
					value:
						"CLI propia @bloom/drizzle-migrations sobre Drizzle Kit — generate, up/down, status, rebase, validate, fresh, refresh (con tests en Jest)",
				},
				{
					label: "Autenticación",
					value:
						"Keycloak 26 (OIDC) vía remix-auth-oauth2, jsonwebtoken, envoltorio del SDK de administración de Keycloak, bcrypt-edge",
				},
				{
					label: "Colas y trabajos",
					value:
						"Graphile Worker (respaldado por Postgres), registro de trabajos tipado, 19 trabajos en segundo plano",
				},
				{
					label: "Pub/Sub",
					value:
						"@bloom/postgres-emitter — cliente LISTEN/NOTIFY con mapeo de canales, reconexión automática y backoff",
				},
				{
					label: "KV / caché",
					value: "Keyv con adaptador de PostgreSQL (@keyv/postgres)",
				},
				{
					label: "Validación",
					value:
						"Zod 3 en todas partes — esquemas de comandos, esquemas de entorno, @hono/zod-validator, zod-validation-error",
				},
				{
					label: "Correo",
					value:
						"Postmark (transaccional y webhooks entrantes), React Email para las plantillas y Maily para el editor de arrastrar y soltar de cara al cliente",
				},
				{
					label: "Almacenamiento",
					value:
						"SDK v3 de AWS S3 + URLs prefirmadas (LocalStack en desarrollo)",
				},
				{
					label: "Importación de datos",
					value:
						"Pipeline CSV en streaming — csv-parser, detección de codificación con chardet + iconv-lite, staging en S3, procesamiento por lotes en trabajos",
				},
				{
					label: "i18n",
					value:
						"i18next + remix-i18next, catálogos de traducción por módulo (en / fr / nl)",
				},
				{ label: "Logging", value: "Pino (pino-pretty en desarrollo)" },
				{ label: "Errores", value: "Sentry (toucan-js) y Rollbar" },
				{
					label: "API pública",
					value:
						"@getcronit/pylon — GraphQL generado a partir de funciones TypeScript planas (esqueleto inicial)",
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
					label: "Núcleo",
					value: "React 18.3, TypeScript 5.5, Remix 2 (Vite 5), SSR",
				},
				{
					label: "Enrutado",
					value:
						"remix-flat-routes, parámetros de búsqueda tipados con nuqs, adaptador de servidor remix-hono",
				},
				{
					label: "Componentes",
					value:
						"shadcn/ui sobre primitivas de Radix UI (~22 paquetes) — @bloom/ui-web compartido con 81 componentes y bloques, hooks y temas",
				},
				{
					label: "Estilos",
					value:
						"Tailwind CSS 3.4, tailwindcss-animate, class-variance-authority, clsx, tailwind-merge, Poppins vía Fontsource",
				},
				{
					label: "Formularios",
					value: "React Hook Form 7 + remix-hook-form + resolvers de Zod",
				},
				{
					label: "Estado de cliente",
					value:
						"Redux Toolkit + React Redux (shelf), nuqs para el estado en la URL",
				},
				{
					label: "Tablas y listas",
					value:
						"react-virtuoso (listas virtualizadas), react-easy-sort, emblor (entrada de etiquetas)",
				},
				{ label: "Gráficas", value: "Recharts 2" },
				{ label: "Mapas", value: "Mapbox GL / MapLibre GL vía react-map-gl" },
				{
					label: "Texto enriquecido",
					value: "TipTap 3 (dentro del editor de correo Maily)",
				},
				{ label: "Fechas", value: "date-fns + date-fns-tz, react-day-picker" },
				{
					label: "Formularios por pasos",
					value:
						"@bloom/wizard — asistentes con tipado seguro y backends de almacenamiento intercambiables (cookie / KV / memoria) y estado con espacio de nombres automático",
				},
				{ label: "Iconos", value: "Lucide, FontAwesome Pro" },
				{
					label: "Varios",
					value:
						"Sonner, Vaul, cmdk, Embla, Motion, input-otp, react-phone-number-input, react-currency-input-field, next-themes, NProgress",
				},
				{
					label: "Móvil",
					value:
						"@bloom/ui-mobile — primitivas de React Native (@rn-primitives, CVA al estilo NativeWind) y un tsconfig y workflow de CI para Expo, preparados para un cliente móvil",
				},
			],
		},
		{
			index: 6,
			title: "Infraestructura y DevOps",
			meta: "Swarm · GitLab CI · UAT efímeros",
			kind: "bullets",
			items: [
				[
					bold("Docker Compose y Makefile"),
					txt(
						" — todo el entorno local en un solo comando: 3 apps Remix, worker (×3), webhooks, PostgreSQL 17 (init multi-base de datos), Keycloak 26 con tema propio, LocalStack S3, pgAdmin, Drizzle Studio y un servidor de vista previa de React Email; ",
					),
					mono("make install / start / reinstall / uninstall"),
					txt(" cubren todo el ciclo de vida."),
				],
				[
					bold("GitLab CI/CD"),
					txt(
						" — Biome CI → validación de migraciones → construcción de imágenes multi-destino (shelf, spaces, dashboard, worker, webhooks, commands, migrations) → ",
					),
					mono("docker stack deploy"),
					txt(
						" → validación automática del digest de la imagen tras el despliegue, con control por formato de etiqueta UAT/PRD.",
					),
				],
				[
					bold("Entornos UAT efímeros por rama"),
					txt(
						" — el pipeline extrae el identificador de ticket de la etiqueta, aprovisiona una base de datos dedicada ",
					),
					mono("qollabi_db_<ticket>"),
					txt(
						", reescribe todas las URLs de Postgres (app, KV, cola, notificador) para apuntar a ella, despliega un stack aislado de Swarm y elimina el stack, el realm de Keycloak y la base de datos al limpiar.",
					),
				],
				[
					bold("Docker Swarm"),
					txt(
						" — stacks de producción y UAT con un único Dockerfile multi-etapa que produce 7 destinos a partir de capas compartidas de instalación y build, además del bundle TLS de AWS RDS incorporado.",
					),
				],
				[
					bold("Suite end-to-end con Playwright"),
					txt(" con un proyecto de setup de login en Keycloak y un entorno "),
					mono("docker-compose-test.yaml"),
					txt(" dedicado ("),
					mono("make e2e"),
					txt(" / "),
					mono("e2e-ui"),
					txt(
						"); GitHub Actions corre en paralelo a GitLab para calidad de código, backend, dashboard y comprobaciones de Expo.",
					),
				],
				[
					bold("Biome"),
					txt(" (formato, lint y CI), hooks de Husky, "),
					mono("@manypkg/cli"),
					txt(
						" y comprobaciones de consistencia de versiones para mantener alineado el workspace; túneles inversos con ",
					),
					mono("frpc"),
					txt(" para exponer entornos locales."),
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
					title: "Un framework propio, no una carpeta con forma de framework",
					body: "El kernel de Bloom, su ciclo de vida de plugins, el contenedor de inyección de dependencias y el bus CQRS son paquetes versionados con documentación propia, lo que permite que seis desplegables compartan un mismo modelo de composición.",
				},
				{
					title: "Tenancy con RLS y AsyncLocalStorage",
					body: "El acotado por tenant lo impone la base de datos dentro de una transacción por petición, no una convención al construir consultas, de modo que un where olvidado no puede filtrar datos entre espacios de trabajo.",
				},
				{
					title: "Despacho transaccional de eventos",
					body: "El registrador de eventos almacena los eventos de dominio y solo los emite cuando el comando se completa correctamente, eliminando la clase de error del «correo enviado por una escritura revertida».",
				},
				{
					title: "Herramientas propias de migración",
					body: "La validación corre en CI, y rebase resuelve los conflictos de orden de migraciones que afectan a las ramas de larga vida sobre un esquema Drizzle compartido.",
				},
				{
					title: "Entornos efímeros por ticket",
					body: "Aislamiento completo de base de datos y proveedor de identidad, aprovisionados y destruidos por el pipeline.",
				},
				{
					title: "Infraestructura solo con Postgres",
					body: "Cola, KV y pub/sub van sobre la base de datos principal, lo que elimina Redis y un broker de la superficie operativa manteniendo los trabajos transaccionales junto a los datos que tocan.",
				},
				{
					title: "Sistema de correo de doble cara",
					body: "Un editor de arrastrar y soltar con Maily/TipTap para las campañas de los clientes y plantillas de React Email para el correo del sistema, ambos renderizados mediante un paquete compartido @bloom/maily-renderer.",
				},
				{
					title: "Convenciones de desarrollo asistido por IA",
					body: ".cursor/rules y .prompts codifican en el repositorio las convenciones de andamiaje de backend y frontend, para que el código generado se ajuste a la arquitectura.",
				},
			],
		},
	],

	gallery: [
		{ placeholder: "Segunda captura", ratio: "4 / 3" },
		{ placeholder: "Tercera captura", ratio: "4 / 3" },
	],

	card: {
		kicker: "qollabi.com · 2024–2026",
		title: "Qollabi 2.0",
		body: "Reescritura íntegra de la plataforma en TypeScript sobre Remix — ~205k líneas repartidas en 7 apps, tenancy con RLS de Postgres y un framework de aplicación propio.",
		meta: "Remix · Bun · Postgres RLS",
		placeholder: "Captura de Qollabi AI",
	},

	seo: {
		title: "Qollabi 2.0",
		description:
			"Reescritura íntegra en TypeScript de una plataforma B2B multi-tenant de gestión de partners — Remix, Bun workspaces, un framework de aplicación propio y row-level security de PostgreSQL en siete desplegables.",
	},
};
