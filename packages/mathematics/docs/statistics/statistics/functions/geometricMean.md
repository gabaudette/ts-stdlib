[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / geometricMean

# Function: geometricMean()

> **geometricMean**(`numbers`): `number`

Defined in: [statistics/statistics.ts:51](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/statistics/statistics.ts#L51)

Calculates the geometric mean of an array of numbers.

The geometric mean is the nth root of the product of n numbers,
and is typically used to determine the average rate of growth or return.
If the input array is empty, the function returns 0.

## Parameters

### numbers

`number`[]

An array of numbers for which to calculate the geometric mean.

## Returns

`number`

The geometric mean of the input numbers, or 0 if the array is empty.
