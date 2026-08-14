import { PageSection } from "~/components/common/page-section";
import { SectionHeader } from "~/components/common/section-header";
import type { ProfileContent } from "~/content/types";
import { RoleEntry } from "./role-entry";

type ExperienceProps = {
	experience: ProfileContent["experience"];
};

export function Experience({ experience }: ExperienceProps) {
	return (
		<PageSection id="experience">
			<SectionHeader heading={experience.heading} />
			{experience.roles.map((role) => (
				<RoleEntry key={`${role.company}-${role.period}`} role={role} />
			))}
		</PageSection>
	);
}
