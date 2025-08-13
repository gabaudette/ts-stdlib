[**@ts-standard-library/core v0.0.1**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [objects/pick](../README.md) / pick

# Function: pick()

> **pick**\<`T`, `K`\>(`obj`, `keys`): `Pick`\<`T`, `K`\>

Defined in: objects/pick.ts:17

Creates a new object composed of the specified keys from the given object.

## Type Parameters

### T

`T` *extends* `object`

The type of the source object.

### K

`K` *extends* `string` \| `number` \| `symbol`

The union of keys to pick from the source object.

## Parameters

### obj

`T`

The source object to pick properties from.

### keys

`K`[]

An array of keys to select from the source object.

## Returns

`Pick`\<`T`, `K`\>

A new object containing only the picked properties.

## Example

```typescript
const user = { id: 1, name: 'Alice', age: 30 };
const result = pick(user, ['id', 'name']);
// result: { id: 1, name: 'Alice' }
```
