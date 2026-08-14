import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type TagProps = {
	children: ReactNode;
	variant?: "accent" | "neutral" | "outline";
	className?: string;
};

export function Tag({ children, variant = "accent", className }: TagProps) {
	return (
		<span className={cn("tag", `tag-${variant}`, className)}>{children}</span>
	);
}
