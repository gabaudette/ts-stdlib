[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / normalize3D

# Function: normalize3D()

> **normalize3D**(`v`): [`Vector3D`](../type-aliases/Vector3D.md)

Defined in: [vector/vector.ts:216](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/vector/vector.ts#L216)

Normalizes a 3D vector, returning a new vector with the same direction but a magnitude of 1.

## Parameters

### v

[`Vector3D`](../type-aliases/Vector3D.md)

The 3D vector to normalize.

## Returns

[`Vector3D`](../type-aliases/Vector3D.md)

A new `Vector3D` object representing the normalized vector.

## Remarks

If the input vector has zero magnitude, this function will return a vector with `Infinity` or `NaN` components.

## Example

```ts
const v: Vector3D = { x: 3, y: 4, z: 5 };
const result = normalize3D(v);
console.log(result); // { x: 0.4242640687119285, y: 0.565685424949238, z: 0.7071067811865475 }
```
