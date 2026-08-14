import i18next from "i18next";
import { type ReactNode, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import type { Locale } from "~/content/types";
import { resources } from "./translations";

export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: unknown): value is Locale {
	return typeof value === "string" && LOCALES.includes(value as Locale);
}

function createInstance(language: Locale) {
	const instance = i18next.createInstance();

	instance.init({
		resources,
		lng: language,
		fallbackLng: DEFAULT_LOCALE,
		interpolation: { escapeValue: false },
	});

	return instance;
}

type I18nProviderProps = {
	language: Locale;
	children: ReactNode;
};

/**
 * Creates the i18next instance per render tree rather than as a module
 * singleton: on the server that means one instance per request, so two
 * concurrent requests in different languages cannot overwrite each other's
 * `lng`. The language itself comes from the `portfolio_lang` cookie, read in the
 * root loader — which is what lets SSR emit the right language with no
 * hydration flash.
 */
export function I18nProvider({ language, children }: I18nProviderProps) {
	const [instance] = useState(() => createInstance(language));

	useEffect(() => {
		if (instance.language !== language) {
			instance.changeLanguage(language);
		}
	}, [instance, language]);

	return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
}

export function useAppTranslation() {
	return useTranslation();
}
