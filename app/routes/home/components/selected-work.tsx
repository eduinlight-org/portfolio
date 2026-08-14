import { PageSection } from "~/components/common/page-section";
import { SectionHeader } from "~/components/common/section-header";
import type { ProfileContent, Project } from "~/content/types";
import { FeaturedWorkCard } from "./featured-work-card";
import { WorkCard } from "./work-card";

type SelectedWorkProps = {
	work: ProfileContent["work"];
	projects: Project[];
};

/**
 * Orders projects by `work.order` rather than by the `projects` array, which is
 * sequenced for the prev/next chain on the project pages instead.
 */
export function SelectedWork({ work, projects }: SelectedWorkProps) {
	const bySlug = new Map(projects.map((project) => [project.slug, project]));
	const ordered = work.order
		.map((slug) => bySlug.get(slug))
		.filter((project): project is Project => project !== undefined);

	return (
		<PageSection id="work">
			<SectionHeader heading={work.heading} />
			<div className="mt-11 grid grid-cols-1 gap-[clamp(24px,3vw,44px)] md:grid-cols-2 lg:grid-cols-3">
				{ordered.map((project) =>
					project.card.featured ? (
						<FeaturedWorkCard key={project.slug} project={project} />
					) : (
						<WorkCard key={project.slug} project={project} />
					),
				)}
			</div>
		</PageSection>
	);
}
