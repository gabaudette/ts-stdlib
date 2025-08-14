[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getLineSlope

# Function: getLineSlope()

> **getLineSlope**(`lineStart`, `lineEnd`): `null` \| `number`

Defined in: [geometry/distance.ts:135](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/geometry/distance.ts#L135)

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
