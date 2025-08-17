[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [objects/omit](../README.md) / omit

# Function: omit()

> **omit**\<`T`, `K`\>(`obj`, `keys`): `Omit`\<`T`, `K`\>

Defined in: [objects/omit.ts:15](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/objects/omit.ts#L15)

Creates a shallow copy of the given object with the specified keys omitted.

## Type Parameters

### T

`T` *extends* `object`

The type of the source object.

### K

`K` *extends* `string` \| `number` \| `symbol`

The union of keys to omit from the source object.

## Parameters

### obj

`T`

The source object to omit properties from.

### keys

`K`[]

An array of keys to omit from the resulting object.

## Returns

`Omit`\<`T`, `K`\>

A new object with the specified keys omitted.

## Example

```ts
const original = { a: 1, b: 2, c: 3 };
const omitted = omit(original, ["b", "c"]);
// omitted is { a: 1 }, but a different instance
```
