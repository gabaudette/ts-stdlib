[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / subtractVectors3D

# Function: subtractVectors3D()

> **subtractVectors3D**(`v1`, `v2`): [`Vector3D`](../type-aliases/Vector3D.md)

Defined in: [vector/vector.ts:107](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/vector/vector.ts#L107)

Subtracts two 3D vectors component-wise.

## Parameters

### v1

[`Vector3D`](../type-aliases/Vector3D.md)

The minuend vector (the vector to subtract from).

### v2

[`Vector3D`](../type-aliases/Vector3D.md)

The subtrahend vector (the vector to subtract).

## Returns

[`Vector3D`](../type-aliases/Vector3D.md)

A new `Vector3D` representing the result of `v1 - v2`.

## Example

```ts
const v1: Vector3D = { x: 1, y: 2, z: 3 };
const v2: Vector3D = { x: 4, y: 5, z: 6 };
const result = subtractVectors3D(v1, v2);
console.log(result); // { x: -3, y: -3, z: -3 }
```
