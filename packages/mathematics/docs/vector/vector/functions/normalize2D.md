[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / normalize2D

# Function: normalize2D()

> **normalize2D**(`v`): [`Vector2D`](../type-aliases/Vector2D.md)

Defined in: [vector/vector.ts:195](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/vector/vector.ts#L195)

Returns a normalized (unit length) 2D vector in the same direction as the input vector.

## Parameters

### v

[`Vector2D`](../type-aliases/Vector2D.md)

The 2D vector to normalize.

## Returns

[`Vector2D`](../type-aliases/Vector2D.md)

A new 2D vector with the same direction as `v` but with a magnitude of 1.

## Remarks

If the input vector has zero magnitude, this function will return a vector with `NaN` components.

## Example

```ts
const v: Vector2D = { x: 3, y: 4 };
const result = normalize2D(v);
console.log(result); // { x: 0.6, y: 0.8 }
```
