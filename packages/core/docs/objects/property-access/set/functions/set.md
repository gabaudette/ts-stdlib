[**@ts-standard-library/core v1.0.3**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [objects/property-access/set](../README.md) / set

# Function: set()

> **set**\<`T`, `K`\>(`obj`, `key`, `value`): `T`

Defined in: [objects/property-access/set.ts:20](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/objects/property-access/set.ts#L20)

Returns a new object with the specified property set to the given value.

This function creates a shallow copy of the original object and updates the value
of the specified key. The original object is not mutated.

## Type Parameters

### T

`T` *extends* `object`

The type of the object.

### K

`K` *extends* `string` \| `number` \| `symbol`

The key of the property to set, constrained to keys of T.

## Parameters

### obj

`T`

The source object.

### key

`K`

The property key to set.

### value

`T`\[`K`\]

The new value for the specified property.

## Returns

`T`

A new object with the updated property value.

## Example

```ts
const user = { id: 1, name: "Alice" };
const updatedUser = set(user, "name", "Bob");
console.log(updatedUser); // { id: 1, name: "Bob" }
```
