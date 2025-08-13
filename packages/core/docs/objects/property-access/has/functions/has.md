[**@ts-standard-library/core v0.0.1**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [objects/property-access/has](../README.md) / has

# Function: has()

> **has**\<`T`, `K`\>(`obj`, `key`): `boolean`

Defined in: objects/property-access/has.ts:18

Determines whether the specified key exists as a property on the given object.

## Type Parameters

### T

`T` *extends* `object`

The type of the object to check.

### K

`K` *extends* `string` \| `number` \| `symbol`

The type of the key to check for, constrained to the keys of T.

## Parameters

### obj

`T`

The object to check for the presence of the property.

### key

`K`

The property key to check for on the object.

## Returns

`boolean`

`true` if the key exists in the object; otherwise, `false`.

## Example

```ts
const user = { id: 1, name: "Alice" };
const hasName = has(user, "name"); // true
const hasAge = has(user, "age");   // false
```

## Remarks

This function is a simple utility for checking the existence of properties on objects.
