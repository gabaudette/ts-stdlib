[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / isAngleNotEqual

# Function: isAngleNotEqual()

> **isAngleNotEqual**(`angle1`, `angle2`): `boolean`

Defined in: trigonometry/trigonometry.ts:275

Determines whether two angles are not equal after normalization.

This function normalizes both input angles (typically to a standard range, such as [0, 2π) or [0°, 360°)),
and then compares them for inequality.

## Parameters

### angle1

`number`

The first angle to compare, in radians or degrees (depending on the implementation of `normalizeAngle`).

### angle2

`number`

The second angle to compare, in the same unit as `angle1`.

## Returns

`boolean`

`true` if the normalized angles are not equal; otherwise, `false`.

## Example

```typescript
const isNotEqual = isAngleNotEqual(Math.PI / 4, Math.PI / 2); // returns true
```
