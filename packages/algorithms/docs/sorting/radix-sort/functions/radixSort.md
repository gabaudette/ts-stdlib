[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [sorting/radix-sort](../README.md) / radixSort

# Function: radixSort()

> **radixSort**(`array`, `maxDigitLength`): `number`[]

Defined in: [sorting/radix-sort.ts:20](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/algorithms/src/sorting/radix-sort.ts#L20)

Sorts an array of numbers using the radix sort algorithm.

Radix sort processes each digit of the numbers, starting from the least significant digit
to the most significant digit, and sorts the array by distributing numbers into buckets
based on the current digit.

## Parameters

### array

`number`[]

The array of numbers to be sorted.

### maxDigitLength

`number`

The maximum number of digits in the largest number in the array.

## Returns

`number`[]

A new array containing the sorted numbers.

## Example

```typescript
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sorted = radixSort(arr, 3);
// sorted: [2, 24, 45, 66, 75, 90, 170, 802]
```

## See

[https://en.wikipedia.org/wiki/Radix\_sort](https://en.wikipedia.org/wiki/Radix_sort) for more information on radix sort.
