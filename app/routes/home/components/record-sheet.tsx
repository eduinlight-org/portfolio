import { SpecSheet } from "~/components/common/spec-sheet";
import type { ProfileContent } from "~/content/types";

type RecordSheetProps = {
	record: ProfileContent["record"];
};

/** The engineering-record plate: four measured figures drawn as a spec sheet. */
export function RecordSheet({ record }: RecordSheetProps) {
	return (
		<section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,72px)] pt-[60px]">
			<SpecSheet sheet={record.sheet}>
				<div className="overflow-x-auto">
					<table className="table w-full min-w-[560px] table-fixed">
						<thead>
							<tr>
								<th scope="col" className="w-[72px] py-3 pr-0 pl-6 text-left">
									No.
								</th>
								<th scope="col" className="py-3 pr-6 pl-0 text-left">
									Measure
								</th>
								<th scope="col" className="w-[22%] py-3 pr-6 pl-0 text-left">
									Value
								</th>
								<th scope="col" className="w-[34%] py-3 pr-6 pl-0 text-left">
									Remark
								</th>
							</tr>
						</thead>
						<tbody>
							{record.measures.map((measure) => (
								<tr key={measure.no}>
									<td className="py-3 pr-0 pl-6 font-display font-semibold text-steel-700 tracking-[0.1em]">
										{measure.no}
									</td>
									<td className="py-3 pr-6 pl-0">{measure.measure}</td>
									<td className="py-3 pr-6 pl-0 font-display text-[24px] leading-6">
										{measure.value}
									</td>
									<td className="py-3 pr-6 pl-0 text-[15px] text-ash-700">
										{measure.remark}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</SpecSheet>
		</section>
	);
}
