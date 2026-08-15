import { bold, em, mono, type Project, txt } from "~/content/types";

export const qollabi: Project = {
	slug: "qollabi",
	name: "Qollabi",
	kicker:
		"Qollabi · Desarrollador de Software Senior e Ingeniero DevOps · Ene 2024 – Abr 2026",
	headline: ["Migración strangler fig", "de una plataforma de 268k líneas"],
	lead: "Qollabi es una plataforma SaaS B2B multi-tenant para equipos de venta de partners y canal — planificación de cuentas, objetivos y resultados clave (OKR), planes de negocio conjuntos compartidos con partners, actividades y campañas, periodos de reporte, benchmarks, actualizaciones inteligentes, importación y exportación masivas, e integraciones con CRM.",
	link: { label: "qollabi.com", href: "https://qollabi.com" },
	linkAsButton: true,

	hero: {
		placeholder: "Añade una captura de Qollabi",
		src: "/work/qollabi-hero.webp",
		alt: "Plataforma Qollabi",
		ratio: "16 / 9",
	},

	sheet: {
		title: "Qollabi — escala de la plataforma",
		badges: ["3 repositorios", "Hoja 01"],
		note: "~268k líneas de PHP en más de 3.700 ficheros, ~49k líneas de TypeScript en el frontend federado y ~142k líneas de JavaScript en el frontend heredado. Esta es la escala de la plataforma tal como la heredé; mi propio trabajo está en la sección 01.",
		stats: [
			{ value: "230", label: "Consultas GraphQL" },
			{ value: "331", label: "Mutaciones GraphQL" },
			{ value: "273", label: "Tipos GraphQL" },
			{ value: "47", label: "Agregados con event sourcing" },
			{ value: "65", label: "Documentos de MongoDB" },
			{ value: "163", label: "Migraciones de base de datos" },
			{ value: "60+", label: "Comandos de consola" },
			{ value: "170+", label: "Ficheros de test" },
		],
	},

	sections: [
		{
			index: 1,
			title: "Mi papel",
			meta: "Frontend · backend · plataforma",
			kind: "bullets",
			items: [
				[
					bold("Introduje la arquitectura de micro-frontends"),
					txt(
						" — un remote de Module Federation en React 18 consumido en tiempo de ejecución por el host de React 16, para poder publicar trabajo nuevo sin esperar al tren de releases heredado.",
					),
				],
				[
					bold("Mantuve y amplié la plataforma heredada"),
					txt(
						" — funcionalidad y corrección de errores entre el backend GraphQL en Symfony y la SPA de React 16 que se apoya en él.",
					),
				],
				[
					bold("Entrega e infraestructura"),
					txt(
						" — el entorno de desarrollo basado en Docker, los pipelines de UAT y producción, el código Terraform y el clúster de Docker Swarm, además de la VPN y el túnel inverso con los que trabaja el equipo.",
					),
				],
				[
					bold("La infraestructura de AWS"),
					txt(" — Route 53, RDS, Amazon MQ, S3 e IAM."),
				],
				[
					bold("Migración de datos desde Salesforce"),
					txt(
						" — los scripts que trasladaron los datos de cuentas, planes y objetivos de los clientes durante el alta.",
					),
				],
			],
		},
		{
			index: 2,
			title: "Arquitectura",
			meta: "Strangler fig, verificado en CI",
			kind: "bullets",
			items: [
				[
					bold("Micro-frontend con Module Federation de Webpack 5"),
					txt(" — un nuevo "),
					em("remote"),
					txt(
						" en React 18 y TypeScript expone rutas y componentes que consume en tiempo de ejecución el ",
					),
					em("host"),
					txt(
						" heredado en React 16, permitiendo que ambas bases de código se publiquen de forma independiente.",
					),
				],
				[
					bold("Migración Strangler Fig, verificada en CI"),
					txt(" — tests de arquitectura con "),
					mono("phpat"),
					txt(" ("),
					mono("StranglerFigTest"),
					txt(", "),
					mono("LayeredArchitectureTest"),
					txt(", "),
					mono("LegacyArchitectureTest"),
					txt(
						") hacen fallar la build cuando el código nuevo depende de capas heredadas.",
					),
				],
				[
					bold("Aislamiento con Shadow DOM"),
					txt(
						" — los módulos federados se montan dentro de un shadow root con su propio árbol de estilos, de modo que Mantine y Tailwind nunca colisionan con la hoja de estilos heredada de Ant Design y Less.",
					),
				],
				[
					bold("CQRS y Event Sourcing"),
					txt(
						" — agregados de EventSauce tras los buses de comandos y consultas de Tactician, con proyectores dedicados que reconstruyen las vistas de lectura en MongoDB a partir del flujo de eventos.",
					),
				],
				[
					bold("Multi-tenancy con base de datos por cliente"),
					txt(
						" — cada cliente tiene su propia base de datos MongoDB, resuelta por petición desde una cabecera ",
					),
					mono("X-Tenant-Id"),
					txt(" mediante un document manager de Doctrine reinicializable."),
				],
				[
					bold("API GraphQL-first"),
					txt(
						" — un bundle propio de GraphQL para Symfony sirve el esquema; el frontend federado lo consume a través de una pasarela GraphQL Mesh con documentos generados completamente tipados.",
					),
				],
			],
		},
		{
			index: 3,
			title: "Repositorios",
			meta: "Backend · remote · host",
			kind: "cards",
			columns: 3,
			titleStyle: "mono",
			items: [
				{
					title: "qollabi-sfa-core",
					body: "Backend Symfony/GraphQL, almacén de eventos, proyecciones, workers, CLI y cron.",
				},
				{
					title: "qollabi-rja-federation",
					body: [
						txt("Remote de Module Federation: shell "),
						mono("app"),
						txt(
							", módulos de funcionalidad (integration-layer, smart-updates, tableau-demo, common), paquetes compartidos y Storybook.",
						),
					],
				},
				{
					title: "qollabi-rja-brm",
					body: [
						txt("Montado como "),
						mono("legacy/"),
						txt(
							" — la SPA original en React 16, ahora convertida en el host de la federación.",
						),
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
					value: "Symfony 5.4 (Flex, bundles de Framework/Security/Twig)",
				},
				{
					label: "Base de datos",
					value:
						"MongoDB 7 (replica set), Doctrine MongoDB ODM 2, devture/mongodb-migrations",
				},
				{
					label: "API",
					value:
						"GraphQL — bundle propio qollabi/sfx-graphql-bundle, voters de autorización a nivel de campo",
				},
				{
					label: "CQRS",
					value:
						"League Tactician (buses de comandos, consultas y eventos) + Symfony Messenger con middleware por bus",
				},
				{
					label: "Event sourcing",
					value:
						"EventSauce 0.8 + repositorio de mensajes en Doctrine, capa de proyectores para las vistas de lectura",
				},
				{
					label: "Colas",
					value:
						"RabbitMQ 3 (ext-amqp, kcs/messenger-extra) — colas quorum, exchanges de dead-letter, límites de entrega y transporte dedicado para la capa de integración",
				},
				{
					label: "Caché y bloqueos",
					value: "Redis 5 (predis, snc/redis-bundle), Symfony Lock y Cache",
				},
				{
					label: "Autenticación",
					value:
						"Auth0 (auth0-php, Management API), firebase/php-jwt, certificados JWT distribuidos por S3",
				},
				{
					label: "Almacenamiento",
					value:
						"SDK de AWS para PHP + Flysystem (adaptador de S3, oneup/flysystem-bundle)",
				},
				{
					label: "Correo",
					value:
						"Symfony Mailer + SendGrid, Twig con Inky, inliner de CSS y extras de Markdown",
				},
				{
					label: "Hojas de cálculo",
					value:
						"PhpSpreadsheet — pipelines de importación y exportación masiva de cuentas y objetivos",
				},
				{
					label: "i18n",
					value:
						"php-translation/symfony-bundle + willdurand/js-translation-bundle (catálogos compartidos con el frontend)",
				},
				{
					label: "Feature flags",
					value: "Opensoft Rollout (qollabi/phx-rollout-bundle)",
				},
				{
					label: "Observabilidad",
					value:
						"Rollbar, Monolog, SDK de Blackfire, Stopwatch/Profiler de Symfony",
				},
				{
					label: "Calidad",
					value:
						"PHPSpec 7, PHPUnit, Symfony Panther, PHPStan nivel 6, reglas de arquitectura phpat, PHP-CS-Fixer, Rector",
				},
			],
		},
		{
			index: 5,
			title: "App federada",
			meta: "React 18 · TypeScript 5.3",
			kind: "rows",
			rows: [
				{ label: "Núcleo", value: "React 18, TypeScript 5.3, Webpack 5" },
				{
					label: "Federación",
					value:
						"@module-federation/enhanced — remote que expone módulos y componentes al host heredado",
				},
				{
					label: "Monorepo",
					value:
						"Yarn workspaces — 4 módulos de funcionalidad, 11 paquetes compartidos, 6 configuraciones de build compartidas y 1 workspace de Storybook",
				},
				{
					label: "Componentes",
					value:
						"Mantine 7 (core, dates, hooks, notifications), mantine-datatable, PrimeReact 10 — envueltos en un sistema de diseño compartido @qollabi/ui",
				},
				{
					label: "Estilos",
					value:
						"Tailwind CSS 3, PostCSS (postcss-preset-mantine), Sass, class-variance-authority, clsx, tailwind-merge",
				},
				{
					label: "Estado de servidor",
					value:
						"TanStack Query 5 (consultas con suspense) sobre graphql-request y documentos generados con TypedDocumentNode",
				},
				{ label: "Estado de cliente", value: "Zustand 5" },
				{ label: "Formularios", value: "React Hook Form 7 + resolvers de Yup" },
				{
					label: "i18n",
					value: "i18next + react-i18next (@qollabi/i18n compartido)",
				},
				{ label: "Fechas", value: "Day.js y Luxon" },
				{
					label: "Iconos",
					value: "FontAwesome Pro (light/regular/solid), Tabler Icons",
				},
				{
					label: "Varios",
					value:
						"react-error-boundary, notistack, SortableJS, Zod (validación de variables de entorno en build)",
				},
				{
					label: "Tooling",
					value:
						"Storybook 7, Jest + ts-jest, configuraciones compartidas de ESLint y Prettier, Husky",
				},
			],
		},
		{
			index: 6,
			title: "App heredada",
			meta: "React 16 · el host de la federación",
			kind: "rows",
			rows: [
				{
					label: "Núcleo",
					value:
						"React 16, Webpack 5 (migrado desde CRA), Babel, tipado parcial con Flow",
				},
				{
					label: "Datos",
					value:
						"Apollo Client 2 / react-apollo 3, GraphQL, 70 documentos .graphql, enlace HTTP por lotes",
				},
				{
					label: "Componentes",
					value: "Ant Design 3 (tematización con Less), PrimeReact 5",
				},
				{ label: "Enrutado", value: "React Router 5" },
				{
					label: "Formularios",
					value:
						"Final Form + react-final-form (arrays, focus, field-data), React Hook Form 5, Yup, validator",
				},
				{
					label: "Texto enriquecido",
					value: "TipTap 2 (menciones, enlaces, listas) y Slate 0.82",
				},
				{
					label: "Interacción",
					value:
						"react-beautiful-dnd, react-dnd, react-sortable-hoc, react-virtualized, react-dates",
				},
				{ label: "Gráficas", value: "Recharts 1" },
				{
					label: "Fechas",
					value: "Moment + moment-timezone + moment-range, @vvo/tzdb",
				},
				{
					label: "Autenticación",
					value: "SDK de Auth0 para React, jsonwebtoken",
				},
				{
					label: "Analítica",
					value: "Rollbar, FullStory, Smartlook, Intercom",
				},
				{
					label: "Testing",
					value: "Cypress 4 + reporters JUnit de Mocha, Storybook 7",
				},
			],
		},
		{
			index: 7,
			title: "Infraestructura y DevOps",
			meta: "Swarm · GitLab CI · Ansible",
			kind: "bullets",
			items: [
				[
					bold("Entornos locales con Docker Compose dirigidos por Makefile"),
					txt(
						" — PHP-FPM, Nginx, replica set de MongoDB, RabbitMQ, Redis y mongo-express en el backend; servidores de desarrollo del remote y del heredado, Storybook y un contenedor de túnel para los callbacks de Auth0 en el frontend.",
					),
				],
				[
					bold("GitLab CI/CD"),
					txt(
						" — instalación → lint → PHPStan → PHPSpec/PHPUnit con cobertura → construcción multi-imagen etiquetada (php, nginx, cron) → despliegue → validación posterior, con control por formato de etiqueta UAT/PRD.",
					),
				],
				[
					bold("Despliegue en Docker Swarm"),
					txt(" — stacks "),
					mono("prd.yaml"),
					txt(" / "),
					mono("uat.yaml"),
					txt(
						" con imágenes separadas por rol y scripts de arranque dedicados para FPM, workers asíncronos, workers de importación, configuración de colas y migraciones.",
					),
				],
				[
					bold("Ansible y AWS CloudFormation"),
					txt(
						" — playbooks de aprovisionamiento sobre nueve instancias de producción más los entornos de preproducción, revisión y demo, con procesos worker gestionados por Supervisor.",
					),
				],
				[
					bold("Imagen de cron"),
					txt(
						" que ejecuta trabajos programados por cliente (correos de vencimiento, notificaciones de asignación de responsables, procesamiento horario de actualizaciones inteligentes) con canales de log en Slack.",
					),
				],
				[
					bold("Controles de calidad"),
					txt(
						" — baseline de PHPStan, tests de arquitectura, CodeClimate, Husky + lint-staged y Prettier en ambos repositorios.",
					),
				],
			],
		},
		{
			index: 8,
			title: "Decisiones técnicas destacadas",
			meta: "Seis decisiones",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "Puente de micro-frontend en tiempo de ejecución",
					body: "Un par de HOC remoteLazyComponent / remoteLazyModule en el lado heredado carga de forma perezosa los exports federados e inyecta el contexto del host (idioma, historial del router, tenant, modo de traducción), de modo que los nuevos módulos en React 18 se renderizan como ciudadanos de primera dentro de una app en React 16.",
				},
				{
					title: "Tests de arquitectura como política de migración",
					body: "La frontera del strangler fig es una regla que rompe la build, no una convención, lo que impide que una base heredada de 268k líneas vuelva a enredarse consigo misma.",
				},
				{
					title: "Capa de integración saliente",
					body: "18 routing keys tipadas sobre un exchange directo de RabbitMQ, cada una con colas quorum, enrutado de dead-letter y un serializador de mensajes propio, que empujan planes, objetivos, actividades y control de acceso hacia CRMs externos.",
				},
				{
					title: "OAuth de Salesforce en el navegador",
					body: "La integración se configura por tenant y no hay almacén de credenciales en servidor, así que el flujo se ejecuta en el cliente — las credenciales se cifran antes de que el token llegue siquiera al almacenamiento del navegador.",
				},
				{
					title: "Herramientas de reejecución de proyecciones",
					body: "Comandos de CLI para reconstruir vistas de lectura, reejecutar el histórico de benchmarks y reparar versiones de eventos contra un almacén de eventos en vivo.",
				},
				{
					title: "Orquestación de lotes por cliente",
					body: "Una única entrada de cron distribuye un comando de consola sobre todas las bases de datos de clientes, de modo que el trabajo programado escala con el número de clientes sin infraestructura adicional.",
				},
			],
		},
	],

	gallery: [
		{
			placeholder: "Segunda captura",
			ratio: "4 / 3",
			src: "/work/qollabi-2.webp",
			alt: "Integraciones de Qollabi",
		},
		{
			placeholder: "Tercera captura",
			ratio: "4 / 3",
			src: "/work/qollabi-3.webp",
			alt: "Vista general del producto Qollabi",
		},
	],

	card: {
		kicker: "qollabi.com · 2024–2026",
		title: "Qollabi",
		body: "Migración strangler fig de una plataforma de 268k líneas en Symfony y React 16 — micro-frontends con Module Federation, event sourcing y la frontera de la migración impuesta por tests de arquitectura en CI.",
		meta: "Symfony · Module Federation · Event sourcing",
		placeholder: "Captura de Qollabi",
		src: "/work/qollabi-card.webp",
		alt: "Plataforma Qollabi",
	},

	seo: {
		title: "Qollabi",
		description:
			"Migración strangler fig de una plataforma de 268k líneas en Symfony y React 16 — micro-frontends con Module Federation y tests de arquitectura en CI.",
	},
};
