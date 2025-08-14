[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / meanAbsoluteDeviation

# Function: meanAbsoluteDeviation()

> **meanAbsoluteDeviation**(`numbers`): `null` \| `number`

Defined in: [statistics/statistics.ts:79](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/statistics/statistics.ts#L79)

Calculates the mean absolute deviation (MAD) of an array of numbers.

The mean absolute deviation is the average of the absolute differences
between each value and the mean of the dataset.

## Parameters

### numbers

`number`[]

An array of numbers for which to compute the MAD.

## Returns

`null` \| `number`

The mean absolute deviation of the input numbers, or `null` if the array is empty.

## Remarks

This function depends on a `mean` function being available in the same scope.

## Example

```typescript
const data = [1, 2, 3, 4, 5];
const mad = meanAbsoluteDeviation(data); // Returns 1.2
```
