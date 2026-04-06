type ExpandDeep<T> = T extends (...args: any[]) => any
	? T
	: T extends readonly any[]
		? { [K in keyof T]: ExpandDeep<T[K]> }
		: T extends object
			? { [K in keyof T]: ExpandDeep<T[K]> }
			: T;

export type { ExpandDeep };
