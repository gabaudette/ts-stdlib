[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getLineSlope

# Function: getLineSlope()

> **getLineSlope**(`lineStart`, `lineEnd`): `null` \| `number`

Defined in: [geometry/distance.ts:135](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/geometry/distance.ts#L135)

Calculates the slope of a line defined by two points.

## Parameters

### lineStart

The starting point of the line, with `x` and `y` coordinates.

#### x

`number`

#### y

`number`

### lineEnd

The ending point of the line, with `x` and `y` coordinates.

#### x

`number`

#### y

`number`

## Returns

`null` \| `number`

The slope of the line as a number, or `null` if the line is vertical (undefined slope).
