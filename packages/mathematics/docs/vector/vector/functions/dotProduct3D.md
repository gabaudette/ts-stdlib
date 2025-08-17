[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / dotProduct3D

# Function: dotProduct3D()

> **dotProduct3D**(`v1`, `v2`): `number`

Defined in: [vector/vector.ts:148](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/vector/vector.ts#L148)

Calculates the dot product of two 3-dimensional vectors.

The dot product is defined as the sum of the products of the corresponding components
of the two vectors: (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z).

## Parameters

### v1

[`Vector3D`](../type-aliases/Vector3D.md)

The first 3D vector.

### v2

[`Vector3D`](../type-aliases/Vector3D.md)

The second 3D vector.

## Returns

`number`

The dot product of the two vectors as a number.

## Example

```ts
const v1: Vector3D = { x: 1, y: 2, z: 3 };
const v2: Vector3D = { x: 4, y: 5, z: 6 };
const result = dotProduct3D(v1, v2);
console.log(result); // 32
```
