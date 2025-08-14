[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / getPolygonArea

# Function: getPolygonArea()

> **getPolygonArea**(`polygon`): `null` \| `number`

Defined in: geometry/polygon.ts:67

Calculates the area of a polygon using the Shoelace formula.

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon object containing an array of vertices.

## Returns

`null` \| `number`

The area of the polygon as a number, or `null` if the polygon is invalid.

## Remarks

The function first checks if the provided polygon is valid using `isValidPolygon`.
If the polygon is invalid, it returns `null`. Otherwise, it computes the area
by iterating over the vertices and applying the Shoelace formula.

## Example

```typescript
const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const area = getPolygonArea(polygon); // area = 6
```
