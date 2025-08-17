[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / first

# Function: first()

> **first**\<`T`\>(`array`, `n`): `T`[]

Defined in: [arrays/functions.ts:183](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/arrays/functions.ts#L183)

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
