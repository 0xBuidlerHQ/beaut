type ExplorerFormatOptions = {
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
const address = (
	evmExplorerUrl?: string | null,
	address?: string | null,
	options: ExplorerFormatOptions = {},
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
const block = (evmExplorerUrl?: string | null, block?: number | null, options: ExplorerFormatOptions = {}): string => {
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
const txHash = (
	evmExplorerUrl?: string | null,
	txHash?: string | null,
	options: ExplorerFormatOptions = {},
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

const explorer = {
	address,
	block,
	txHash,
};

export { explorer, type ExplorerFormatOptions };
