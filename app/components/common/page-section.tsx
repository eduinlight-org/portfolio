import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type PageSectionProps = {
	id?: string;
	children: ReactNode;
	className?: string;
};

/**
 * The design's page column: a 1200px measure centred in the viewport with a
 * fluid gutter. Sections stack with top padding rather than margins so adjacent
 * full-bleed bands (the contact and stats bands) butt cleanly against them.
 */
export function PageSection({ id, children, className }: PageSectionProps) {
	return (
		<section
			id={id}
			className={cn(
				"mx-auto max-w-[1200px] px-[clamp(20px,5vw,72px)] pt-[84px]",
				className,
			)}
		>
			{children}
		</section>
	);
}
