[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / isAngleLessThan

# Function: isAngleLessThan()

> **isAngleLessThan**(`angle1`, `angle2`): `boolean`

Defined in: trigonometry/trigonometry.ts:237

Determines whether the normalized value of `angle1` is less than the normalized value of `angle2`.

Both angles are normalized (typically to the range [0, 2π) or [0, 360)), and then compared.

## Parameters

### angle1

`number`

The first angle, in radians or degrees, to compare.

### angle2

`number`

The second angle, in radians or degrees, to compare.

## Returns

`boolean`

`true` if the normalized `angle1` is less than the normalized `angle2`, otherwise `false`.

## Example

```typescript
const isLessThan = isAngleLessThan(Math.PI / 4, Math.PI / 2); // returns true
```
