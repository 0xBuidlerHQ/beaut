import type { ExpandDeep } from "@utils";

type Options = {
	locale?: Intl.LocalesArgument;
	formatOptions?: Intl.NumberFormatOptions;
	fallback?: string;
};

/**
 * Formats a number into a compact K/M/B representation using Intl.NumberFormat.
 *
 * Example:
 * 1200 → "1.20K"
 * 1500000 → "1.50M"
 *
 * Features:
 * - Handles null/undefined/NaN inputs safely
 * - Uses compact notation (K, M, B, etc.)
 * - Supports custom Intl.NumberFormat overrides
 * - Supports custom locale
 * - Provides a customizable fallback value
 *
 * @param value - The numeric value to format
 * @param options - Formatting options (locale, overrides, fallback)
 * @returns A formatted compact string, or fallback if invalid
 */
const kmb = (value?: Parameters<Intl.NumberFormat["format"]>[0] | null, options: Options = {}): string => {
	const { locale = "en-US", formatOptions = {}, fallback = "0" } = options;

	if (value === undefined || value === null) return fallback;

	const numericValue = Number(value);
	if (!Number.isFinite(numericValue)) return fallback;

	const baseOptions: Intl.NumberFormatOptions = {
		notation: "compact",
		compactDisplay: "short",
		roundingMode: "trunc",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	};

	try {
		return new Intl.NumberFormat(locale, {
			...baseOptions,
			...formatOptions,
		}).format(numericValue);
	} catch {
		return fallback;
	}
};

type KmbParameters = ExpandDeep<Parameters<typeof kmb>>;
type KmbReturnType = ReturnType<typeof kmb>;

export { kmb, type KmbParameters, type KmbReturnType };
