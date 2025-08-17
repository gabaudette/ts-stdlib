[**@ts-standard-library/core v1.0.2**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [compare/shallow-equal](../README.md) / shallowEqual

# Function: shallowEqual()

> **shallowEqual**\<`T`\>(`a`, `b`): `boolean`

Defined in: [compare/shallow-equal.ts:14](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/core/src/compare/shallow-equal.ts#L14)

Performs a shallow equality comparison between two values.

- For primitive values, returns `true` if they are strictly equal (`===`).
- For arrays, returns `true` if they have the same length and all corresponding elements are strictly equal.
- For plain objects, returns `true` if they have the same set of keys and all corresponding property values are strictly equal.
- Returns `false` for values of different types, or if any shallow property/element differs.

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

`true` if the values are shallowly equal, otherwise `false`.
