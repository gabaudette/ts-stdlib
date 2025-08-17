[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getLineYIntercept

# Function: getLineYIntercept()

> **getLineYIntercept**(`lineStart`, `lineEnd`): `null` \| `number`

Defined in: [geometry/distance.ts:155](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/geometry/distance.ts#L155)

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
