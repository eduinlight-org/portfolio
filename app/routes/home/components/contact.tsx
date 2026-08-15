import { Blueprint } from "~/components/blueprint";
import type { ProfileContent } from "~/content/types";
import { useAppTranslation } from "~/lib/i18n";
import { ContactRows } from "./contact-rows";

type ContactProps = {
	contact: ProfileContent["contact"];
};

const pad = (index: number) => String(index).padStart(2, "0");

/**
 * The one place the Industry system lets the accent carry a full field: a
 * `--color-accent-900` band with the type reversed to paper.
 */
export function Contact({ contact }: ContactProps) {
	const { t } = useAppTranslation();

	return (
		<section
			id="contact"
			className="mt-24 bg-steel-900 px-[clamp(20px,5vw,72px)] py-[84px] text-ash-100"
		>
			<div className="mx-auto grid max-w-[1200px] grid-cols-1 items-end gap-[clamp(32px,5vw,88px)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
				<div>
					<div className="mb-5 font-display font-semibold text-[13px] text-steel-300 uppercase tracking-[0.14em]">
						{pad(contact.heading.index)} · {contact.heading.title}
					</div>
					<h2 className="m-0 mb-5 font-display font-bold text-[clamp(34px,5.5vw,76px)] uppercase leading-[1.04] tracking-[0.01em]">
						{contact.headline.map((line) => (
							<span key={line} className="block">
								{line}
							</span>
						))}
					</h2>
					<p className="m-0 mb-7 max-w-[44ch] text-[18px] text-steel-200 leading-7">
						{contact.lead}
					</p>
					<div className="flex flex-wrap gap-3">
						<Blueprint
							as="a"
							className="btn btn-primary border-ash-100 bg-ash-100 text-steel-900 hover:bg-white"
							href={`mailto:${contact.email}`}
						>
							{t("actions.sendEmail")}
						</Blueprint>
						<a
							className="btn btn-ghost border-steel-400 text-ash-100"
							href="/eduin-cv.pdf"
							target="_blank"
							rel="noopener"
						>
							{t("actions.downloadCv")}
						</a>
					</div>
				</div>

				<ContactRows contact={contact} />
			</div>
		</section>
	);
}
