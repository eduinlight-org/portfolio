import type { CardItem } from "~/content/types";
import { SpecCard } from "./spec-card";

type SpecCardGridProps = {
	items: CardItem[];
	columns?: 2 | 3;
	titleStyle?: "heading" | "kicker" | "mono";
};

export function SpecCardGrid({
	items,
	columns = 2,
	titleStyle,
}: SpecCardGridProps) {
	return (
		<div
			className={
				columns === 3
					? "grid grid-cols-1 gap-[clamp(24px,3vw,44px)] sm:grid-cols-2 lg:grid-cols-3"
					: "grid grid-cols-1 gap-[clamp(24px,3vw,44px)] md:grid-cols-2"
			}
		>
			{items.map((item, index) => (
				<SpecCard
					key={item.title ?? index}
					item={item}
					titleStyle={titleStyle}
				/>
			))}
		</div>
	);
}
