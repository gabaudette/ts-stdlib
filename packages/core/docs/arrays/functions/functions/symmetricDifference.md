[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / symmetricDifference

# Function: symmetricDifference()

> **symmetricDifference**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: [arrays/functions.ts:252](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/arrays/functions.ts#L252)

Returns the symmetric difference between two arrays.
The symmetric difference consists of elements that are present in either of the arrays, but not in both.

## Type Parameters

### T

`T`

The type of elements in the arrays.

## Parameters

### array1

`T`[]

The first array to compare.

### array2

`T`[]

The second array to compare.

## Returns

`T`[]

A new array containing the elements that are unique to each array.

## Example

```typescript
symmetricDifference([1, 2, 3], [3, 4, 5]); // [1, 2, 4, 5]
```
