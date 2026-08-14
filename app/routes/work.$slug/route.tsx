import { FigureFrame } from "~/components/common/figure-frame";
import { SpecSheet } from "~/components/common/spec-sheet";
import { StatGrid } from "~/components/common/stat-grid";
import { StatsBand } from "~/components/common/stats-band";
import { SiteFooter } from "~/components/layout/site-footer";
import { WorkHeader } from "~/components/layout/work-header";
import { SectionRenderer } from "~/components/sections/section-renderer";
import { getContent, getProject } from "~/content";
import { env } from "~/env";
import { getLocale } from "~/lib/prefs.server";
import { generateMeta } from "~/lib/seo";
import type { Route } from "./+types/route";
import { ProjectGallery } from "./components/project-gallery";
import { ProjectHero } from "./components/project-hero";
import { ProjectPager } from "./components/project-pager";

export async function loader({ request, params }: Route.LoaderArgs) {
	const locale = await getLocale(request);
	const found = getProject(locale, params.slug);

	if (!found) {
		throw new Response("Not Found", { status: 404 });
	}

	const { profile } = getContent(locale);

	return { locale, footer: profile.footer, name: profile.name, ...found };
}

export function meta({ data }: Route.MetaArgs) {
	if (!data) return [];

	return generateMeta({
		title: data.project.seo.title,
		description: data.project.seo.description,
		url: `${env.VITE_SITE_URL}/work/${data.project.slug}`,
	});
}

export default function Work({ loaderData }: Route.ComponentProps) {
	const { locale, name, footer, project, previous, next } = loaderData;

	return (
		<>
			<WorkHeader
				name={name}
				locale={locale}
				link={project.link}
				linkAsButton={project.linkAsButton}
			/>

			<ProjectHero project={project} />

			<section className="mx-auto mb-[72px] max-w-[1200px] px-[clamp(20px,5vw,72px)]">
				<FigureFrame figure={project.hero} />
			</section>

			{project.sheet ? (
				<section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,72px)]">
					<SpecSheet sheet={project.sheet}>
						<StatGrid stats={project.sheet.stats} />
					</SpecSheet>
				</section>
			) : null}

			{project.band ? <StatsBand stats={project.band} /> : null}

			{project.sections.map((section) => (
				<SectionRenderer key={section.index} section={section} />
			))}

			<ProjectGallery figures={project.gallery} />

			<ProjectPager previous={previous} next={next} />

			<SiteFooter left={footer.left} right={footer.right} />
		</>
	);
}
