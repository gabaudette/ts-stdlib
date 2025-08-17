[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / zScore

# Function: zScore()

> **zScore**(`x`, `mean`, `stdDev`): `null` \| `number`

Defined in: [statistics/statistics.ts:705](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/statistics/statistics.ts#L705)

Calculates the z-score of a value given the mean and standard deviation.

The z-score indicates how many standard deviations an element is from the mean.

## Parameters

### x

`number`

The value for which to calculate the z-score.

### mean

`number`

The mean (average) of the dataset.

### stdDev

`number`

The standard deviation of the dataset. Must be greater than 0.

## Returns

`null` \| `number`

The z-score as a number, or `null` if the standard deviation is not positive.
