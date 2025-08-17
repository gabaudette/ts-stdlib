[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/triangle](../README.md) / getTriangleCircumcenter

# Function: getTriangleCircumcenter()

> **getTriangleCircumcenter**(`triangle`): `null` \| \{ `x`: `number`; `y`: `number`; \}

Defined in: [geometry/triangle.ts:326](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/triangle.ts#L326)

Calculates the circumcenter (the center of the circumscribed circle) of a given triangle.

The circumcenter is the point where the perpendicular bisectors of the sides of the triangle intersect.
Returns the coordinates of the circumcenter as an object with `x` and `y` properties.
If the provided triangle is invalid, returns `null`.

## Parameters

### triangle

[`ITriangle`](../interfaces/ITriangle.md)

The triangle for which to compute the circumcenter.

## Returns

`null` \| \{ `x`: `number`; `y`: `number`; \}

The coordinates of the circumcenter, or `null` if the triangle is invalid.

## Example

```typescript
const triangle = { a: 3, b: 4, c: 5 };
const circumcenter = getTriangleCircumcenter(triangle);
console.log(circumcenter); // { x: 2, y: 2 }
```
