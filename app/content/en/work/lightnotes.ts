import { bold, mono, type Project, txt } from "~/content/types";

export const lightnotes: Project = {
	slug: "lightnotes",
	name: "lightnotes",
	kicker: "eduinlight-org · personal product · open source (MIT)",
	headline: ["One rust codebase", "Six platforms"],
	lead: "LightNotes is a local-first notes & diary app with a WYSIWYG Markdown editor, folders & tags, reminders, offline-first encrypted local storage, and background sync to a self-hosted REST + SSE API, deployed to Kubernetes via GitOps.",
	link: {
		label: "Source on GitHub",
		href: "https://github.com/eduinlight-org/lightnotes",
	},
	linkAsButton: true,

	hero: {
		placeholder: "Drop a LightNotes screenshot",
		ratio: "16 / 9",
	},

	sheet: {
		title: "LightNotes — workspace scale",
		badges: ["Rust 2021", "Sheet 01"],
		note: "~22k lines of Rust across 317 files. Six platform targets: Web/WASM, macOS, Windows, Linux, Android, iOS.",
		stats: [
			{ value: "6", label: "Platform targets" },
			{ value: "11", label: "Crates (5 apps + 6 shared)" },
			{ value: "77", label: "UI components" },
			{ value: "~22k", label: "Lines of Rust" },
			{ value: "12", label: "REST / SSE endpoints" },
			{ value: "78", label: "Tests" },
			{ value: "9", label: "CI/CD workflows" },
			{ value: "400", label: "i18n message keys" },
		],
	},

	sections: [
		{
			index: 1,
			title: "Architecture",
			meta: "Cargo workspace monorepo",
			kind: "bullets",
			items: [
				[
					bold("Cargo workspace monorepo"),
					txt(
						" — 5 application crates + 6 shared crates, one source tree compiled to five binaries via Cargo feature flags (",
					),
					mono("web"),
					txt(" / "),
					mono("desktop"),
					txt(" / "),
					mono("mobile"),
					txt(" / "),
					mono("server"),
					txt(") and "),
					mono("cfg(target_os)"),
					txt(" / "),
					mono("cfg(target_arch)"),
					txt(" dependency tables."),
				],
				[
					bold("Thin platform shells"),
					txt(" — "),
					mono("apps/web"),
					txt(", "),
					mono("apps/desktop"),
					txt(" and "),
					mono("apps/mobile"),
					txt(" are ~50-line binaries around a shared "),
					mono("packages/app"),
					txt(
						"; the layout adapts per platform (sidebar + top bar on desktop, compact header + bottom tabs on mobile).",
					),
				],
				[
					bold("Hexagonal API with a CQRS split"),
					txt(" — "),
					mono("domain/"),
					txt(" (entities + port traits) → "),
					mono("application/"),
					txt(" ("),
					mono("commands/"),
					txt(", "),
					mono("queries/"),
					txt(") → "),
					mono("infrastructure/"),
					txt(" (Mongo repositories, auth, telemetry, migrations) → "),
					mono("interface/http/"),
					txt("; the HTTP layer never touches MongoDB directly."),
				],
				[
					bold("Shared DTO crate as the sync contract"),
					txt(" — "),
					mono("sync-dto"),
					txt(
						" is compiled verbatim into both client and server, so the wire format cannot drift; ",
					),
					mono("api-sdk"),
					txt(" is the typed client over it."),
				],
				[
					bold("Local-first by default"),
					txt(
						" — every read is served from the on-device database; sync is a background reconciliation loop, and the app is fully functional with the API unreachable.",
					),
				],
				[
					bold("Convention-driven component layout"),
					txt(" — every component is a directory ("),
					mono("component.rs"),
					txt(" renders, "),
					mono("use_component.rs"),
					txt(" owns state and handlers), with an explicit "),
					mono("FooProps"),
					txt(" struct pattern enforced repo-wide."),
				],
			],
		},
		{
			index: 2,
			title: "Crates in the workspace",
			meta: "5 apps · 6 packages",
			kind: "nameDesc",
			items: [
				{
					name: "apps/web",
					desc: "Notes app, WASM SPA shell (nginx-served in production).",
				},
				{
					name: "apps/desktop",
					desc: "Notes app, native shell for macOS / Windows / Linux.",
				},
				{ name: "apps/mobile", desc: "Notes app, Android / iOS shell." },
				{
					name: "apps/landing",
					desc: "SSR marketing site (Dioxus fullstack, standalone server binary).",
				},
				{
					name: "apps/api",
					desc: "Axum REST + SSE sync backend over MongoDB.",
				},
				{
					name: "packages/app",
					desc: "Shared routes, views, 32 app components, and global state (sync, session, scheduler, reminders).",
				},
				{
					name: "packages/ui",
					desc: "45 generic, app-agnostic presentational components + theme.",
				},
				{
					name: "packages/editor",
					desc: "Rich-text / Markdown editor engine.",
				},
				{
					name: "packages/store-sdk",
					desc: "Encrypted on-device persistence and change queue.",
				},
				{ name: "packages/api-sdk", desc: "Typed REST + SSE client." },
				{
					name: "packages/sync-dto",
					desc: "Shared client/server sync contract types.",
				},
			],
		},
		{
			index: 3,
			title: "Client — shared Rust UI",
			meta: "Dioxus 0.7",
			kind: "rows",
			rows: [
				{
					label: "Core",
					value:
						"Rust 2021 (stable), Dioxus 0.7 — signals, RSX, #[component], hooks, context",
				},
				{
					label: "Routing",
					value:
						"Dioxus Router — type-safe #[derive(Routable)] enum, 4 levels of nested #[layout]",
				},
				{
					label: "Render targets",
					value:
						"WebAssembly (wasm32-unknown-unknown), WKWebView, WebView2, WebKitGTK",
				},
				{
					label: "SSR",
					value:
						"Dioxus Fullstack — server-side rendering + hydration for the landing site",
				},
				{
					label: "Components",
					value:
						"dioxus-primitives (headless/accessible) wrapped into a 45-component in-house design system (packages/ui)",
				},
				{
					label: "Styling",
					value:
						"Tailwind CSS 4 — compiled by the Dioxus CLI from Rust sources, no Node/npm step; dark/light themes + 6 accent colors",
				},
				{
					label: "Editor",
					value:
						"taino-edit (core + extensions) — ProseMirror-style schema, 14 extensions, WYSIWYG round-tripping to Markdown",
				},
				{
					label: "i18n",
					value:
						"dioxus-i18n + unic-langid + Fluent — 400 message keys, English & Spanish",
				},
				{ label: "Icons / time", value: "dioxus-icons, time, web-time" },
				{
					label: "JS interop",
					value:
						"document::eval bridges for Google Sign-In (web), splash screen, timezone offset, accent theming",
				},
				{
					label: "Notifications",
					value:
						"notify-rust (Linux), windows + WinRT toasts, objc2-user-notifications (macOS/iOS), jni + ndk-context (Android)",
				},
				{
					label: "Testing",
					value:
						"dioxus-ssr component render tests, unit tests across app / ui / sync-dto",
				},
			],
		},
		{
			index: 4,
			title: "Local-first storage & sync",
			meta: "Encrypted at rest",
			kind: "rows",
			rows: [
				{
					label: "Database",
					value:
						"SQLite via sqlx 0.9 — async pooled queries, WAL, PRAGMA user_version schema versioning",
				},
				{
					label: "Encryption",
					value:
						"SQLCipher (libsqlite3-sys, bundled + vendored OpenSSL) — full DB encrypted at rest under a random 256-bit key, with a plaintext → encrypted migration path",
				},
				{
					label: "Key custody",
					value:
						"keyring — Keychain (macOS/iOS), Credential Manager (Windows), Secret Service (Linux), app-private storage (Android)",
				},
				{
					label: "Sync engine",
					value:
						"Custom change-log reconciliation: offline pending-change queue, debounced batching, cursor-based catch-up, exponential-backoff reconnect, last-write-wins conflict resolution, manual offline toggle",
				},
				{
					label: "Transport",
					value:
						"api-sdk — hand-rolled REST + SSE client (reqwest/rustls, async-stream, futures-util) compiling for both native and wasm",
				},
				{
					label: "Scheduling",
					value:
						"tokio timers on native, gloo-timers on wasm; local reminder scheduler feeding OS notification centers",
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
					value: "Rust 2021, Tokio 1 (multi-thread, signal handling)",
				},
				{
					label: "Framework",
					value: "Axum 0.8, Tower / tower-http (CORS, body limits, tracing)",
				},
				{
					label: "Database",
					value:
						"MongoDB 7 — mongodb driver + mongodm, hand-written versioned index/collection migrations",
				},
				{
					label: "Realtime",
					value:
						"Server-Sent Events, fanned out in-process via tokio::broadcast + tokio-stream",
				},
				{
					label: "Auth",
					value:
						"Google OAuth 2.0 / OIDC — web ID-token flow and native authorization-code flow with PKCE, plus short-lived auth tickets",
				},
				{
					label: "Sessions",
					value:
						"JWT (jsonwebtoken, RustCrypto backend) — access/refresh rotation, revocation, TTL-configurable",
				},
				{
					label: "Security",
					value:
						"axum-helmet security headers, 2 MB request body limit, rustls-only TLS, fail-fast secret validation at startup",
				},
				{
					label: "Observability",
					value:
						"OpenTelemetry (OTLP HTTP/protobuf) — traces, metrics & logs; tracing + tracing-subscriber + tracing-opentelemetry, JSON output, log rotation",
				},
				{
					label: "Metrics",
					value:
						"http.server.request.duration, http.server.active_requests, db.client.operation.duration, lightnotes.sse.active_streams, lightnotes.changes.processed, lightnotes.auth.attempts, plus process CPU/memory/uptime",
				},
				{
					label: "Health",
					value:
						"/healthz liveness, /readyz MongoDB-backed readiness; graceful SIGTERM drain + telemetry flush",
				},
				{
					label: "Config",
					value: "dotenvy, environment-driven, serde / serde_json throughout",
				},
			],
		},
		{
			index: 6,
			title: "Infrastructure & DevOps",
			meta: "k3s · ArgoCD · 9 workflows",
			kind: "bullets",
			items: [
				[
					bold("Kubernetes (k3s) with ArgoCD GitOps"),
					txt(" — a separate "),
					mono("lightnotes-cd"),
					txt(" repo holds "),
					mono("AppProject"),
					txt(" + "),
					mono("Application"),
					txt(
						" and 12 Kustomize-managed manifests, with automated sync, prune, self-heal, server-side apply and retry backoff.",
					),
				],
				[
					bold("Kustomize image bumps from CI"),
					txt(" — app-repo pushes build and push "),
					mono("ghcr.io/…:<sha>"),
					txt(", then a reusable "),
					mono("cd-bump"),
					txt(" workflow runs "),
					mono("kustomize edit set image"),
					txt(
						" against the CD repo (shared concurrency group, rebase-and-retry); ArgoCD picks it up on the next poll.",
					),
				],
				[
					bold("frp reverse tunnel"),
					txt(
						" — three services exposed publicly from a cluster with no ingress controller and no open inbound port; TLS terminates at the edge.",
					),
				],
				[
					bold("Docker / Docker Compose"),
					txt(" — slim runtime images ("),
					mono("debian:trixie-slim"),
					txt(" for Rust binaries, "),
					mono("nginx:1.27-alpine"),
					txt(" for the SPA with "),
					mono("try_files"),
					txt(
						" fallback, gzip and hashed-asset cache tiers); Compose brings up MongoDB and mongo-express locally.",
					),
				],
				[
					bold("GitHub Actions — 9 workflows"),
					txt(
						" — CI matrix (Linux/macOS/Windows plus a wasm target check), 3 deploy pipelines, 4 desktop-release workflows and 1 reusable CD-bump, with ",
					),
					mono("rust-cache"),
					txt(", pinned toolchains and "),
					mono("workflow_call"),
					txt(" fan-out."),
				],
				[
					bold("Self-hosted containerized runner"),
					txt(" — a homelab runner built from "),
					mono("ubuntu:22.04"),
					txt(
						" with WebKitGTK deps baked in, which is what pins the shipped glibc floor.",
					),
				],
				[
					bold("Tag-driven multi-platform releases"),
					txt(
						" — one tag produces one draft GitHub Release containing per-arch ",
					),
					mono(".dmg"),
					txt(", "),
					mono(".msi"),
					txt(", NSIS "),
					mono(".exe"),
					txt(", "),
					mono(".AppImage"),
					txt(", "),
					mono(".deb"),
					txt(", "),
					mono(".rpm"),
					txt(" and "),
					mono("SHA256SUMS"),
					txt("; it publishes nothing unless every platform succeeds."),
				],
				[
					bold("Code signing"),
					txt(
						" — Apple Developer ID signing, notarization and stapling (hardened runtime with JIT entitlements for JavaScriptCore), Windows Authenticode with RFC 3161 timestamping, and Android APK/AAB via a Gradle post-processing step with generated icon sets.",
					),
				],
				[
					bold("Grafana / Tempo / Prometheus / Loki"),
					txt(" ("),
					mono("grafana/otel-lgtm"),
					txt(") as the telemetry backend, with W3C "),
					mono("traceparent"),
					txt(" propagation and semconv-named spans; "),
					bold("make"),
					txt(
						" is the single entry point for every dev, build and bundle target.",
					),
				],
			],
		},
		{
			index: 7,
			title: "Engineering highlights",
			meta: "Seven decisions",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "Encrypted local database",
					body: "Encrypted at rest with OS-keychain key custody, including a one-way migration that re-encrypts an existing plaintext database in place while preserving its schema version.",
				},
				{
					title: "Offline as the default state",
					body: "The pending-change queue, debounce window, backoff reconnect and cursor catch-up all live client-side, so the server stays a dumb append-only change log.",
				},
				{
					title: "One UI tree, six platforms",
					body: "Platform differences are isolated to per-target dependency tables and a handful of cfg blocks; notifications are the only subsystem with four native implementations behind one trait.",
				},
				{
					title: "Build-time API base URL",
					body: "option_env! bakes the endpoint into the WASM bundle, with the cache-busting caveat documented — a deliberate trade of runtime configurability for a fully static SPA image.",
				},
				{
					title: "Single-replica API by design",
					body: "SSE fan-out is in-process tokio::broadcast; scaling out is documented as requiring Redis or Mongo change streams first, rather than left as an accidental constraint.",
				},
				{
					title: "Telemetry opt-in by env var",
					body: "Export is entirely off unless OTEL_EXPORTER_OTLP_ENDPOINT is set, so dev and CI behave identically to a pre-instrumentation build.",
				},
				{
					title: "Release integrity as a hard gate",
					body: "The workflow fails when a tag disagrees with Cargo.toml, because bundlers stamp the version independently of the artifact filename.",
				},
			],
		},
	],

	gallery: [
		{ placeholder: "Desktop screenshot", ratio: "4 / 3" },
		{ placeholder: "Mobile screenshot", ratio: "4 / 3" },
	],

	card: {
		kicker: "Featured · open source (MIT)",
		title: "lightnotes",
		body: "A local-first notes app built with Dioxus 0.7 — one Rust codebase shipping to web, desktop, and mobile, with a rich Markdown editor, folders & tags, and background sync to a self-hosted API.",
		meta: "Rust · Dioxus 0.7 · Web / desktop / mobile",
		placeholder: "lightnotes screenshot",
		featured: true,
		tags: ["Rust", "Dioxus 0.7", "Web / desktop / mobile"],
	},

	seo: {
		title: "lightnotes",
		description:
			"A local-first notes and diary app in one Rust codebase shipping to six platforms — Dioxus 0.7, encrypted SQLite, an Axum REST + SSE sync API and ArgoCD GitOps on k3s.",
	},
};
