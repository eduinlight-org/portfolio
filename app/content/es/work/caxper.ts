import { bold, mono, type Project, txt } from "~/content/types";

export const caxper: Project = {
	slug: "caxper",
	name: "Caxper",
	kicker: "Cofundador y desarrollador único · SaaS multi-tenant",
	headline: ["Caxper"],
	lead: "SaaS multi-tenant para agentes de seguros independientes — gestión de clientes y pólizas, libro de comisiones e ingresos, gastos, informes fiscales, renovaciones, seguimiento de licencias y formación continua, y suscripciones facturadas con Stripe.",
	sublead:
		"Construido y puesto en producción de principio a fin como desarrollador único, cofundado con un socio en Estados Unidos.",
	link: { label: "caxper.eduindev.com", href: "https://caxper.eduindev.com/" },

	hero: {
		placeholder: "Añade una captura de Caxper",
		src: "/work/caxper-hero.webp",
		alt: "Vista de gestión de clientes de Caxper",
		ratio: "16 / 9",
		caption: "Fig. 01 — Panel del agente",
	},

	band: [
		{ value: "150k", label: "Líneas de TypeScript" },
		{ value: "217", label: "Endpoints REST" },
		{ value: "62", label: "Entidades de base de datos" },
		{ value: "44", label: "Migraciones" },
		{ value: "5 + 9", label: "Apps y paquetes compartidos" },
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
						" — 5 aplicaciones + 9 paquetes internos, completamente tipado de extremo a extremo.",
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
			meta: "5 apps · 9 paquetes",
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
			items: [
				{
					body: [
						txt(
							"RLS de Postgres como frontera de tenancy, con un inyector que añade automáticamente las llamadas ",
						),
						mono("enable_rls()"),
						txt(" a las migraciones generadas."),
					],
				},
				{
					body: "Motor de automatización basado en reglas para generar comisiones e ingresos de forma idempotente mediante claves de deduplicación.",
				},
				{
					body: "Máquina de estados de cambio de plan que cubre cada transición plan × periodo de facturación, con prorrateo de Stripe y efectos sobre los derechos del plan.",
				},
				{
					body: "Adaptadores de importación de PDF intercambiables que normalizan los exportes de las aseguradoras hacia el mismo asistente que CSV y XLSX.",
				},
				{
					body: "Modelo de traducciones extensible en tiempo de ejecución (3 tablas normalizadas) — añadir un idioma no requiere cambios de esquema.",
				},
				{
					body: "Capa de previsión (residuales) que reejecuta el calculador de ingresos en modo solo lectura, sin escribir nunca en el libro contable.",
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
		body: "SaaS multi-tenant para agentes de seguros independientes — pólizas, libro de comisiones, informes fiscales y facturación con Stripe, construido en solitario.",
		meta: "NestJS · React 19 · Postgres RLS",
		placeholder: "Captura de Caxper",
		src: "/work/caxper-card.webp",
		alt: "Caxper",
	},

	seo: {
		title: "Caxper",
		description:
			"SaaS multi-tenant para agentes de seguros independientes — pólizas, libro de comisiones, informes fiscales y facturación con Stripe. NestJS, React 19 y row-level security de PostgreSQL, construido en solitario.",
	},
};
