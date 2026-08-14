import z from "zod";

const envSchema = z.object({
	VITE_SITE_URL: z.url(),
});

const parsed = envSchema.parse(
	typeof window === "undefined" ? process.env : import.meta.env,
);

export const env = parsed;
