[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / asec

# Function: asec()

> **asec**(`value`): `number`

Defined in: [trigonometry/trigonometry.ts:68](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/trigonometry/trigonometry.ts#L68)

Calculates the arcsecant (inverse secant) of a number.

## Parameters

### value

`number`

The input value for which to compute the arcsecant. Must be outside the interval (-1, 1).

## Returns

`number`

The arcsecant of the input value, in radians.

## Throws

If the input value is within the interval (-1, 1), where arcsecant is undefined.

## See

[Math.acos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos)

## Example

```typescript
const result = asec(2); // result is π/3
```
