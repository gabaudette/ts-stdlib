[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / exponentialPDF

# Function: exponentialPDF()

> **exponentialPDF**(`x`, `lambda`): `null` \| `number`

Defined in: [statistics/statistics.ts:584](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/statistics/statistics.ts#L584)

Calculates the probability density function (PDF) of the exponential distribution
for a given value `x` and rate parameter `lambda`.

The exponential distribution is commonly used to model the time between events
in a Poisson process.

## Parameters

### x

`number`

The value at which to evaluate the PDF. Must be non-negative.

### lambda

`number`

The rate parameter (λ) of the distribution. Must be positive.

## Returns

`null` \| `number`

The probability density at `x`, or `null` if the input is invalid.

## Example

```typescript
const pdf = exponentialPDF(2, 0.5); // Returns the PDF value at x = 2, lambda = 0.5
```
