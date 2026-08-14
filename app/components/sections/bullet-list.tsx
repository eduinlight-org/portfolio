import type { RichLine } from "~/content/types";
import { BulletItem } from "./bullet-item";

type BulletListProps = {
	items: RichLine[];
};

export function BulletList({ items }: BulletListProps) {
	return (
		<ul className="m-0 flex list-disc flex-col gap-3.5 pl-5 marker:text-steel">
			{items.map((line, index) => (
				<BulletItem key={index} line={line} />
			))}
		</ul>
	);
}
