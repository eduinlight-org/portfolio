import { SectionHeader } from "~/components/common/section-header";
import type { ProfileContent } from "~/content/types";
import { FactList } from "./fact-list";

type ProfileSummaryProps = {
	profile: ProfileContent["profile"];
};

export function ProfileSummary({ profile }: ProfileSummaryProps) {
	return (
		<section
			id="profile"
			className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,72px)] pb-6"
		>
			<SectionHeader heading={profile.heading} />
			<div className="grid grid-cols-1 gap-[clamp(32px,5vw,88px)] lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
				<p className="m-0 max-w-[62ch] text-[19px] leading-[30px]">
					{profile.summary}
				</p>
				<FactList facts={profile.facts} />
			</div>
		</section>
	);
}
