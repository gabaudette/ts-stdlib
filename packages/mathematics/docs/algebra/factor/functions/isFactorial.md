[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/factor](../README.md) / isFactorial

# Function: isFactorial()

> **isFactorial**(`n`): `boolean`

Defined in: [algebra/factor.ts:82](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/algebra/factor.ts#L82)

Determines whether a given number is a factorial of some integer.

A number is considered a factorial if there exists a non-negative integer `k`
such that `n = k!` (i.e., `n` is the product of all positive integers up to `k`).

## Parameters

### n

`number`

The number to check.

## Returns

`boolean`

`true` if `n` is a factorial of some integer, otherwise `false`.

## Example

```
isFactorial(1); // returns true
isFactorial(2); // returns true
isFactorial(3); // returns false
isFactorial(4); // returns false
isFactorial(5); // returns false
isFactorial(6); // returns true
```
