import type { LabelledRow as LabelledRowData } from "~/content/types";
import { LabelledRow } from "./labelled-row";

type LabelledRowListProps = {
	rows: LabelledRowData[];
};

export function LabelledRowList({ rows }: LabelledRowListProps) {
	return (
		<div>
			{rows.map((row) => (
				<LabelledRow key={row.label} row={row} />
			))}
		</div>
	);
}
