[**@ts-stdlib/data-structures v1.0.1**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../modules.md) / [arrays/functions/functions](../README.md) / first

# Function: first()

> **first**\<`T`\>(`array`, `n`): `T`[]

Defined in: [arrays/functions/functions.ts:179](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/arrays/functions/functions.ts#L179)

Returns the first `n` elements of an array.

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

The number of elements to return from the start of the array. Defaults to 1.

## Returns

`T`[]

An array containing the first `n` elements of the input array. Returns an empty array if `n` is less than or equal to 0.
