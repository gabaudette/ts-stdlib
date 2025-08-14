[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / isPointInBoundingBox

# Function: isPointInBoundingBox()

> **isPointInBoundingBox**(`point`, `boundingBox`): `boolean`

Defined in: geometry/distance.ts:214

Determines whether a given point lies within a specified axis-aligned bounding box.

## Parameters

### point

The point to test, with `x` and `y` coordinates.

#### x

`number`

#### y

`number`

### boundingBox

The bounding box defined by its minimum and maximum `x` and `y` values.

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

`true` if the point is inside or on the edge of the bounding box; otherwise, `false`.
