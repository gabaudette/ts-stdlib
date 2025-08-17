[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / union

# Function: union()

> **union**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: [arrays/functions.ts:217](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/arrays/functions.ts#L217)

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
