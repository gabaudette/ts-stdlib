[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / toCartesian

# Function: toCartesian()

> **toCartesian**(`polar`): `object`

Defined in: [trigonometry/trigonometry.ts:401](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/trigonometry/trigonometry.ts#L401)

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
