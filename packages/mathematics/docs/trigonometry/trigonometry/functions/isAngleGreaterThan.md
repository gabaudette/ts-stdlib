[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / isAngleGreaterThan

# Function: isAngleGreaterThan()

> **isAngleGreaterThan**(`angle1`, `angle2`): `boolean`

Defined in: [trigonometry/trigonometry.ts:256](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/trigonometry/trigonometry.ts#L256)

Determines whether the first angle is greater than the second angle after normalization.

Both angles are normalized (typically to the range [0, 360) or [0, 2π), depending on the implementation of `normalizeAngle`),
and then compared.

## Parameters

### angle1

`number`

The first angle to compare, in degrees or radians.

### angle2

`number`

The second angle to compare, in degrees or radians.

## Returns

`boolean`

`true` if the normalized `angle1` is greater than the normalized `angle2`, otherwise `false`.

## Example

```typescript
const isGreaterThan = isAngleGreaterThan(Math.PI / 2, Math.PI / 4); // returns true
```
