[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [sorting/merge-sort](../README.md) / inPlaceMergeSort

# Function: inPlaceMergeSort()

> **inPlaceMergeSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: sorting/merge-sort.ts:44

Sorts an array in place using the merge sort algorithm.

This function modifies the input array directly and returns the sorted array.
It uses a comparison function to determine the order of elements.

## Type Parameters

### T

`T`

The type of elements in the array.

## Parameters

### array

`T`[]

The array to be sorted.

### compareFn

(`a`, `b`) => `number`

A function that defines the sort order. It should return a negative number if the first argument is less than the second, zero if they're equal, and a positive number otherwise.

## Returns

`T`[]

The sorted array (same reference as the input array).

## See

[https://en.wikipedia.org/wiki/https://en.wikipedia.org/wiki/Merge\_sort#In-place\_merge\_sort](https://en.wikipedia.org/wiki/https://en.wikipedia.org/wiki/Merge_sort#In-place_merge_sort) for more information on merge sort.

## Example

```typescript
const arr = [5, 2, 9, 1];
inPlaceMergeSort(arr, (a, b) => a - b);
// arr is now [1, 2, 5, 9]
```
