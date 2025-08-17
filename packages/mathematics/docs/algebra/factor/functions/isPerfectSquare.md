[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/factor](../README.md) / isPerfectSquare

# Function: isPerfectSquare()

> **isPerfectSquare**(`n`): `boolean`

Defined in: [algebra/factor.ts:113](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/factor.ts#L113)

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
