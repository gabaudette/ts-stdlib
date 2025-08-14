[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / getCircleCircumference

# Function: getCircleCircumference()

> **getCircleCircumference**(`circle`): `null` \| `number`

Defined in: [geometry/circle.ts:44](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/geometry/circle.ts#L44)

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
