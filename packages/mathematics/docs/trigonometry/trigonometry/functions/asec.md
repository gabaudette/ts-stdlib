[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / asec

# Function: asec()

> **asec**(`value`): `number`

Defined in: [trigonometry/trigonometry.ts:68](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/trigonometry/trigonometry.ts#L68)

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
