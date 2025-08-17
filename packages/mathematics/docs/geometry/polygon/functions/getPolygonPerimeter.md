[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / getPolygonPerimeter

# Function: getPolygonPerimeter()

> **getPolygonPerimeter**(`polygon`): `null` \| `number`

Defined in: [geometry/polygon.ts:100](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/polygon.ts#L100)

Calculates the perimeter of a polygon by summing the distances between consecutive vertices.

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon object implementing the `IPolygon` interface, which must have a `vertices` property (an array of points with `x` and `y` coordinates).

## Returns

`null` \| `number`

The perimeter of the polygon as a number, or `null` if the polygon is invalid.

## Remarks

The function first checks if the provided polygon is valid using `isValidPolygon`. If invalid, it returns `null`.
The perimeter is computed by iterating through each vertex and summing the Euclidean distances between consecutive vertices, including the edge from the last vertex back to the first.

## Example

```typescript
const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
const perimeter = getPolygonPerimeter(polygon); // perimeter = 14
```
