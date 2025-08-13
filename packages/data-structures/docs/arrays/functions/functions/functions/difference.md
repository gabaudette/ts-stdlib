[**@ts-stdlib/data-structures v1.0.1**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../modules.md) / [arrays/functions/functions](../README.md) / difference

# Function: difference()

> **difference**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: [arrays/functions/functions.ts:229](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/arrays/functions/functions.ts#L229)

Returns a new array containing the elements from `array1` that are not present in `array2`.

## Type Parameters

### T

`T`

The type of elements in the input arrays.

## Parameters

### array1

`T`[]

The array to filter.

### array2

`T`[]

The array containing elements to exclude from `array1`.

## Returns

`T`[]

A new array with elements from `array1` that are not found in `array2`.

## Example

```typescript
difference([1, 2, 3], [2, 4]); // returns [1, 3]
```
