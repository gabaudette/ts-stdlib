[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / subtractVectors2D

# Function: subtractVectors2D()

> **subtractVectors2D**(`v1`, `v2`): [`Vector2D`](../type-aliases/Vector2D.md)

Defined in: vector/vector.ts:87

Subtracts the components of two 2D vectors and returns the resulting vector.

## Parameters

### v1

[`Vector2D`](../type-aliases/Vector2D.md)

The minuend vector (the vector to subtract from).

### v2

[`Vector2D`](../type-aliases/Vector2D.md)

The subtrahend vector (the vector to subtract).

## Returns

[`Vector2D`](../type-aliases/Vector2D.md)

A new `Vector2D` object representing the difference between `v1` and `v2`.

## Example

```ts
const v1: Vector2D = { x: 1, y: 2 };
const v2: Vector2D = { x: 3, y: 4 };
const result = subtractVectors2D(v1, v2);
console.log(result); // { x: -2, y: -2 }
```
