[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / isAngleBetween

# Function: isAngleBetween()

> **isAngleBetween**(`angle`, `start`, `end`): `boolean`

Defined in: [trigonometry/trigonometry.ts:184](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/trigonometry/trigonometry.ts#L184)

Determines whether a given angle lies between two other angles on a circle.

All angles are normalized to the range [0, 2π) before comparison.
The interval is considered inclusive of both start and end.
If the start angle is greater than the end angle, the interval wraps around 2π.

## Parameters

### angle

`number`

The angle to test, in radians.

### start

`number`

The start of the interval, in radians.

### end

`number`

The end of the interval, in radians.

## Returns

`boolean`

`true` if the angle is between start and end (inclusive), accounting for wrapping; otherwise, `false`.

## Example

```typescript
const isBetween = isAngleBetween(Math.PI / 4, 0, Math.PI / 2); // returns true
```
