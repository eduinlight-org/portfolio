import type { ProfileContent } from "~/content/types";

type ContactRowsProps = {
	contact: ProfileContent["contact"];
};

type Row = {
	label: string;
	text: string;
	href?: string;
};

const dtClass =
	"border-steel-700 border-t py-3 font-display font-semibold text-[12px] text-steel-300 uppercase tracking-[0.14em]";
const ddClass = "m-0 border-steel-700 border-t py-3";

/** The reversed definition list in the contact band. */
export function ContactRows({ contact }: ContactRowsProps) {
	const rows: Row[] = [
		{
			label: "Email",
			text: contact.email,
			href: `mailto:${contact.email}`,
		},
		...(contact.showPhone && contact.phone
			? [
					{
						label: "Phone",
						text: contact.phone,
						href: `tel:${contact.phone.replace(/\s/g, "")}`,
					},
				]
			: []),
		...contact.links.map((link) => ({
			label: link.label,
			text: typeof link.value === "string" ? link.value : link.label,
			href: `https://${typeof link.value === "string" ? link.value : ""}`,
		})),
	];

	return (
		<dl className="m-0 grid grid-cols-1 gap-x-6 text-[16px] sm:grid-cols-[max-content_1fr]">
			{rows.map((row, index) => {
				const closing =
					index === rows.length - 1 ? "border-steel-700 border-b" : "";

				return [
					<dt key={`${row.label}-label`} className={`${dtClass} ${closing}`}>
						{row.label}
					</dt>,
					<dd key={`${row.label}-value`} className={`${ddClass} ${closing}`}>
						{row.href ? (
							<a
								href={row.href}
								target={row.href.startsWith("https://") ? "_blank" : undefined}
								rel={row.href.startsWith("https://") ? "noopener" : undefined}
								className="text-ash-100 hover:text-white"
							>
								{row.text}
							</a>
						) : (
							row.text
						)}
					</dd>,
				];
			})}
		</dl>
	);
}
