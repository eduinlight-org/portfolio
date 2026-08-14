import { Tag } from "./tag";

type TagListProps = {
	items: string[];
};

/**
 * The container half of the tag pair — the design never shows a lone tag, they
 * always come as a wrapping row.
 */
export function TagList({ items }: TagListProps) {
	return (
		<div className="flex flex-wrap gap-2">
			{items.map((item) => (
				<Tag key={item}>{item}</Tag>
			))}
		</div>
	);
}
