[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/quadratic](../README.md) / generateQuadraticSequence

# Function: generateQuadraticSequence()

> **generateQuadraticSequence**(`a`, `b`, `c`, `n`): `number`[]

Defined in: [algebra/quadratic.ts:16](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/algebra/quadratic.ts#L16)

Generates a sequence of numbers based on a quadratic formula.

The sequence is generated using the formula: `a * i^2 + b * i + c` for each `i` from 0 to `n - 1`.

## Parameters

### a

`number`

The coefficient of the quadratic term.

### b

`number`

The coefficient of the linear term.

### c

`number`

The constant term.

### n

`number`

The number of terms to generate in the sequence.

## Returns

`number`[]

An array of numbers representing the quadratic sequence.

## Example

```ts
// Generates the sequence for the quadratic equation 2x^2 + 3x + 1 for x = 0, 1, 2, 3
generateQuadraticSequence(2, 3, 1, 4); // returns [1, 6, 13, 22]
```
