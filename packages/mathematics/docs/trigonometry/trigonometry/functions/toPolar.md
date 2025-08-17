[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / toPolar

# Function: toPolar()

> **toPolar**(`cartesian`): `object`

Defined in: [trigonometry/trigonometry.ts:424](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/trigonometry/trigonometry.ts#L424)

Converts Cartesian coordinates to polar coordinates.

## Parameters

### cartesian

An object containing the Cartesian coordinates `{ x, y }`.

#### x

`number`

#### y

`number`

## Returns

`object`

An object with `radius` (the distance from the origin) and `angle` (the angle in radians from the positive x-axis).

### radius

> **radius**: `number`

### angle

> **angle**: `number`

## Example

```typescript
const polar = toPolar({ x: 5, y: 5 });
console.log(polar); // { radius: 7.0710678118654755, angle: 0.7853981633974483 }
```
