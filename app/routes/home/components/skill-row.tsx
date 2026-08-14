import { TagList } from "~/components/common/tag-list";
import type { TagGroup } from "~/content/types";

type SkillRowProps = {
	group: TagGroup;
};

export function SkillRow({ group }: SkillRowProps) {
	return (
		<div className="grid grid-cols-1 items-baseline gap-[clamp(24px,4vw,56px)] border-rule border-b py-[22px] md:grid-cols-[200px_minmax(0,1fr)]">
			<div className="font-display font-semibold text-[20px] uppercase leading-6 tracking-[0.02em]">
				{group.name}
			</div>
			<TagList items={group.items ?? []} />
		</div>
	);
}
