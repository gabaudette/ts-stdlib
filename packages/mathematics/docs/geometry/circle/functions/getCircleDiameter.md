[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / getCircleDiameter

# Function: getCircleDiameter()

> **getCircleDiameter**(`circle`): `null` \| `number`

Defined in: [geometry/circle.ts:84](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/circle.ts#L84)

Calculates the diameter of a given circle.

## Parameters

### circle

[`ICircle`](../interfaces/ICircle.md)

The circle object to calculate the diameter for.

## Returns

`null` \| `number`

The diameter of the circle if the input is valid; otherwise, `null`.

## Example

```
const circle = { radius: 5 };
console.log(getCircleDiameter(circle)); // 10
```
