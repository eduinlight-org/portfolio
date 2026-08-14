import { PageSection } from "~/components/common/page-section";
import { SectionHeader } from "~/components/common/section-header";
import type { ProfileContent } from "~/content/types";
import { BackgroundCard } from "./background-card";

type BackgroundProps = {
	background: ProfileContent["background"];
};

export function Background({ background }: BackgroundProps) {
	return (
		<PageSection id="background">
			<SectionHeader heading={background.heading} />
			<div className="mt-11 grid grid-cols-1 gap-[clamp(24px,3vw,48px)] md:grid-cols-2 lg:grid-cols-3">
				{background.cards.map((card) => (
					<BackgroundCard key={card.kicker} card={card} />
				))}
			</div>
		</PageSection>
	);
}
