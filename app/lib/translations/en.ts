/**
 * UI chrome only — nav labels, buttons, aria text.
 *
 * Long-form content (bios, role bullets, stack tables, project pages) lives in
 * `app/content/<locale>/` as typed modules, because i18next has no good story
 * for arrays of structured objects.
 */
export const en = {
	nav: {
		profile: "Profile",
		capabilities: "Capabilities",
		work: "Work",
		experience: "Experience",
		skills: "Skills",
		openSource: "Open source",
		getInTouch: "Get in touch",
		menu: "Menu",
	},
	actions: {
		seeWork: "See selected work",
		downloadCv: "Download CV",
		downloadCvPdf: "Download CV (PDF)",
		sendEmail: "Send an email",
		github: "GitHub",
		linkedin: "LinkedIn",
		openProject: "Open the project →",
		allWork: "← All work",
		sourceOnGitHub: "Source on GitHub",
		previous: "Previous",
		next: "Next",
	},
	language: {
		label: "Language",
		switchTo: "Ver en español",
	},
	error: {
		notFoundTitle: "Not found",
		notFoundBody: "That page does not exist.",
		genericTitle: "Oops!",
		genericBody: "Something went wrong.",
		backHome: "Back to the profile",
	},
} as const;

/**
 * Widens the literal types `as const` produces, so `es.ts` only has to match the
 * *shape* of the English catalog rather than its exact strings — while a missing
 * or misspelled key is still a compile error.
 */
type Widen<T> = { [K in keyof T]: T[K] extends string ? string : Widen<T[K]> };

export type Translation = Widen<typeof en>;
