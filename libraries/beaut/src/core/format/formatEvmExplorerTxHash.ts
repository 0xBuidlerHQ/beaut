type FormatEvmExplorerTxHashOptions = {
	path?: string;
};

/**
 * Formats an EVM explorer transaction URL from a base explorer URL and a transaction hash.
 *
 * Example:
 * https://etherscan.io + 0xabc...123
 * → https://etherscan.io/tx/0xabc...123
 *
 * Features:
 * - Handles null/undefined inputs safely
 * - Validates transaction hash format
 * - Prevents malformed URLs (trailing slashes handled)
 * - Customizable path (default: "tx")
 *
 * @param evmExplorerUrl - Base URL of the EVM explorer (e.g., https://etherscan.io)
 * @param txHash - Transaction hash (expected to be a 66-character hex string starting with "0x")
 * @param options - Formatting options
 * @returns A full explorer URL for the transaction, or "#" if invalid
 */
const formatEvmExplorerTxHash = (
	evmExplorerUrl?: string | null,
	txHash?: string | null,
	options: FormatEvmExplorerTxHashOptions = {},
): string => {
	if (!evmExplorerUrl || !txHash) return "#";

	const { path = "tx" } = options;

	const base = evmExplorerUrl.trim();
	const hash = txHash.trim();

	// Basic EVM hash validation (0x + 64 hex chars)
	const isValidHash = /^0x[a-fA-F0-9]{64}$/.test(hash);
	if (!isValidHash) return "#";

	// Remove trailing slash from base URL if present
	const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;

	return `${normalizedBase}/${path}/${hash}`;
};

export { formatEvmExplorerTxHash, type FormatEvmExplorerTxHashOptions };
