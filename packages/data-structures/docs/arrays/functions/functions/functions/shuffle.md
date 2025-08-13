[**@ts-stdlib/data-structures v0.1.0**](../../../../README.md)

***

[@ts-stdlib/data-structures](../../../../README.md) / [arrays/functions/functions](../README.md) / shuffle

# Function: shuffle()

> **shuffle**\<`T`\>(`array`): `T`[]

Defined in: [arrays/functions/functions.ts:266](https://github.com/gabaudette/ts-stdlib/blob/5164f234b9a04fc1f1f671b028e4805f98b56ab3/packages/data-structures/src/arrays/functions/functions.ts#L266)

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
