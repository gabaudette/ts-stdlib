[**@ts-stdlib/data-structures v1.0.1**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../modules.md) / [arrays/functions/functions](../README.md) / intersection

# Function: intersection()

> **intersection**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: [arrays/functions/functions.ts:199](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/data-structures/src/arrays/functions/functions.ts#L199)

Returns a new array containing the elements that are present in both `array1` and `array2`.

## Type Parameters

### T

`T`

The type of elements in the input arrays.

## Parameters

### array1

`T`[]

The first array to compare.

### array2

`T`[]

The second array to compare.

## Returns

`T`[]

An array of elements found in both `array1` and `array2`. The order is preserved from `array1`.

## Example

```typescript
intersection([1, 2, 3], [2, 3, 4]); // returns [2, 3]
```
