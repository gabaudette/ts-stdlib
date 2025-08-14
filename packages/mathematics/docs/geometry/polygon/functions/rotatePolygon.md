[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / rotatePolygon

# Function: rotatePolygon()

> **rotatePolygon**(`polygon`, `angle`): `null` \| [`IPolygon`](../interfaces/IPolygon.md)

Defined in: [geometry/polygon.ts:332](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/geometry/polygon.ts#L332)

Rotates a polygon by a specified angle around the origin (0, 0).

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon to rotate, represented by its vertices.

### angle

`number`

The rotation angle in degrees (counterclockwise).

## Returns

`null` \| [`IPolygon`](../interfaces/IPolygon.md)

The rotated polygon as a new object, or `null` if the input polygon is invalid.

## Remarks

The rotation is performed around the origin (0, 0). If you need to rotate around a different point,
translate the polygon before and after rotation.

## See

[isValidPolygon](isValidPolygon.md)

## Example

```
const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const angle = 90;
const rotatedPolygon = rotatePolygon(polygon, angle);
// rotatedPolygon = { vertices: [{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: -3, y: 4 }] }
```
