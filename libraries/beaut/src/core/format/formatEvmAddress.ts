type FormatEvmAddressOptions = {
	prefixLength?: number;
	suffixLength?: number;
};

/**
 * Formats an EVM address into a shortened, human-readable form.
 *
 * Example:
 * 0x1234567890abcdef1234567890abcdef12345678
 * → 0x1234...5678
 *
 * Features:
 * - Handles invalid or malformed inputs safely
 * - Supports optional ENS names (returns as-is)
 * - Gracefully handles null/undefined values
 *
 * @param address - The full EVM address or ENS name
 * @param options - Formatting options
 * @returns A shortened version of the address, or an empty string if invalid
 */
const formatEvmAddress = (address?: string | null, options: FormatEvmAddressOptions = {}): string => {
	if (!address || typeof address !== "string") return "";

	const { prefixLength = 6, suffixLength = 4 } = options;

	// Basic ENS detection
	if (address.includes(".")) {
		return address;
	}

	const trimmed = address.trim();

	// Basic EVM address validation (0x + 40 hex chars)
	const isValidEvmAddress = /^0x[a-fA-F0-9]{40}$/.test(trimmed);
	if (!isValidEvmAddress) return "";

	if (prefixLength + suffixLength >= trimmed.length) {
		return trimmed;
	}

	return `${trimmed.slice(0, prefixLength)}...${trimmed.slice(-suffixLength)}`;
};

export { formatEvmAddress, type FormatEvmAddressOptions };
