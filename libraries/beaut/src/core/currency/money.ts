type Options = {
	locale?: Intl.LocalesArgument;
	currency?: string;
	formatOptions?: Intl.NumberFormatOptions;
	fallback?: string;
};

/**
 * Formats a number into a currency string using Intl.NumberFormat.
 *
 * Example:
 * 1234.56 → "$1,234.56" (default USD)
 * 1234.56 + { currency: "EUR" } → "€1,234.56"
 *
 * Features:
 * - Handles null/undefined/NaN inputs safely
 * - Supports any ISO currency code (default: USD)
 * - Supports custom Intl.NumberFormat overrides
 * - Supports custom locale
 * - Provides a customizable fallback value
 *
 * @param value - The numeric value to format
 * @param options - Formatting options (locale, currency, overrides, fallback)
 * @returns A formatted currency string, or fallback if invalid
 */
const money = (value?: Parameters<Intl.NumberFormat["format"]>[0] | null, options: Options = {}): string => {
	const { locale = "en-US", currency = "USD", formatOptions = {}, fallback = "0.00" } = options;

	if (value === undefined || value === null) return fallback;

	const numericValue = Number(value);
	if (!Number.isFinite(numericValue)) return fallback;

	const baseOptions: Intl.NumberFormatOptions = {
		style: "currency",
		currency,
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

export { money };
