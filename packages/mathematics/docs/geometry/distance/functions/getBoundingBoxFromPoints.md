[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getBoundingBoxFromPoints

# Function: getBoundingBoxFromPoints()

> **getBoundingBoxFromPoints**(`points`): `null` \| \{ `minX`: `number`; `minY`: `number`; `maxX`: `number`; `maxY`: `number`; \}

Defined in: [geometry/distance.ts:345](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/distance.ts#L345)

Calculates the axis-aligned bounding box for a given array of 2D points.

## Parameters

### points

`object`[]

An array of points, each with `x` and `y` coordinates.

## Returns

`null` \| \{ `minX`: `number`; `minY`: `number`; `maxX`: `number`; `maxY`: `number`; \}

An object containing the minimum and maximum `x` and `y` values (`minX`, `minY`, `maxX`, `maxY`)
         that define the bounding box, or `null` if the input array is empty.

## Example

```typescript
const points = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: -1, y: 5 }];
const bbox = getBoundingBoxFromPoints(points);
// bbox = { minX: -1, minY: 2, maxX: 3, maxY: 5 }
```
