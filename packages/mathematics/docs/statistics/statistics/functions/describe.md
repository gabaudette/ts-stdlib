[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / describe

# Function: describe()

> **describe**(`data`): `object`

Defined in: [statistics/statistics.ts:842](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/statistics/statistics.ts#L842)

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
