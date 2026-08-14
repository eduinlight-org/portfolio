import {
	isRouteErrorResponse,
	Link,
	Links,
	type LinksFunction,
	Meta,
	type MetaFunction,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useRouteError,
	useRouteLoaderData,
} from "react-router";
import type { Locale } from "~/content/types";
import {
	DEFAULT_LOCALE,
	I18nProvider,
	isLocale,
	useAppTranslation,
} from "~/lib/i18n";
import { getLocale } from "~/lib/prefs.server";
import stylesheet from "./styles.css?url";

export const links: LinksFunction = () => [
	{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
	{ rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => [
	{ charSet: "utf-8" },
	{ name: "viewport", content: "width=device-width, initial-scale=1" },
];

export async function loader({ request }: { request: Request }) {
	return { locale: await getLocale(request) };
}

type DocumentProps = {
	locale: Locale;
	children: React.ReactNode;
};

function Document({ locale, children }: DocumentProps) {
	return (
		<html lang={locale}>
			<head>
				<Meta />
				<Links />
			</head>
			<body className="bg-paper text-ink antialiased">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function Root() {
	const { locale } = useLoaderData<typeof loader>();

	return (
		<Document locale={locale}>
			<I18nProvider language={locale}>
				<Outlet />
			</I18nProvider>
		</Document>
	);
}

function ErrorPage({ isNotFound }: { isNotFound: boolean }) {
	const { t } = useAppTranslation();

	return (
		<main className="flex min-h-dvh items-center justify-center px-6">
			<div className="text-center">
				<h1 className="m-0 font-display font-bold text-[clamp(48px,8vw,92px)] uppercase leading-none tracking-[0.01em]">
					{isNotFound ? "404" : t("error.genericTitle")}
				</h1>
				<p className="mt-5 text-[18px] text-ash-700">
					{isNotFound ? t("error.notFoundBody") : t("error.genericBody")}
				</p>
				<Link
					to="/"
					className="mt-7 inline-block font-display font-semibold text-[13px] uppercase tracking-[0.14em]"
				>
					← {t("error.backHome")}
				</Link>
			</div>
		</main>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();
	const isNotFound = isRouteErrorResponse(error) && error.status === 404;

	// The root loader may itself be what failed, in which case there is no data
	// to read — fall back to the default locale rather than crashing the boundary.
	const rootData = useRouteLoaderData<typeof loader>("root");
	const locale = isLocale(rootData?.locale) ? rootData.locale : DEFAULT_LOCALE;

	if (!isNotFound && !isRouteErrorResponse(error)) {
		console.error(error);
	}

	return (
		<Document locale={locale}>
			<I18nProvider language={locale}>
				<ErrorPage isNotFound={isNotFound} />
			</I18nProvider>
		</Document>
	);
}
