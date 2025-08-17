[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / sec

# Function: sec()

> **sec**(`angle`): `number`

Defined in: [trigonometry/trigonometry.ts:15](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/trigonometry/trigonometry.ts#L15)

Calculates the secant of a given angle (in radians).

The secant is defined as the reciprocal of the cosine function: sec(x) = 1 / cos(x).

## Parameters

### angle

`number`

The angle in radians for which to compute the secant.

## Returns

`number`

The secant of the given angle.

## Remarks

If the cosine of the angle is zero, the result will be Infinity or -Infinity.

## Example

```ts
const result = sec(Math.PI / 3); // result is 2
```
