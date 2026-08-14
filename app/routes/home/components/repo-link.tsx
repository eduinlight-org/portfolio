import type { Repo } from "~/content/types";

type RepoLinkProps = {
	repo: Repo;
};

export function RepoLink({ repo }: RepoLinkProps) {
	return (
		<a
			href={repo.url}
			target="_blank"
			rel="noopener"
			className="grid grid-cols-[minmax(0,1fr)_max-content] gap-x-4 border-rule border-b py-[18px] text-ink"
		>
			{/* Repo names are single unbroken tokens — without wrap-anywhere the
			    longest ones set the column's min-content width and push the page
			    into a horizontal scroll on small screens. */}
			<span className="wrap-anywhere font-display font-semibold text-[20px] leading-6 tracking-[0.02em]">
				{repo.name}
			</span>
			<span className="whitespace-nowrap pt-1 font-display font-semibold text-[11px] text-steel-700 uppercase tracking-[0.16em]">
				{repo.tag}
			</span>
			<span className="col-span-full mt-1 text-[15px] text-ash-700 leading-[22px]">
				{repo.desc}
			</span>
		</a>
	);
}
