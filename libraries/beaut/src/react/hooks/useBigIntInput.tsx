import type { ExpandDeep } from "@utils";
import React from "react";

type Options = {
	decimals?: number;
	fallback?: bigint;
};

type Result = {
	value: string;
	valueAsBigInt: bigint;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isError: boolean;
};

/**
 * React hook to manage numeric string input and safely convert it to bigint with decimals.
 *
 * Example:
 * Input: "1.5" with decimals = 18
 * → valueAsBigInt: 1500000000000000000n
 *
 * Features:
 * - Handles invalid input gracefully (regex-based validation)
 * - Supports configurable decimals (default: 18)
 * - Prevents unsafe bigint conversions
 * - Keeps string input and bigint value in sync
 * - Provides error state for invalid user input
 *
 * @param options - Hook configuration
 * @returns Controlled input state + bigint representation
 */
const useBigIntInput = (options: Options = {}): Result => {
	const { decimals = 18, fallback = 0n } = options;

	const safeDecimals = React.useMemo(() => {
		return Number.isInteger(decimals) && decimals >= 0 ? decimals : 18;
	}, [decimals]);

	const numberValidator = React.useMemo(() => {
		if (safeDecimals <= 0) return /^(\d+)?$/;
		return new RegExp(`^(\\d+(\\.\\d{0,${safeDecimals}})?)?$`);
	}, [safeDecimals]);

	const [value, setValue] = React.useState<string>("");
	const [valueAsBigInt, setValueAsBigInt] = React.useState<bigint>(fallback);
	const [isError, setIsError] = React.useState<boolean>(false);

	const toBigIntWithDecimals = React.useCallback(
		(input: string): bigint => {
			if (!input) return fallback;

			const [integerPart, decimalPart = ""] = input.split(".");

			if (safeDecimals <= 0) {
				return BigInt(integerPart || "0");
			}

			const normalized = (integerPart || "0") + decimalPart.padEnd(safeDecimals, "0");

			try {
				return BigInt(normalized);
			} catch {
				return fallback;
			}
		},
		[safeDecimals, fallback],
	);

	const handleInputChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const nextValue = e.target.value.trim();

			if (!numberValidator.test(nextValue)) {
				setIsError(true);
				return;
			}

			const nextBigInt = toBigIntWithDecimals(nextValue);

			setIsError(false);
			setValue(nextValue);
			setValueAsBigInt(nextBigInt);
		},
		[numberValidator, toBigIntWithDecimals],
	);

	return {
		value,
		valueAsBigInt,
		handleInputChange,
		isError,
	};
};

type UseBigIntInputParameters = ExpandDeep<Parameters<typeof useBigIntInput>>;
type UseBigIntInputReturnType = ReturnType<typeof useBigIntInput>;

export { useBigIntInput, type UseBigIntInputParameters, type UseBigIntInputReturnType };
