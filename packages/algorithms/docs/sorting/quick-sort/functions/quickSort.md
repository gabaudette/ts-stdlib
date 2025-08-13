[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [sorting/quick-sort](../README.md) / quickSort

# Function: quickSort()

> **quickSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/quick-sort.ts:19](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/algorithms/src/sorting/quick-sort.ts#L19)

Sorts an array using the Quick Sort algorithm.

## Type Parameters

### T

`T`

The type of elements in the array.

## Parameters

### array

`T`[]

The array to be sorted. The sorting is performed in-place.

### compareFn

(`a`, `b`) => `number`

A comparison function that defines the sort order.
It should return a negative number if the first argument is less than the second,
zero if they're equal, and a positive number if the first is greater.

## Returns

`T`[]

The sorted array.

## Example

```typescript
const arr = [3, 1, 4, 1, 5, 9];
const sorted = quickSort(arr, (a, b) => a - b);
// sorted: [1, 1, 3, 4, 5, 9]
```

## See

[https://en.wikipedia.org/wiki/Quicksort](https://en.wikipedia.org/wiki/Quicksort) for more information on quick sort.
