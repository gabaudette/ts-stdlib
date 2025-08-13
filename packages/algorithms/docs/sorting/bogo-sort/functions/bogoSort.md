[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [sorting/bogo-sort](../README.md) / bogoSort

# Function: bogoSort()

> **bogoSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/bogo-sort.ts:16](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/algorithms/src/sorting/bogo-sort.ts#L16)

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
