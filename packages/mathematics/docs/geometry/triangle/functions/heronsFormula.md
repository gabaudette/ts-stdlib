[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / heronsFormula

# Function: heronsFormula()

> **heronsFormula**(`a`, `b`, `c`): `number`

Defined in: [geometry/triangle.ts:264](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/triangle.ts#L264)

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
