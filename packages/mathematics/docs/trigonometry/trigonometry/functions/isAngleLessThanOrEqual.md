[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / isAngleLessThanOrEqual

# Function: isAngleLessThanOrEqual()

> **isAngleLessThanOrEqual**(`angle1`, `angle2`): `boolean`

Defined in: [trigonometry/trigonometry.ts:295](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/trigonometry/trigonometry.ts#L295)

Determines whether the first angle is less than or equal to the second angle,
after normalizing both angles to a standard range (typically [0, 2π) or [0, 360)).

## Parameters

### angle1

`number`

The first angle in radians (or degrees, depending on `normalizeAngle` implementation).

### angle2

`number`

The second angle in radians (or degrees, depending on `normalizeAngle` implementation).

## Returns

`boolean`

`true` if the normalized `angle1` is less than or equal to the normalized `angle2`, otherwise `false`.

## Remarks

The normalization function (`normalizeAngle`) should ensure both angles are compared within the same range.

## Example

```typescript
const isLessThanOrEqual = isAngleLessThanOrEqual(Math.PI / 4, Math.PI / 2); // returns true
```
