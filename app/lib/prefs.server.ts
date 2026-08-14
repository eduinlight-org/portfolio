import type { Locale } from "~/content/types";
import { DEFAULT_LOCALE, isLocale } from "./i18n";
import { LANG_COOKIE_NAME } from "./prefs.constants";

/**
 * Reads the cookie straight off the request header rather than through
 * `createCookie`, which base64-JSON-encodes its values — the language toggle
 * writes a plain `es` from the browser, and that would never survive the round
 * trip. A single enum-valued preference does not need the extra encoding.
 */
export async function getLocale(request: Request): Promise<Locale> {
	const header = request.headers.get("Cookie");
	if (!header) return DEFAULT_LOCALE;

	for (const part of header.split(";")) {
		const [name, ...rest] = part.trim().split("=");
		if (name !== LANG_COOKIE_NAME) continue;

		const value = decodeURIComponent(rest.join("="));
		return isLocale(value) ? value : DEFAULT_LOCALE;
	}

	return DEFAULT_LOCALE;
}
