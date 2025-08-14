[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / binomialCoefficient

# Function: binomialCoefficient()

> **binomialCoefficient**(`n`, `k`): `null` \| `number`

Defined in: [statistics/statistics.ts:436](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/statistics/statistics.ts#L436)

Calculates the binomial coefficient, also known as "n choose k", which represents
the number of ways to choose `k` elements from a set of `n` elements without regard to order.

## Parameters

### n

`number`

The total number of items (must be a non-negative integer).

### k

`number`

The number of items to choose (must be a non-negative integer, and `k <= n`).

## Returns

`null` \| `number`

The binomial coefficient as a number, or `null` if the input is invalid.

## Remarks

The binomial coefficient is calculated using the formula: `n! / (k! * (n - k)!)`.
Returns `null` if `n` or `k` is negative, or if `k` is greater than `n`.
