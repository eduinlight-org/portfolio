/**
 * The shape of every piece of authored content on the site.
 *
 * The design (see the `.dc.html` sources) writes each project page as a stack of
 * numbered sections, and although the *titles* differ per project, every section
 * is one of six visual shapes. Modelling that as a discriminated union lets one
 * `/work/:slug` route render all six pages, and makes adding a seventh project a
 * data file rather than a component.
 */

/** An inline run inside a line of copy — the design uses <strong> and <code>. */
export type RichPart =
	| { kind: "text"; value: string }
	| { kind: "strong"; value: string }
	| { kind: "code"; value: string }
	| { kind: "em"; value: string };

/** A line of copy: a plain string, or parts when it needs inline emphasis. */
export type RichLine = string | RichPart[];

export const txt = (value: string): RichPart => ({ kind: "text", value });
export const bold = (value: string): RichPart => ({ kind: "strong", value });
export const mono = (value: string): RichPart => ({ kind: "code", value });
export const em = (value: string): RichPart => ({ kind: "em", value });

export type LabelledRow = {
	label: string;
	value: RichLine;
};

export type NameDesc = {
	name: string;
	desc: RichLine;
};

export type CardItem = {
	title?: string;
	body: RichLine;
};

export type TagGroup = {
	name: string;
	items?: string[];
	/** Some groups carry a sentence instead of tags, e.g. Caxper's "Delivery pipeline". */
	body?: RichLine;
};

export type Stat = {
	value: string;
	label: string;
};

/** A section header: the `01 · ARCHITECTURE` row with its right-hand meta. */
export type SectionHeading = {
	index: number;
	title: string;
	meta?: string;
};

export type Section = SectionHeading &
	(
		| { kind: "bullets"; items: RichLine[] }
		| { kind: "rows"; rows: LabelledRow[] }
		| { kind: "nameDesc"; items: NameDesc[] }
		| {
				kind: "cards";
				items: CardItem[];
				columns?: 2 | 3;
				/** Card titles read as a display heading, a small accent kicker, or a mono repo name. */
				titleStyle?: "heading" | "kicker" | "mono";
		  }
		| { kind: "tagGroups"; groups: TagGroup[] }
		| { kind: "prose"; paragraphs: RichLine[] }
	);

/**
 * An image region. The design leaves every one of these as an empty
 * `<image-slot>`; `src` stays undefined until a real screenshot is dropped into
 * `public/work/`, at which point the placeholder frame becomes the picture.
 */
export type Figure = {
	/** Text shown inside the empty frame, e.g. "Drop a Caxper screenshot". */
	placeholder: string;
	/** CSS aspect-ratio, e.g. "16 / 9". */
	ratio: string;
	caption?: string;
	src?: string;
	alt?: string;
};

/** The bordered plate with a header strip, a body and a footnote. */
export type SpecSheet = {
	title: string;
	/** Right-hand cells of the header strip, e.g. ["Rust 2021", "Sheet 01"]. */
	badges: string[];
	note?: string;
};

export type ExternalLink = {
	label: string;
	href: string;
};

/** How a project appears in the profile page's "Selected work" grid. */
export type ProjectCard = {
	kicker: string;
	title: string;
	body: string;
	/** Footer line on the standard card, e.g. "NestJS · React 19 · Postgres RLS". */
	meta: string;
	placeholder: string;
	/** The featured card is full-width and shows tags instead of a meta line. */
	featured?: boolean;
	tags?: string[];
};

export type Project = {
	slug: string;
	/** Short name for nav and prev/next links, e.g. "Caxper". */
	name: string;
	kicker: string;
	/** The h1, one entry per rendered line. */
	headline: string[];
	lead: RichLine;
	sublead?: RichLine;
	/** The link in the page header beside "All work". */
	link?: ExternalLink;
	/** Whether that link renders as a button (the design varies per page). */
	linkAsButton?: boolean;
	hero: Figure;
	/** The scale plate under the hero; `stats` fills either a grid or a band. */
	sheet?: SpecSheet & { stats: Stat[] };
	/** The full-bleed accent band of headline metrics. */
	band?: Stat[];
	sections: Section[];
	gallery: Figure[];
	card: ProjectCard;
	seo: { title: string; description: string };
};

/* ── The profile page ─────────────────────────────────────────────────────── */

export type Capability = {
	index: string;
	title: string;
	body: string;
};

export type Role = {
	period: string;
	company: string;
	title: string;
	bullets: string[];
};

export type Repo = {
	name: string;
	tag: string;
	desc: string;
	url: string;
};

export type RecordMeasure = {
	no: string;
	measure: string;
	value: string;
	remark: string;
};

export type BackgroundCard = {
	kicker: string;
	title: string;
	body: RichLine;
	/** The design draws the unfilled "references" card with a dashed frame. */
	pending?: boolean;
};

export type ProfileContent = {
	name: string;
	hero: {
		headline: string[];
		lead: string;
		figure: Figure;
	};
	profile: {
		heading: SectionHeading;
		summary: string;
		facts: LabelledRow[];
	};
	record: {
		sheet: SpecSheet;
		measures: RecordMeasure[];
	};
	capabilities: {
		heading: SectionHeading;
		items: Capability[];
	};
	work: {
		heading: SectionHeading;
		/**
		 * Slugs in the order the grid shows them. Deliberately separate from the
		 * `projects` array, which is ordered by the design's prev/next chain — the
		 * two orders differ.
		 */
		order: string[];
	};
	experience: {
		heading: SectionHeading;
		roles: Role[];
	};
	skills: {
		heading: SectionHeading;
		groups: TagGroup[];
	};
	openSource: {
		heading: SectionHeading;
		repos: Repo[];
		allReposLabel: string;
		allReposUrl: string;
	};
	background: {
		heading: SectionHeading;
		cards: BackgroundCard[];
	};
	contact: {
		heading: SectionHeading;
		headline: string[];
		lead: string;
		email: string;
		phone?: string;
		showPhone: boolean;
		links: LabelledRow[];
	};
	footer: {
		left: string;
		right: string;
	};
	seo: { title: string; description: string };
};

export type Locale = "en" | "es";

export type Content = {
	profile: ProfileContent;
	projects: Project[];
};
