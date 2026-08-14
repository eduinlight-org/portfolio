import { SiteFooter } from "~/components/layout/site-footer";
import { SiteHeader } from "~/components/layout/site-header";
import { getContent } from "~/content";
import { env } from "~/env";
import { getLocale } from "~/lib/prefs.server";
import { generateMeta } from "~/lib/seo";
import type { Route } from "./+types/route";
import { Background } from "./components/background";
import { Capabilities } from "./components/capabilities";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { OpenSource } from "./components/open-source";
import { ProfileSummary } from "./components/profile-summary";
import { RecordSheet } from "./components/record-sheet";
import { SelectedWork } from "./components/selected-work";
import { Skills } from "./components/skills";

export async function loader({ request }: Route.LoaderArgs) {
	const locale = await getLocale(request);
	const { profile, projects } = getContent(locale);

	return { locale, profile, projects };
}

export function meta({ data }: Route.MetaArgs) {
	if (!data) return [];

	return generateMeta({
		title: data.profile.seo.title,
		description: data.profile.seo.description,
		url: env.VITE_SITE_URL,
	});
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { locale, profile, projects } = loaderData;

	return (
		<>
			<SiteHeader name={profile.name} locale={locale} />
			<Hero hero={profile.hero} />
			<ProfileSummary profile={profile.profile} />
			<RecordSheet record={profile.record} />
			<Capabilities capabilities={profile.capabilities} />
			<SelectedWork work={profile.work} projects={projects} />
			<Experience experience={profile.experience} />
			<Skills skills={profile.skills} />
			<OpenSource openSource={profile.openSource} />
			<Background background={profile.background} />
			<Contact contact={profile.contact} />
			<SiteFooter left={profile.footer.left} right={profile.footer.right} />
		</>
	);
}
