[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / getTriangleCentroid

# Function: getTriangleCentroid()

> **getTriangleCentroid**(`triangle`): `null` \| \{ `x`: `number`; `y`: `number`; \}

Defined in: [geometry/triangle.ts:155](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/triangle.ts#L155)

Calculates the centroid (geometric center) of a triangle.

The centroid is the point where the three medians of the triangle intersect,
and it is also the average of the triangle's vertices' coordinates.

## Parameters

### triangle

[`ITriangle`](../interfaces/ITriangle.md)

The triangle for which to calculate the centroid.

## Returns

`null` \| \{ `x`: `number`; `y`: `number`; \}

An object containing the `x` and `y` coordinates of the centroid,
         or `null` if the provided triangle is not valid.

## Example

```typescript
const centroid = getTriangleCentroid({ a: 3, b: 4, c: 5 });
console.log(centroid); // { x: 4, y: 4 }
```
