import { FigureFrame } from "~/components/common/figure-frame";
import type { Figure } from "~/content/types";

type ProjectGalleryProps = {
	figures: Figure[];
};

export function ProjectGallery({ figures }: ProjectGalleryProps) {
	if (figures.length === 0) return null;

	return (
		<section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,72px)] pt-[72px]">
			<div className="grid grid-cols-1 gap-[clamp(24px,3vw,44px)] md:grid-cols-2">
				{figures.map((figure) => (
					<FigureFrame key={figure.placeholder} figure={figure} />
				))}
			</div>
		</section>
	);
}
