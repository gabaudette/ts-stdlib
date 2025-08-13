[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [arrays/functions/functions](../README.md) / difference

# Function: difference()

> **difference**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: [arrays/functions/functions.ts:229](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/arrays/functions/functions.ts#L229)

Returns a new array containing the elements from `array1` that are not present in `array2`.

## Type Parameters

### T

`T`

The type of elements in the input arrays.

## Parameters

### array1

`T`[]

The array to filter.

### array2

`T`[]

The array containing elements to exclude from `array1`.

## Returns

`T`[]

A new array with elements from `array1` that are not found in `array2`.

## Example

```typescript
difference([1, 2, 3], [2, 4]); // returns [1, 3]
```
