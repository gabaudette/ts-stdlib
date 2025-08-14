[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / tScore

# Function: tScore()

> **tScore**(`x`, `mean`, `stdDev`, `sampleSize`): `null` \| `number`

Defined in: [statistics/statistics.ts:724](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/statistics/statistics.ts#L724)

Calculates the t-score for a given value, mean, standard deviation, and sample size.

The t-score is a measure of how many standard errors a data point (x) is from the sample mean.

## Parameters

### x

`number`

The value for which to calculate the t-score.

### mean

`number`

The sample mean.

### stdDev

`number`

The sample standard deviation. Must be greater than 0.

### sampleSize

`number`

The size of the sample. Must be greater than 0.

## Returns

`null` \| `number`

The t-score as a number, or `null` if `stdDev` or `sampleSize` are not positive.
