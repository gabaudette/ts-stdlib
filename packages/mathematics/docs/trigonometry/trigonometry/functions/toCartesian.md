[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / toCartesian

# Function: toCartesian()

> **toCartesian**(`polar`): `object`

Defined in: trigonometry/trigonometry.ts:401

Converts polar coordinates to Cartesian coordinates.

## Parameters

### polar

An object containing the `radius` (distance from origin) and `angle` (in radians).

#### radius

`number`

#### angle

`number`

## Returns

`object`

An object with `x` and `y` properties representing the Cartesian coordinates.

### x

> **x**: `number`

### y

> **y**: `number`

## Example

```typescript
const cartesian = toCartesian({ radius: 5, angle: Math.PI / 4 });
console.log(cartesian); // { x: 3.5355339059327378, y: 3.5355339059327378 }
```
