import type { Stat } from "~/content/types";
import { StatCell } from "./stat-cell";

type StatGridProps = {
	stats: Stat[];
};

/** The grid of figures that fills a spec sheet's body. */
export function StatGrid({ stats }: StatGridProps) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
			{stats.map((stat) => (
				<StatCell key={stat.label} stat={stat} />
			))}
		</div>
	);
}
