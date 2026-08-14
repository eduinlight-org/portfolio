import { Fragment } from "react";
import type { RichLine } from "~/content/types";

type RichProps = {
	line: RichLine;
};

/**
 * Renders a line of authored copy, including the inline `<strong>`, `<em>` and
 * `<code>` runs the design uses inside architecture bullets and stack rows —
 * without routing content through `dangerouslySetInnerHTML`.
 */
export function Rich({ line }: RichProps) {
	if (typeof line === "string") {
		return <>{line}</>;
	}

	return (
		<>
			{line.map((part, index) => {
				switch (part.kind) {
					case "strong":
						return (
							<strong key={index} className="font-semibold">
								{part.value}
							</strong>
						);
					case "em":
						return <em key={index}>{part.value}</em>;
					case "code":
						return <code key={index}>{part.value}</code>;
					default:
						return <Fragment key={index}>{part.value}</Fragment>;
				}
			})}
		</>
	);
}
