[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/quadratic](../README.md) / isQuadraticSequence

# Function: isQuadraticSequence()

> **isQuadraticSequence**(`sequence`): `boolean`

Defined in: [algebra/quadratic.ts:44](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/algebra/quadratic.ts#L44)

Determines whether a given numeric sequence is a quadratic sequence.

A quadratic sequence is one in which the second differences between consecutive terms are constant.
This function checks if the input sequence has at least three elements and verifies if the sequence
is quadratic by analyzing the differences between terms.

## Parameters

### sequence

`number`[]

An array of numbers representing the sequence to check.

## Returns

`boolean`

`true` if the sequence is quadratic, otherwise `false`.

## Example

```ts
// Checks if the sequence [1, 4, 9, 16] is quadratic
isQuadraticSequence([1, 4, 9, 16]); // returns true
```
