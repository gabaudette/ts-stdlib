[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [trigonometry/trigonometry](../README.md) / shortestAngleDifference

# Function: shortestAngleDifference()

> **shortestAngleDifference**(`angle1`, `angle2`): `number`

Defined in: [trigonometry/trigonometry.ts:358](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/trigonometry/trigonometry.ts#L358)

Calculates the shortest signed angular difference between two angles.

The result is the minimal angle (in radians) you would need to rotate from `angle1` to reach `angle2`,
normalized to the range [-π, π).

## Parameters

### angle1

`number`

The starting angle in radians.

### angle2

`number`

The target angle in radians.

## Returns

`number`

The shortest signed angular difference in radians.

## Example

```typescript
const difference = shortestAngleDifference(Math.PI / 4, Math.PI / 2);
console.log(difference); // 0.39269908169872414
```
