import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "jsdom",
		globals: true,
		include: ["app/**/*.test.{ts,tsx}"],
	},
	resolve: {
		alias: {
			"~": fileURLToPath(new URL("./app", import.meta.url)),
		},
	},
});
