import { formatUnits } from "viem";

type SafeFormatBigIntOptions = {
	fallback?: string;
};

/**
 * Safely formats a bigint value using token decimals into a human-readable string.
 *
 * Example:
 * 1000000000000000000n + 18
 * → "1.0"
 *
 * Features:
 * - Handles null/undefined inputs safely
 * - Validates decimals (must be a non-negative integer)
 * - Provides a customizable fallback value
 * - Uses viem's formatUnits under the hood
 *
 * @param value - The bigint value to format (e.g., token amount in wei)
 * @param decimals - Number of decimals for the token (e.g., 18 for ETH)
 * @param options - Formatting options
 * @returns A formatted string representation of the value, or fallback if invalid
 */
const safeFormatBigInt = (
	value?: bigint | null,
	decimals?: number | null,
	options: SafeFormatBigIntOptions = {},
): string => {
	const { fallback = "0" } = options;

	if (value === undefined || value === null) return fallback;
	if (decimals === undefined || decimals === null) return fallback;

	// Validate decimals (must be a non-negative integer)
	const isValidDecimals = Number.isInteger(decimals) && decimals >= 0;
	if (!isValidDecimals) return fallback;

	try {
		return formatUnits(value, decimals);
	} catch {
		return fallback;
	}
};

export { safeFormatBigInt, type SafeFormatBigIntOptions };
