[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / getTriangleArea

# Function: getTriangleArea()

> **getTriangleArea**(`triangle`): `null` \| `number`

Defined in: [geometry/triangle.ts:78](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/triangle.ts#L78)

Calculates the area of a triangle using Heron's formula.

## Parameters

### triangle

[`ITriangle`](../interfaces/ITriangle.md)

The triangle object containing side lengths `a`, `b`, and `c`.

## Returns

`null` \| `number`

The area of the triangle if the sides form a valid triangle; otherwise, `null`.

## Remarks

This function first checks if the provided triangle is valid using `isValidTriangle`.
If valid, it computes the area using Heron's formula.

## See

[heronsFormula](heronsFormula.md) for the implementation of Heron's formula.

## Example

```typescript
const area = getTriangleArea({ a: 3, b: 4, c: 5 });
console.log(area); // 6
```
