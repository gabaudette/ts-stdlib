[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [sorting/selection-sort](../README.md) / selectionSort

# Function: selectionSort()

> **selectionSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/selection-sort.ts:13](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/algorithms/src/sorting/selection-sort.ts#L13)

Sorts an array using the selection sort algorithm.

Iterates through the array, repeatedly finding the minimum element
from the unsorted portion and swapping it with the first unsorted element.

## Type Parameters

### T

`T`

The type of elements in the array.

## Parameters

### array

`T`[]

The array to be sorted. The sorting is done in-place.

### compareFn

(`a`, `b`) => `number`

A comparison function that returns a negative number if the first argument is less than the second, zero if they're equal, and a positive number otherwise.

## Returns

`T`[]

The sorted array.

## See

[https://en.wikipedia.org/wiki/Selection\_sort](https://en.wikipedia.org/wiki/Selection_sort) for more information on selection sort.
