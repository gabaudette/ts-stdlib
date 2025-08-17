[**@ts-standard-library/core v1.0.3**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-object-of-type](../README.md) / isObjectOfTypeWithKeys

# Function: isObjectOfTypeWithKeys()

> **isObjectOfTypeWithKeys**\<`T`\>(`value`, `typeGuard`, `keys`): `value is T`

Defined in: [types/guards/is-object-of-type.ts:29](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/types/guards/is-object-of-type.ts#L29)

Determines if a given value is an object of a specific type and contains all specified keys.

## Type Parameters

### T

`T` *extends* `object`

The expected object type.

## Parameters

### value

`unknown`

The value to be checked.

### typeGuard

(`val`) => `val is T`

A type guard function that checks if the value is of type T.

### keys

keyof `T`[]

An array of keys that must be present in the object.

## Returns

`value is T`

`true` if the value is an object of type T and contains all specified keys; otherwise, `false`.
