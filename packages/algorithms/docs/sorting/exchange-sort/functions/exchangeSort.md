[**@ts-stdlib/algorithms v1.0.1**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../modules.md) / [sorting/exchange-sort](../README.md) / exchangeSort

# Function: exchangeSort()

> **exchangeSort**\<`T`\>(`array`, `compareFn`): `T`[]

Defined in: [sorting/exchange-sort.ts:19](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/algorithms/src/sorting/exchange-sort.ts#L19)

Sorts an array in-place using the exchange sort algorithm.
Exchange sort compares each pair of elements and swaps them if they are out of order,
resulting in a sorted array after all passes.

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

A comparison function that returns a positive number if the first argument is greater,
                   a negative number if the second is greater, and zero if they are equal.

## Returns

`T`[]

The sorted array.

## Example

```typescript
const arr = [3, 1, 2];
exchangeSort(arr, (a, b) => a - b); // [1, 2, 3]
```

## See

[https://en.wikipedia.org/wiki/Sorting\_algorithm#Exchange\_sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Exchange_sort) for more information on exchange sort.
