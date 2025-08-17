[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / inversePythagoreanTheorem

# Function: inversePythagoreanTheorem()

> **inversePythagoreanTheorem**(`hypotenuse`, `leg`): `number`

Defined in: [geometry/triangle.ts:242](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/geometry/triangle.ts#L242)

Calculates the length of the other leg (b) of a right triangle using the inverse Pythagorean theorem.

Given the hypotenuse (`c`) and one leg (`a`), this function returns the length of the other leg (`b`),
such that `c^2 = a^2 + b^2`.

## Parameters

### hypotenuse

`number`

### leg

`number`

## Returns

`number`

The length of the other leg of the right triangle.

## Throws

If `c < a`, resulting in a negative value under the square root.
