[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / pointToLineDistance

# Function: pointToLineDistance()

> **pointToLineDistance**(`point`, `lineStart`, `lineEnd`): `number`

Defined in: [geometry/distance.ts:23](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/distance.ts#L23)

Calculates the shortest distance from a given point to a line segment defined by two endpoints.

## Parameters

### point

The point from which the distance to the line is measured.

#### x

`number`

#### y

`number`

### lineStart

The starting point of the line segment.

#### x

`number`

#### y

`number`

### lineEnd

The ending point of the line segment.

#### x

`number`

#### y

`number`

## Returns

`number`

The shortest distance from the point to the line segment. Returns 0 if the line segment has zero length.
