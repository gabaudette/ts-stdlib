[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getLineBoundingBox

# Function: getLineBoundingBox()

> **getLineBoundingBox**(`lineStart`, `lineEnd`): `object`

Defined in: geometry/distance.ts:195

Calculates the axis-aligned bounding box for a line segment defined by two points.

## Parameters

### lineStart

The starting point of the line segment, with `x` and `y` coordinates.

#### x

`number`

#### y

`number`

### lineEnd

The ending point of the line segment, with `x` and `y` coordinates.

#### x

`number`

#### y

`number`

## Returns

`object`

An object containing the minimum and maximum `x` and `y` values (`minX`, `minY`, `maxX`, `maxY`)
         that define the bounding box enclosing the line segment.

### minX

> **minX**: `number`

### minY

> **minY**: `number`

### maxX

> **maxX**: `number`

### maxY

> **maxY**: `number`
