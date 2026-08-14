import type { Project } from "~/content/types";
import { caxper } from "./caxper";
import { holaplace } from "./holaplace";
import { lightnotes } from "./lightnotes";
import { myaltafit } from "./myaltafit";
import { qollabi } from "./qollabi";
import { qollabiAi } from "./qollabi-ai";

/** Same chain order as the English set — see ../../en/work/index.ts. */
export const projects: Project[] = [
	lightnotes,
	qollabiAi,
	qollabi,
	holaplace,
	caxper,
	myaltafit,
];
