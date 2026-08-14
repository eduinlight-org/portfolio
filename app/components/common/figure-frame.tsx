import { Blueprint } from "~/components/blueprint";
import type { Figure } from "~/content/types";
import { ImageSlot } from "./image-slot";

type FigureFrameProps = {
	figure: Figure;
	className?: string;
};

/**
 * Every image region in the design: a hairline frame with its corner marks
 * around either a photograph or, until one is supplied, a labelled drop area.
 */
export function FigureFrame({ figure, className }: FigureFrameProps) {
	return (
		<Blueprint as="figure" className={className}>
			<ImageSlot figure={figure} />
			{figure.caption ? (
				<figcaption className="px-0.5 pt-2.5 font-display font-semibold text-[12px] text-ash-600 uppercase tracking-[0.18em]">
					{figure.caption}
				</figcaption>
			) : null}
		</Blueprint>
	);
}
