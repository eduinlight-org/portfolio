import { Blueprint } from "~/components/blueprint";
import type { Capability } from "~/content/types";

type CapabilityCardProps = {
	capability: Capability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
	return (
		<Blueprint className="p-7">
			<div className="mb-2.5 font-display font-semibold text-[12px] text-steel-700 uppercase tracking-[0.14em]">
				{capability.index}
			</div>
			<h3 className="m-0 mb-3 font-display font-semibold text-[26px] uppercase leading-7 tracking-[0.02em]">
				{capability.title}
			</h3>
			<p className="m-0 text-[16px] text-ash-800 leading-6">
				{capability.body}
			</p>
		</Blueprint>
	);
}
