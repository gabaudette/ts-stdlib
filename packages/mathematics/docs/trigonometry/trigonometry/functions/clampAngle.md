[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / clampAngle

# Function: clampAngle()

> **clampAngle**(`angle`): `number`

Defined in: [trigonometry/trigonometry.ts:337](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/trigonometry/trigonometry.ts#L337)

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
