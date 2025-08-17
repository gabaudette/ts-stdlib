[**@ts-standard-library/core v1.0.3**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [compare/deep-equal](../README.md) / deepEqual

# Function: deepEqual()

> **deepEqual**\<`T`\>(`a`, `b`): `boolean`

Defined in: [compare/deep-equal.ts:19](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/compare/deep-equal.ts#L19)

Performs a deep equality check between two values of the same type.

This function recursively compares arrays, objects, and primitive values.
It also handles special cases such as `Date` objects.

## Type Parameters

### T

`T`

The type of the values to compare.

## Parameters

### a

`T`

The first value to compare.

### b

`T`

The second value to compare.

## Returns

`boolean`

`true` if the values are deeply equal, otherwise `false`.

## Example

```typescript
deepEqual({ x: 1, y: [2, 3] }, { x: 1, y: [2, 3] }); // true
deepEqual([1, 2], [1, 2, 3]); // false
deepEqual(new Date(0), new Date(0)); // true
```
