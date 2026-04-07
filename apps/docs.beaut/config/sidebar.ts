import type { Sidebar as SidebarPrimitive } from "vocs";
import { Links } from "./links";

const Sidebar: SidebarPrimitive = [
	{
		text: "Introduction",
		items: [
			{ text: "Why Beaut", link: Links.introduction.why },
			{ text: "Installation", link: Links.introduction.installation },
			{ text: "Getting Started", link: Links.introduction.gettingStarted },
		],
	},
	{
		text: "Core",
		items: [
			//
			{ text: "address", link: Links.core.base.address },
			{ text: "hash", link: Links.core.base.hash },

			//
			{ text: "money", link: Links.core.currency.money },

			//
			{ text: "explorerAddress", link: Links.core.explorer.explorerAddress },
			{ text: "explorerBlock", link: Links.core.explorer.explorerBlock },
			{ text: "explorerTxHash", link: Links.core.explorer.explorerTxHash },

			//
			{ text: "bigint", link: Links.core.number.bigint },
			{ text: "kmb", link: Links.core.number.kmb },
			{ text: "percent", link: Links.core.number.percent },
		],
	},

	{
		text: "React",
		items: [
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
	},
];

export { Sidebar };
