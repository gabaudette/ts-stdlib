[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / getCircleArcLength

# Function: getCircleArcLength()

> **getCircleArcLength**(`circle`, `angleInRadians`): `null` \| `number`

Defined in: [geometry/circle.ts:106](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/geometry/circle.ts#L106)

Calculates the length of an arc on a circle given the circle and the angle in radians.

## Parameters

### circle

[`ICircle`](../interfaces/ICircle.md)

The circle object implementing the `ICircle` interface.

### angleInRadians

`number`

The angle subtended by the arc at the center of the circle, in radians.

## Returns

`null` \| `number`

The length of the arc if the circle is valid; otherwise, `null`.

## Example

```
const circle = { radius: 5 };
const angle = Math.PI / 4; // 45 degrees in radians
console.log(getCircleArcLength(circle, angle)); // 3.9269908169872414
```
