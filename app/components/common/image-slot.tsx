import type { Figure } from "~/content/types";
import { cn } from "~/lib/utils";

type ImageSlotProps = {
	figure: Figure;
	/** Overrides the figure's own aspect ratio — used where a cell must fill its row. */
	fill?: boolean;
	/** The hero images are above the fold and should not be deferred. */
	priority?: boolean;
	className?: string;
};

/**
 * The inside of an image region.
 *
 * With a `src` it is the photograph, wrapped in `.duotone` so it is washed into
 * the accent as the design system requires. With no `src` it is an empty drop
 * area, and it deliberately skips `.duotone` — that treatment is for
 * photographs, and applying it to a blank panel just tints the page pale blue.
 */
export function ImageSlot({
	figure,
	fill,
	priority,
	className,
}: ImageSlotProps) {
	const { placeholder, src, alt, ratio } = figure;
	const style = fill ? undefined : { aspectRatio: ratio };

	if (src) {
		return (
			<div
				className={cn("duotone relative w-full", fill && "h-full", className)}
				style={style}
			>
				<img
					src={src}
					alt={alt ?? placeholder}
					loading={priority ? "eager" : "lazy"}
					decoding={priority ? "sync" : "async"}
					className="h-full w-full object-cover"
				/>
			</div>
		);
	}

	return (
		<div
			className={cn(
				"flex w-full items-center justify-center bg-panel px-6 text-center font-display font-semibold text-[12px] text-ash-500 uppercase tracking-[0.18em]",
				fill && "h-full",
				className,
			)}
			style={style}
		>
			{placeholder}
		</div>
	);
}
