[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [arrays/functions/functions](../README.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`array`, `size`): `T`[][]

Defined in: [arrays/functions/functions.ts:148](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/arrays/functions/functions.ts#L148)

Splits an array into chunks of a specified size.

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

The array to be chunked.

### size

`number`

The size of each chunk. Must be a positive integer.

## Returns

`T`[][]

A new array containing subarrays (chunks) of the specified size.
         The last chunk may be smaller if the array cannot be evenly divided.

## Example

```typescript
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```
