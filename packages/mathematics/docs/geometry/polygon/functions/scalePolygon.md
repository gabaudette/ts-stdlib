[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / scalePolygon

# Function: scalePolygon()

> **scalePolygon**(`polygon`, `scale`): `null` \| [`IPolygon`](../interfaces/IPolygon.md)

Defined in: [geometry/polygon.ts:295](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/geometry/polygon.ts#L295)

Scales a polygon by a given factor.

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon to scale, represented by its vertices.

### scale

`number`

The scaling factor to apply to each vertex coordinate.

## Returns

`null` \| [`IPolygon`](../interfaces/IPolygon.md)

A new polygon with scaled vertices, or `null` if the input polygon is invalid.

## Example

```
const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const scale = 2;
const scaledPolygon = scalePolygon(polygon, scale);
// scaledPolygon = { vertices: [{ x: 0, y: 0 }, { x: 8, y: 0 }, { x: 8, y: 6 }] }
```
