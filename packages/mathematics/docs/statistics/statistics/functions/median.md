[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / median

# Function: median()

> **median**(`numbers`): `number`

Defined in: [statistics/statistics.ts:130](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/statistics/statistics.ts#L130)

Calculates the median value of a list of numbers.

The median is the middle number in a sorted, ascending or descending, list of numbers.
If the list has an even number of elements, the median is the average of the two middle numbers.
If the input array is empty, the function returns 0.

## Parameters

### numbers

`number`[]

An array of numbers to compute the median from.

## Returns

`number`

The median value of the input numbers, or 0 if the array is empty.
