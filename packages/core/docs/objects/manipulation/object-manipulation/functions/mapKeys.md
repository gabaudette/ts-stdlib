[**@ts-standard-library/core v1.0.0**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [objects/manipulation/object-manipulation](../README.md) / mapKeys

# Function: mapKeys()

> **mapKeys**\<`T`, `K`\>(`obj`, `fn`): `{ [P in string]: T[keyof T] }`

Defined in: [objects/manipulation/object-manipulation.ts:111](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/objects/manipulation/object-manipulation.ts#L111)

Creates a new object with the keys mapped by the provided function.

## Type Parameters

### T

`T` *extends* `object`

The type of the input object.

### K

`K` *extends* `string`

The type of the new keys, must be a string.

## Parameters

### obj

`T`

The source object whose keys will be mapped.

### fn

(`key`) => `K`

A function that receives each key of the source object and returns a new key.

## Returns

`{ [P in string]: T[keyof T] }`

A new object with keys transformed by `fn` and values preserved from the original object.

## Example

```typescript
const obj = { a: 1, b: 2 };
const result = mapKeys(obj, key => key.toUpperCase());
// result: { A: 1, B: 2 }
```
