[**@ts-stdlib/data-structures v1.0.1**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../modules.md) / [arrays/functions/functions](../README.md) / zip

# Function: zip()

> **zip**\<`T`, `U`\>(`array1`, `array2`): \[`T`, `U`\][]

Defined in: [arrays/functions/functions.ts:109](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/arrays/functions/functions.ts#L109)

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
