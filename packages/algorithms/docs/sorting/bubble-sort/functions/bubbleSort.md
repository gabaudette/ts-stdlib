[**@ts-stdlib/algorithms v0.1.0**](../../../README.md)

***

[@ts-stdlib/algorithms](../../../README.md) / [sorting/bubble-sort](../README.md) / bubbleSort

# Function: bubbleSort()

> **bubbleSort**(`arr`): `number`[]

Defined in: sorting/bubble-sort.ts:20

Sorts an array using the bubble sort algorithm.

The function sorts the array in-place according to the provided comparison function.
Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
The process is repeated until the array is sorted.

## Parameters

### arr

`number`[]

## Returns

`number`[]

The sorted array.

## Example

```typescript
const arr = [5, 3, 8, 4, 2];
bubbleSort(arr, (a, b) => a - b); // [2, 3, 4, 5, 8]
```

## See

[https://en.wikipedia.org/wiki/Bubble\_sort](https://en.wikipedia.org/wiki/Bubble_sort) for more information on bubble sort.
