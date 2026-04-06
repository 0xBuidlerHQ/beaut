import type { Sidebar as SidebarPrimitive } from "vocs";
import { Links } from "./links";

const Sidebar: SidebarPrimitive = {
	"/core/": [
		{
			text: "",
			items: [
				{ text: "Introduction", link: Links.core.introduction.rationale },
				{ text: "Installation", link: Links.core.introduction.installation },
				{ text: "Getting Started", link: Links.core.introduction.gettingStarted },
			],
		},

		{
			text: "Base",
			items: [
				{ text: "address", link: Links.core.base.address },
				{ text: "hash", link: Links.core.base.hash },
			],
		},
		{
			text: "Currency",
			items: [{ text: "money", link: Links.core.currency.money }],
		},
		{
			text: "Explorer",
			items: [
				{ text: "explorerAddress", link: Links.core.explorer.explorerAddress },
				{ text: "explorerBlock", link: Links.core.explorer.explorerBlock },
				{ text: "explorerTxHash", link: Links.core.explorer.explorerTxHash },
			],
		},
		{
			text: "Number",
			items: [
				{ text: "bigint", link: Links.core.number.bigint },
				{ text: "kmb", link: Links.core.number.kmb },
				{ text: "percent", link: Links.core.number.percent },
			],
		},
	],
	"/react/": [
		{
			text: "Introduction",
			items: [
				{
					text: "Rationale",
					link: Links.react.introduction.rationale,
				},
				{
					text: "Installation",
					link: Links.react.introduction.installation,
				},
				{
					text: "Getting Started",
					link: Links.react.introduction.gettingStarted,
				},
			],
		},
		{
			text: "Components",
			items: [],
		},
		{
			text: "Hooks",
			items: [
				{
					text: "useBigIntInput",
					link: Links.react.hooks.useBigIntInput,
				},
			],
		},
	],
};

export { Sidebar };
