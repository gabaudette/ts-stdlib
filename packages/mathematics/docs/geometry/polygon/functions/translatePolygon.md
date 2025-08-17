[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / translatePolygon

# Function: translatePolygon()

> **translatePolygon**(`polygon`, `offset`): `null` \| [`IPolygon`](../interfaces/IPolygon.md)

Defined in: [geometry/polygon.ts:264](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/polygon.ts#L264)

Translates a polygon by a given 2D vector offset.

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon to translate.

### offset

[`Vector2D`](../../../vector/vector/type-aliases/Vector2D.md)

The 2D vector by which to translate the polygon.

## Returns

`null` \| [`IPolygon`](../interfaces/IPolygon.md)

A new polygon with all vertices translated by the offset, or `null` if the input polygon is invalid.

## Example

```
const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const offset = { x: 1, y: 1 };
const translatedPolygon = translatePolygon(polygon, offset);
// translatedPolygon = { vertices: [{ x: 1, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 4 }] }
```
