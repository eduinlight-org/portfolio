import type { TagGroup as TagGroupData } from "~/content/types";
import { TagGroup } from "./tag-group";

type TagGroupGridProps = {
	groups: TagGroupData[];
};

export function TagGroupGrid({ groups }: TagGroupGridProps) {
	return (
		<div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
			{groups.map((group) => (
				<TagGroup key={group.name} group={group} />
			))}
		</div>
	);
}
