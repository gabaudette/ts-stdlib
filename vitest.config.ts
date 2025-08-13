import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["**/*.test.ts"],
		exclude: [
			"**/index.ts",
			"**/dist/**",
			"**/node_modules/**",
			"**/*.config.ts",
		],
		coverage: {
			provider: "v8",
			exclude: [
				"**/index.ts",
				"**/dist/**",
				"**/node_modules/**",
				"**/*.config.ts",
			],
		},
	},
});
