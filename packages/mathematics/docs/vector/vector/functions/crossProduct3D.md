[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / crossProduct3D

# Function: crossProduct3D()

> **crossProduct3D**(`v1`, `v2`): [`Vector3D`](../type-aliases/Vector3D.md)

Defined in: [vector/vector.ts:280](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/vector/vector.ts#L280)

Computes the cross product of two 3-dimensional vectors.

The cross product of two vectors in 3D space results in a third vector
that is perpendicular to both input vectors, following the right-hand rule.

## Parameters

### v1

[`Vector3D`](../type-aliases/Vector3D.md)

The first 3D vector.

### v2

[`Vector3D`](../type-aliases/Vector3D.md)

The second 3D vector.

## Returns

[`Vector3D`](../type-aliases/Vector3D.md)

A new `Vector3D` object representing the cross product of `v1` and `v2`.

## Example

```ts
const v1: Vector3D = { x: 1, y: 2, z: 3 };
const v2: Vector3D = { x: 4, y: 5, z: 6 };
const result = crossProduct3D(v1, v2);
console.log(result); // { x: -3, y: 6, z: -3 }
```
