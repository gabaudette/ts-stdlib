[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / isValidTriangle

# Function: isValidTriangle()

> **isValidTriangle**(`triangle`): `boolean`

Defined in: [geometry/triangle.ts:25](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/triangle.ts#L25)

Determines whether the given triangle is valid based on the triangle inequality theorem.

A triangle is considered valid if the sum of the lengths of any two sides
is greater than the length of the remaining side.

## Parameters

### triangle

[`ITriangle`](../interfaces/ITriangle.md)

An object implementing the `ITriangle` interface, containing the side lengths `a`, `b`, and `c`.

## Returns

`boolean`

`true` if the triangle is valid; otherwise, `false`.
