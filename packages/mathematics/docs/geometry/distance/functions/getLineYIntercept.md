[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getLineYIntercept

# Function: getLineYIntercept()

> **getLineYIntercept**(`lineStart`, `lineEnd`): `null` \| `number`

Defined in: [geometry/distance.ts:155](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/distance.ts#L155)

Calculates the y-intercept of a line defined by two points.

The y-intercept is the point where the line crosses the y-axis (i.e., where x = 0).
If the line is vertical (undefined slope), the function returns `null`.

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

The y-intercept of the line, or `null` if the line is vertical.
