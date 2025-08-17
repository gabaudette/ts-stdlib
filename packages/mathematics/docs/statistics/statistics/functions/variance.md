[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / variance

# Function: variance()

> **variance**(`numbers`): `null` \| `number`

Defined in: [statistics/statistics.ts:227](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/statistics/statistics.ts#L227)

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
