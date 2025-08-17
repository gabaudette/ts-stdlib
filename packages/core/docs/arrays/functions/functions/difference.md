[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / difference

# Function: difference()

> **difference**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: [arrays/functions.ts:234](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/arrays/functions.ts#L234)

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
