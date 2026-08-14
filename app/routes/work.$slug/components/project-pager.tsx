import { Link } from "react-router";
import type { Project } from "~/content/types";
import { useAppTranslation } from "~/lib/i18n";

type ProjectPagerProps = {
	previous?: Project;
	next?: Project;
};

/**
 * The design's chain does not wrap — lightnotes has no previous and My Altafit
 * has no next — so each end can be absent.
 */
export function ProjectPager({ previous, next }: ProjectPagerProps) {
	const { t } = useAppTranslation();

	return (
		<section className="mx-auto mt-[84px] flex max-w-[1200px] flex-wrap items-center justify-between gap-6 border-rule border-t px-[clamp(20px,5vw,72px)] pt-6 pb-[72px] font-display font-semibold text-[13px] uppercase tracking-[0.14em]">
			{previous ? (
				<Link to={`/work/${previous.slug}`}>
					← {t("actions.previous")}: {previous.name}
				</Link>
			) : (
				<Link to="/#work">{t("actions.allWork")}</Link>
			)}
			{next ? (
				<Link to={`/work/${next.slug}`}>
					{t("actions.next")}: {next.name} →
				</Link>
			) : (
				<Link to="/#work">{t("actions.allWork")}</Link>
			)}
		</section>
	);
}
