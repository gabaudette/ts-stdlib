[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / getTriangleType

# Function: getTriangleType()

> **getTriangleType**(`triangle`): [`TriangleType`](../type-aliases/TriangleType.md)

Defined in: [geometry/triangle.ts:43](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/geometry/triangle.ts#L43)

Determines the type of a triangle based on the lengths of its sides.

## Parameters

### triangle

[`ITriangle`](../interfaces/ITriangle.md)

An object representing the triangle, typically with properties `a`, `b`, and `c` for side lengths.

## Returns

[`TriangleType`](../type-aliases/TriangleType.md)

Returns one of the following string literals:
- `"equilateral"` if all sides are equal,
- `"isosceles"` if exactly two sides are equal,
- `"scalene"` if all sides are different,
- `"invalid"` if the side lengths do not form a valid triangle.

## Remarks

The function first checks if the triangle is valid using `isValidTriangle`. If not, it returns `"invalid"`.
