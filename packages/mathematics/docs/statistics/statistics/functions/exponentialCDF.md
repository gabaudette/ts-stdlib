[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / exponentialCDF

# Function: exponentialCDF()

> **exponentialCDF**(`x`, `lambda`): `null` \| `number`

Defined in: [statistics/statistics.ts:603](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/statistics/statistics.ts#L603)

Calculates the cumulative distribution function (CDF) of the exponential distribution
for a given value `x` and rate parameter `lambda`.

The exponential CDF is defined as: F(x; λ) = 1 - exp(-λx), for x ≥ 0 and λ > 0.

## Parameters

### x

`number`

The value at which to evaluate the CDF (must be non-negative).

### lambda

`number`

The rate parameter of the exponential distribution (must be positive).

## Returns

`null` \| `number`

The probability that a random variable from the exponential distribution is less than or equal to `x`,
         or `null` if the input parameters are invalid.
