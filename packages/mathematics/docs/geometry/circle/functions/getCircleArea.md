[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / getCircleArea

# Function: getCircleArea()

> **getCircleArea**(`circle`): `null` \| `number`

Defined in: [geometry/circle.ts:64](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/geometry/circle.ts#L64)

Calculates the area of a circle given a valid `ICircle` object.

## Parameters

### circle

[`ICircle`](../interfaces/ICircle.md)

The circle object containing the radius property.

## Returns

`null` \| `number`

The area of the circle if the input is valid; otherwise, `null`.

## Example

```
const circle = { radius: 5 };
console.log(getCircleArea(circle)); // 78.53981633974483
```
