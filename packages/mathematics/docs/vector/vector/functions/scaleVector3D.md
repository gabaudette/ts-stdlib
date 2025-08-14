[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / scaleVector3D

# Function: scaleVector3D()

> **scaleVector3D**(`v`, `scalar`): [`Vector3D`](../type-aliases/Vector3D.md)

Defined in: [vector/vector.ts:256](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/vector/vector.ts#L256)

Scales a 3D vector by a given scalar value.

## Parameters

### v

[`Vector3D`](../type-aliases/Vector3D.md)

The input vector to scale.

### scalar

`number`

The scalar value to multiply each component of the vector by.

## Returns

[`Vector3D`](../type-aliases/Vector3D.md)

A new `Vector3D` object with each component scaled by the given scalar.

## Example

```ts
const v: Vector3D = { x: 1, y: 2, z: 3 };
const result = scaleVector3D(v, 2);
console.log(result); // { x: 2, y: 4, z: 6 }
```
