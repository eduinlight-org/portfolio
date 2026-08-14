import { Rich } from "~/components/common/rich";
import type { Project } from "~/content/types";

type ProjectHeroProps = {
	project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
	return (
		<section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,72px)] pt-[84px] pb-14">
			<div className="mb-[22px] font-display font-semibold text-[13px] text-steel-700 uppercase tracking-[0.14em]">
				{project.kicker}
			</div>
			{/* The design's floor is 52px, which overflows a 375px viewport — it was
			    drawn at desktop width. Dropped to 34px so the headline still fits. */}
			<h1 className="-ml-[0.052em] m-0 mb-[26px] font-display font-bold text-[clamp(34px,7vw,92px)] uppercase leading-[1.04] tracking-[0.01em]">
				{project.headline.map((line) => (
					<span key={line} className="block">
						{line}
					</span>
				))}
			</h1>
			<p className="m-0 max-w-[64ch] text-[19px] leading-[30px]">
				<Rich line={project.lead} />
			</p>
			{project.sublead ? (
				<p className="m-0 mt-5 max-w-[64ch] text-[16px] text-ash-700 leading-[26px]">
					<Rich line={project.sublead} />
				</p>
			) : null}
		</section>
	);
}
