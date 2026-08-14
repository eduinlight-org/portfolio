import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const PORT = Number(process.env.PORT ?? 3000);

export default defineConfig({
	server: {
		port: PORT,
		host: true,
		watch: {
			usePolling: true,
		},
		allowedHosts: true,
		hmr: {
			port: PORT,
		},
	},
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [tailwindcss(), reactRouter()],
});
