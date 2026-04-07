import { useBigIntInput } from "@0xhq/beaut/react";

const ExampleUseBigIntInput = () => {
	const { value, valueAsBigInt, isError, handleInputChange } = useBigIntInput({ decimals: 6 });

	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2">
				<h1>Input: </h1>
				<input value={value} onChange={handleInputChange} className="bg-black border" />
			</div>

			<div>
				<div>
					<h1>Value: {value}</h1>
				</div>

				<div>
					<h1>Value as BigInt: {String(valueAsBigInt)}</h1>
				</div>

				<div>
					<h1>isError: {String(isError)}</h1>
				</div>
			</div>
		</div>
	);
};

export { ExampleUseBigIntInput };
