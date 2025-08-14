[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/polygon](../README.md) / isValidPolygon

# Function: isValidPolygon()

> **isValidPolygon**(`polygon`): `boolean`

Defined in: [geometry/polygon.ts:36](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/geometry/polygon.ts#L36)

Determines whether the given polygon is valid.

A valid polygon must have a `vertices` property that is an array containing at least three elements.
Each vertex must be an object with numeric `x` and `y` properties.

## Parameters

### polygon

[`IPolygon`](../interfaces/IPolygon.md)

The polygon object to validate, expected to have a `vertices` array.

## Returns

`boolean`

`true` if the polygon is valid, otherwise `false`.

## Example

```typescript
const polygon = {
  vertices: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ],
};
console.log(isValidPolygon(polygon)); // true
```
