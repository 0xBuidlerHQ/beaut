import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vocs";

import { Sidebar } from "./config/sidebar";
import packageJson from "./package.json";

export default defineConfig({
	/**
	 * @dev Vite config.
	 */
	vite: {
		server: {
			port: 4000,
		},
		plugins: [tsconfigPaths()],
	},

	/**
	 * @dev Vocs config.
	 */
	rootDir: ".",
	title: "Docs",
	iconUrl: {
		light: "/assets/logo.svg",
		dark: "/assets/logo.svg",
	},
	logoUrl: {
		light: "/assets/logo.svg",
		dark: "/assets/logo.svg",
	},
	sidebar: Sidebar,
	topNav: [
		{
			text: packageJson.version,
			items: [
				{
					text: "Contributing",
					link: "https://github.com/0xbuidlerhq/beaut/blob/main/.github/CONTRIBUTING.md",
				},
			],
		},
	],
	socials: [
		{
			icon: "github",
			link: "https://github.com/0xbuidlerhq/beaut",
		},
		{
			icon: "x",
			link: "https://x.com/maximeisalive",
		},
	],
	theme: {
		colorScheme: "dark",
		accentColor: "#ffc517",

		variables: {
			color: {
				background: "#1A191B",
			},
			topNav: {
				horizontalPadding: "10px",
			},
		},
	},
});
