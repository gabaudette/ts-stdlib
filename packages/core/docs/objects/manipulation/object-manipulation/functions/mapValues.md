[**@ts-standard-library/core v1.0.1**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [objects/manipulation/object-manipulation](../README.md) / mapValues

# Function: mapValues()

> **mapValues**\<`T`, `U`\>(`obj`, `fn`): \{ \[K in string \| number \| symbol\]: U \}

Defined in: [objects/manipulation/object-manipulation.ts:83](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/core/src/objects/manipulation/object-manipulation.ts#L83)

Creates a new object with the same keys as the input object, but with the values transformed by the provided mapping function.

## Type Parameters

### T

`T` *extends* `object`

The type of the input object.

### U

`U`

The type of the values in the resulting object.

## Parameters

### obj

`T`

The source object whose values will be mapped.

### fn

(`value`, `key`) => `U`

A function that is called for each value and key in the object. It returns the new value for that key.

## Returns

\{ \[K in string \| number \| symbol\]: U \}

A new object with the same keys as `obj`, but with values returned by `fn`.

## Example

```typescript
const obj = { a: 1, b: 2, c: 3 };
const result = mapValues(obj, (value) => value * 2);
// result: { a: 2, b: 4, c: 6 }
```
