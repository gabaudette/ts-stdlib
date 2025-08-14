[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / acot

# Function: acot()

> **acot**(`value`): `number`

Defined in: [trigonometry/trigonometry.ts:103](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/trigonometry/trigonometry.ts#L103)

Calculates the inverse cotangent (arc cotangent) of a number.

## Parameters

### value

`number`

The value for which to compute the arc cotangent.

## Returns

`number`

The arc cotangent of the input value, in radians.

## Remarks

The result is in the range [0, π] radians.
This function computes `atan(1 / value)`.

## Example

```ts
const result = acot(1); // result is π/4
```
