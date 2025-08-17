[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getBoundingBoxSize

# Function: getBoundingBoxSize()

> **getBoundingBoxSize**(`boundingBox`): `object`

Defined in: [geometry/distance.ts:269](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/geometry/distance.ts#L269)

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
