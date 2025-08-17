[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [vector/vector](../README.md) / angleBetweenVectors2D

# Function: angleBetweenVectors2D()

> **angleBetweenVectors2D**(`v1`, `v2`): `number`

Defined in: [vector/vector.ts:304](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/vector/vector.ts#L304)

Calculates the angle in radians between two 2D vectors.

The angle is computed using the dot product formula:
  angle = acos((v1 · v2) / (|v1| * |v2|))

## Parameters

### v1

[`Vector2D`](../type-aliases/Vector2D.md)

The first 2D vector.

### v2

[`Vector2D`](../type-aliases/Vector2D.md)

The second 2D vector.

## Returns

`number`

The angle between the two vectors in radians, in the range [0, π].

## Example

```ts
const v1: Vector2D = { x: 1, y: 0 };
const v2: Vector2D = { x: 0, y: 1 };
const result = angleBetweenVectors2D(v1, v2);
console.log(result); // 1.5707963267948966 (π/2 radians)
```
