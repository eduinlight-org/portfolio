import { Rich } from "~/components/common/rich";
import type { RichLine } from "~/content/types";

type BulletItemProps = {
	line: RichLine;
};

export function BulletItem({ line }: BulletItemProps) {
	return (
		<li className="max-w-[82ch] text-[17px] leading-[27px]">
			<Rich line={line} />
		</li>
	);
}
