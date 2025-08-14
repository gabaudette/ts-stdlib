[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / magnitude2D

# Function: magnitude2D()

> **magnitude2D**(`v`): `number`

Defined in: [vector/vector.ts:163](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/vector/vector.ts#L163)

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
