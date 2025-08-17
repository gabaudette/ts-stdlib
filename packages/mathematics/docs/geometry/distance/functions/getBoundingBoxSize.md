[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getBoundingBoxSize

# Function: getBoundingBoxSize()

> **getBoundingBoxSize**(`boundingBox`): `object`

Defined in: [geometry/distance.ts:269](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/distance.ts#L269)

Calculates the width and height of a bounding box given its minimum and maximum X and Y coordinates.

## Parameters

### boundingBox

An object containing the minimum and maximum X and Y coordinates of the bounding box.

#### minX

`number`

#### minY

`number`

#### maxX

`number`

#### maxY

`number`

## Returns

`object`

An object with the `width` and `height` of the bounding box.

### width

> **width**: `number`

### height

> **height**: `number`
