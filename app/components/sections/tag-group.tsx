import { Rich } from "~/components/common/rich";
import { TagList } from "~/components/common/tag-list";
import type { TagGroup as TagGroupData } from "~/content/types";

type TagGroupProps = {
	group: TagGroupData;
};

export function TagGroup({ group }: TagGroupProps) {
	return (
		<div>
			<div className="mb-3 font-display text-[20px]">{group.name}</div>
			{group.items ? <TagList items={group.items} /> : null}
			{group.body ? (
				<p className="m-0 text-[16px] text-ash-700 leading-[1.6]">
					<Rich line={group.body} />
				</p>
			) : null}
		</div>
	);
}
