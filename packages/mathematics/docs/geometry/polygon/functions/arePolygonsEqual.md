[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / arePolygonsEqual

# Function: arePolygonsEqual()

> **arePolygonsEqual**(`polygon1`, `polygon2`): `boolean`

Defined in: [geometry/polygon.ts:171](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/geometry/polygon.ts#L171)

Determines whether two polygons are equal by comparing their vertices.

Two polygons are considered equal if:
- Both polygons are valid (as determined by `isValidPolygon`).
- Both polygons have the same number of vertices.
- Each corresponding vertex in both polygons has the same `x` and `y` coordinates.

## Parameters

### polygon1

[`IPolygon`](../interfaces/IPolygon.md)

The first polygon to compare.

### polygon2

[`IPolygon`](../interfaces/IPolygon.md)

The second polygon to compare.

## Returns

`boolean`

`true` if the polygons are equal; otherwise, `false`.

## Example

```
const polygon1 = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const polygon2 = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const areEqual = arePolygonsEqual(polygon1, polygon2); // areEqual = true
```
