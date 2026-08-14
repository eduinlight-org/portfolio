import { Link } from "react-router";
import { Blueprint } from "~/components/blueprint";
import { ImageSlot } from "~/components/common/image-slot";
import type { Project } from "~/content/types";

type WorkCardProps = {
	project: Project;
};

export function WorkCard({ project }: WorkCardProps) {
	const { card } = project;

	return (
		<Blueprint className="flex flex-col p-0">
			<ImageSlot
				figure={{
					placeholder: card.placeholder,
					ratio: "16 / 10",
					src: card.src,
					alt: card.alt,
				}}
				className="border-rule border-b"
			/>
			<Link
				to={`/work/${project.slug}`}
				className="flex flex-1 flex-col px-[26px] pt-[26px] pb-7 text-ink"
			>
				<div className="mb-2.5 font-display font-semibold text-[12px] text-steel-700 uppercase tracking-[0.12em]">
					{card.kicker}
				</div>
				<div className="mb-2.5 font-display font-semibold text-[28px] uppercase leading-[30px] tracking-[0.02em]">
					{card.title}
				</div>
				<p className="m-0 mb-[18px] text-[15px] text-ash-800 leading-6">
					{card.body}
				</p>
				<div className="mt-auto border-rule border-t pt-3 font-display font-semibold text-[12px] text-ash-600 uppercase tracking-[0.12em]">
					{card.meta}
				</div>
			</Link>
		</Blueprint>
	);
}
