import { describe, expect, it } from "vitest";
import { getContent, getProject, getProjectSlugs } from "~/content";
import type { Locale, Section } from "~/content/types";

const LOCALES: Locale[] = ["en", "es"];

/**
 * The two locales are separate module trees, so nothing but a test stops them
 * drifting apart structurally — a missing project or a renumbered section would
 * only show up as a broken page in one language.
 */
describe("locale parity", () => {
	it("exposes the same projects in the same order", () => {
		const [en, es] = LOCALES.map((locale) => getProjectSlugs(locale));
		expect(es).toEqual(en);
	});

	it("gives every project the same section shape in both locales", () => {
		for (const slug of getProjectSlugs("en")) {
			const en = getProject("en", slug)?.project;
			const es = getProject("es", slug)?.project;

			expect(es, `missing ${slug} in es`).toBeDefined();
			expect(es?.sections.map(shapeOf)).toEqual(en?.sections.map(shapeOf));
		}
	});

	it("keeps the work grid pointing at real projects", () => {
		for (const locale of LOCALES) {
			const { profile, projects } = getContent(locale);
			const slugs = new Set(projects.map((project) => project.slug));

			expect(profile.work.order.length).toBe(projects.length);
			for (const slug of profile.work.order) {
				expect(slugs.has(slug), `${locale}: unknown slug ${slug}`).toBe(true);
			}
		}
	});
});

describe("project structure", () => {
	it("numbers sections from 1 with no gaps", () => {
		for (const locale of LOCALES) {
			for (const project of getContent(locale).projects) {
				const indices = project.sections.map((section) => section.index);
				expect(indices, `${locale}/${project.slug}`).toEqual(
					indices.map((_, position) => position + 1),
				);
			}
		}
	});

	it("chains prev/next without wrapping", () => {
		const slugs = getProjectSlugs("en");
		const first = getProject("en", slugs[0] as string);
		const last = getProject("en", slugs[slugs.length - 1] as string);

		expect(first?.previous).toBeUndefined();
		expect(first?.next?.slug).toBe(slugs[1]);
		expect(last?.next).toBeUndefined();
	});

	it("returns nothing for an unknown slug", () => {
		expect(getProject("en", "does-not-exist")).toBeUndefined();
	});
});

function shapeOf(section: Section) {
	return { index: section.index, kind: section.kind };
}
