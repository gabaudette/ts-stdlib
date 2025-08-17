[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / getCircleCircumference

# Function: getCircleCircumference()

> **getCircleCircumference**(`circle`): `null` \| `number`

Defined in: [geometry/circle.ts:44](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/geometry/circle.ts#L44)

Calculates the circumference of a given circle.

## Parameters

### circle

[`ICircle`](../interfaces/ICircle.md)

The circle object for which to calculate the circumference.

## Returns

`null` \| `number`

The circumference of the circle if the input is valid; otherwise, `null`.

## Example

```
const circle = { radius: 5 };
console.log(getCircleCircumference(circle)); // 31.41592653589793
```
