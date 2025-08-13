[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [sorting/merge-sort](../README.md) / mergeSort

# Function: mergeSort()

> **mergeSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/merge-sort.ts:12](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/algorithms/src/sorting/merge-sort.ts#L12)

Sorts an array using the merge sort algorithm.

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

A comparison function that defines the sort order.
It should return a negative number if `a < b`, zero if `a === b`, and a positive number if `a > b`.

## Returns

`T`[]

A new sorted array containing the elements of the input array.

## See

 - [Merge Sort Visualization](https://www.geeksforgeeks.org/merge-sort/)
 - [https://en.wikipedia.org/wiki/Merge\_sort](https://en.wikipedia.org/wiki/Merge_sort) for more information on merge sort.
