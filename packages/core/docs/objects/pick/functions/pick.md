[**@ts-standard-library/core v1.0.2**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [objects/pick](../README.md) / pick

# Function: pick()

> **pick**\<`T`, `K`\>(`obj`, `keys`): `Pick`\<`T`, `K`\>

Defined in: [objects/pick.ts:17](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/core/src/objects/pick.ts#L17)

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
