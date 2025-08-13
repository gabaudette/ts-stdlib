[**@ts-stdlib/algorithms v1.0.1**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../modules.md) / [rng/mersenne-twister](../README.md) / MersenneTwister

# Class: MersenneTwister

Defined in: [rng/mersenne-twister.ts:25](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/algorithms/src/rng/mersenne-twister.ts#L25)

Implements the Mersenne Twister pseudorandom number generator (MT19937).

The Mersenne Twister is a widely used PRNG known for its long period (2^19937−1),
high performance, and high-quality randomness. This implementation provides methods
to generate 32-bit unsigned integers and floating-point numbers in the range [0, 1).

## Implements

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

## Constructors

### Constructor

> **new MersenneTwister**(`seed`): `MersenneTwister`

Defined in: [rng/mersenne-twister.ts:35](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/algorithms/src/rng/mersenne-twister.ts#L35)

#### Parameters

##### seed

`number`

#### Returns

`MersenneTwister`

## Methods

### randomInt()

> **randomInt**(): `number`

Defined in: [rng/mersenne-twister.ts:56](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/algorithms/src/rng/mersenne-twister.ts#L56)

Generates a random 32-bit unsigned integer using the Mersenne Twister algorithm.

This method updates the internal state of the generator as needed and applies
tempering transformations to improve the statistical properties of the output.

#### Returns

`number`

A random 32-bit unsigned integer.

***

### random()

> **random**(): `number`

Defined in: [rng/mersenne-twister.ts:104](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/algorithms/src/rng/mersenne-twister.ts#L104)

Generates a random floating-point number in the range [0, 1).

#### Returns

`number`

A pseudo-random number greater than or equal to 0 and less than 1.
