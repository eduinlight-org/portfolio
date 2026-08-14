import { Rich } from "~/components/common/rich";
import type { NameDesc } from "~/content/types";

type NameDescItemProps = {
	item: NameDesc;
};

export function NameDescItem({ item }: NameDescItemProps) {
	return (
		<div className="grid grid-cols-1 items-baseline gap-x-5 gap-y-1 border-rule border-b py-4 sm:grid-cols-[max-content_minmax(0,1fr)]">
			<span className="wrap-anywhere font-mono text-[14px] text-steel-700">
				{item.name}
			</span>
			<span className="text-[15px] text-ash-800 leading-[22px]">
				<Rich line={item.desc} />
			</span>
		</div>
	);
}
