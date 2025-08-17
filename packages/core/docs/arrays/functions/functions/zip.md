[**@ts-standard-library/core v1.0.3**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / zip

# Function: zip()

> **zip**\<`T`, `U`\>(`array1`, `array2`): \[`T`, `U`\][]

Defined in: [arrays/functions.ts:110](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/arrays/functions.ts#L110)

Combines two arrays into a single array of pairs.
Each pair contains elements from the same index of the input arrays.
The resulting array has the length of the shorter input array.

## Type Parameters

### T

`T`

The type of elements in the first array.

### U

`U`

The type of elements in the second array.

## Parameters

### array1

`T`[]

The first array to zip.

### array2

`U`[]

The second array to zip.

## Returns

\[`T`, `U`\][]

An array of pairs, where each pair contains one element from each input array.

## Example

```typescript
zip([1, 2, 3], ['a', 'b', 'c']); // [[1, 'a'], [2, 'b'], [3, 'c']]
zip([1, 2], ['a', 'b', 'c']);    // [[1, 'a'], [2, 'b']]
```
