import { PageSection } from "~/components/common/page-section";
import { SectionHeader } from "~/components/common/section-header";
import type { ProfileContent } from "~/content/types";
import { RepoLink } from "./repo-link";

type OpenSourceProps = {
	openSource: ProfileContent["openSource"];
};

export function OpenSource({ openSource }: OpenSourceProps) {
	return (
		<PageSection id="code">
			<SectionHeader heading={openSource.heading} />
			<div className="grid grid-cols-1 gap-x-[clamp(32px,5vw,72px)] md:grid-cols-2">
				{openSource.repos.map((repo) => (
					<RepoLink key={repo.name} repo={repo} />
				))}
			</div>
			<p className="mt-6 mb-0 font-display font-semibold text-[13px] uppercase tracking-[0.12em]">
				<a href={openSource.allReposUrl} target="_blank" rel="noopener">
					{openSource.allReposLabel}
				</a>
			</p>
		</PageSection>
	);
}
