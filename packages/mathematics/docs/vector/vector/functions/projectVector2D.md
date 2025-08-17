[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / projectVector2D

# Function: projectVector2D()

> **projectVector2D**(`v1`, `v2`): [`Vector2D`](../type-aliases/Vector2D.md)

Defined in: [vector/vector.ts:351](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/vector/vector.ts#L351)

Projects vector `v1` onto vector `v2` in 2D space.

The projection is calculated as the scalar projection of `v1` onto `v2`,
resulting in a vector that lies on `v2` and represents the component of `v1` in the direction of `v2`.

## Parameters

### v1

[`Vector2D`](../type-aliases/Vector2D.md)

The vector to be projected.

### v2

[`Vector2D`](../type-aliases/Vector2D.md)

The vector onto which `v1` is projected.

## Returns

[`Vector2D`](../type-aliases/Vector2D.md)

The projection of `v1` onto `v2` as a new `Vector2D`.

## Example

```ts
const v1: Vector2D = { x: 3, y: 4 };
const v2: Vector2D = { x: 1, y: 0 };
const result = projectVector2D(v1, v2);
console.log(result); // { x: 3, y: 0 }
```
