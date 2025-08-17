[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / isBoundingBoxIntersecting

# Function: isBoundingBoxIntersecting()

> **isBoundingBoxIntersecting**(`box1`, `box2`): `boolean`

Defined in: [geometry/distance.ts:233](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/geometry/distance.ts#L233)

Determines whether two axis-aligned bounding boxes intersect.

## Parameters

### box1

The first bounding box, defined by its minimum and maximum X and Y coordinates.

#### minX

`number`

#### minY

`number`

#### maxX

`number`

#### maxY

`number`

### box2

The second bounding box, defined by its minimum and maximum X and Y coordinates.

#### minX

`number`

#### minY

`number`

#### maxX

`number`

#### maxY

`number`

## Returns

`boolean`

`true` if the bounding boxes intersect or touch; otherwise, `false`.
