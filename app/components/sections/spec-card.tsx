import { Blueprint } from "~/components/blueprint";
import { Rich } from "~/components/common/rich";
import type { CardItem } from "~/content/types";

type TitleStyle = "heading" | "kicker" | "mono";

type SpecCardProps = {
	item: CardItem;
	titleStyle?: TitleStyle;
};

const TITLE_CLASS: Record<TitleStyle, string> = {
	heading: "font-display text-[20px]",
	kicker:
		"mb-3 font-display font-semibold text-[12px] text-steel-700 uppercase tracking-[0.14em]",
	mono: "mb-3 font-mono text-[14px] text-steel-700",
};

const BODY_CLASS: Record<TitleStyle, string> = {
	heading: "m-0 mt-1.5 text-[15px] text-ash-700 leading-[1.5]",
	kicker: "m-0 text-[16px] text-ash-800 leading-6",
	mono: "m-0 text-[16px] text-ash-800 leading-6",
};

/**
 * A transparent, hairline-framed card. The Industry system draws cards as line
 * drawings — no surface fill, no rounded corners.
 */
export function SpecCard({ item, titleStyle = "heading" }: SpecCardProps) {
	return (
		<Blueprint className={titleStyle === "heading" ? "p-[22px]" : "p-[26px]"}>
			{item.title ? (
				<div className={TITLE_CLASS[titleStyle]}>{item.title}</div>
			) : null}
			<p
				className={
					item.title ? BODY_CLASS[titleStyle] : "m-0 text-[16px] leading-[1.6]"
				}
			>
				<Rich line={item.body} />
			</p>
		</Blueprint>
	);
}
