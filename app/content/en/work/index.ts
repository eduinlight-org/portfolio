import type { Project } from "~/content/types";
import { caxper } from "./caxper";
import { holaplace } from "./holaplace";
import { lightnotes } from "./lightnotes";
import { myaltafit } from "./myaltafit";
import { qollabi } from "./qollabi";
import { qollabiAi } from "./qollabi-ai";

/**
 * Ordered by the design's prev/next chain, which is what drives the footer
 * navigation on each project page. The chain does not wrap: lightnotes has no
 * previous, My Altafit has no next. The profile page's grid uses its own order
 * (`profile.work.order`).
 */
export const projects: Project[] = [
	lightnotes,
	qollabiAi,
	qollabi,
	holaplace,
	caxper,
	myaltafit,
];
