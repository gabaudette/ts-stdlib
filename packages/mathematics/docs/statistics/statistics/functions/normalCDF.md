[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / normalCDF

# Function: normalCDF()

> **normalCDF**(`x`, `mean`, `stdDev`): `null` \| `number`

Defined in: [statistics/statistics.ts:486](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/statistics/statistics.ts#L486)

Calculates the cumulative distribution function (CDF) of the normal (Gaussian) distribution
for a given value `x`, mean, and standard deviation.

## Parameters

### x

`number`

The value at which to evaluate the CDF.

### mean

`number`

The mean (μ) of the normal distribution.

### stdDev

`number`

The standard deviation (σ) of the normal distribution. Must be greater than 0.

## Returns

`null` \| `number`

The probability that a normally distributed random variable is less than or equal to `x`,
         or `null` if `stdDev` is not positive.

## Remarks

This function uses the error function (`erf`) to compute the CDF.
