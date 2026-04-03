import { parseUnits } from "viem";

type SafeParseBigIntOptions = {
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
const safeParseBigInt = (
	value?: string | null,
	decimals?: number | null,
	options: SafeParseBigIntOptions = {},
): bigint => {
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

export { safeParseBigInt, type SafeParseBigIntOptions };
