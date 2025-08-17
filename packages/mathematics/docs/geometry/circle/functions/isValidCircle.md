[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / isValidCircle

# Function: isValidCircle()

> **isValidCircle**(`circle`): `boolean`

Defined in: [geometry/circle.ts:24](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/geometry/circle.ts#L24)

Determines whether the provided circle object is a valid circle.

A valid circle must have a `radius` property that is a positive number.

## Parameters

### circle

[`ICircle`](../interfaces/ICircle.md)

The circle object to validate.

## Returns

`boolean`

`true` if the circle is valid; otherwise, `false`.

## Example

```
const circle = { radius: 5 };
console.log(isValidCircle(circle)); // true
```
