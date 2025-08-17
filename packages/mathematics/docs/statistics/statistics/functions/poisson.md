[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / poisson

# Function: poisson()

> **poisson**(`k`, `lambda`): `null` \| `number`

Defined in: [statistics/statistics.ts:373](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/statistics/statistics.ts#L373)

Calculates the probability mass function (PMF) of the Poisson distribution.

The Poisson distribution expresses the probability of a given number of events
occurring in a fixed interval of time or space, given the average number of times
the event occurs over that interval.

## Parameters

### k

`number`

The number of occurrences (must be a non-negative integer).

### lambda

`number`

The expected number of occurrences (rate parameter, must be positive).

## Returns

`null` \| `number`

The probability of observing exactly `k` occurrences, or `null` if inputs are invalid.

## Remarks

The formula used is: P(k; λ) = (λ^k * e^(-λ)) / k!
