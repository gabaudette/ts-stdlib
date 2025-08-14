[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateTriangularSequence

# Function: generateTriangularSequence()

> **generateTriangularSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:180](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/algebra/sequence.ts#L180)

Generates the first `n` triangular numbers as an array.

A triangular number is the sum of the natural numbers up to a given number.
The nth triangular number is given by the formula: n * (n + 1) / 2.

## Parameters

### n

`number`

The number of triangular numbers to generate.

## Returns

`number`[]

An array containing the first `n` triangular numbers.

## Example

```typescript
generateTriangularSequence(5); // [1, 3, 6, 10, 15]
```
