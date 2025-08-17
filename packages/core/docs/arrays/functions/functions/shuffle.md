[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [arrays/functions](../README.md) / shuffle

# Function: shuffle()

> **shuffle**\<`T`\>(`array`): `T`[]

Defined in: [arrays/functions.ts:271](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/arrays/functions.ts#L271)

Randomly shuffles the elements of an array in place using the Fisher-Yates algorithm.

## Type Parameters

### T

`T`

The type of elements in the array.

## Parameters

### array

`T`[]

The array to shuffle. The original array is modified.

## Returns

`T`[]

The shuffled array.

## Example

```typescript
const arr = [1, 2, 3, 4];
shuffle(arr); // arr is now shuffled, e.g., [3, 1, 4, 2]
```
