[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / getTriangleOrthocenter

# Function: getTriangleOrthocenter()

> **getTriangleOrthocenter**(`triangle`): `null` \| \{ `x`: `number`; `y`: `number`; \}

Defined in: [geometry/triangle.ts:185](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/triangle.ts#L185)

Calculates the orthocenter of a given triangle.

The orthocenter is the point where the three altitudes of a triangle intersect.
Returns the coordinates of the orthocenter as an object with `x` and `y` properties.
If the provided triangle is invalid, returns `null`.

## Parameters

### triangle

[`ITriangle`](../interfaces/ITriangle.md)

The triangle for which to compute the orthocenter.

## Returns

`null` \| \{ `x`: `number`; `y`: `number`; \}

The coordinates of the orthocenter, or `null` if the triangle is invalid.

## Example

```typescript
const orthocenter = getTriangleOrthocenter({ a: 3, b: 4, c: 5 });
console.log(orthocenter); // { x: 4, y: 4 }
```
