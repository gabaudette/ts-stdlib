[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / heronsFormula

# Function: heronsFormula()

> **heronsFormula**(`a`, `b`, `c`): `number`

Defined in: [geometry/triangle.ts:264](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/geometry/triangle.ts#L264)

Calculates the area of a triangle given the lengths of its three sides using Heron's formula.

## Parameters

### a

`number`

The length of the first side of the triangle.

### b

`number`

The length of the second side of the triangle.

### c

`number`

The length of the third side of the triangle.

## Returns

`number`

The area of the triangle.

## Throws

If the provided side lengths do not form a valid triangle.

## See

[Heron's formula](https://en.wikipedia.org/wiki/Heron%27s_formula)
