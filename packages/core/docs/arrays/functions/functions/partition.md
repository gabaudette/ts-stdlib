[**@ts-standard-library/core v0.0.1**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / partition

# Function: partition()

> **partition**\<`T`\>(`array`, `predicate`): \[`T`[], `T`[]\]

Defined in: arrays/functions.ts:66

Splits an array into two arrays based on a predicate function.

The first array contains all elements for which the predicate returns `true`,
and the second array contains all elements for which the predicate returns `false`.

## Type Parameters

### T

`T`

The type of elements in the input array.

## Parameters

### array

`T`[]

The array to partition.

### predicate

(`item`) => `boolean`

A function that tests each element for a condition.

## Returns

\[`T`[], `T`[]\]

A tuple containing two arrays: the first with elements passing the predicate, the second with elements failing it.

## Example

```typescript
const numbers = [1, 2, 3, 4, 5];
const [evens, odds] = partition(numbers, n => n % 2 === 0);
// evens: [2, 4], odds: [1, 3, 5]
```
