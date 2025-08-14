[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / projectPolygon

# Function: projectPolygon()

> **projectPolygon**(`polygon`, `axis`): `null` \| \{ `min`: `number`; `max`: `number`; \}

Defined in: [geometry/polygon.ts:368](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/geometry/polygon.ts#L368)

Projects a polygon onto a given axis and returns the minimum and maximum scalar values
of the projection. This is commonly used in collision detection algorithms such as the
Separating Axis Theorem (SAT).

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon to project, represented by an object implementing the `IPolygon` interface.

### axis

[`Vector2D`](../../../vector/vector/type-aliases/Vector2D.md)

The axis (as a `Vector2D`) onto which the polygon will be projected.

## Returns

`null` \| \{ `min`: `number`; `max`: `number`; \}

An object containing the `min` and `max` scalar values of the projection, or `null` if the polygon is invalid.

## Example

```
const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const axis = { x: 1, y: 1 };
const projection = projectPolygon(polygon, axis);
// projection = { min: 0, max: 7 }
```
