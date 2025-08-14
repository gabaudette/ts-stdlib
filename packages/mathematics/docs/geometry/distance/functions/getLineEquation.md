[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getLineEquation

# Function: getLineEquation()

> **getLineEquation**(`lineStart`, `lineEnd`): `object`

Defined in: geometry/distance.ts:175

Calculates the slope and y-intercept of the line defined by two points.

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

`object`

An object containing the `slope` and `yIntercept` of the line.
         If the line is vertical, both values will be `null`.

### slope

> **slope**: `null` \| `number`

### yIntercept

> **yIntercept**: `null` \| `number`
