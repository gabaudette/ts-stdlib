[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / variance

# Function: variance()

> **variance**(`numbers`): `null` \| `number`

Defined in: [statistics/statistics.ts:227](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/statistics/statistics.ts#L227)

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
