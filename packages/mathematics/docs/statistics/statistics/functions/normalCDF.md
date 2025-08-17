[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / normalCDF

# Function: normalCDF()

> **normalCDF**(`x`, `mean`, `stdDev`): `null` \| `number`

Defined in: [statistics/statistics.ts:486](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/statistics/statistics.ts#L486)

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
