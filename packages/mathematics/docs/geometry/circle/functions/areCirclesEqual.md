[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / areCirclesEqual

# Function: areCirclesEqual()

> **areCirclesEqual**(`circle1`, `circle2`): `boolean`

Defined in: [geometry/circle.ts:160](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/circle.ts#L160)

Determines whether two circles are equal based on their radii.

This function first checks if both circles are valid using `isValidCircle`.
If either circle is invalid, it returns `false`. Otherwise, it compares
the `radius` properties of the two circles for equality.

## Parameters

### circle1

[`ICircle`](../interfaces/ICircle.md)

The first circle to compare.

### circle2

[`ICircle`](../interfaces/ICircle.md)

The second circle to compare.

## Returns

`boolean`

`true` if both circles are valid and have the same radius, otherwise `false`.

## Example

```
const circle1 = { radius: 5 };
const circle2 = { radius: 5 };
console.log(areCirclesEqual(circle1, circle2)); // true
```
