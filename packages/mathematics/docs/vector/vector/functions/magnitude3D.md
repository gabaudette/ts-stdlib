[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / magnitude3D

# Function: magnitude3D()

> **magnitude3D**(`v`): `number`

Defined in: [vector/vector.ts:178](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/vector/vector.ts#L178)

Calculates the magnitude (length) of a 3-dimensional vector.

## Parameters

### v

[`Vector3D`](../type-aliases/Vector3D.md)

The 3D vector for which to compute the magnitude.

## Returns

`number`

The magnitude (Euclidean norm) of the vector.

## Example

```ts
const v: Vector3D = { x: 1, y: 2, z: 3 };
const result = magnitude3D(v);
console.log(result); // 3.7416573867739413
```
