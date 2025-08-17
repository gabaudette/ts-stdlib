[**@ts-standard-library/core v1.0.3**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [objects/property-access/get](../README.md) / get

# Function: get()

> **get**\<`T`, `K`\>(`obj`, `key`): `undefined` \| `T`\[`K`\]

Defined in: [objects/property-access/get.ts:18](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/objects/property-access/get.ts#L18)

Retrieves the value of a specified property from an object.

## Type Parameters

### T

`T`

The type of the object.

### K

`K` *extends* `string` \| `number` \| `symbol`

The key of the property to access, constrained to the keys of `T`.

## Parameters

### obj

`T`

The object from which to retrieve the property value.

### key

`K`

The key of the property to retrieve.

## Returns

`undefined` \| `T`\[`K`\]

The value of the specified property, or `undefined` if the property does not exist.

## Example

```ts
const user = { id: 1, name: "Alice" };
const userName = get(user, "name"); // "Alice"
const userAge = get(user, "age");   // undefined
```

## Remarks

This function is a simple utility for safely accessing properties on objects.
