type SiteFooterProps = {
	left: string;
	right: string;
};

export function SiteFooter({ left, right }: SiteFooterProps) {
	return (
		<footer className="px-[clamp(20px,5vw,72px)] pt-6 pb-9">
			<div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 font-display font-semibold text-[12px] text-ash-600 uppercase tracking-[0.14em]">
				<span>{left}</span>
				<span>{right}</span>
			</div>
		</footer>
	);
}
