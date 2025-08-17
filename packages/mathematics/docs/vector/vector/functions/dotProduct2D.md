[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / dotProduct2D

# Function: dotProduct2D()

> **dotProduct2D**(`v1`, `v2`): `number`

Defined in: [vector/vector.ts:128](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/vector/vector.ts#L128)

Calculates the dot product of two 2-dimensional vectors.

## Parameters

### v1

[`Vector2D`](../type-aliases/Vector2D.md)

The first 2D vector.

### v2

[`Vector2D`](../type-aliases/Vector2D.md)

The second 2D vector.

## Returns

`number`

The dot product of the two vectors as a number.

## Example

```ts
const v1: Vector2D = { x: 1, y: 2 };
const v2: Vector2D = { x: 3, y: 4 };
const result = dotProduct2D(v1, v2);
console.log(result); // 11
```
