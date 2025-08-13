[**@ts-standard-library/algorithms v1.0.3**](../../../README.md)

***

[@ts-standard-library/algorithms](../../../modules.md) / [sorting/bogo-sort](../README.md) / bogoSort

# Function: bogoSort()

> **bogoSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/bogo-sort.ts:16](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/algorithms/src/sorting/bogo-sort.ts#L16)

Sorts an array using the highly inefficient bogo sort algorithm, which repeatedly shuffles the array
until it is sorted according to the provided comparison function.

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

The array to be sorted.

### compareFn

(`a`, `b`) => `number`

A function that defines the sort order. It should return a negative value if the first argument is less than the second, zero if they're equal, and a positive value otherwise.

## Returns

`T`[]

The sorted array. Note: The sorting is performed in-place and the original array is mutated.

## Remarks

Bogo sort is an intentionally inefficient sorting algorithm and should not be used for practical purposes.
Its average time complexity is O((n+1)!), making it impractical for all but the smallest arrays.

Like for real, don't use this in production...
