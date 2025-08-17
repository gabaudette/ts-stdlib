[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / getPolygonBoundingBox

# Function: getPolygonBoundingBox()

> **getPolygonBoundingBox**(`polygon`): `null` \| \{ `min`: [`Vector2D`](../../../vector/vector/type-aliases/Vector2D.md); `max`: [`Vector2D`](../../../vector/vector/type-aliases/Vector2D.md); \}

Defined in: [geometry/polygon.ts:213](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/polygon.ts#L213)

Calculates the axis-aligned bounding box for a given polygon.

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon for which to compute the bounding box.

## Returns

`null` \| \{ `min`: [`Vector2D`](../../../vector/vector/type-aliases/Vector2D.md); `max`: [`Vector2D`](../../../vector/vector/type-aliases/Vector2D.md); \}

An object containing the minimum and maximum coordinates (`min` and `max`) as `Vector2D`,
         or `null` if the polygon is invalid.

## Remarks

The bounding box is the smallest rectangle (aligned with the axes) that completely contains the polygon.
The function returns `null` if the input polygon is not valid according to `isValidPolygon`.

## Example

```
const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const boundingBox = getPolygonBoundingBox(polygon);
// boundingBox = { min: { x: 0, y: 0 }, max: { x: 4, y: 3 } }
```
