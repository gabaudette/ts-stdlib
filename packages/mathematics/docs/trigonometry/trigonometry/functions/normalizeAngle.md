[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / normalizeAngle

# Function: normalizeAngle()

> **normalizeAngle**(`angle`): `number`

Defined in: [trigonometry/trigonometry.ts:148](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/trigonometry/trigonometry.ts#L148)

Normalizes an angle in radians to the range [0, 2π).

## Parameters

### angle

`number`

The angle in radians to normalize.

## Returns

`number`

The normalized angle in the range [0, 2π).

## Example

```typescript
const normalized = normalizeAngle(Math.PI); // returns Math.PI
```
