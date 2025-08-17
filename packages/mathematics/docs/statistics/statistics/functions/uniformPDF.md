[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / uniformPDF

# Function: uniformPDF()

> **uniformPDF**(`x`, `a`, `b`): `null` \| `number`

Defined in: [statistics/statistics.ts:530](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/statistics/statistics.ts#L530)

Calculates the probability density function (PDF) of the continuous uniform distribution
at a given point `x` for the interval [`a`, `b`].

The uniform distribution is defined only when `a < b`. If `a >= b`, the function returns `null`.
For `x` within the interval [`a`, `b`], the PDF is `1 / (b - a)`. Otherwise, it is `0`.

## Parameters

### x

`number`

The point at which to evaluate the PDF.

### a

`number`

The lower bound of the interval (must be less than `b`).

### b

`number`

The upper bound of the interval (must be greater than `a`).

## Returns

`null` \| `number`

The value of the PDF at `x`, or `null` if the interval is invalid.
