[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / csc

# Function: csc()

> **csc**(`angle`): `number`

Defined in: [trigonometry/trigonometry.ts:33](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/trigonometry/trigonometry.ts#L33)

Calculates the cosecant of a given angle (in radians).

The cosecant is the reciprocal of the sine function: csc(x) = 1 / sin(x).

## Parameters

### angle

`number`

The angle in radians for which to calculate the cosecant.

## Returns

`number`

The cosecant of the given angle.

## Throws

If the angle is a multiple of π, where the sine is zero and the cosecant is undefined.

## Example

```typescript
const result = csc(Math.PI / 2); // result is 1
```
