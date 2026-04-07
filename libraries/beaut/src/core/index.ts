import { type AddressParameters, type AddressReturnType, address } from "@core/base/address";
import { type HashParameters, type HashReturnType, hash } from "@core/base/hash";
import { type MoneyParameters, type MoneyReturnType, money } from "@core/currency/money";
import {
	type ExplorerAddressParameters,
	type ExplorerAddressReturnType,
	explorerAddress,
} from "@core/explorer/explorerAddress";
import {
	type ExplorerBlockParameters,
	type ExplorerBlockReturnType,
	explorerBlock,
} from "@core/explorer/explorerBlock";
import {
	type ExplorerTxHashParameters,
	type ExplorerTxHashReturnType,
	explorerTxHash,
} from "@core/explorer/explorerTxHash";
import { type BigintParameters, type BigintReturnType, bigint } from "@core/number/bigint";
import { type KmbParameters, type KmbReturnType, kmb } from "@core/number/kmb";
import { type PercentParameters, type PercentReturnType, percent } from "@core/number/percent";

const Beaut = {
	// Base.
	address,
	hash,

	// Currency.
	money,

	// Explorer.
	explorerAddress,
	explorerBlock,
	explorerTxHash,

	// Number.
	bigint,
	kmb,
	percent,
};

export {
	Beaut,
	// Base Types.
	type AddressParameters,
	type AddressReturnType,
	type HashParameters,
	type HashReturnType,
	// Currency Types.
	type MoneyParameters,
	type MoneyReturnType,
	// Explorer Types.
	type ExplorerAddressParameters,
	type ExplorerAddressReturnType,
	type ExplorerBlockParameters,
	type ExplorerBlockReturnType,
	type ExplorerTxHashParameters,
	type ExplorerTxHashReturnType,
	// Number Types.
	type BigintParameters,
	type BigintReturnType,
	type KmbParameters,
	type KmbReturnType,
	type PercentParameters,
	type PercentReturnType,
};
