[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/circle](../README.md) / getCircleSectorArea

# Function: getCircleSectorArea()

> **getCircleSectorArea**(`circle`, `angleInRadians`): `null` \| `number`

Defined in: [geometry/circle.ts:131](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/geometry/circle.ts#L131)

Calculates the area of a sector of a circle given the circle and the central angle in radians.

## Parameters

### circle

[`ICircle`](../interfaces/ICircle.md)

The circle object implementing the `ICircle` interface.

### angleInRadians

`number`

The central angle of the sector in radians.

## Returns

`null` \| `number`

The area of the sector, or `null` if the circle is invalid.

## Example

```
const circle = { radius: 5 };
const angle = Math.PI / 4; // 45 degrees in radians
console.log(getCircleSectorArea(circle, angle)); // 19.634954084936208
```
