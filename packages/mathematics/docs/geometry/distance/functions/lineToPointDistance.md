[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / lineToPointDistance

# Function: lineToPointDistance()

> **lineToPointDistance**(`lineStart`, `lineEnd`, `point`): `number`

Defined in: [geometry/distance.ts:72](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/geometry/distance.ts#L72)

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
