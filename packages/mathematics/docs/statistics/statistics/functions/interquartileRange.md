[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / interquartileRange

# Function: interquartileRange()

> **interquartileRange**(`numbers`): `null` \| `number`

Defined in: [statistics/statistics.ts:203](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/statistics/statistics.ts#L203)

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
