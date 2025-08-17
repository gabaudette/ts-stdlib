[**@ts-standard-library/algorithms v1.0.5**](../../../README.md)

***

[@ts-standard-library/algorithms](../../../modules.md) / [sorting/counting-sort](../README.md) / countingSort

# Function: countingSort()

> **countingSort**(`array`, `max`): `number`[]

Defined in: [sorting/counting-sort.ts:20](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/algorithms/src/sorting/counting-sort.ts#L20)

Sorts an array of non-negative integers using the counting sort algorithm.

## Parameters

### array

`number`[]

The array of non-negative integers to sort.

### max

`number`

The maximum value in the array.

## Returns

`number`[]

A new array containing the sorted elements.

## Remarks

Counting sort is efficient for sorting integers when the range of input values (max) is not significantly larger than the number of elements.
This implementation assumes all numbers in the input array are between 0 and `max`, inclusive.

## Example

```typescript
const arr = [4, 2, 2, 8, 3, 3, 1];
const sorted = countingSort(arr, 8);
// sorted: [1, 2, 2, 3, 3, 4, 8]
```

## See

[https://en.wikipedia.org/wiki/Counting\_sort](https://en.wikipedia.org/wiki/Counting_sort) for more information on counting sort.
