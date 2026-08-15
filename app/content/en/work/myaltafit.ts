import { bold, mono, type Project, txt } from "~/content/types";

export const myaltafit: Project = {
	slug: "myaltafit",
	name: "My Altafit",
	kicker: "Freelance project · Altafit Gym Club, Spain · 2018 – 2019",
	headline: ["A member portal for", "a Spanish gym chain"],
	lead: "Member-facing single-page application for Altafit Gym Club — login and account management, subscription and billing status, gym access history, class booking with a live schedule, activity timetable, member perks, training programmes (GBody / GBox), the “Club Corredor” content feed, news and club contact with maps.",
	sublead:
		"The production member portal for Altafit Gym Club, built solo as a freelance project alongside full-time work at Melkart. The backend was a third-party gym-management API — I built the entire client and the integration layer over it.",
	link: { label: "myaltafit.provis.es", href: "https://myaltafit.provis.es/" },
	linkAsButton: true,

	hero: {
		placeholder: "Member dashboard — screenshot unavailable",
		ratio: "16 / 9",
	},

	sheet: {
		title: "My Altafit — application scale",
		badges: ["React 16 SPA", "Sheet 01"],
		note: "~7.2k lines of JavaScript across 104 files. Fully responsive, mobile-first, four breakpoints. Spanish UI throughout.",
		stats: [
			{ value: "27", label: "Pages" },
			{ value: "37", label: "Routes" },
			{ value: "19", label: "REST endpoints consumed" },
			{ value: "11", label: "Domain models" },
		],
	},

	sections: [
		{
			index: 1,
			title: "Architecture",
			meta: "Redux conventions over boilerplate",
			kind: "bullets",
			items: [
				[
					bold("Create React App SPA"),
					txt(
						" — client-side routed, no server rendering, deployed as a static bundle.",
					),
				],
				[
					bold("Redux with an async-action convention"),
					txt(" — every API call is a "),
					mono("redux-promise-middleware"),
					txt(" promise action expanding into "),
					mono("FETCHING"),
					txt(" / "),
					mono("FETCHED"),
					txt(" / "),
					mono("ERROR"),
					txt(
						", so loading, success and error states are uniform across the whole app.",
					),
				],
				[
					bold("Reducer factory for API state"),
					txt(" — a single "),
					mono("getReducer(ACTION)"),
					txt(
						" higher-order reducer generates the request-state slice for all 19 endpoints, ",
					),
					mono("combineReducers"),
					txt("-mounted under "),
					mono("state.api"),
					txt("; adding an endpoint is one line, not a new reducer file."),
				],
				[
					bold("Three-layer state split"),
					txt(" — "),
					mono("state.api"),
					txt(" (raw request lifecycle), "),
					mono("state.pages"),
					txt(" (per-screen view state), and "),
					mono("state.storage"),
					txt(" / "),
					mono("state.template"),
					txt(" / "),
					mono("state.noti"),
					txt(" (session, layout chrome, global notifications)."),
				],
				[
					bold("Custom middleware for session expiry"),
					txt(" — intercepts any "),
					mono("*_ERROR"),
					txt(
						" action while authenticated, detects the backend's invalid-token response, and dispatches a global logout instead of letting each page handle it.",
					),
				],
				[
					bold("Session persistence"),
					txt(" — token and profile hydrated from "),
					mono("localStorage"),
					txt(
						" at store construction, kept in sync on login/logout, and mirrored into a static ",
					),
					mono("Config"),
					txt(" so the HTTP layer always sends the current token."),
				],
				[
					bold("Route guards by composition"),
					txt(" — the "),
					mono("/users"),
					txt(
						" route tree is wrapped in a connected component that redirects to ",
					),
					mono("/auth/login"),
					txt(" when unauthenticated, so no protected page repeats the check."),
				],
				[
					bold("Domain model classes"),
					txt(" — "),
					mono("profile"),
					txt(", "),
					mono("reserva"),
					txt(", "),
					mono("acceso"),
					txt(", "),
					mono("club"),
					txt(", "),
					mono("evento"),
					txt(", "),
					mono("contenido"),
					txt(", "),
					mono("categoria"),
					txt(", "),
					mono("noti"),
					txt(", "),
					mono("ajax"),
					txt(", "),
					mono("login"),
					txt(", "),
					mono("contacto"),
					txt(
						" normalize the third-party API's Spanish JSON payloads into stable client-side shapes.",
					),
				],
			],
		},
		{
			index: 2,
			title: "Frontend",
			meta: "React 16.4 · Redux 4",
			kind: "rows",
			rows: [
				{
					label: "Core",
					value:
						"React 16.4, JavaScript (ES6+), Create React App 1.1 (react-scripts, Webpack/Babel)",
				},
				{
					label: "Routing",
					value:
						"React Router 4 + react-router-dom — nested Switch/Route trees, guarded areas, redirect fallbacks, 404 handling",
				},
				{
					label: "State",
					value:
						"Redux 4, React-Redux 5, redux-thunk, redux-promise-middleware, redux-logger, custom middleware",
				},
				{
					label: "Styling",
					value:
						"styled-components 3 (used in 43 files) + a central theme.js design-token class — brand palette, 4 media-query breakpoints, reusable CSS helpers",
				},
				{
					label: "UI kit",
					value: "Bootstrap 4 grid/utilities, Font Awesome 4 icons",
				},
				{
					label: "Responsive",
					value:
						"Mobile-first layout with react-responsive for component-level breakpoint logic, plus a dedicated mobile menu and slide-out left bar",
				},
				{
					label: "Animation",
					value:
						"react-motion spring animations, custom hover-animation and scroll-to-top components",
				},
				{
					label: "Calendar",
					value:
						"fullcalendar-reactwrapper — class timetable and bookable-session agenda",
				},
				{
					label: "Maps",
					value: "google-map-react — club locator on the contact page",
				},
				{
					label: "HTTP",
					value:
						"Axios with global default headers (platform key, API key, content type) behind a single utils/http module",
				},
				{
					label: "Dates",
					value:
						"Moment.js — schedule ranges, booking windows, access-history formatting",
				},
				{
					label: "Notifications",
					value: "AlertifyJS + an in-house Redux-driven notification component",
				},
				{
					label: "Validation",
					value:
						"string-validator for form and field checks (login, contact, password recovery)",
				},
				{
					label: "Analytics",
					value:
						"React GA — Google Analytics page-view tracking wired into the router",
				},
				{
					label: "PWA",
					value:
						"CRA service-worker registration + web app manifest (installable, standalone display)",
				},
				{
					label: "Language",
					value: "Spanish UI throughout — routes, copy and domain vocabulary",
				},
			],
		},
		{
			index: 3,
			title: "Feature areas",
			meta: "27 pages · 37 routes",
			kind: "nameDesc",
			items: [
				{
					name: "auth",
					desc: "Login, password recovery (olvido-password), first-time password creation, temporary-access flow.",
				},
				{ name: "profile", desc: "Member profile and personal data." },
				{
					name: "suscripcion",
					desc: "Subscription plan, status and billing detail.",
				},
				{ name: "accesos", desc: "Gym entry/exit history." },
				{
					name: "reservas",
					desc: "Booking and cancelling classes across clubs, rooms and agendas; class detail pages.",
				},
				{
					name: "cuadrante-actividades",
					desc: "Activity timetable and class descriptions with intensity indicators.",
				},
				{ name: "ventajas", desc: "Member perks and partner benefits." },
				{
					name: "entrenamientos",
					desc: "Training programme sections, including GBody and GBox.",
				},
				{
					name: "club-corredor",
					desc: "Runners-club content feed with category filtering, infinite scroll and detail views, gated by an entitlement check.",
				},
				{
					name: "noticias / contacto",
					desc: "News feed and club contact form with map.",
				},
			],
		},
		{
			index: 4,
			title: "Supporting services & delivery",
			meta: "Mock API · CRA build",
			kind: "cards",
			columns: 2,
			items: [
				{
					title: "Mock / proxy API",
					body: [
						txt(
							"Express 4 on Node, used to develop against a stable local surface while the third-party gym API was in flux. Hardened with Helmet, CORS whitelisting for local dev origins, ",
						),
						mono("body-parser"),
						txt(", Morgan request logging and "),
						mono("request"),
						txt(
							" for upstream proxying, behind a Grunt + Nodemon watch pipeline with JSHint linting.",
						),
					],
				},
				{
					title: "Tooling & integration",
					body: [
						txt(
							"Yarn with a committed lockfile and the CRA build pipeline producing a hashed static bundle served behind a web server. Integrated against two third-party services: the ",
						),
						mono("userapi"),
						txt(" REST backend ("),
						mono("/v2/…"),
						txt(
							", token-in-path auth with platform and API-key headers) and a separate media/file server for images and documents.",
						),
					],
				},
			],
		},
		{
			index: 5,
			title: "Engineering highlights",
			meta: "Six decisions",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "One generic reducer for every endpoint",
					body: "The FETCHING/FETCHED/ERROR action-type convention plus a reducer factory removed ~19 near-identical reducers and made every screen's loading and error handling identical by construction.",
				},
				{
					title: "Centralized session-expiry handling",
					body: "Token invalidation is caught once in the Redux middleware pipeline and turned into a clean global logout, rather than re-implemented in every page's error branch.",
				},
				{
					title: "Store-time session hydration",
					body: "Reading localStorage before createStore means the app boots already authenticated, with no login flash or post-mount redirect.",
				},
				{
					title: "Themed styled-components at scale",
					body: "A static Styles class supplies colors, breakpoints and helpers (such as a truncate(width) mixin) to 43 styled-component files, keeping a single source of visual truth without a CSS framework rewrite.",
				},
				{
					title: "Adapter layer over a third-party API",
					body: "Model classes and a wrapped Axios instance isolate the app from an external, Spanish-named, token-in-URL API whose shape the project did not control.",
				},
				{
					title: "Infinite-scroll content feed",
					body: "Category filtering and paginated fetches, backed by the same generic API-state machinery as every other screen.",
				},
			],
		},
		{
			index: 6,
			title: "Retrospective",
			meta: "Built 2018 – 2019",
			kind: "prose",
			paragraphs: [
				"The portal ran in production for Altafit's members; the domain now hosts a later, non-React implementation by another vendor, which is why this page carries no screenshots.",
				[
					txt(
						"It was built on the stack that was current then: React 16 class components, Redux with thunks and promise middleware, CRA 1.x, Bootstrap 4. Today's equivalents would be function components with hooks, TanStack Query or RTK Query in place of the custom request-state reducers, TypeScript for the API models and Vite instead of ",
					),
					mono("react-scripts"),
					txt(
						" — the architectural separations (adapter layer, generic request state, middleware-level session handling) map cleanly onto those modern tools.",
					),
				],
			],
		},
	],

	gallery: [
		{ placeholder: "Class booking — screenshot unavailable", ratio: "4 / 3" },
		{ placeholder: "Mobile view — screenshot unavailable", ratio: "4 / 3" },
	],

	card: {
		kicker: "myaltafit.provis.es · 2018–2019",
		title: "My Altafit",
		body: "Member portal for a Spanish gym chain — booking, billing and access history over a third-party API, 27 pages across 37 routes.",
		meta: "React · Redux · styled-components",
		placeholder: "My Altafit — no screenshot",
	},

	seo: {
		title: "My Altafit",
		description:
			"A member portal for a Spanish gym chain — 27 pages across 37 routes on React 16 and Redux, over a third-party gym-management API.",
	},
};
