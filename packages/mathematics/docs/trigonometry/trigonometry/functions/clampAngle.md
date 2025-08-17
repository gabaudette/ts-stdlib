[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / clampAngle

# Function: clampAngle()

> **clampAngle**(`angle`): `number`

Defined in: [trigonometry/trigonometry.ts:337](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/trigonometry/trigonometry.ts#L337)

Clamps an angle in radians to the range [0, 2π).

This function normalizes any given angle (in radians) so that the result
is always within the interval from 0 (inclusive) up to but not including 2π.
Useful for ensuring angles wrap correctly in trigonometric calculations.

## Parameters

### angle

`number`

The angle in radians to be clamped.

## Returns

`number`

The normalized angle in the range [0, 2π).

## Example

```typescript
const clamped = clampAngle(Math.PI * 3); // returns Math.PI
```
