[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / acsc

# Function: acsc()

> **acsc**(`value`): `number`

Defined in: [trigonometry/trigonometry.ts:86](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/trigonometry/trigonometry.ts#L86)

Calculates the inverse cosecant (arc-cosecant) of a number.

## Parameters

### value

`number`

The value for which to compute the arc-cosecant. Must not be 0.

## Returns

`number`

The angle in radians whose cosecant is the given value.

## Throws

If the input value is 0, as division by zero is not allowed.

## Remarks

The result is in the range [-π/2, π/2], excluding 0.
This function computes `Math.asin(1 / value)`.

## Example

```ts
const result = acsc(2); // result is π/6
```
