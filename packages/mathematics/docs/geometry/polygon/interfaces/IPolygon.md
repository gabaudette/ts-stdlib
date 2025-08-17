[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / IPolygon

# Interface: IPolygon

Defined in: [geometry/polygon.ts:11](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/polygon.ts#L11)

Represents a polygon defined by a sequence of 2D vertices.

## Remarks

The vertices are stored as an array of `Vector2D` objects, where each vertex defines a corner of the polygon.

## Properties

### vertices

> **vertices**: [`Vector2D`](../../../vector/vector/type-aliases/Vector2D.md)[]

Defined in: [geometry/polygon.ts:12](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/polygon.ts#L12)

An array of `Vector2D` instances representing the ordered vertices of the polygon.
