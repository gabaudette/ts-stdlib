[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / betaDistribution

# Function: betaDistribution()

> **betaDistribution**(`x`, `alpha`, `beta`): `null` \| `number`

Defined in: [statistics/statistics.ts:653](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/statistics/statistics.ts#L653)

Calculates the probability density function (PDF) of the Beta distribution for a given value `x`
with shape parameters `alpha` and `beta`.

The Beta distribution is defined on the interval [0, 1] and is parameterized by two positive shape parameters.

## Parameters

### x

`number`

The value at which to evaluate the PDF (should be in the range [0, 1]).

### alpha

`number`

The first shape parameter (must be greater than 0).

### beta

`number`

The second shape parameter (must be greater than 0).

## Returns

`null` \| `number`

The value of the Beta distribution PDF at `x`, or `null` if the input is invalid.
