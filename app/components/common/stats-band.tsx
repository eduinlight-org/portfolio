import type { Stat } from "~/content/types";

type StatsBandProps = {
	stats: Stat[];
};

/**
 * The one place the design lets the accent carry a full field: a full-bleed
 * `--color-accent-900` band of headline metrics with the type reversed to paper.
 */
export function StatsBand({ stats }: StatsBandProps) {
	return (
		<section className="mt-[84px] bg-steel-900 px-[clamp(20px,5vw,72px)] py-14 text-ash-100">
			<div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-5">
				{stats.map((stat) => (
					<div key={stat.label}>
						<div className="font-display text-[46px] leading-none">
							{stat.value}
						</div>
						<div className="mt-1.5 text-[13px] text-steel-300 uppercase tracking-[0.1em]">
							{stat.label}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
