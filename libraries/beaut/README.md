<p align="center">
  <a href="https://vocs.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/0xbuidlerhq/beaut/blob/main/.github/logo-dark.svg">
      <img alt="Relay logo" src="https://github.com/0xbuidlerhq/beaut/blob/main/.github/logo-light.svg" width="auto" height="200">
    </picture>
  </a>
</p>

# 💅 Beaut

Beaut is a focused toolkit that helps you ship polished crypto-facing UI experiences with consistent formatting, validation, and React-friendly helpers.

## Features

- Format `address`
- Format `hash`
- Format `currency`
- Format `explorerAddress`
- Format `explorerBlock`
- Format `explorerTxHash`
- Format `bigint`
- Format `kmb`
- Format `percent`

... and a lot more.

## Overview

### Core

```ts
import { Beaut } from "@0xhq/beaut";

// Base.
Beaut.address("0x1234567890abcdef1234567890abcdef12345678"); // → "0x1234...5678"
Beaut.hash("0xabcde4e7f9ee58b4574bad27d9c1c72a9c656f7cf3b7469c3ea027b456a3d0e"); // → "0xabcd...3d0e"

// Currency.
Beaut.money(12345.67, { currency: "EUR" }); // → "€12,345.67"

// Explorer.
Beaut.explorerAddress("https://etherscan.io", "0x1234...5678"); // → "https://etherscan.io/address/0x1234...5678"
Beaut.explorerBlock("https://etherscan.io", 17500000); // → "https://etherscan.io/block/17500000"
Beaut.explorerTxHash("https://etherscan.io", "0xabcde4e7f9ee58b4574bad27d9c1c72a9c656f7cf3b7469c3ea027b456a3d0e"); // → "https://etherscan.io/tx/0xabcde4e7f9ee58b4574bad27d9c1c72a9c656f7cf3b7469c3ea027b456a3d0e"

// Number.
Beaut.bigint(1_000_000n, 18); // → "0.000001"
Beaut.kmb(1_250_000); // → "1.25M"
Beaut.percent(0.1234); // → "12.34%"
```

### React

#### Components 

#### Hooks 

```tsx
import { useBigIntInput } from "@0xhq/beaut/react";

// useBigIntInput.
const { value, valueAsBigInt, handleInputChange, isError } = useBigIntInput();
<input value={value} onChange={handleInputChange} />
```

## Documentation

[Head to the documentation](https://beaut.0xbuidlerhq.com/) to read and learn more about `@0xhq/beaut`.