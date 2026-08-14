import type { SectionHeading } from "~/content/types";

type SectionHeaderProps = {
	heading: SectionHeading;
	/** Rendered as the section's real heading element; defaults to h2. */
	as?: "h2" | "h3";
};

const pad = (index: number) => String(index).padStart(2, "0");

/**
 * The `01 · PROFILE` row with its right-hand meta note and bottom rule — the
 * design's section divider, used on every numbered section of every page.
 */
export function SectionHeader({
	heading,
	as: Heading = "h2",
}: SectionHeaderProps) {
	return (
		<div className="mb-9 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-rule border-b pb-3">
			<Heading className="m-0 font-display font-semibold text-[13px] text-steel-700 uppercase tracking-[0.14em]">
				{pad(heading.index)} · {heading.title}
			</Heading>
			{heading.meta ? (
				<span className="font-display font-semibold text-[13px] text-ash-600 uppercase tracking-[0.1em]">
					{heading.meta}
				</span>
			) : null}
		</div>
	);
}
