import { PageSection } from "~/components/common/page-section";
import { SectionHeader } from "~/components/common/section-header";
import type { Section } from "~/content/types";
import { BulletList } from "./bullet-list";
import { LabelledRowList } from "./labelled-row-list";
import { NameDescList } from "./name-desc-list";
import { ProseBlock } from "./prose-block";
import { SpecCardGrid } from "./spec-card-grid";
import { TagGroupGrid } from "./tag-group-grid";

type SectionRendererProps = {
	section: Section;
};

function SectionBody({ section }: SectionRendererProps) {
	switch (section.kind) {
		case "bullets":
			return <BulletList items={section.items} />;
		case "rows":
			return <LabelledRowList rows={section.rows} />;
		case "nameDesc":
			return <NameDescList items={section.items} />;
		case "cards":
			return (
				<SpecCardGrid
					items={section.items}
					columns={section.columns}
					titleStyle={section.titleStyle}
				/>
			);
		case "tagGroups":
			return <TagGroupGrid groups={section.groups} />;
		case "prose":
			return <ProseBlock paragraphs={section.paragraphs} />;
	}
}

/**
 * Renders one numbered section of a project page. Every section across all six
 * project pages is one of six shapes, so this switch is the whole of the
 * per-project layout logic.
 */
export function SectionRenderer({ section }: SectionRendererProps) {
	const { index, title, meta } = section;

	return (
		<PageSection>
			<SectionHeader heading={{ index, title, meta }} />
			<SectionBody section={section} />
		</PageSection>
	);
}
