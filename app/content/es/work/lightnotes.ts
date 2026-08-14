import { bold, mono, type Project, txt } from "~/content/types";

export const lightnotes: Project = {
	slug: "lightnotes",
	name: "lightnotes",
	kicker: "eduinlight-org · producto personal · código abierto (MIT)",
	headline: ["Una base de código rust", "seis plataformas"],
	lead: "LightNotes es una app local-first de notas y diario con editor WYSIWYG de Markdown, carpetas y etiquetas, recordatorios, almacenamiento local cifrado con prioridad offline y sincronización en segundo plano contra una API REST + SSE autoalojada, desplegada en Kubernetes mediante GitOps.",
	link: {
		label: "Código en GitHub",
		href: "https://github.com/eduinlight-org/lightnotes",
	},
	linkAsButton: true,

	hero: {
		placeholder: "Añade una captura de LightNotes",
		ratio: "16 / 9",
	},

	sheet: {
		title: "LightNotes — escala del workspace",
		badges: ["Rust 2021", "Hoja 01"],
		note: "~22k líneas de Rust repartidas en 317 ficheros. Seis plataformas de destino: web/WASM, macOS, Windows, Linux, Android e iOS.",
		stats: [
			{ value: "6", label: "Plataformas de destino" },
			{ value: "11", label: "Crates (5 apps + 6 compartidos)" },
			{ value: "77", label: "Componentes de UI" },
			{ value: "~22k", label: "Líneas de Rust" },
			{ value: "12", label: "Endpoints REST / SSE" },
			{ value: "78", label: "Tests" },
			{ value: "9", label: "Workflows de CI/CD" },
			{ value: "400", label: "Claves de traducción" },
		],
	},

	sections: [
		{
			index: 1,
			title: "Arquitectura",
			meta: "Monorepo con Cargo workspace",
			kind: "bullets",
			items: [
				[
					bold("Monorepo con Cargo workspace"),
					txt(
						" — 5 crates de aplicación + 6 crates compartidos, un único árbol de fuentes compilado a cinco binarios mediante feature flags de Cargo (",
					),
					mono("web"),
					txt(" / "),
					mono("desktop"),
					txt(" / "),
					mono("mobile"),
					txt(" / "),
					mono("server"),
					txt(") y tablas de dependencias con "),
					mono("cfg(target_os)"),
					txt(" / "),
					mono("cfg(target_arch)"),
					txt("."),
				],
				[
					bold("Envoltorios finos por plataforma"),
					txt(" — "),
					mono("apps/web"),
					txt(", "),
					mono("apps/desktop"),
					txt(" y "),
					mono("apps/mobile"),
					txt(" son binarios de unas 50 líneas alrededor de un "),
					mono("packages/app"),
					txt(
						" compartido; el layout se adapta a cada plataforma (barra lateral y superior en escritorio, cabecera compacta y pestañas inferiores en móvil).",
					),
				],
				[
					bold("API hexagonal con separación CQRS"),
					txt(" — "),
					mono("domain/"),
					txt(" (entidades y traits de puerto) → "),
					mono("application/"),
					txt(" ("),
					mono("commands/"),
					txt(", "),
					mono("queries/"),
					txt(") → "),
					mono("infrastructure/"),
					txt(
						" (repositorios Mongo, autenticación, telemetría, migraciones) → ",
					),
					mono("interface/http/"),
					txt("; la capa HTTP nunca toca MongoDB directamente."),
				],
				[
					bold("Crate de DTO compartido como contrato de sincronización"),
					txt(" — "),
					mono("sync-dto"),
					txt(
						" se compila literalmente tanto en cliente como en servidor, de modo que el formato de transmisión no puede divergir; ",
					),
					mono("api-sdk"),
					txt(" es el cliente tipado que lo envuelve."),
				],
				[
					bold("Local-first por defecto"),
					txt(
						" — cada lectura se sirve desde la base de datos del dispositivo; la sincronización es un bucle de reconciliación en segundo plano y la app es plenamente funcional con la API inaccesible.",
					),
				],
				[
					bold("Estructura de componentes por convención"),
					txt(" — cada componente es un directorio ("),
					mono("component.rs"),
					txt(" renderiza, "),
					mono("use_component.rs"),
					txt(
						" gestiona estado y manejadores), con un patrón explícito de struct ",
					),
					mono("FooProps"),
					txt(" aplicado en todo el repositorio."),
				],
			],
		},
		{
			index: 2,
			title: "Crates del workspace",
			meta: "5 apps · 6 paquetes",
			kind: "nameDesc",
			items: [
				{
					name: "apps/web",
					desc: "App de notas, SPA en WASM (servida con nginx en producción).",
				},
				{
					name: "apps/desktop",
					desc: "App de notas, envoltorio nativo para macOS / Windows / Linux.",
				},
				{
					name: "apps/mobile",
					desc: "App de notas, envoltorio Android / iOS.",
				},
				{
					name: "apps/landing",
					desc: "Web de marketing con SSR (Dioxus fullstack, binario de servidor independiente).",
				},
				{
					name: "apps/api",
					desc: "Backend de sincronización REST + SSE en Axum sobre MongoDB.",
				},
				{
					name: "packages/app",
					desc: "Rutas, vistas, 32 componentes de aplicación y estado global compartidos (sincronización, sesión, planificador, recordatorios).",
				},
				{
					name: "packages/ui",
					desc: "45 componentes de presentación genéricos e independientes de la app, más el tema.",
				},
				{
					name: "packages/editor",
					desc: "Motor del editor de texto enriquecido / Markdown.",
				},
				{
					name: "packages/store-sdk",
					desc: "Persistencia cifrada en el dispositivo y cola de cambios.",
				},
				{ name: "packages/api-sdk", desc: "Cliente REST + SSE tipado." },
				{
					name: "packages/sync-dto",
					desc: "Tipos del contrato de sincronización compartidos entre cliente y servidor.",
				},
			],
		},
		{
			index: 3,
			title: "Cliente — UI compartida en Rust",
			meta: "Dioxus 0.7",
			kind: "rows",
			rows: [
				{
					label: "Núcleo",
					value:
						"Rust 2021 (stable), Dioxus 0.7 — signals, RSX, #[component], hooks, context",
				},
				{
					label: "Enrutado",
					value:
						"Dioxus Router — enum #[derive(Routable)] con tipado seguro, 4 niveles de #[layout] anidados",
				},
				{
					label: "Destinos de render",
					value:
						"WebAssembly (wasm32-unknown-unknown), WKWebView, WebView2, WebKitGTK",
				},
				{
					label: "SSR",
					value:
						"Dioxus Fullstack — renderizado en servidor e hidratación para la landing",
				},
				{
					label: "Componentes",
					value:
						"dioxus-primitives (headless y accesibles) envueltos en un sistema de diseño propio de 45 componentes (packages/ui)",
				},
				{
					label: "Estilos",
					value:
						"Tailwind CSS 4 — compilado por la CLI de Dioxus desde las fuentes Rust, sin paso por Node/npm; temas claro y oscuro + 6 colores de acento",
				},
				{
					label: "Editor",
					value:
						"taino-edit (núcleo + extensiones) — esquema estilo ProseMirror, 14 extensiones, WYSIWYG con ida y vuelta a Markdown",
				},
				{
					label: "i18n",
					value:
						"dioxus-i18n + unic-langid + Fluent — 400 claves de traducción, inglés y español",
				},
				{ label: "Iconos / tiempo", value: "dioxus-icons, time, web-time" },
				{
					label: "Interoperación JS",
					value:
						"Puentes con document::eval para Google Sign-In (web), splash screen, desfase horario y tematización del acento",
				},
				{
					label: "Notificaciones",
					value:
						"notify-rust (Linux), windows + toasts de WinRT, objc2-user-notifications (macOS/iOS), jni + ndk-context (Android)",
				},
				{
					label: "Testing",
					value:
						"Tests de render de componentes con dioxus-ssr, tests unitarios en app / ui / sync-dto",
				},
			],
		},
		{
			index: 4,
			title: "Almacenamiento local-first y sincronización",
			meta: "Cifrado en reposo",
			kind: "rows",
			rows: [
				{
					label: "Base de datos",
					value:
						"SQLite mediante sqlx 0.9 — consultas asíncronas con pool, WAL, versionado de esquema con PRAGMA user_version",
				},
				{
					label: "Cifrado",
					value:
						"SQLCipher (libsqlite3-sys, con OpenSSL empaquetado) — base de datos completa cifrada en reposo bajo una clave aleatoria de 256 bits, con ruta de migración de texto plano a cifrado",
				},
				{
					label: "Custodia de claves",
					value:
						"keyring — Llavero (macOS/iOS), Administrador de credenciales (Windows), Secret Service (Linux), almacenamiento privado de la app (Android)",
				},
				{
					label: "Motor de sincronización",
					value:
						"Reconciliación propia por registro de cambios: cola de cambios pendientes offline, agrupación con debounce, puesta al día por cursor, reconexión con backoff exponencial, resolución de conflictos por última escritura y conmutador manual de modo offline",
				},
				{
					label: "Transporte",
					value:
						"api-sdk — cliente REST + SSE hecho a mano (reqwest/rustls, async-stream, futures-util) que compila tanto para nativo como para wasm",
				},
				{
					label: "Planificación",
					value:
						"Temporizadores de tokio en nativo, gloo-timers en wasm; planificador local de recordatorios que alimenta los centros de notificaciones del sistema",
				},
			],
		},
		{
			index: 5,
			title: "Backend",
			meta: "Axum · MongoDB · SSE",
			kind: "rows",
			rows: [
				{
					label: "Runtime",
					value: "Rust 2021, Tokio 1 (multihilo, gestión de señales)",
				},
				{
					label: "Framework",
					value:
						"Axum 0.8, Tower / tower-http (CORS, límites de cuerpo, tracing)",
				},
				{
					label: "Base de datos",
					value:
						"MongoDB 7 — driver mongodb + mongodm, migraciones versionadas de índices y colecciones escritas a mano",
				},
				{
					label: "Tiempo real",
					value:
						"Server-Sent Events, difundidos en proceso vía tokio::broadcast + tokio-stream",
				},
				{
					label: "Autenticación",
					value:
						"Google OAuth 2.0 / OIDC — flujo de ID token en web y flujo de código de autorización con PKCE en nativo, más tickets de autenticación de corta duración",
				},
				{
					label: "Sesiones",
					value:
						"JWT (jsonwebtoken, backend RustCrypto) — rotación de access/refresh, revocación, TTL configurable",
				},
				{
					label: "Seguridad",
					value:
						"Cabeceras de seguridad con axum-helmet, límite de 2 MB por petición, TLS solo con rustls, validación de secretos al arranque con fallo temprano",
				},
				{
					label: "Observabilidad",
					value:
						"OpenTelemetry (OTLP HTTP/protobuf) — trazas, métricas y logs; tracing + tracing-subscriber + tracing-opentelemetry, salida JSON, rotación de logs",
				},
				{
					label: "Métricas",
					value:
						"http.server.request.duration, http.server.active_requests, db.client.operation.duration, lightnotes.sse.active_streams, lightnotes.changes.processed, lightnotes.auth.attempts, además de CPU, memoria y uptime del proceso",
				},
				{
					label: "Salud",
					value:
						"/healthz para liveness, /readyz para readiness contra MongoDB; drenado ordenado ante SIGTERM y volcado de telemetría",
				},
				{
					label: "Configuración",
					value:
						"dotenvy, dirigida por entorno, serde / serde_json en todo el proyecto",
				},
			],
		},
		{
			index: 6,
			title: "Infraestructura y DevOps",
			meta: "k3s · ArgoCD · 9 workflows",
			kind: "bullets",
			items: [
				[
					bold("Kubernetes (k3s) con GitOps mediante ArgoCD"),
					txt(" — un repositorio aparte, "),
					mono("lightnotes-cd"),
					txt(", contiene "),
					mono("AppProject"),
					txt(" + "),
					mono("Application"),
					txt(
						" y 12 manifiestos gestionados con Kustomize, con sincronización, poda y autorreparación automáticas, server-side apply y reintentos con backoff.",
					),
				],
				[
					bold("Actualización de imágenes en Kustomize desde CI"),
					txt(" — los pushes al repositorio de la app construyen y publican "),
					mono("ghcr.io/…:<sha>"),
					txt(", y después un workflow reutilizable "),
					mono("cd-bump"),
					txt(" ejecuta "),
					mono("kustomize edit set image"),
					txt(
						" sobre el repositorio de CD (grupo de concurrencia compartido, rebase y reintento); ArgoCD lo recoge en el siguiente sondeo.",
					),
				],
				[
					bold("Túnel inverso con frp"),
					txt(
						" — tres servicios expuestos públicamente desde un clúster sin controlador de ingress y sin ningún puerto de entrada abierto; el TLS termina en el borde.",
					),
				],
				[
					bold("Docker / Docker Compose"),
					txt(" — imágenes de ejecución ligeras ("),
					mono("debian:trixie-slim"),
					txt(" para los binarios Rust, "),
					mono("nginx:1.27-alpine"),
					txt(" para la SPA con fallback "),
					mono("try_files"),
					txt(
						", gzip y niveles de caché por hash de asset); Compose levanta MongoDB y mongo-express en local.",
					),
				],
				[
					bold("GitHub Actions — 9 workflows"),
					txt(
						" — matriz de CI (Linux/macOS/Windows más una comprobación del target wasm), 3 pipelines de despliegue, 4 workflows de release de escritorio y 1 cd-bump reutilizable, con ",
					),
					mono("rust-cache"),
					txt(", toolchains fijadas y distribución mediante "),
					mono("workflow_call"),
					txt("."),
				],
				[
					bold("Runner autoalojado en contenedor"),
					txt(" — un runner en homelab construido desde "),
					mono("ubuntu:22.04"),
					txt(
						" con las dependencias de WebKitGTK incluidas, que es lo que fija el mínimo de glibc de las builds publicadas.",
					),
				],
				[
					bold("Releases multiplataforma dirigidas por tags"),
					txt(
						" — una etiqueta produce una única GitHub Release en borrador con ",
					),
					mono(".dmg"),
					txt(", "),
					mono(".msi"),
					txt(", "),
					mono(".exe"),
					txt(" de NSIS, "),
					mono(".AppImage"),
					txt(", "),
					mono(".deb"),
					txt(", "),
					mono(".rpm"),
					txt(" y "),
					mono("SHA256SUMS"),
					txt(
						" por arquitectura; no publica nada salvo que todas las plataformas terminen correctamente.",
					),
				],
				[
					bold("Firma de código"),
					txt(
						" — firma con Apple Developer ID, notarización y stapling (hardened runtime con permisos JIT para JavaScriptCore), Authenticode de Windows con sellado de tiempo RFC 3161, y APK/AAB de Android mediante un paso de posprocesado en Gradle con juegos de iconos generados.",
					),
				],
				[
					bold("Grafana / Tempo / Prometheus / Loki"),
					txt(" ("),
					mono("grafana/otel-lgtm"),
					txt(") como backend de telemetría, con propagación W3C "),
					mono("traceparent"),
					txt(" y spans nombrados según semconv; "),
					bold("make"),
					txt(
						" es el único punto de entrada para cualquier tarea de desarrollo, build o empaquetado.",
					),
				],
			],
		},
		{
			index: 7,
			title: "Decisiones técnicas destacadas",
			meta: "Siete decisiones",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "Base de datos local cifrada",
					body: "Cifrada en reposo con custodia de la clave en el llavero del sistema, incluyendo una migración unidireccional que recifra una base de datos existente en texto plano conservando su versión de esquema.",
				},
				{
					title: "El modo offline como estado por defecto",
					body: "La cola de cambios pendientes, la ventana de debounce, la reconexión con backoff y la puesta al día por cursor viven en el cliente, de modo que el servidor sigue siendo un simple registro de cambios de solo anexado.",
				},
				{
					title: "Un árbol de UI, seis plataformas",
					body: "Las diferencias entre plataformas quedan aisladas en tablas de dependencias por destino y un puñado de bloques cfg; las notificaciones son el único subsistema con cuatro implementaciones nativas tras un mismo trait.",
				},
				{
					title: "URL base de la API en tiempo de compilación",
					body: "option_env! incrusta el endpoint en el bundle WASM, con la salvedad de la invalidación de caché documentada — un intercambio deliberado de configurabilidad en ejecución a cambio de una imagen SPA totalmente estática.",
				},
				{
					title: "API de una sola réplica por diseño",
					body: "La difusión SSE usa tokio::broadcast en proceso; escalar horizontalmente está documentado como algo que exige antes Redis o change streams de Mongo, en lugar de quedar como una limitación accidental.",
				},
				{
					title: "Telemetría opcional por variable de entorno",
					body: "La exportación está completamente desactivada salvo que se defina OTEL_EXPORTER_OTLP_ENDPOINT, así que desarrollo y CI se comportan igual que una build sin instrumentar.",
				},
				{
					title: "La integridad de la release como barrera dura",
					body: "El workflow falla cuando una etiqueta no coincide con Cargo.toml, porque los empaquetadores sellan la versión con independencia del nombre del artefacto.",
				},
			],
		},
	],

	gallery: [
		{ placeholder: "Captura de escritorio", ratio: "4 / 3" },
		{ placeholder: "Captura de móvil", ratio: "4 / 3" },
	],

	card: {
		kicker: "Destacado · código abierto (MIT)",
		title: "lightnotes",
		body: "Una app de notas local-first construida con Dioxus 0.7 — una base de código Rust que se publica en web, escritorio y móvil, con editor Markdown enriquecido, carpetas y etiquetas, y sincronización en segundo plano contra una API autoalojada.",
		meta: "Rust · Dioxus 0.7 · Web / escritorio / móvil",
		placeholder: "Captura de lightnotes",
		featured: true,
		tags: ["Rust", "Dioxus 0.7", "Web / escritorio / móvil"],
	},

	seo: {
		title: "lightnotes",
		description:
			"Una app local-first de notas y diario en una sola base de código Rust que llega a seis plataformas — Dioxus 0.7, SQLite cifrado, una API de sincronización REST + SSE en Axum y GitOps con ArgoCD sobre k3s.",
	},
};
