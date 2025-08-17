[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / wrapAngle

# Function: wrapAngle()

> **wrapAngle**(`angle`): `number`

Defined in: [trigonometry/trigonometry.ts:163](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/trigonometry/trigonometry.ts#L163)

Wraps the given angle to the range [0, 2π).

## Parameters

### angle

`number`

The angle in radians to wrap.

## Returns

`number`

The wrapped angle in the range [0, 2π).

## Example

```typescript
const wrapped = wrapAngle(3 * Math.PI); // returns Math.PI
```
