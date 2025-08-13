[**@ts-stdlib/algorithms v0.1.0**](../../../../README.md)

***

[@ts-stdlib/algorithms](../../../../README.md) / [arrays/functions/functions](../README.md) / distinctBy

# Function: distinctBy()

> **distinctBy**\<`T`, `K`\>(`array`, `key`): `T`[]

Defined in: arrays/functions/functions.ts:291

Returns a new array containing only the first occurrence of each element,
as determined by the value returned from the provided key selector function.

## Type Parameters

### T

`T`

The type of elements in the input array.

### K

`K`

The type of the key used to determine uniqueness.

## Parameters

### array

`T`[]

The array to filter for distinct elements.

### key

(`item`) => `K`

A function that takes an element and returns a key used for uniqueness comparison.

## Returns

`T`[]

A new array with only the first occurrence of each unique key.

## Example

```typescript
const data = [{ id: 1 }, { id: 2 }, { id: 1 }];
const unique = distinctBy(data, item => item.id);
// unique = [{ id: 1 }, { id: 2 }]
```
