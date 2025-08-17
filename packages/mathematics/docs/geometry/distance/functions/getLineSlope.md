[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getLineSlope

# Function: getLineSlope()

> **getLineSlope**(`lineStart`, `lineEnd`): `null` \| `number`

Defined in: [geometry/distance.ts:135](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/distance.ts#L135)

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
