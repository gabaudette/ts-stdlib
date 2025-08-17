[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / normalPDF

# Function: normalPDF()

> **normalPDF**(`x`, `mean`, `stdDev`): `null` \| `number`

Defined in: [statistics/statistics.ts:458](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/statistics/statistics.ts#L458)

Calculates the probability density function (PDF) of the normal (Gaussian) distribution
for a given value `x`, mean, and standard deviation.

## Parameters

### x

`number`

The value at which to evaluate the PDF.

### mean

`number`

The mean (μ) of the normal distribution.

### stdDev

`number`

The standard deviation (σ) of the normal distribution. Must be greater than 0.

## Returns

`null` \| `number`

The value of the normal PDF at `x`, or `null` if `stdDev` is not positive.

## Example

```typescript
const pdfValue = normalPDF(0, 0, 1); // Standard normal distribution at x = 0
```
