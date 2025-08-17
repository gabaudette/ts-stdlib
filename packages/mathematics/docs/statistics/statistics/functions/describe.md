[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / describe

# Function: describe()

> **describe**(`data`): `object`

Defined in: [statistics/statistics.ts:842](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/statistics/statistics.ts#L842)

Computes basic descriptive statistics (mean, median, and mode) for a given array of numbers.

## Parameters

### data

`number`[]

An array of numbers to analyze.

## Returns

`object`

An object containing the mean, median, and mode of the input data.
         If the input array is empty, each statistic will be `null`.

### mean

> **mean**: `null` \| `number`

### median

> **median**: `null` \| `number`

### mode

> **mode**: `null` \| `number`
