import { bold, mono, type Project, txt } from "~/content/types";

export const myaltafit: Project = {
	slug: "myaltafit",
	name: "My Altafit",
	kicker: "Proyecto freelance · Altafit Gym Club, España · 2018 – 2019",
	headline: ["Un portal de socios", "para un gimnasio"],
	lead: "Aplicación de página única orientada al socio de Altafit Gym Club — acceso y gestión de la cuenta, estado de la suscripción y la facturación, historial de accesos al gimnasio, reserva de clases con horario en vivo, cuadrante de actividades, ventajas para socios, programas de entrenamiento (GBody / GBox), el contenido del «Club Corredor», noticias y contacto con los clubes con mapas.",
	sublead:
		"Construido como proyecto freelance, fue el portal de socios en producción en su momento; el dominio aloja ahora una implementación posterior, no basada en React, de otro proveedor. El backend era una API de gestión de gimnasios de terceros — este proyecto abarca todo el cliente y la capa de integración contra ella.",
	link: { label: "myaltafit.provis.es", href: "https://myaltafit.provis.es/" },
	linkAsButton: true,

	hero: {
		placeholder: "Añade una captura de My Altafit",
		ratio: "16 / 9",
	},

	sheet: {
		title: "My Altafit — escala de la aplicación",
		badges: ["SPA en React 16", "Hoja 01"],
		note: "~7,2k líneas de JavaScript repartidas en 104 ficheros. Totalmente responsive, mobile-first, cuatro breakpoints. Interfaz íntegramente en español.",
		stats: [
			{ value: "27", label: "Páginas" },
			{ value: "37", label: "Rutas" },
			{ value: "19", label: "Endpoints REST consumidos" },
			{ value: "15", label: "Reducers" },
			{ value: "17", label: "Componentes reutilizables" },
			{ value: "11", label: "Modelos de dominio" },
			{ value: "104", label: "Ficheros" },
			{ value: "43", label: "Ficheros de styled-components" },
		],
	},

	sections: [
		{
			index: 1,
			title: "Arquitectura",
			meta: "Convenciones de Redux frente a boilerplate",
			kind: "bullets",
			items: [
				[
					bold("SPA con Create React App"),
					txt(
						" — enrutada en cliente, sin renderizado en servidor, desplegada como bundle estático.",
					),
				],
				[
					bold("Redux con una convención de acciones asíncronas"),
					txt(" — cada llamada a la API es una acción de promesa de "),
					mono("redux-promise-middleware"),
					txt(" que se expande en "),
					mono("FETCHING"),
					txt(" / "),
					mono("FETCHED"),
					txt(" / "),
					mono("ERROR"),
					txt(
						", de modo que los estados de carga, éxito y error son uniformes en toda la aplicación.",
					),
				],
				[
					bold("Factoría de reducers para el estado de la API"),
					txt(" — un único reducer de orden superior "),
					mono("getReducer(ACTION)"),
					txt(
						" genera la porción de estado de petición para los 19 endpoints, montada con ",
					),
					mono("combineReducers"),
					txt(" bajo "),
					mono("state.api"),
					txt(
						"; añadir un endpoint es una línea, no un fichero de reducer nuevo.",
					),
				],
				[
					bold("Estado dividido en tres capas"),
					txt(" — "),
					mono("state.api"),
					txt(" (ciclo de vida de las peticiones), "),
					mono("state.pages"),
					txt(" (estado de vista por pantalla) y "),
					mono("state.storage"),
					txt(" / "),
					mono("state.template"),
					txt(" / "),
					mono("state.noti"),
					txt(" (sesión, estructura del layout, notificaciones globales)."),
				],
				[
					bold("Middleware propio para la expiración de sesión"),
					txt(" — intercepta cualquier acción "),
					mono("*_ERROR"),
					txt(
						" estando autenticado, detecta la respuesta de token inválido del backend y despacha un logout global en lugar de dejar que cada página lo gestione.",
					),
				],
				[
					bold("Persistencia de sesión"),
					txt(" — token y perfil hidratados desde "),
					mono("localStorage"),
					txt(
						" al construir el store, mantenidos en sincronía al iniciar y cerrar sesión, y replicados en una clase estática ",
					),
					mono("Config"),
					txt(" para que la capa HTTP envíe siempre el token vigente."),
				],
				[
					bold("Guards de ruta por composición"),
					txt(" — el árbol de rutas "),
					mono("/users"),
					txt(" se envuelve en un componente conectado que redirige a "),
					mono("/auth/login"),
					txt(
						" cuando no hay sesión, de modo que ninguna página protegida repite la comprobación.",
					),
				],
				[
					bold("Clases de modelo de dominio"),
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
					txt(" y "),
					mono("contacto"),
					txt(
						" normalizan los payloads JSON de la API de terceros hacia formas estables en el cliente.",
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
					label: "Núcleo",
					value:
						"React 16.4, JavaScript (ES6+), Create React App 1.1 (react-scripts, Webpack/Babel)",
				},
				{
					label: "Enrutado",
					value:
						"React Router 4 + react-router-dom — árboles anidados de Switch/Route, áreas protegidas, redirecciones de respaldo y gestión del 404",
				},
				{
					label: "Estado",
					value:
						"Redux 4, React-Redux 5, redux-thunk, redux-promise-middleware, redux-logger y middleware propio",
				},
				{
					label: "Estilos",
					value:
						"styled-components 3 (usado en 43 ficheros) + una clase central theme.js de tokens de diseño — paleta de marca, 4 breakpoints de media query y helpers CSS reutilizables",
				},
				{
					label: "Kit de UI",
					value: "Grid y utilidades de Bootstrap 4, iconos de Font Awesome 4",
				},
				{
					label: "Responsive",
					value:
						"Layout mobile-first con react-responsive para la lógica de breakpoints a nivel de componente, más un menú móvil dedicado y una barra lateral desplegable",
				},
				{
					label: "Animación",
					value:
						"Animaciones de muelle con react-motion, componentes propios de animación al pasar el cursor y de vuelta arriba",
				},
				{
					label: "Calendario",
					value:
						"fullcalendar-reactwrapper — cuadrante de clases y agenda de sesiones reservables",
				},
				{
					label: "Mapas",
					value:
						"google-map-react — localizador de clubes en la página de contacto",
				},
				{
					label: "HTTP",
					value:
						"Axios con cabeceras por defecto globales (clave de plataforma, API key, tipo de contenido) tras un único módulo utils/http",
				},
				{
					label: "Fechas",
					value:
						"Moment.js — rangos de horarios, ventanas de reserva y formato del historial de accesos",
				},
				{
					label: "Notificaciones",
					value:
						"AlertifyJS más un componente propio de notificaciones dirigido por Redux",
				},
				{
					label: "Validación",
					value:
						"string-validator para comprobaciones de formularios y campos (login, contacto, recuperación de contraseña)",
				},
				{
					label: "Analítica",
					value:
						"React GA — seguimiento de páginas vistas en Google Analytics enlazado al router",
				},
				{
					label: "PWA",
					value:
						"Registro del service worker de CRA y manifiesto de aplicación web (instalable, visualización standalone)",
				},
				{
					label: "Idioma",
					value:
						"Interfaz íntegramente en español — rutas, textos y vocabulario de dominio",
				},
			],
		},
		{
			index: 3,
			title: "Áreas funcionales",
			meta: "27 páginas · 37 rutas",
			kind: "nameDesc",
			items: [
				{
					name: "auth",
					desc: "Inicio de sesión, recuperación de contraseña (olvido-password), creación de contraseña inicial y flujo de acceso temporal.",
				},
				{ name: "profile", desc: "Perfil del socio y datos personales." },
				{
					name: "suscripcion",
					desc: "Plan de suscripción, estado y detalle de facturación.",
				},
				{
					name: "accesos",
					desc: "Historial de entradas y salidas del gimnasio.",
				},
				{
					name: "reservas",
					desc: "Reserva y cancelación de clases entre clubes, salas y agendas; páginas de detalle de cada clase.",
				},
				{
					name: "cuadrante-actividades",
					desc: "Cuadrante de actividades y descripciones de clases con indicadores de intensidad.",
				},
				{
					name: "ventajas",
					desc: "Ventajas para socios y beneficios de partners.",
				},
				{
					name: "entrenamientos",
					desc: "Secciones de programas de entrenamiento, incluidos GBody y GBox.",
				},
				{
					name: "club-corredor",
					desc: "Contenido del club de corredores con filtrado por categoría, scroll infinito y vistas de detalle, protegido por una comprobación de acceso.",
				},
				{
					name: "noticias / contacto",
					desc: "Noticias y formulario de contacto del club con mapa.",
				},
			],
		},
		{
			index: 4,
			title: "Servicios de apoyo y entrega",
			meta: "API simulada · build de CRA",
			kind: "cards",
			columns: 2,
			items: [
				{
					title: "API simulada / proxy",
					body: [
						txt(
							"Express 4 sobre Node, usado para desarrollar contra una superficie local estable mientras la API del gimnasio de terceros cambiaba. Reforzado con Helmet, lista blanca de CORS para los orígenes de desarrollo local, ",
						),
						mono("body-parser"),
						txt(", registro de peticiones con Morgan y "),
						mono("request"),
						txt(
							" para hacer de proxy hacia el origen, todo tras un pipeline de vigilancia con Grunt y Nodemon y linting con JSHint.",
						),
					],
				},
				{
					title: "Tooling e integración",
					body: [
						txt(
							"Yarn con lockfile versionado y el pipeline de build de CRA produciendo un bundle estático con hash servido tras un servidor web. Integrado contra dos servicios de terceros: el backend REST ",
						),
						mono("userapi"),
						txt(" ("),
						mono("/v2/…"),
						txt(
							", autenticación por token en la ruta con cabeceras de plataforma y API key) y un servidor de medios y ficheros aparte para imágenes y documentos.",
						),
					],
				},
			],
		},
		{
			index: 5,
			title: "Decisiones técnicas destacadas",
			meta: "Seis decisiones",
			kind: "cards",
			columns: 2,
			titleStyle: "kicker",
			items: [
				{
					title: "Un reducer genérico para todos los endpoints",
					body: "La convención de tipos de acción FETCHING/FETCHED/ERROR junto a una factoría de reducers eliminó unos 19 reducers casi idénticos e hizo que la gestión de carga y error de cada pantalla fuese idéntica por construcción.",
				},
				{
					title: "Gestión centralizada de la expiración de sesión",
					body: "La invalidación del token se captura una sola vez en la cadena de middleware de Redux y se convierte en un logout global limpio, en lugar de reimplementarse en la rama de error de cada página.",
				},
				{
					title: "Hidratación de la sesión al crear el store",
					body: "Leer localStorage antes de createStore hace que la aplicación arranque ya autenticada, sin parpadeo de login ni redirección tras el montaje.",
				},
				{
					title: "styled-components tematizados a escala",
					body: "Una clase estática Styles suministra colores, breakpoints y helpers (como un mixin truncate(width)) a 43 ficheros de styled-components, manteniendo una única fuente de verdad visual sin reescribir el framework de CSS.",
				},
				{
					title: "Capa adaptadora sobre una API de terceros",
					body: "Las clases de modelo y una instancia de Axios envuelta aíslan la aplicación de una API externa, con nombres en español y token en la URL, cuya forma el proyecto no controlaba.",
				},
				{
					title: "Contenido con scroll infinito",
					body: "Filtrado por categorías y peticiones paginadas, apoyados en la misma maquinaria genérica de estado de API que el resto de pantallas.",
				},
			],
		},
		{
			index: 6,
			title: "Retrospectiva",
			meta: "Construido en 2018 – 2019",
			kind: "prose",
			paragraphs: [
				[
					txt(
						"Construido sobre el stack vigente entonces: componentes de clase de React 16, Redux con thunks y middleware de promesas, CRA 1.x y Bootstrap 4. Hoy los equivalentes serían componentes función con hooks, TanStack Query o RTK Query en lugar de los reducers de estado de petición hechos a mano, TypeScript para los modelos de la API y Vite en vez de ",
					),
					mono("react-scripts"),
					txt(
						" — las separaciones arquitectónicas (capa adaptadora, estado de petición genérico, gestión de sesión a nivel de middleware) se trasladan sin fricción a esas herramientas modernas.",
					),
				],
			],
		},
	],

	gallery: [
		{ placeholder: "Pantalla de reservas o cuadrante", ratio: "4 / 3" },
		{ placeholder: "Pantalla móvil", ratio: "4 / 3" },
	],

	card: {
		kicker: "myaltafit.provis.es · 2018–2019",
		title: "My Altafit",
		body: "Portal de socios para una cadena de gimnasios española — reservas, facturación e historial de accesos sobre una API de terceros, 27 páginas en 37 rutas.",
		meta: "React · Redux · styled-components",
		placeholder: "Captura de MyAltafit",
	},

	seo: {
		title: "My Altafit",
		description:
			"Un portal de socios para una cadena de gimnasios española — 27 páginas en 37 rutas sobre React 16 y Redux, con una factoría de reducers que cubre todos los endpoints y una capa adaptadora sobre una API de terceros.",
	},
};
