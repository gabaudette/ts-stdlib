[**@ts-standard-library/algorithms v1.0.3**](../../../README.md)

***

[@ts-standard-library/algorithms](../../../modules.md) / [sorting/insertion-sort](../README.md) / insertionSort

# Function: insertionSort()

> **insertionSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/insertion-sort.ts:19](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/algorithms/src/sorting/insertion-sort.ts#L19)

Sorts an array using the insertion sort algorithm.

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
const arr = [3, 1, 2];
const sorted = insertionSort(arr, (a, b) => a - b);
// sorted: [1, 2, 3]
```

## See

[https://en.wikipedia.org/wiki/Insertion\_sort](https://en.wikipedia.org/wiki/Insertion_sort) for more information on insertion sort.
