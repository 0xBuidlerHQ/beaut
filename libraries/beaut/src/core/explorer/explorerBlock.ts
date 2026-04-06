type Options = {
	path?: string;
};

/**
 * Formats an EVM explorer block URL from a base explorer URL and a block number.
 *
 * Example:
 * https://etherscan.io + 12345678
 * → https://etherscan.io/block/12345678
 *
 * Features:
 * - Handles null/undefined inputs safely
 * - Validates block number (must be a positive integer)
 * - Prevents malformed URLs (trailing slashes handled)
 * - Customizable path (default: "block")
 *
 * @param evmExplorerUrl - Base URL of the EVM explorer (e.g., https://etherscan.io)
 * @param block - Block number (expected to be a positive integer)
 * @param options - Formatting options
 * @returns A full explorer URL for the block, or "#" if invalid
 */
const explorerBlock = (evmExplorerUrl?: string | null, block?: number | null, options: Options = {}): string => {
	if (!evmExplorerUrl || block === undefined || block === null) return "#";

	const { path = "block" } = options;

	const base = evmExplorerUrl.trim();

	// Validate block number (must be a positive integer)
	const isValidBlock = Number.isInteger(block) && block > 0;
	if (!isValidBlock) return "#";

	// Remove trailing slash from base URL if present
	const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;

	return `${normalizedBase}/${path}/${block}`;
};

export { explorerBlock };
