[**@ts-standard-library/core v1.0.1**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [objects/manipulation/object-manipulation](../README.md) / keys

# Function: keys()

> **keys**\<`T`\>(`obj`): keyof `T`[]

Defined in: [objects/manipulation/object-manipulation.ts:18](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/core/src/objects/manipulation/object-manipulation.ts#L18)

Returns an array of the own enumerable property names (keys) of the given object.

## Type Parameters

### T

`T` *extends* `object`

The type of the input object.

## Parameters

### obj

`T`

The object whose own enumerable property names are to be returned.

## Returns

keyof `T`[]

An array of keys of the object, typed as `(keyof T)[]`.

## Example

```ts
const user = { id: 1, name: "Alice" };
const keys = getKeys(user);
console.log(keys); // ["id", "name"]
```

## Remarks

This function purports to provide a type-safe way to retrieve the keys of an object.
Because the default behavior of `Object.keys()` is to return an array of strings,
this function uses a type assertion to ensure the returned keys are correctly typed.
