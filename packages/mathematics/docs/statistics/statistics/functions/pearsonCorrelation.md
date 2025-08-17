[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / pearsonCorrelation

# Function: pearsonCorrelation()

> **pearsonCorrelation**(`x`, `y`): `null` \| `number`

Defined in: [statistics/statistics.ts:751](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/statistics/statistics.ts#L751)

Calculates the Pearson correlation coefficient between two arrays of numbers.

The Pearson correlation coefficient measures the linear correlation between two datasets,
returning a value between -1 and 1, where 1 is total positive linear correlation,
0 is no linear correlation, and -1 is total negative linear correlation.

## Parameters

### x

`number`[]

The first array of numbers.

### y

`number`[]

The second array of numbers.

## Returns

`null` \| `number`

The Pearson correlation coefficient as a number between -1 and 1,
         or `null` if the input arrays are of different lengths, empty, or if the calculation is not possible.
