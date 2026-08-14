import { useRevalidator } from "react-router";
import type { Locale } from "~/content/types";
import { useAppTranslation } from "~/lib/i18n";
import { LANG_COOKIE_NAME } from "~/lib/prefs.constants";

type LanguageToggleProps = {
	locale: Locale;
	className?: string;
};

const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Flips the language by writing the cookie the root loader reads, then
 * revalidating so every loader re-runs and returns the other locale's content.
 * Nothing is stored in component state — the cookie is the single source of
 * truth, which is what keeps a hard reload rendering the same language.
 */
export function LanguageToggle({ locale, className }: LanguageToggleProps) {
	const { t } = useAppTranslation();
	const revalidator = useRevalidator();

	const next: Locale = locale === "en" ? "es" : "en";

	const switchLanguage = () => {
		document.cookie = `${LANG_COOKIE_NAME}=${next}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
		revalidator.revalidate();
	};

	return (
		<button
			type="button"
			onClick={switchLanguage}
			className={className}
			lang={next}
			aria-label={t("language.label")}
		>
			{t("language.switchTo")}
		</button>
	);
}
