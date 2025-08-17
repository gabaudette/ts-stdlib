[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / variance

# Function: variance()

> **variance**(`numbers`): `null` \| `number`

Defined in: [statistics/statistics.ts:227](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/statistics/statistics.ts#L227)

Calculates the variance of an array of numbers.

The variance is a measure of how spread out a set of numbers is.
Returns `null` if the input array is empty.

## Parameters

### numbers

`number`[]

An array of numbers for which to calculate the variance.

## Returns

`null` \| `number`

The variance of the numbers, or `null` if the array is empty.

## Remarks

This function depends on a `mean` function being available in the same scope.
