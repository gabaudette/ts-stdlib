[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / isAngleEqual

# Function: isAngleEqual()

> **isAngleEqual**(`angle1`, `angle2`): `boolean`

Defined in: [trigonometry/trigonometry.ts:219](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/trigonometry/trigonometry.ts#L219)

Determines whether two angles are equal after normalizing them.

This function normalizes both input angles (typically to the range [0, 2π) or [0, 360°),
depending on the implementation of `normalizeAngle`) and checks if they are equivalent.

## Parameters

### angle1

`number`

The first angle to compare, in radians or degrees.

### angle2

`number`

The second angle to compare, in radians or degrees.

## Returns

`boolean`

`true` if the normalized angles are equal; otherwise, `false`.

## Example

```typescript
const isEqual = isAngleEqual(Math.PI / 4, Math.PI / 4); // returns true
```
