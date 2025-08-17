[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/factor](../README.md) / isPerfectSquare

# Function: isPerfectSquare()

> **isPerfectSquare**(`n`): `boolean`

Defined in: [algebra/factor.ts:113](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/algebra/factor.ts#L113)

Determines whether a given number is a perfect square.

A perfect square is an integer that is the square of another integer.
This function returns `true` if the input number is a non-negative integer
whose square root is also an integer, and `false` otherwise.

## Parameters

### n

`number`

The number to check.

## Returns

`boolean`

`true` if `n` is a perfect square, otherwise `false`.

## Example

```
isPerfectSquare(4); // returns true
isPerfectSquare(5); // returns false
```
