[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / expandPolygon

# Function: expandPolygon()

> **expandPolygon**(`polygon`, `distance`): `null` \| [`IPolygon`](../interfaces/IPolygon.md)

Defined in: [geometry/polygon.ts:415](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/geometry/polygon.ts#L415)

Expands a polygon outward by a specified distance from its centroid.

Each vertex of the polygon is moved away from the origin by the given distance,
along the direction from the origin to the vertex. If the input polygon is invalid,
the function returns `null`.

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon to expand, represented by an object with a `vertices` array.

### distance

`number`

The distance by which to expand the polygon.

## Returns

`null` \| [`IPolygon`](../interfaces/IPolygon.md)

The expanded polygon as a new object, or `null` if the input polygon is invalid.

## Example

```
const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const distance = 1;
const expandedPolygon = expandPolygon(polygon, distance);
// expandedPolygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] }
```
