[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / scaleCircle

# Function: scaleCircle()

> **scaleCircle**(`circle`, `scale`): `null` \| [`ICircle`](../interfaces/ICircle.md)

Defined in: [geometry/circle.ts:182](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/geometry/circle.ts#L182)

Scales the radius of a given circle by a specified factor.

## Parameters

### circle

[`ICircle`](../interfaces/ICircle.md)

The circle object to scale. Must be a valid `ICircle`.

### scale

`number`

The scaling factor. Must be a positive number.

## Returns

`null` \| [`ICircle`](../interfaces/ICircle.md)

A new `ICircle` object with the scaled radius, or `null` if the input circle is invalid or the scale is not positive.

## Example

```
const circle = { radius: 5 };
const scaledCircle = scaleCircle(circle, 2);
console.log(scaledCircle); // { radius: 10 }
```
