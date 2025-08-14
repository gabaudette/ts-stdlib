[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / lineToPointDistance

# Function: lineToPointDistance()

> **lineToPointDistance**(`lineStart`, `lineEnd`, `point`): `number`

Defined in: [geometry/distance.ts:72](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/geometry/distance.ts#L72)

Calculates the shortest distance from a given point to a line segment defined by two endpoints.

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

### point

The point from which the distance to the line segment is measured, with `x` and `y` coordinates.

#### x

`number`

#### y

`number`

## Returns

`number`

The shortest distance from the point to the line segment.
