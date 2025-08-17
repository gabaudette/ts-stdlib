[**@ts-standard-library/core v1.0.3**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [objects/manipulation/object-manipulation](../README.md) / entries

# Function: entries()

> **entries**\<`T`\>(`obj`): \[keyof `T`, `T`\[keyof `T`\]\][]

Defined in: [objects/manipulation/object-manipulation.ts:63](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/objects/manipulation/object-manipulation.ts#L63)

Returns an array of the object's own enumerable string-keyed property [key, value] pairs.

This function is a typed wrapper around `Object.entries`, preserving the key and value types of the input object.

## Type Parameters

### T

`T` *extends* `object`

The type of the input object.

## Parameters

### obj

`T`

The object whose enumerable own property [key, value] pairs are to be returned.

## Returns

\[keyof `T`, `T`\[keyof `T`\]\][]

An array of [key, value] pairs for each enumerable property of the object.

## Example

```ts
const user = { id: 1, name: "Alice" };
const entries = getEntries(user);
console.log(entries); // [["id", 1], ["name", "Alice"]]
console.log(typeof entries[0][0]); // string
console.log(typeof entries[0][1]); // number
console.log(typeof entries[1][0]); // string
console.log(typeof entries[1][1]); // string
```
