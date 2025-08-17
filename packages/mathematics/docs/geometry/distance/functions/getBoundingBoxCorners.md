[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [geometry/distance](../README.md) / getBoundingBoxCorners

# Function: getBoundingBoxCorners()

> **getBoundingBoxCorners**(`boundingBox`): `object`

Defined in: [geometry/distance.ts:296](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/geometry/distance.ts#L296)

Returns the four corners of a bounding box given its minimum and maximum X and Y coordinates.

## Parameters

### boundingBox

An object containing the minimum and maximum X and Y coordinates of the bounding box.

#### minX

`number`

#### minY

`number`

#### maxX

`number`

#### maxY

`number`

## Returns

`object`

An object with the coordinates of the top-left, top-right, bottom-left, and bottom-right corners.

### topLeft

> **topLeft**: `object`

#### topLeft.x

> **x**: `number`

#### topLeft.y

> **y**: `number`

### topRight

> **topRight**: `object`

#### topRight.x

> **x**: `number`

#### topRight.y

> **y**: `number`

### bottomLeft

> **bottomLeft**: `object`

#### bottomLeft.x

> **x**: `number`

#### bottomLeft.y

> **y**: `number`

### bottomRight

> **bottomRight**: `object`

#### bottomRight.x

> **x**: `number`

#### bottomRight.y

> **y**: `number`

## Example

```typescript
const corners = getBoundingBoxCorners({ minX: 0, minY: 0, maxX: 10, maxY: 5 });
// corners.topLeft => { x: 0, y: 0 }
// corners.topRight => { x: 10, y: 0 }
// corners.bottomLeft => { x: 0, y: 5 }
// corners.bottomRight => { x: 10, y: 5 }
```
