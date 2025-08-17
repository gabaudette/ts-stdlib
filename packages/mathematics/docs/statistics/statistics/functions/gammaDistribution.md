[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / gammaDistribution

# Function: gammaDistribution()

> **gammaDistribution**(`x`, `alpha`, `beta`): `null` \| `number`

Defined in: [statistics/statistics.ts:627](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/statistics/statistics.ts#L627)

Computes the value of the Gamma probability density function (PDF) at a given point `x`.

The Gamma distribution is parameterized by a shape parameter `alpha` and a rate parameter `beta`.
The function returns `null` if `x < 0`, `alpha <= 0`, or `beta <= 0`.

## Parameters

### x

`number`

The point at which to evaluate the PDF (must be non-negative).

### alpha

`number`

The shape parameter of the Gamma distribution (must be positive).

### beta

`number`

The rate parameter of the Gamma distribution (must be positive).

## Returns

`null` \| `number`

The value of the Gamma PDF at `x`, or `null` if the parameters are invalid.

## Remarks

The formula used is:
  f(x; α, β) = (β^α / Γ(α)) * x^(α-1) * exp(-βx)
where Γ(α) is the gamma function, here approximated by `factorial(alpha - 1)` for integer `alpha`.
