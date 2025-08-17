[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / getTrianglePerimeter

# Function: getTrianglePerimeter()

> **getTrianglePerimeter**(`triangle`): `null` \| `number`

Defined in: [geometry/triangle.ts:104](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/triangle.ts#L104)

Calculates the perimeter of a triangle given its side lengths.

## Parameters

### triangle

[`ITriangle`](../interfaces/ITriangle.md)

An object representing the triangle, containing side lengths `a`, `b`, and `c`.

## Returns

`null` \| `number`

The perimeter of the triangle if the triangle is valid; otherwise, returns `null`.

## Remarks

The function first checks if the provided triangle is valid using `isValidTriangle`.
If the triangle is not valid, it returns `null`.

## Example

```typescript
const perimeter = getTrianglePerimeter({ a: 3, b: 4, c: 5 });
console.log(perimeter); // 12
```
