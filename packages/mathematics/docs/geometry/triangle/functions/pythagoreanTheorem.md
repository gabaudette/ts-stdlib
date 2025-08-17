[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / pythagoreanTheorem

# Function: pythagoreanTheorem()

> **pythagoreanTheorem**(`a`, `b`): `number`

Defined in: [geometry/triangle.ts:227](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/triangle.ts#L227)

Calculates the length of the hypotenuse of a right-angled triangle
using the Pythagorean theorem.

## Parameters

### a

`number`

The length of one of the triangle's legs.

### b

`number`

The length of the other triangle's leg.

## Returns

`number`

The length of the hypotenuse.

## Example

```typescript
const hypotenuse = pythagoreanTheorem(3, 4); // Returns 5
```
