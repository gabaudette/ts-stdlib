[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [arrays/functions/functions](../README.md) / symmetricDifference

# Function: symmetricDifference()

> **symmetricDifference**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: [arrays/functions/functions.ts:247](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/arrays/functions/functions.ts#L247)

Returns the symmetric difference between two arrays.
The symmetric difference consists of elements that are present in either of the arrays, but not in both.

## Type Parameters

### T

`T`

The type of elements in the arrays.

## Parameters

### array1

`T`[]

The first array to compare.

### array2

`T`[]

The second array to compare.

## Returns

`T`[]

A new array containing the elements that are unique to each array.

## Example

```typescript
symmetricDifference([1, 2, 3], [3, 4, 5]); // [1, 2, 4, 5]
```
