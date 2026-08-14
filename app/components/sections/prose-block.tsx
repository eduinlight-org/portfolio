import { Rich } from "~/components/common/rich";
import type { RichLine } from "~/content/types";

type ProseBlockProps = {
	paragraphs: RichLine[];
};

export function ProseBlock({ paragraphs }: ProseBlockProps) {
	return (
		<div className="flex flex-col gap-4">
			{paragraphs.map((paragraph, index) => (
				<p key={index} className="m-0 max-w-[78ch] text-[17px] leading-[27px]">
					<Rich line={paragraph} />
				</p>
			))}
		</div>
	);
}
