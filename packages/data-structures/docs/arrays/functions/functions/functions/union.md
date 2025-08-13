[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [arrays/functions/functions](../README.md) / union

# Function: union()

> **union**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: [arrays/functions/functions.ts:212](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/data-structures/src/arrays/functions/functions.ts#L212)

Returns a new array containing the unique elements from both input arrays.
The order of elements is preserved based on their first occurrence.

## Type Parameters

### T

`T`

The type of elements in the input arrays.

## Parameters

### array1

`T`[]

The first array to include in the union.

### array2

`T`[]

The second array to include in the union.

## Returns

`T`[]

A new array containing the union of `array1` and `array2`, with duplicates removed.
