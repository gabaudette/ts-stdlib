[**@ts-standard-library/algorithms v1.0.6**](../../../README.md)

***

[@ts-standard-library/algorithms](../../../modules.md) / [rng/xorshift](../README.md) / Xorshift

# Class: Xorshift

Defined in: [rng/xorshift.ts:22](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/algorithms/src/rng/xorshift.ts#L22)

Implements a simple Xorshift random number generator (RNG).

The Xorshift algorithm is a fast, lightweight pseudo-random number generator
based on bitwise operations. It is suitable for non-cryptographic purposes.

## Example

```typescript
const rng = new Xorshift(12345);
const randomInt = rng.randomInt(); // Returns a random 32-bit unsigned integer
const randomFloat = rng.random();  // Returns a random float between 0 and 1
```

## Remarks

- The generator is seeded with a 32-bit integer.
- The output is not suitable for cryptographic use.

## See

https://en.wikipedia.org/wiki/Xorshift

## Implements

- [`RNG`](../../interface/rng.interface/interfaces/RNG.md)

## Constructors

### Constructor

> **new Xorshift**(`seed`): `Xorshift`

Defined in: [rng/xorshift.ts:25](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/algorithms/src/rng/xorshift.ts#L25)

#### Parameters

##### seed

`number`

#### Returns

`Xorshift`

## Methods

### randomInt()

> **randomInt**(): `number`

Defined in: [rng/xorshift.ts:29](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/algorithms/src/rng/xorshift.ts#L29)

#### Returns

`number`

#### Implementation of

[`RNG`](../../interface/rng.interface/interfaces/RNG.md).[`randomInt`](../../interface/rng.interface/interfaces/RNG.md#randomint)

***

### random()

> **random**(): `number`

Defined in: [rng/xorshift.ts:33](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/algorithms/src/rng/xorshift.ts#L33)

#### Returns

`number`

#### Implementation of

[`RNG`](../../interface/rng.interface/interfaces/RNG.md).[`random`](../../interface/rng.interface/interfaces/RNG.md#random)

***

### next()

> **next**(): `number`

Defined in: [rng/xorshift.ts:37](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/algorithms/src/rng/xorshift.ts#L37)

#### Returns

`number`
