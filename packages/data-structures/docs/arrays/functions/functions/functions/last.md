[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [arrays/functions/functions](../README.md) / last

# Function: last()

> **last**\<`T`\>(`array`, `n`): `T`[]

Defined in: [arrays/functions/functions.ts:164](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/data-structures/src/arrays/functions/functions.ts#L164)

Returns the last `n` elements of an array.

## Type Parameters

### T

`T`

The type of elements in the array.

## Parameters

### array

`T`[]

The array to query.

### n

`number` = `1`

The number of elements to return from the end of the array. Defaults to 1.

## Returns

`T`[]

An array containing the last `n` elements of the input array. Returns an empty array if `n` is less than or equal to 0.
