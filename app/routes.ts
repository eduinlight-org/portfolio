import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("routes/home/route.tsx"),
	route("work/:slug", "routes/work.$slug/route.tsx"),
	route("sitemap.xml", "routes/sitemap[.]xml.tsx"),
	route("robots.txt", "routes/robots.txt.tsx"),
] satisfies RouteConfig;
