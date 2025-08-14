[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / getPolygonCentroid

# Function: getPolygonCentroid()

> **getPolygonCentroid**(`polygon`): `null` \| [`Vector2D`](../../../vector/vector/type-aliases/Vector2D.md)

Defined in: [geometry/polygon.ts:134](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/geometry/polygon.ts#L134)

Calculates the centroid (geometric center) of a polygon by averaging its vertices' coordinates.

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon object implementing the `IPolygon` interface, containing an array of vertices.

## Returns

`null` \| [`Vector2D`](../../../vector/vector/type-aliases/Vector2D.md)

The centroid as a `Vector2D` object if the polygon is valid; otherwise, returns `null`.

## Remarks

The centroid is computed as the arithmetic mean of the x and y coordinates of all vertices.
The function first checks if the polygon is valid using `isValidPolygon`.

## Example

```
const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const centroid = getPolygonCentroid(polygon); // centroid = { x: 2, y: 1 }
```
