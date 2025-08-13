[**@ts-standard-library/core v0.0.1**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / last

# Function: last()

> **last**\<`T`\>(`array`, `n`): `T`[]

Defined in: arrays/functions.ts:167

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
