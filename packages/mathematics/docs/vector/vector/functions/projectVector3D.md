[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / projectVector3D

# Function: projectVector3D()

> **projectVector3D**(`v1`, `v2`): [`Vector3D`](../type-aliases/Vector3D.md)

Defined in: [vector/vector.ts:373](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/vector/vector.ts#L373)

Projects the 3D vector `v1` onto the 3D vector `v2`.

The projection of `v1` onto `v2` is a vector that represents the component of `v1` in the direction of `v2`.

## Parameters

### v1

[`Vector3D`](../type-aliases/Vector3D.md)

The vector to be projected.

### v2

[`Vector3D`](../type-aliases/Vector3D.md)

The vector onto which `v1` is projected.

## Returns

[`Vector3D`](../type-aliases/Vector3D.md)

A new `Vector3D` representing the projection of `v1` onto `v2`.

## Example

```ts
const v1: Vector3D = { x: 3, y: 4, z: 5 };
const v2: Vector3D = { x: 1, y: 0, z: 0 };
const result = projectVector3D(v1, v2);
console.log(result); // { x: 3, y: 0, z: 0 }
```
