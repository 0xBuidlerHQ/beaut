import { defineConfig } from "tsdown";

const tsdownConfig = defineConfig({
	entry: {
		core: "src/core/index.ts",
		react: "src/react/index.tsx",
	},
	dts: true,
});

export default tsdownConfig;
