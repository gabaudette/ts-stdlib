[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / uniformCDF

# Function: uniformCDF()

> **uniformCDF**(`x`, `a`, `b`): `null` \| `number`

Defined in: [statistics/statistics.ts:553](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/statistics/statistics.ts#L553)

Computes the cumulative distribution function (CDF) of the continuous uniform distribution
for a given value `x` over the interval [`a`, `b`].

The uniform CDF is defined as:
- 0 if `x < a`
- 1 if `x > b`
- (x - a) / (b - a) if `a <= x <= b`

## Parameters

### x

`number`

The value at which to evaluate the CDF.

### a

`number`

The lower bound of the interval (must be less than `b`).

### b

`number`

The upper bound of the interval (must be greater than `a`).

## Returns

`null` \| `number`

The probability that a uniform random variable is less than or equal to `x`,
         or `null` if the interval is invalid (`a >= b`).
