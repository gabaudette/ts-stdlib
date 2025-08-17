[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / isValidCircle

# Function: isValidCircle()

> **isValidCircle**(`circle`): `boolean`

Defined in: [geometry/circle.ts:24](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/circle.ts#L24)

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
