[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / covariance

# Function: covariance()

> **covariance**(`x`, `y`): `null` \| `number`

Defined in: [statistics/statistics.ts:324](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/statistics/statistics.ts#L324)

Calculates the covariance between two numeric arrays.

Covariance is a measure of how much two random variables vary together.
This function returns `null` if the input arrays are of different lengths or empty.

## Parameters

### x

`number`[]

The first array of numbers.

### y

`number`[]

The second array of numbers.

## Returns

`null` \| `number`

The covariance of the two arrays, or `null` if the inputs are invalid.
