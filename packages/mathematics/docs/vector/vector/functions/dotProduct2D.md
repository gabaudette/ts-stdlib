[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / dotProduct2D

# Function: dotProduct2D()

> **dotProduct2D**(`v1`, `v2`): `number`

Defined in: [vector/vector.ts:128](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/vector/vector.ts#L128)

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
