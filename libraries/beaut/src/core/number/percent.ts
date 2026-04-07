import type { ExpandDeep } from "@utils";

type Options = {
	locale?: Intl.LocalesArgument;
	formatOptions?: Intl.NumberFormatOptions;
	fallback?: string;
};

/**
 * Formats a number as a percent using Intl.NumberFormat.
 *
 * Example:
 * 0.1234 → "12.34%"
 *
 * Features:
 * - Handles invalid inputs safely by returning a fallback string
 * - Supports custom Intl.NumberFormat overrides
 * - Supports custom locale settings
 * - Provides a configurable fallback value
 *
 * @param value - The number to format as a percent
 * @param options - Formatter configuration (locale, overrides, fallback)
 * @returns The formatted percent string or the fallback on failure
 */
const percent = (value?: number | null, options: Options = {}): string => {
	const { locale = "en-US", formatOptions = {}, fallback = "0%" } = options;

	const baseOptions: Intl.NumberFormatOptions = {
		style: "percent",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	};

	if (value === undefined || value === null) return fallback;

	const numericValue = Number(value);
	if (!Number.isFinite(numericValue)) return fallback;

	try {
		return new Intl.NumberFormat(locale, {
			...baseOptions,
			...formatOptions,
		}).format(numericValue);
	} catch {
		return fallback;
	}
};

type PercentParameters = ExpandDeep<Parameters<typeof percent>>;
type PercentReturnType = ReturnType<typeof percent>;

export { percent, type PercentParameters, type PercentReturnType };
