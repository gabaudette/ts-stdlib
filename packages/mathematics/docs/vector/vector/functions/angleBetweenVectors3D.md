[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / angleBetweenVectors3D

# Function: angleBetweenVectors3D()

> **angleBetweenVectors3D**(`v1`, `v2`): `number`

Defined in: vector/vector.ts:328

Calculates the angle in radians between two 3D vectors.

## Parameters

### v1

[`Vector3D`](../type-aliases/Vector3D.md)

The first 3D vector.

### v2

[`Vector3D`](../type-aliases/Vector3D.md)

The second 3D vector.

## Returns

`number`

The angle between `v1` and `v2` in radians.

## Remarks

The angle is computed using the arccosine of the normalized dot product of the two vectors.
If either vector has zero magnitude, the result will be `NaN`.

## Example

```ts
const v1: Vector3D = { x: 1, y: 0, z: 0 };
const v2: Vector3D = { x: 0, y: 1, z: 0 };
const result = angleBetweenVectors3D(v1, v2);
console.log(result); // 1.5707963267948966 (π/2 radians)
```
