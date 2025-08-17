[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / getTriangleIncenter

# Function: getTriangleIncenter()

> **getTriangleIncenter**(`triangle`): `null` \| \{ `x`: `number`; `y`: `number`; \}

Defined in: [geometry/triangle.ts:350](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/triangle.ts#L350)

Calculates the incenter (the intersection point of the angle bisectors)
of a given triangle.

The incenter is the center of the triangle's incircle (the largest circle
that fits inside the triangle and touches all three sides).

## Parameters

### triangle

[`ITriangle`](../interfaces/ITriangle.md)

The triangle for which to compute the incenter.

## Returns

`null` \| \{ `x`: `number`; `y`: `number`; \}

The coordinates `{ x, y }` of the incenter, or `null` if the triangle is invalid.
