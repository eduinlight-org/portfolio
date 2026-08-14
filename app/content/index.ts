import { en } from "./en";
import { es } from "./es";
import type { Content, Locale, Project } from "./types";

const CONTENT: Record<Locale, Content> = { en, es };

export function getContent(locale: Locale): Content {
	return CONTENT[locale];
}

export function getProject(
	locale: Locale,
	slug: string,
): { project: Project; previous?: Project; next?: Project } | undefined {
	const { projects } = getContent(locale);
	const index = projects.findIndex((project) => project.slug === slug);

	if (index === -1) return undefined;

	// biome-ignore lint/style/noNonNullAssertion: index came from findIndex
	const project = projects[index]!;

	return {
		project,
		previous: projects[index - 1],
		next: projects[index + 1],
	};
}

/** Every project slug, in the design's chain order — used by the sitemap. */
export function getProjectSlugs(locale: Locale): string[] {
	return getContent(locale).projects.map((project) => project.slug);
}
