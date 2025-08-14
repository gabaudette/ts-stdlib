[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateArithmeticSequence

# Function: generateArithmeticSequence()

> **generateArithmeticSequence**(`start`, `difference`, `n`): `number`[]

Defined in: [algebra/sequence.ts:103](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/algebra/sequence.ts#L103)

Generates an arithmetic sequence as an array of numbers.

An arithmetic sequence is a sequence of numbers in which the difference between consecutive terms is constant.

## Parameters

### start

`number`

The first term of the sequence.

### difference

`number`

The common difference between consecutive terms.

### n

`number`

The number of terms to generate in the sequence.

## Returns

`number`[]

An array containing the generated arithmetic sequence.

## Example

```typescript
generateArithmeticSequence(2, 3, 5); // Returns [2, 5, 8, 11, 14]
```
