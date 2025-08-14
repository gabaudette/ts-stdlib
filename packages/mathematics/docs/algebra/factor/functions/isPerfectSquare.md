[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/factor](../README.md) / isPerfectSquare

# Function: isPerfectSquare()

> **isPerfectSquare**(`n`): `boolean`

Defined in: algebra/factor.ts:113

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
