[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / scaleVector2D

# Function: scaleVector2D()

> **scaleVector2D**(`v`, `scalar`): [`Vector2D`](../type-aliases/Vector2D.md)

Defined in: vector/vector.ts:237

Scales a 2D vector by a given scalar value.

## Parameters

### v

[`Vector2D`](../type-aliases/Vector2D.md)

The 2D vector to scale.

### scalar

`number`

The scalar value to multiply each component of the vector by.

## Returns

[`Vector2D`](../type-aliases/Vector2D.md)

A new 2D vector with each component scaled by the given scalar.

## Example

```ts
const v: Vector2D = { x: 3, y: 4 };
const result = scaleVector2D(v, 2);
console.log(result); // { x: 6, y: 8 }
```
