[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / interquartileRange

# Function: interquartileRange()

> **interquartileRange**(`numbers`): `null` \| `number`

Defined in: [statistics/statistics.ts:203](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/statistics/statistics.ts#L203)

Calculates the interquartile range (IQR) of a given array of numbers.

The interquartile range is the difference between the third quartile (Q3) and the first quartile (Q1),
representing the range of the middle 50% of the data.

## Parameters

### numbers

`number`[]

An array of numbers for which to compute the interquartile range.

## Returns

`null` \| `number`

The interquartile range as a number, or `null` if the input array is empty or quartiles cannot be determined.
