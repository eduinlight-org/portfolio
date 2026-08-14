import { PageSection } from "~/components/common/page-section";
import { SectionHeader } from "~/components/common/section-header";
import type { ProfileContent } from "~/content/types";
import { SkillRow } from "./skill-row";

type SkillsProps = {
	skills: ProfileContent["skills"];
};

export function Skills({ skills }: SkillsProps) {
	return (
		<PageSection id="skills">
			<SectionHeader heading={skills.heading} />
			{skills.groups.map((group) => (
				<SkillRow key={group.name} group={group} />
			))}
		</PageSection>
	);
}
