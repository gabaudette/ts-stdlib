[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / magnitude2D

# Function: magnitude2D()

> **magnitude2D**(`v`): `number`

Defined in: [vector/vector.ts:163](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/vector/vector.ts#L163)

Calculates the magnitude (length) of a 2D vector.

## Parameters

### v

[`Vector2D`](../type-aliases/Vector2D.md)

The 2D vector for which to compute the magnitude.

## Returns

`number`

The magnitude (Euclidean norm) of the vector.

## Example

```ts
const v: Vector2D = { x: 3, y: 4 };
const result = magnitude2D(v);
console.log(result); // 5
```
