[**@ts-standard-library/algorithms v1.0.5**](../../../README.md)

***

[@ts-standard-library/algorithms](../../../modules.md) / [rng/mersenne-twister](../README.md) / MersenneTwister

# Class: MersenneTwister

Defined in: [rng/mersenne-twister.ts:24](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/algorithms/src/rng/mersenne-twister.ts#L24)

Implements the Mersenne Twister pseudorandom number generator (MT19937).

The Mersenne Twister is a widely used PRNG known for its long period (2^19937−1),
high performance, and high-quality randomness. This implementation provides methods
to generate 32-bit unsigned integers and floating-point numbers in the range [0, 1).

## Example

```typescript
const mt = new MersenneTwister(1234);
const int = mt.randomInt(); // 32-bit unsigned integer
const float = mt.random();  // floating-point number in [0, 1)
```

## Remarks

- The generator must be seeded before use. If not seeded, a default seed is used.
- Not cryptographically secure.

## See

https://en.wikipedia.org/wiki/Mersenne_Twister

## Implements

- [`RNG`](../../interface/rng.interface/interfaces/RNG.md)

## Constructors

### Constructor

> **new MersenneTwister**(`seed`): `MersenneTwister`

Defined in: [rng/mersenne-twister.ts:34](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/algorithms/src/rng/mersenne-twister.ts#L34)

#### Parameters

##### seed

`number`

#### Returns

`MersenneTwister`

## Methods

### randomInt()

> **randomInt**(): `number`

Defined in: [rng/mersenne-twister.ts:55](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/algorithms/src/rng/mersenne-twister.ts#L55)

Generates a random 32-bit unsigned integer using the Mersenne Twister algorithm.

This method updates the internal state of the generator as needed and applies
tempering transformations to improve the statistical properties of the output.

#### Returns

`number`

A random 32-bit unsigned integer.

#### Implementation of

[`RNG`](../../interface/rng.interface/interfaces/RNG.md).[`randomInt`](../../interface/rng.interface/interfaces/RNG.md#randomint)

***

### random()

> **random**(): `number`

Defined in: [rng/mersenne-twister.ts:105](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/algorithms/src/rng/mersenne-twister.ts#L105)

Generates a random floating-point number in the range [0, 1).

#### Returns

`number`

A pseudo-random number greater than or equal to 0 and less than 1.

#### Implementation of

[`RNG`](../../interface/rng.interface/interfaces/RNG.md).[`random`](../../interface/rng.interface/interfaces/RNG.md#random)
