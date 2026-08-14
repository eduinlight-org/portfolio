import { Blueprint } from "~/components/blueprint";
import { Rich } from "~/components/common/rich";
import type { BackgroundCard as BackgroundCardData } from "~/content/types";

type BackgroundCardProps = {
	card: BackgroundCardData;
};

function Body({ card }: BackgroundCardProps) {
	return (
		<>
			<div className="mb-3 font-display font-semibold text-[12px] text-steel-700 uppercase tracking-[0.14em]">
				{card.kicker}
			</div>
			{card.title ? (
				<div className="font-display font-semibold text-[22px] uppercase leading-[26px] tracking-[0.02em]">
					{card.title}
				</div>
			) : null}
			<p
				className={`m-0 text-[15px] text-ash-700 leading-[22px] ${card.title ? "mt-2.5" : ""}`}
			>
				<Rich line={card.body} />
			</p>
		</>
	);
}

export function BackgroundCard({ card }: BackgroundCardProps) {
	// The design deliberately draws the unfilled "references" card as a dashed
	// outline with no registration marks — it reads as a slot still to be filled.
	if (card.pending) {
		return (
			<div className="relative border border-steel-400 border-dashed p-[26px]">
				<Body card={card} />
			</div>
		);
	}

	return (
		<Blueprint className="p-[26px]">
			<Body card={card} />
		</Blueprint>
	);
}
