[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / getCircleDiameter

# Function: getCircleDiameter()

> **getCircleDiameter**(`circle`): `null` \| `number`

Defined in: [geometry/circle.ts:84](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/circle.ts#L84)

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
