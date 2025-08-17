[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / bernoulli

# Function: bernoulli()

> **bernoulli**(`p`, `n`, `k`): `null` \| `number`

Defined in: [statistics/statistics.ts:411](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/statistics/statistics.ts#L411)

Calculates the probability of obtaining exactly `k` successes in `n` independent Bernoulli trials,
each with success probability `p`, using the binomial probability formula.

## Parameters

### p

`number`

The probability of success on a single trial (must be between 0 and 1, inclusive).

### n

`number`

The total number of trials (must be a non-negative integer).

### k

`number`

The number of successful outcomes desired (must be a non-negative integer, less than or equal to `n`).

## Returns

`null` \| `number`

The probability of exactly `k` successes in `n` trials, or `null` if the input parameters are invalid.

## Remarks

This function uses the binomial coefficient to compute the probability.
Returns `null` if any parameter is out of range or if the binomial coefficient cannot be computed.
