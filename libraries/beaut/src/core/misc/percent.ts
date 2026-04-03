type FormatPercentOptions = {
	locale?: Intl.LocalesArgument;
	formatOptions?: Intl.NumberFormatOptions;
	fallback?: string;
};

/**
 * Creates a percent formatter function using Intl.NumberFormat.
 *
 * Example:
 * 0.1234 → "12.34%"
 *
 * Features:
 * - Returns a reusable formatter function
 * - Handles invalid inputs safely at call time
 * - Supports custom Intl.NumberFormat overrides
 * - Supports custom locale
 * - Provides a customizable fallback value
 *
 * @param options - Formatter configuration (locale, overrides, fallback)
 * @returns A function that formats numbers as percentages
 */
const percent = (options: FormatPercentOptions = {}): ((value?: number | null) => string) => {
	const { locale = "en-US", formatOptions = {}, fallback = "0%" } = options;

	const baseOptions: Intl.NumberFormatOptions = {
		style: "percent",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	};

	let formatter: Intl.NumberFormat;

	try {
		formatter = new Intl.NumberFormat(locale, {
			...baseOptions,
			...formatOptions,
		});
	} catch {
		return () => fallback;
	}

	return (value?: number | null): string => {
		if (value === undefined || value === null) return fallback;

		const numericValue = Number(value);
		if (!Number.isFinite(numericValue)) return fallback;

		try {
			return formatter.format(numericValue);
		} catch {
			return fallback;
		}
	};
};

export { percent, type FormatPercentOptions };
