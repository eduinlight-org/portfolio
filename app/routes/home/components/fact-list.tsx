import { Rich } from "~/components/common/rich";
import type { LabelledRow } from "~/content/types";

type FactListProps = {
	facts: LabelledRow[];
};

/**
 * The hairline-ruled definition list beside the profile summary. Every row draws
 * its own top rule and the last one closes the stack with a bottom rule, so the
 * block reads as a drawn table rather than a floating list.
 */
export function FactList({ facts }: FactListProps) {
	return (
		<dl className="m-0 grid grid-cols-1 content-start gap-x-6 text-[15px] sm:grid-cols-[max-content_1fr]">
			{facts.map((fact, index) => {
				const closing =
					index === facts.length - 1 ? "border-rule border-b" : "";

				return [
					<dt
						key={`${fact.label}-label`}
						className={`border-rule border-t py-2.5 font-display font-semibold text-[12px] text-ash-600 uppercase tracking-[0.12em] ${closing}`}
					>
						{fact.label}
					</dt>,
					<dd
						key={`${fact.label}-value`}
						className={`m-0 border-rule border-t py-2.5 sm:border-t ${closing}`}
					>
						<Rich line={fact.value} />
					</dd>,
				];
			})}
		</dl>
	);
}
