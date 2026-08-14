import { env } from "~/env";

export function loader() {
	const base = env.VITE_SITE_URL.replace(/\/$/, "");

	const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
}
