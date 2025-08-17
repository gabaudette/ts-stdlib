[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / lineToLineDistance

# Function: lineToLineDistance()

> **lineToLineDistance**(`line1Start`, `line1End`, `line2Start`, `line2End`): `number`

Defined in: [geometry/distance.ts:52](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/geometry/distance.ts#L52)

Calculates the minimum distance between two line segments in 2D space.

The function computes the shortest distance from each endpoint of the first line segment
to the second line segment, and returns the smaller of the two distances.

## Parameters

### line1Start

The starting point of the first line segment.

#### x

`number`

#### y

`number`

### line1End

The ending point of the first line segment.

#### x

`number`

#### y

`number`

### line2Start

The starting point of the second line segment.

#### x

`number`

#### y

`number`

### line2End

The ending point of the second line segment.

#### x

`number`

#### y

`number`

## Returns

`number`

The minimum distance between the two line segments.
