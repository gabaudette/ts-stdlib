[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [sorting/tournament-sort](../README.md) / tournamentSort

# Function: tournamentSort()

> **tournamentSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/tournament-sort.ts:13](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/algorithms/src/sorting/tournament-sort.ts#L13)

Sorts an array using the tournament sort algorithm.

Tournament sort is a comparison-based sorting algorithm that recursively divides the array,
sorts the subarrays, and merges them using the provided comparison function.

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

A function that defines the sort order. It should return a negative value if the first argument is less than the second, zero if they're equal, and a positive value otherwise.

## Returns

`T`[]

A new array containing the sorted elements.

## See

[https://en.wikipedia.org/wiki/Tournament\_sort](https://en.wikipedia.org/wiki/Tournament_sort) for more information on tournament sort.
