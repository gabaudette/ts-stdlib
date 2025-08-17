[**@ts-standard-library/algorithms v1.0.6**](../../../README.md)

***

[@ts-standard-library/algorithms](../../../modules.md) / [sorting/distribution-sort](../README.md) / distributionSort

# Function: distributionSort()

> **distributionSort**\<`T`\>(`arr`, `compareFn`, `keyFn`): `T`[]

Defined in: [sorting/distribution-sort.ts:18](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/algorithms/src/sorting/distribution-sort.ts#L18)

Sorts an array using a distribution sort algorithm, which divides the input into buckets
based on a value extracted from each item, sorts each bucket, and then concatenates the results.

## Type Parameters

### T

`T`

The type of elements in the array.

## Parameters

### arr

`T`[]

### compareFn

(`a`, `b`) => `number`

A comparison function used to sort elements within each bucket.

### keyFn

(`item`) => `number`

## Returns

`T`[]

A new array containing the sorted elements.

## See

[https://en.wikipedia.org/wiki/Distribution\_sort](https://en.wikipedia.org/wiki/Distribution_sort) for more information on distribution sort.

## Remarks

- The number of buckets is determined by the square root of the array's length.
- This algorithm is efficient for data that is uniformly distributed.
- The sorting within each bucket uses the provided `compareFn`.
