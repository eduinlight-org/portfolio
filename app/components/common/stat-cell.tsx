import type { Stat } from "~/content/types";

type StatCellProps = {
	stat: Stat;
};

/** One cell of the spec-sheet figure grid. */
export function StatCell({ stat }: StatCellProps) {
	return (
		<div className="border-rule border-r border-b px-6 py-[22px] last:border-r-0">
			<div className="font-display font-semibold text-[34px] leading-[34px] tracking-[0.01em]">
				{stat.value}
			</div>
			<div className="mt-2 font-display font-semibold text-[12px] text-ash-600 uppercase tracking-[0.12em]">
				{stat.label}
			</div>
		</div>
	);
}
