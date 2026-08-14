import { Blueprint } from "~/components/blueprint";
import type { Locale } from "~/content/types";
import { useAppTranslation } from "~/lib/i18n";
import { LanguageToggle } from "./language-toggle";

type SiteHeaderProps = {
	name: string;
	locale: Locale;
};

const SECTIONS = [
	{ href: "#profile", key: "nav.profile" },
	{ href: "#capabilities", key: "nav.capabilities" },
	{ href: "#work", key: "nav.work" },
	{ href: "#experience", key: "nav.experience" },
	{ href: "#skills", key: "nav.skills" },
	{ href: "#code", key: "nav.openSource" },
] as const;

const linkClass = "text-ash-700 hover:text-steel";

/**
 * The profile page's sticky bar. Below `lg` the anchor list collapses into a
 * native `<details>` disclosure — no JavaScript, so it works before hydration.
 */
export function SiteHeader({ name, locale }: SiteHeaderProps) {
	const { t } = useAppTranslation();

	return (
		<header className="sticky top-0 z-20 flex items-center justify-between gap-6 border-rule border-b bg-paper px-[clamp(20px,5vw,72px)] py-3">
			<a
				href="#top"
				className="font-display font-bold text-[15px] text-ink uppercase tracking-[0.16em]"
			>
				{name}
			</a>

			<nav className="hidden items-center gap-[22px] font-display font-semibold text-[13px] uppercase tracking-[0.12em] lg:flex">
				{SECTIONS.map((section) => (
					<a key={section.href} href={section.href} className={linkClass}>
						{t(section.key)}
					</a>
				))}
				<LanguageToggle locale={locale} className={linkClass} />
				<Blueprint as="a" className="btn btn-primary ml-1.5" href="#contact">
					{t("nav.getInTouch")}
				</Blueprint>
			</nav>

			<details className="group relative lg:hidden">
				<summary className="btn btn-secondary cursor-pointer list-none font-display uppercase tracking-[0.12em]">
					{t("nav.menu")}
				</summary>
				<div className="absolute right-0 z-30 mt-2 flex w-[220px] flex-col gap-3 border border-rule bg-paper p-4 font-display font-semibold text-[13px] uppercase tracking-[0.12em] shadow-[var(--shadow-md)]">
					{SECTIONS.map((section) => (
						<a key={section.href} href={section.href} className={linkClass}>
							{t(section.key)}
						</a>
					))}
					<LanguageToggle
						locale={locale}
						className={`${linkClass} text-left`}
					/>
					<a href="#contact" className={linkClass}>
						{t("nav.getInTouch")}
					</a>
				</div>
			</details>
		</header>
	);
}
