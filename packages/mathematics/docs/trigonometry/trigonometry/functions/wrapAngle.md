[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / wrapAngle

# Function: wrapAngle()

> **wrapAngle**(`angle`): `number`

Defined in: [trigonometry/trigonometry.ts:163](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/trigonometry/trigonometry.ts#L163)

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
