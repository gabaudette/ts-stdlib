[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / areTrianglesEqual

# Function: areTrianglesEqual()

> **areTrianglesEqual**(`triangle1`, `triangle2`): `boolean`

Defined in: [geometry/triangle.ts:291](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/triangle.ts#L291)

Determines whether two triangles are equal based on their side lengths.

Two triangles are considered equal if they have the same side lengths,
regardless of the order of the sides. The function first checks if both
triangles are valid using `isValidTriangle`. If either triangle is invalid,
the function returns `false`.

## Parameters

### triangle1

[`ITriangle`](../interfaces/ITriangle.md)

The first triangle to compare.

### triangle2

[`ITriangle`](../interfaces/ITriangle.md)

The second triangle to compare.

## Returns

`boolean`

`true` if the triangles are equal (i.e., have the same side lengths), otherwise `false`.

## Example

```typescript
const triangle1 = { a: 3, b: 4, c: 5 };
const triangle2 = { a: 5, b: 4, c: 3 };
console.log(areTrianglesEqual(triangle1, triangle2)); // true

const triangle3 = { a: 3, b: 4, c: 6 };
console.log(areTrianglesEqual(triangle1, triangle3)); // false
```
