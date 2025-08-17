[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / cot

# Function: cot()

> **cot**(`angle`): `number`

Defined in: [trigonometry/trigonometry.ts:50](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/trigonometry/trigonometry.ts#L50)

Calculates the cotangent of a given angle (in radians).

## Parameters

### angle

`number`

The angle in radians for which to calculate the cotangent.

## Returns

`number`

The cotangent of the specified angle.

## Remarks

The cotangent is defined as the reciprocal of the tangent function: cot(x) = 1 / tan(x).
If the tangent of the angle is zero, this function will return `Infinity` or `-Infinity`.

## Example

```ts
const result = cot(Math.PI / 4); // result is 1
```
