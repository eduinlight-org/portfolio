import { Link } from "react-router";
import type { ExternalLink, Locale } from "~/content/types";
import { useAppTranslation } from "~/lib/i18n";
import { LanguageToggle } from "./language-toggle";

type WorkHeaderProps = {
	name: string;
	locale: Locale;
	link?: ExternalLink;
	linkAsButton?: boolean;
};

const linkClass = "text-ash-700 hover:text-steel";

/** The project pages' bar: brand, a way back to the work grid, and the live or source link. */
export function WorkHeader({
	name,
	locale,
	link,
	linkAsButton,
}: WorkHeaderProps) {
	const { t } = useAppTranslation();

	return (
		<header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-rule border-b bg-paper px-[clamp(20px,5vw,72px)] py-3">
			<Link
				to="/"
				className="font-display font-bold text-[15px] text-ink uppercase tracking-[0.16em]"
			>
				{name}
			</Link>

			<nav className="flex flex-wrap items-center gap-[22px] font-display font-semibold text-[13px] uppercase tracking-[0.12em]">
				<Link to="/#work" className={linkClass}>
					{t("actions.allWork")}
				</Link>
				<LanguageToggle locale={locale} className={linkClass} />
				{link ? (
					<a
						href={link.href}
						target="_blank"
						rel="noopener"
						className={linkAsButton ? "btn btn-secondary" : linkClass}
					>
						{link.label}
					</a>
				) : null}
			</nav>
		</header>
	);
}
