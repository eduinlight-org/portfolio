import { Blueprint } from "~/components/blueprint";
import { FigureFrame } from "~/components/common/figure-frame";
import type { ProfileContent } from "~/content/types";
import { useAppTranslation } from "~/lib/i18n";

type HeroProps = {
	hero: ProfileContent["hero"];
};

export function Hero({ hero }: HeroProps) {
	const { t } = useAppTranslation();

	return (
		<section
			id="top"
			className="mx-auto grid max-w-[1200px] grid-cols-1 items-end gap-[clamp(32px,5vw,88px)] px-[clamp(20px,5vw,72px)] pt-24 pb-[72px] lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]"
		>
			<div>
				<h1 className="-ml-[0.052em] m-0 mb-[26px] font-display font-bold text-[clamp(40px,4.6vw,62px)] uppercase leading-[1.06] tracking-[0.01em]">
					{hero.headline.map((line) => (
						<span key={line} className="block">
							{line}
						</span>
					))}
				</h1>
				<p className="m-0 mb-8 max-w-[52ch] text-[19px] text-ash-800 leading-[30px]">
					{hero.lead}
				</p>
				<div className="flex flex-wrap gap-3">
					<Blueprint as="a" className="btn btn-primary" href="#work">
						{t("actions.seeWork")}
					</Blueprint>
					<a
						className="btn btn-secondary"
						href="/eduin-cv.pdf"
						target="_blank"
						rel="noopener"
					>
						{t("actions.downloadCv")}
					</a>
					<a
						className="btn btn-ghost"
						href="https://github.com/eduinlight"
						target="_blank"
						rel="noopener"
					>
						{t("actions.github")}
					</a>
					<a
						className="btn btn-ghost"
						href="https://www.linkedin.com/in/eduinlight/"
						target="_blank"
						rel="noopener"
					>
						{t("actions.linkedin")}
					</a>
				</div>
			</div>

			<FigureFrame figure={hero.figure} priority />
		</section>
	);
}
