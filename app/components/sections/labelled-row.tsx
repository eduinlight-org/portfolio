import { Rich } from "~/components/common/rich";
import type { LabelledRow as LabelledRowData } from "~/content/types";

type LabelledRowProps = {
	row: LabelledRowData;
};

export function LabelledRow({ row }: LabelledRowProps) {
	return (
		<div className="grid grid-cols-1 items-baseline gap-x-[clamp(20px,4vw,48px)] gap-y-1 border-rule border-b py-4 md:grid-cols-[200px_minmax(0,1fr)]">
			<div className="font-display font-semibold text-[13px] text-ash-600 uppercase tracking-[0.12em]">
				{row.label}
			</div>
			<div className="text-[16px] leading-6">
				<Rich line={row.value} />
			</div>
		</div>
	);
}
