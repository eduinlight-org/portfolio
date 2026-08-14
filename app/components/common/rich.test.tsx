import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Rich } from "~/components/common/rich";
import { bold, em, mono, txt } from "~/content/types";

describe("Rich", () => {
	it("renders a plain string as-is", () => {
		render(<Rich line="Postgres RLS as the tenancy boundary" />);
		expect(
			screen.getByText("Postgres RLS as the tenancy boundary"),
		).toBeDefined();
	});

	it("renders strong, em and code runs as real elements", () => {
		const { container } = render(
			<Rich
				line={[
					bold("Bloom"),
					txt(" ships an extensible "),
					em("stamp"),
					txt(" system on "),
					mono("@nestjs/cqrs"),
				]}
			/>,
		);

		expect(container.querySelector("strong")?.textContent).toBe("Bloom");
		expect(container.querySelector("em")?.textContent).toBe("stamp");
		expect(container.querySelector("code")?.textContent).toBe("@nestjs/cqrs");
		// No dangerouslySetInnerHTML anywhere — the parts are real nodes.
		expect(container.textContent).toBe(
			"Bloom ships an extensible stamp system on @nestjs/cqrs",
		);
	});
});
