import { getProjectSlugs } from "~/content";
import { env } from "~/env";
import { DEFAULT_LOCALE } from "~/lib/i18n";

export function loader() {
	const base = env.VITE_SITE_URL.replace(/\/$/, "");
	const urls = [
		base,
		...getProjectSlugs(DEFAULT_LOCALE).map((slug) => `${base}/work/${slug}`),
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `\t<url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

	return new Response(body, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
}
