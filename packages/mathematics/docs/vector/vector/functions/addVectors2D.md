[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / addVectors2D

# Function: addVectors2D()

> **addVectors2D**(`v1`, `v2`): [`Vector2D`](../type-aliases/Vector2D.md)

Defined in: [vector/vector.ts:46](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/vector/vector.ts#L46)

Adds two 2D vectors and returns the resulting vector.

## Parameters

### v1

[`Vector2D`](../type-aliases/Vector2D.md)

The first vector to add.

### v2

[`Vector2D`](../type-aliases/Vector2D.md)

The second vector to add.

## Returns

[`Vector2D`](../type-aliases/Vector2D.md)

A new `Vector2D` object representing the sum of `v1` and `v2`.

## Example

```ts
const v1: Vector2D = { x: 1, y: 2 };
const v2: Vector2D = { x: 3, y: 4 };
const result = addVectors2D(v1, v2);
console.log(result); // { x: 4, y: 6 }
```
