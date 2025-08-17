[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / getCircleArea

# Function: getCircleArea()

> **getCircleArea**(`circle`): `null` \| `number`

Defined in: [geometry/circle.ts:64](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/circle.ts#L64)

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
