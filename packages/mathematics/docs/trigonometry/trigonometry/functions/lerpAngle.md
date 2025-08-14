[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / lerpAngle

# Function: lerpAngle()

> **lerpAngle**(`start`, `end`, `t`): `number`

Defined in: trigonometry/trigonometry.ts:384

Linearly interpolates between two angles, taking the shortest path around the circle.

## Parameters

### start

`number`

The starting angle in radians.

### end

`number`

The ending angle in radians.

### t

`number`

The interpolation factor, typically between 0 (start) and 1 (end).

## Returns

`number`

The interpolated angle in radians, normalized to the range [0, 2π).

## Remarks

This function ensures interpolation takes the shortest angular distance between `start` and `end`.
The result is normalized to a standard angle range.

## Example

```typescript
const interpolated = lerpAngle(Math.PI / 4, Math.PI / 2, 0.5);
console.log(interpolated); // 0.39269908169872414
```
