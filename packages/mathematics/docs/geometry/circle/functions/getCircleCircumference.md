[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / getCircleCircumference

# Function: getCircleCircumference()

> **getCircleCircumference**(`circle`): `null` \| `number`

Defined in: [geometry/circle.ts:44](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/geometry/circle.ts#L44)

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
