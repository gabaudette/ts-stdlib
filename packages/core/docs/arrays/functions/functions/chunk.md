[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`array`, `size`): `T`[][]

Defined in: [arrays/functions.ts:150](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/arrays/functions.ts#L150)

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
