import type { Role } from "~/content/types";

type RoleEntryProps = {
	role: Role;
};

export function RoleEntry({ role }: RoleEntryProps) {
	return (
		<div className="grid grid-cols-1 gap-[clamp(24px,4vw,56px)] border-rule border-b py-8 md:grid-cols-[200px_minmax(0,1fr)]">
			<div>
				<div className="font-display font-semibold text-[13px] text-ash-600 uppercase tracking-[0.12em]">
					{role.period}
				</div>
				<div className="mt-2.5 font-display font-semibold text-[22px] text-steel-700 uppercase leading-[26px] tracking-[0.02em]">
					{role.company}
				</div>
			</div>
			<div>
				<h3 className="m-0 mb-4 font-display font-semibold text-[30px] uppercase leading-8 tracking-[0.01em]">
					{role.title}
				</h3>
				<ul className="m-0 flex list-disc flex-col gap-2 pl-[18px] marker:text-steel">
					{role.bullets.map((bullet) => (
						<li
							key={bullet}
							className="max-w-[68ch] text-[16px] text-ash-800 leading-6"
						>
							{bullet}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
