[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / addVectors3D

# Function: addVectors3D()

> **addVectors3D**(`v1`, `v2`): [`Vector3D`](../type-aliases/Vector3D.md)

Defined in: [vector/vector.ts:66](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/vector/vector.ts#L66)

Adds two 3D vectors component-wise and returns the resulting vector.

## Parameters

### v1

[`Vector3D`](../type-aliases/Vector3D.md)

The first 3D vector to add.

### v2

[`Vector3D`](../type-aliases/Vector3D.md)

The second 3D vector to add.

## Returns

[`Vector3D`](../type-aliases/Vector3D.md)

A new `Vector3D` object representing the sum of `v1` and `v2`.

## Example

```ts
const v1: Vector3D = { x: 1, y: 2, z: 3 };
const v2: Vector3D = { x: 4, y: 5, z: 6 };
const result = addVectors3D(v1, v2);
console.log(result); // { x: 5, y: 7, z: 9 }
```
