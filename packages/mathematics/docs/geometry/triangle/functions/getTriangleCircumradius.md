[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / getTriangleCircumradius

# Function: getTriangleCircumradius()

> **getTriangleCircumradius**(`triangle`): `null` \| `number`

Defined in: [geometry/triangle.ts:129](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/geometry/triangle.ts#L129)

Calculates the circumradius of a triangle given its side lengths.

The circumradius is the radius of the circumscribed circle that passes through all three vertices of the triangle.
Returns `null` if the provided triangle is not valid.

## Parameters

### triangle

[`ITriangle`](../interfaces/ITriangle.md)

An object representing the triangle, containing side lengths `a`, `b`, and `c`.

## Returns

`null` \| `number`

The circumradius of the triangle, or `null` if the triangle is invalid.

## Example

```typescript
const circumradius = getTriangleCircumradius({ a: 3, b: 4, c: 5 });
console.log(circumradius); // 2.5
```
