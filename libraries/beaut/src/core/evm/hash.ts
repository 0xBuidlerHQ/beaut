type HashFormatOptions = {
	prefixLength?: number;
	suffixLength?: number;
};

/**
 * Formats an EVM transaction hash into a shortened, human-readable form.
 *
 * Example:
 * 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890
 * → 0xabcd...7890
 *
 * Features:
 * - Handles invalid or malformed inputs safely
 * - Gracefully handles null/undefined values
 * - Customizable prefix/suffix lengths
 *
 * @param hash - The full EVM transaction hash (expected to be a 66-character hex string starting with "0x")
 * @param options - Formatting options
 * @returns A shortened version of the hash, or an empty string if invalid
 */
const hash = (hash?: string | null, options: HashFormatOptions = {}): string => {
	if (!hash || typeof hash !== "string") return "";

	const { prefixLength = 6, suffixLength = 4 } = options;

	const trimmed = hash.trim();

	// Basic EVM hash validation (0x + 64 hex chars)
	const isValidHash = /^0x[a-fA-F0-9]{64}$/.test(trimmed);
	if (!isValidHash) return "";

	if (prefixLength + suffixLength >= trimmed.length) {
		return trimmed;
	}

	return `${trimmed.slice(0, prefixLength)}...${trimmed.slice(-suffixLength)}`;
};

export { hash, type HashFormatOptions };
