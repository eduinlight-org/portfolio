import type { ReactNode } from "react";
import { Blueprint } from "~/components/blueprint";
import type { SpecSheet as SpecSheetData } from "~/content/types";

type SpecSheetProps = {
	sheet: SpecSheetData;
	children: ReactNode;
};

/**
 * The drawn spec-sheet plate: a header strip of `title | badge | badge`, a body
 * (a measures table on the profile, a grid of figures on project pages) and a
 * footnote rule. The design's answer to a stats block — it stays a line drawing
 * on the paper ground rather than becoming a filled panel.
 */
export function SpecSheet({ sheet, children }: SpecSheetProps) {
	return (
		<Blueprint>
			<header className="flex flex-wrap items-stretch border-rule border-b font-display font-semibold text-[13px] uppercase tracking-[0.1em]">
				<span className="min-w-[16ch] flex-1 px-6 py-3">{sheet.title}</span>
				{sheet.badges.map((badge) => (
					<span
						key={badge}
						className="whitespace-nowrap border-rule border-l px-6 py-3 text-ash-700"
					>
						{badge}
					</span>
				))}
			</header>
			{children}
			{sheet.note ? (
				<p className="m-0 border-rule border-t px-6 py-3 text-[13px] text-ash-700">
					{sheet.note}
				</p>
			) : null}
		</Blueprint>
	);
}
