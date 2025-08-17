[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / isAngleGreaterThanOrEqual

# Function: isAngleGreaterThanOrEqual()

> **isAngleGreaterThanOrEqual**(`angle1`, `angle2`): `boolean`

Defined in: [trigonometry/trigonometry.ts:315](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/trigonometry/trigonometry.ts#L315)

Determines whether the first angle is greater than or equal to the second angle,
after normalizing both angles to a standard range (typically [0, 2π) or [0, 360)).

## Parameters

### angle1

`number`

The first angle, in radians or degrees, to compare.

### angle2

`number`

The second angle, in radians or degrees, to compare.

## Returns

`boolean`

`true` if the normalized value of `angle1` is greater than or equal to the normalized value of `angle2`; otherwise, `false`.

## Example

```typescript
const isGreaterThanOrEqual = isAngleGreaterThanOrEqual(Math.PI / 2, Math.PI / 4); // returns true
```
