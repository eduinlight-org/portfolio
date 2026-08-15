import { bold, mono, type Project, txt } from "~/content/types";

export const caxper: Project = {
	slug: "caxper",
	name: "Caxper",
	kicker: "Cofundador e ingeniero único · SaaS multi-tenant",
	headline: ["SaaS de seguros,", "construido en solitario"],
	lead: "SaaS multi-tenant para agentes de seguros independientes — gestión de clientes y pólizas, libro de comisiones e ingresos, gastos, informes fiscales, renovaciones, y seguimiento de licencias y formación continua, todo sobre suscripciones facturadas con Stripe.",
	sublead:
		"Cofundé Caxper con un socio de negocio en Estados Unidos y construí el producto entero — arquitectura, apps, API e infraestructura — como ingeniero único.",
	link: { label: "caxper.eduindev.com", href: "https://caxper.eduindev.com/" },
	linkAsButton: true,

	hero: {
		placeholder: "Añade una captura de Caxper",
		src: "/work/caxper-hero.webp",
		alt: "Vista de gestión de clientes de Caxper",
		ratio: "16 / 9",
		caption: "Fig. 01 — Panel del agente",
	},

	band: [
		{ value: "~150k", label: "Líneas de TypeScript" },
		{ value: "217", label: "Endpoints REST" },
		{ value: "62", label: "Entidades de base de datos" },
		{ value: "44", label: "Migraciones" },
		{ value: "6 + 9", label: "Apps y paquetes compartidos" },
	],

	sections: [
		{
			index: 1,
			title: "Arquitectura",
			meta: "Monorepo con pnpm workspaces",
			kind: "bullets",
			items: [
				[
					bold("Monorepo con pnpm workspaces"),
					txt(
						" — 6 aplicaciones + 9 paquetes internos, completamente tipado de extremo a extremo.",
					),
				],
				[
					bold("CQRS"),
					txt(" con "),
					mono("@nestjs/cqrs"),
					txt(
						" — controladores finos que despachan a buses de comandos y consultas, con efectos secundarios orientados a eventos vía ",
					),
					mono("EventBus"),
					txt("."),
				],
				[
					bold("Multi-tenancy mediante Row-Level Security de PostgreSQL"),
					txt(" — cada lectura y escritura queda acotada por una GUC "),
					mono("app.current_tenant_id"),
					txt(
						" fijada por petición dentro de una transacción; una capa de repositorios consciente del tenant sella automáticamente el identificador.",
					),
				],
				[
					bold("Cadena de guards por capas"),
					txt(
						" — autenticación con Keycloak → resolución del tenant → permisos RBAC → estado de la suscripción → derechos del plan.",
					),
				],
				[
					bold("API contract-first"),
					txt(
						" — especificación OpenAPI generada desde NestJS y consumida por Orval para autogenerar un SDK Axios + React Query completamente tipado que comparten todos los frontends.",
					),
				],
			],
		},
		{
			index: 2,
			title: "Apps del monorepo",
			meta: "6 apps · 9 paquetes",
			kind: "cards",
			columns: 3,
			items: [
				{
					title: "app",
					body: "SPA principal para el agente (React Router 7, Vite).",
				},
				{ title: "admin", body: "SPA interna de back-office." },
				{
					title: "website",
					body: "Web de marketing con SSR (React Router 7 + @react-router/serve).",
				},
				{ title: "api", body: "API en NestJS." },
				{
					title: "worker",
					body: "Worker de BullMQ + servidor de vista previa de React Email.",
				},
				{
					title: "docs",
					body: "Sitio de documentación para desarrolladores en VitePress (Vue 3).",
				},
			],
		},
		{
			index: 3,
			title: "Stack",
			meta: "TypeScript de extremo a extremo",
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
					name: "Infraestructura y DevOps",
					items: [
						"Docker Compose",
						"Docker Swarm",
						"GitLab CI/CD",
						"Nginx",
						"Túneles frp",
						"Makefile",
						"Imagen propia de Keycloak",
						"Biome",
						"Husky",
					],
				},
				{
					name: "Pipeline de entrega",
					body: [
						txt(
							"Instalación → generación del SDK → lint y tests → construcción y publicación de imágenes etiquetadas en un registro privado → ",
						),
						mono("docker stack deploy"),
						txt(" → validación automática de salud tras el despliegue."),
					],
				},
			],
		},
		{
			index: 4,
			title: "Decisiones técnicas destacadas",
			meta: "Seis decisiones",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "La tenancy la impone la base de datos",
					body: [
						txt(
							"El row-level security de Postgres es la frontera de tenancy, con un inyector que añade automáticamente las llamadas ",
						),
						mono("enable_rls()"),
						txt(
							" a las migraciones generadas, para que ninguna tabla nueva pueda publicarse sin ámbito.",
						),
					],
				},
				{
					title: "Generación idempotente de comisiones",
					body: "Un motor de automatización basado en reglas genera comisiones e ingresos contra claves de deduplicación, de modo que reprocesar una importación no puede pagar dos veces a un agente.",
				},
				{
					title: "Los cambios de plan como máquina de estados",
					body: "Cada transición plan × periodo de facturación está modelada explícitamente, con el prorrateo de Stripe y los efectos sobre los derechos del plan colgando de la transición y no de quien la invoca.",
				},
				{
					title: "Un solo pipeline de importación, muchas aseguradoras",
					body: "Adaptadores de PDF intercambiables normalizan el export de cada aseguradora hacia el mismo asistente que CSV y XLSX, así que una aseguradora nueva es un adaptador y no un flujo nuevo.",
				},
				{
					title: "Idiomas sin migraciones",
					body: "Un modelo de traducciones normalizado en tres tablas resuelve los textos en tiempo de ejecución, así que añadir un idioma no requiere cambios de esquema ni despliegue.",
				},
				{
					title: "Previsiones de solo lectura",
					body: "La previsión de ingresos residuales reejecuta el mismo calculador que el libro contable en modo solo lectura, así que una proyección nunca puede escribir una comisión real.",
				},
			],
		},
	],

	gallery: [
		{
			placeholder: "Vista de pólizas o del libro contable",
			ratio: "4 / 3",
			src: "/work/caxper-ledger.webp",
			alt: "Seguimiento de ingresos y comisiones en Caxper",
		},
		{
			placeholder: "Vista de informes o facturación",
			ratio: "4 / 3",
			src: "/work/caxper-reports.webp",
			alt: "Vista de informes fiscales de Caxper",
		},
	],

	card: {
		kicker: "caxper.eduindev.com · cofundador",
		title: "Caxper",
		body: "SaaS multi-tenant para agentes de seguros independientes — pólizas, libro de comisiones, informes fiscales y facturación con Stripe, construido como ingeniero único.",
		meta: "NestJS · React 19 · Postgres RLS",
		placeholder: "Captura de Caxper",
		src: "/work/caxper-card.webp",
		alt: "Caxper",
	},

	seo: {
		title: "Caxper",
		description:
			"SaaS multi-tenant para agentes de seguros, en solitario — pólizas, comisiones, informes fiscales y facturación con Stripe sobre NestJS, React 19 y Postgres.",
	},
};
