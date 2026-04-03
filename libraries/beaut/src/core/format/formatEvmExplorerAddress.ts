type FormatEvmExplorerAddressOptions = {
	path?: string;
};

/**
 * Formats an EVM explorer address URL from a base explorer URL and an address.
 *
 * Example:
 * https://etherscan.io + 0x1234...abcd
 * → https://etherscan.io/address/0x1234...abcd
 *
 * Features:
 * - Handles null/undefined inputs safely
 * - Validates EVM address format
 * - Prevents malformed URLs (trailing slashes handled)
 * - Customizable path (default: "address")
 *
 * @param evmExplorerUrl - Base URL of the EVM explorer (e.g., https://etherscan.io)
 * @param address - EVM address (expected to be a 42-character hex string starting with "0x")
 * @param options - Formatting options
 * @returns A full explorer URL for the address, or "#" if invalid
 */
const formatEvmExplorerAddress = (
	evmExplorerUrl?: string | null,
	address?: string | null,
	options: FormatEvmExplorerAddressOptions = {},
): string => {
	if (!evmExplorerUrl || !address) return "#";

	const { path = "address" } = options;

	const base = evmExplorerUrl.trim();
	const addr = address.trim();

	// Basic EVM address validation (0x + 40 hex chars)
	const isValidAddress = /^0x[a-fA-F0-9]{40}$/.test(addr);
	if (!isValidAddress) return "#";

	// Remove trailing slash from base URL if present
	const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;

	return `${normalizedBase}/${path}/${addr}`;
};

export { formatEvmExplorerAddress, type FormatEvmExplorerAddressOptions };
