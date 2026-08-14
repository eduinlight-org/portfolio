import { Link } from "react-router";
import { Blueprint } from "~/components/blueprint";
import { ImageSlot } from "~/components/common/image-slot";
import { Tag } from "~/components/common/tag";
import type { Project } from "~/content/types";
import { useAppTranslation } from "~/lib/i18n";

type FeaturedWorkCardProps = {
	project: Project;
};

/** The full-width lead card of the work grid — image left, copy right. */
export function FeaturedWorkCard({ project }: FeaturedWorkCardProps) {
	const { t } = useAppTranslation();
	const { card } = project;

	return (
		<Blueprint className="grid grid-cols-1 gap-0 p-0 lg:col-span-3 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
			<ImageSlot
				figure={{ placeholder: card.placeholder, ratio: "16 / 10" }}
				fill
				className="min-h-[320px] border-rule border-b lg:border-r lg:border-b-0"
			/>
			<Link
				to={`/work/${project.slug}`}
				className="flex flex-col justify-center p-10 text-ink"
			>
				<div className="mb-3.5 font-display font-semibold text-[12px] text-steel-700 uppercase tracking-[0.14em]">
					{card.kicker}
				</div>
				<div className="mb-4 font-display font-semibold text-[44px] uppercase leading-[44px] tracking-[0.01em]">
					{card.title}
				</div>
				<p className="m-0 mb-5 max-w-[40ch] text-[17px] text-ash-800 leading-[26px]">
					{card.body}
				</p>
				{card.tags ? (
					<div className="mb-[22px] flex flex-wrap gap-2">
						{card.tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
				) : null}
				<div className="font-display font-semibold text-[13px] text-steel-700 uppercase tracking-[0.14em]">
					{t("actions.openProject")}
				</div>
			</Link>
		</Blueprint>
	);
}
