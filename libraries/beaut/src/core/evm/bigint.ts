import { formatUnits, parseUnits } from "viem";

type FormatBigIntOptions = {
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
const formatBigInt = (value?: bigint | null, decimals?: number | null, options: FormatBigIntOptions = {}): string => {
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

type ParseBigIntOptions = {
	fallback?: bigint;
};

/**
 * Safely parses a string value into a bigint using token decimals.
 *
 * Example:
 * "1.5" + 18
 * → 1500000000000000000n
 *
 * Features:
 * - Handles null/undefined inputs safely
 * - Validates decimals (must be a non-negative integer)
 * - Validates numeric string input
 * - Provides a customizable fallback value
 * - Uses viem's parseUnits under the hood
 *
 * @param value - The string value to parse (e.g., user input like "1.5")
 * @param decimals - Number of decimals for the token (e.g., 18 for ETH)
 * @param options - Parsing options
 * @returns A bigint representation of the value, or fallback if invalid
 */
const parseBigInt = (value?: string | null, decimals?: number | null, options: ParseBigIntOptions = {}): bigint => {
	const { fallback = 0n } = options;

	if (value === undefined || value === null) return fallback;
	if (decimals === undefined || decimals === null) return fallback;

	const trimmed = value.trim();

	// Validate decimals (must be a non-negative integer)
	const isValidDecimals = Number.isInteger(decimals) && decimals >= 0;
	if (!isValidDecimals) return fallback;

	// Basic numeric string validation (supports integers and decimals)
	const isValidNumber = /^(\d+(\.\d+)?|\.\d+)$/.test(trimmed);
	if (!isValidNumber) return fallback;

	try {
		return parseUnits(trimmed, decimals);
	} catch {
		return fallback;
	}
};

export { formatBigInt, parseBigInt, type ParseBigIntOptions, type FormatBigIntOptions };
