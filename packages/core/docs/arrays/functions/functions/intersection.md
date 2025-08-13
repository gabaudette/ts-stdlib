[**@ts-standard-library/core v0.0.1**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / intersection

# Function: intersection()

> **intersection**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: arrays/functions.ts:204

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
