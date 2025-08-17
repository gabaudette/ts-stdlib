[**@ts-standard-library/algorithms v1.0.7**](../../../README.md)

***

[@ts-standard-library/algorithms](../../../modules.md) / [sorting/shell-sort](../README.md) / shellSort

# Function: shellSort()

> **shellSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/shell-sort.ts:16](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/algorithms/src/sorting/shell-sort.ts#L16)

Sorts an array using the Shell sort algorithm.

Shell sort is an in-place comparison sort that generalizes insertion sort
by allowing the exchange of items that are far apart. The gap sequence used
here is n/2, n/4, ..., 1.

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

A comparison function that returns a negative number if `a < b`,
  zero if `a === b`, and a positive number if `a > b`.

## Returns

`T`[]

The sorted array.

## See

[https://en.wikipedia.org/wiki/Shellsort](https://en.wikipedia.org/wiki/Shellsort) for more information on Shell sort.
