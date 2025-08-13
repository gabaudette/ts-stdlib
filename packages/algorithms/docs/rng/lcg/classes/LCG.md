[**@ts-standard-library/algorithms v1.0.3**](../../../README.md)

***

[@ts-standard-library/algorithms](../../../modules.md) / [rng/lcg](../README.md) / LCG

# Class: LCG

Defined in: [rng/lcg.ts:25](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/algorithms/src/rng/lcg.ts#L25)

Linear Congruential Generator (LCG) implementation of a pseudo-random number generator (PRNG).

This class generates a sequence of pseudo-random numbers using the linear congruential method:
  X_{n+1} = (a * X_n + c) mod m

- `m` (modulus): 2^31 (0x80000000)
- `a` (multiplier): 0x4c1906
- `c` (increment): 1

## Example

```typescript
const rng = new LCG(12345);
const randomValue = rng.random(); // Returns a floating-point number in [0, 1)
const randomInt = rng.randomInt(); // Returns a pseudo-random integer
```

## Remarks

The quality of randomness depends on the choice of parameters and the seed.
This implementation is suitable for non-cryptographic purposes.

## Implements

- [`RNG`](../../interface/rng.interface/interfaces/RNG.md)

## Constructors

### Constructor

> **new LCG**(`seed`): `LCG`

Defined in: [rng/lcg.ts:47](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/algorithms/src/rng/lcg.ts#L47)

#### Parameters

##### seed

`number`

#### Returns

`LCG`

## Methods

### randomInt()

> **randomInt**(): `number`

Defined in: [rng/lcg.ts:59](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/algorithms/src/rng/lcg.ts#L59)

Generates a random integer using the linear congruential generator (LCG).

#### Returns

`number`

A pseudo-random integer.

#### Implementation of

[`RNG`](../../interface/rng.interface/interfaces/RNG.md).[`randomInt`](../../interface/rng.interface/interfaces/RNG.md#randomint)

***

### random()

> **random**(): `number`

Defined in: [rng/lcg.ts:68](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/algorithms/src/rng/lcg.ts#L68)

Generates a pseudo-random floating-point number in the range [0, 1).

#### Returns

`number`

A pseudo-random number greater than or equal to 0 and less than 1.

#### Implementation of

[`RNG`](../../interface/rng.interface/interfaces/RNG.md).[`random`](../../interface/rng.interface/interfaces/RNG.md#random)

***

### next()

> **next**(): `number`

Defined in: [rng/lcg.ts:80](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/algorithms/src/rng/lcg.ts#L80)

Generates the next pseudo-random number in the sequence using the linear congruential generator (LCG) algorithm.

Updates the internal state based on the formula: state = (a * state + c) % m,
where `a`, `c`, and `m` are the LCG parameters.

#### Returns

`number`

The next pseudo-random number in the sequence.
