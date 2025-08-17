[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/sqrt](../README.md) / fastInverseSqrt

# Function: fastInverseSqrt()

> **fastInverseSqrt**(`x`): `number`

Defined in: [geometry/sqrt.ts:21](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/geometry/sqrt.ts#L21)

Computes an approximation of the inverse square root of a number using the fast inverse square root algorithm.

This function is a TypeScript adaptation of the famous algorithm popularized by Quake III Arena.
It provides a fast approximation of `1 / Math.sqrt(x)` for positive floating-point numbers.

## Parameters

### x

`number`

The input number for which to compute the inverse square root. Must be positive.

## Returns

`number`

An approximate value of `1 / Math.sqrt(x)`.

## See

https://en.wikipedia.org/wiki/Fast_inverse_square_root

## Example

```ts
// Approximating the inverse square root of 4
const approx = fastInverseSqrt(4);
console.log(approx); // Outputs: 0.49915
```

## Remarks

This function is not suitable for all use cases and may not provide accurate results for very small or very large values.

## Author

John Carmack
