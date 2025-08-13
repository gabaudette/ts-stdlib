[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [arrays/functions/functions](../README.md) / partition

# Function: partition()

> **partition**\<`T`\>(`array`, `predicate`): \[`T`[], `T`[]\]

Defined in: [arrays/functions/functions.ts:65](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/arrays/functions/functions.ts#L65)

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
