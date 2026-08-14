const SITE_NAME = "Eduin Garcia";

type SeoInput = {
	title: string;
	description: string;
	url?: string;
	image?: string;
};

export function generateMeta({ title, description, url, image }: SeoInput) {
	const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

	return [
		// React Router replaces an ancestor's `meta` with the leaf route's rather
		// than merging them, so the document-level tags have to be repeated here.
		// Without the viewport tag a phone lays the page out at 980px.
		{ charSet: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ title: fullTitle },
		{ name: "description", content: description },
		{ property: "og:title", content: fullTitle },
		{ property: "og:description", content: description },
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: SITE_NAME },
		...(url ? [{ property: "og:url", content: url }] : []),
		...(image ? [{ property: "og:image", content: image }] : []),
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: fullTitle },
		{ name: "twitter:description", content: description },
	];
}
