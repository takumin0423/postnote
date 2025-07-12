import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
	schema: "./src/db/schema.ts",
	out: "./supabase/migrations",
	dialect: "postgresql",
	dbCredentials: {
		// biome-ignore lint/style/noNonNullAssertion: DATABASE_URL は必ず環境変数で提供されるため null にはならない
		url: process.env.DATABASE_URL!,
	},
});
