[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / wrapAngle

# Function: wrapAngle()

> **wrapAngle**(`angle`): `number`

Defined in: [trigonometry/trigonometry.ts:163](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/trigonometry/trigonometry.ts#L163)

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
