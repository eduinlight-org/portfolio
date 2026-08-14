import type { ElementType, ReactNode } from "react";
import { cn } from "~/lib/utils";

type BlueprintProps = {
	as?: ElementType;
	className?: string;
	children?: ReactNode;
} & Record<string, unknown>;

/**
 * The wireframe frame every card, figure and primary button wears in the
 * Industry system: a square, hairline-bordered box with a `+` registration mark
 * at each corner.
 *
 * The four `<i class="corner">` children are not decoration — the design system
 * treats dropping them as a violation — so they live here rather than being
 * repeated at every call site.
 */
export function Blueprint({
	as: Component = "div",
	className,
	children,
	...rest
}: BlueprintProps) {
	return (
		<Component className={cn("blueprint relative", className)} {...rest}>
			{children}
			<i className="corner tl" />
			<i className="corner tr" />
			<i className="corner bl" />
			<i className="corner br" />
		</Component>
	);
}
