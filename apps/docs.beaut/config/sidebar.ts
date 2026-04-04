import type { Sidebar as SidebarPrimitive } from "vocs";
import { Links } from "./links";

const Sidebar: SidebarPrimitive = {
	"/core/": [
		{
			text: "Introduction",
			items: [
				{
					text: "Rationale",
					link: Links.core.introduction.rationale,
				},
				{
					text: "Installation",
					link: Links.core.introduction.installation,
				},
				{
					text: "Getting Started",
					link: Links.core.introduction.gettingStarted,
				},
			],
		},
		{
			text: "Evm",
			items: [
				{
					text: "address",
					link: Links.core.functions.evm.address,
				},
				{
					text: "bigint",
					link: Links.core.functions.evm.address,
				},
				{
					text: "explorer",
					link: Links.core.functions.evm.address,
				},
				{
					text: "hash",
					link: Links.core.functions.evm.address,
				},
			],
		},
		{
			text: "Misc",
			items: [],
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
