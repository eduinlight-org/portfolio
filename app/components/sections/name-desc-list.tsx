import type { NameDesc } from "~/content/types";
import { NameDescItem } from "./name-desc-item";

type NameDescListProps = {
	items: NameDesc[];
};

export function NameDescList({ items }: NameDescListProps) {
	return (
		<div className="grid grid-cols-1 gap-x-[clamp(32px,5vw,72px)] md:grid-cols-2">
			{items.map((item) => (
				<NameDescItem key={item.name} item={item} />
			))}
		</div>
	);
}
