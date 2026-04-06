import { address } from "@core/base/address";
import { hash } from "@core/base/hash";
import { money } from "@core/currency/money";
import { explorerAddress } from "@core/explorer/explorerAddress";
import { explorerBlock } from "@core/explorer/explorerBlock";
import { explorerTxHash } from "@core/explorer/explorerTxHash";
import { bigint } from "@core/number/bigint";
import { kmb } from "@core/number/kmb";
import { percent } from "@core/number/percent";

const Beaut = {
	// Base.
	address,
	hash,

	// Currency.
	money,

	// Number.
	bigint,
	kmb,
	percent,

	// Explorer.
	explorerAddress,
	explorerBlock,
	explorerTxHash,
};

export { Beaut };
