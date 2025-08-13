[**@ts-stdlib/algorithms v1.0.1**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../modules.md) / [sorting/comb-sort](../README.md) / combSort

# Function: combSort()

> **combSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/comb-sort.ts:22](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/algorithms/src/sorting/comb-sort.ts#L22)

Sorts an array using the comb sort algorithm.

Comb sort improves on bubble sort by using a gap sequence to eliminate turtles, or small values near the end of the list,
which slow down bubble sort. The gap starts as the length of the array and shrinks by a shrink factor (typically 1.3)
until it reaches 1. The algorithm continues swapping elements until no swaps are needed.

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

A comparison function that returns a negative number if the first argument is less than the second,
                   zero if they're equal, and a positive number if the first is greater than the second.

## Returns

`T`[]

The sorted array.

## Example

```typescript
const arr = [5, 3, 8, 4, 2];
combSort(arr, (a, b) => a - b);
// arr is now [2, 3, 4, 5, 8]
```

## See

[https://en.wikipedia.org/wiki/Comb\_sort](https://en.wikipedia.org/wiki/Comb_sort) for more information on comb sort.
