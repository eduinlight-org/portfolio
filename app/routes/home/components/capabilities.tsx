import { PageSection } from "~/components/common/page-section";
import { SectionHeader } from "~/components/common/section-header";
import type { ProfileContent } from "~/content/types";
import { CapabilityCard } from "./capability-card";

type CapabilitiesProps = {
	capabilities: ProfileContent["capabilities"];
};

export function Capabilities({ capabilities }: CapabilitiesProps) {
	return (
		<PageSection id="capabilities">
			<SectionHeader heading={capabilities.heading} />
			<div className="mt-11 grid grid-cols-1 gap-[clamp(24px,3vw,48px)] md:grid-cols-2">
				{capabilities.items.map((capability) => (
					<CapabilityCard key={capability.index} capability={capability} />
				))}
			</div>
		</PageSection>
	);
}
