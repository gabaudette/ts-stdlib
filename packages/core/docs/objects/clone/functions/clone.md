[**@ts-standard-library/core v0.0.1**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [objects/clone](../README.md) / clone

# Function: clone()

> **clone**\<`T`\>(`obj`): `T`

Defined in: objects/clone.ts:21

Creates a deep clone of the provided object or array.

Recursively copies all properties and nested objects/arrays,
ensuring that the returned value is a new instance with no shared references
to the original object or its nested structures.

## Type Parameters

### T

`T`

The type of the object to clone.

## Parameters

### obj

`T`

The object or array to clone.

## Returns

`T`

A deep clone of the input object or array.

## Example

```ts
const original = { a: 1, b: { c: 2 } };
const copy = clone(original);
// copy is { a: 1, b: { c: 2 } }, but a different instance
```

## Remarks

This function performs a deep clone, meaning that nested objects are copied recursively.
If you only want a shallow clone, consider using Object.assign or the spread operator.
