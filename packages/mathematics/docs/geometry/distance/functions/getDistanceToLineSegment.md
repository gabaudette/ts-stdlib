[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getDistanceToLineSegment

# Function: getDistanceToLineSegment()

> **getDistanceToLineSegment**(`point`, `segmentStart`, `segmentEnd`): `number`

Defined in: [geometry/distance.ts:390](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/distance.ts#L390)

Calculates the shortest distance from a given point to a line segment defined by two endpoints.

## Parameters

### point

The point from which the distance is measured, with `x` and `y` coordinates.

#### x

`number`

#### y

`number`

### segmentStart

The starting point of the line segment, with `x` and `y` coordinates.

#### x

`number`

#### y

`number`

### segmentEnd

The ending point of the line segment, with `x` and `y` coordinates.

#### x

`number`

#### y

`number`

## Returns

`number`

The shortest distance from the point to the line segment.

## Remarks

If the perpendicular projection of the point onto the line defined by the segment
falls outside the segment, the distance to the nearest endpoint is returned.
