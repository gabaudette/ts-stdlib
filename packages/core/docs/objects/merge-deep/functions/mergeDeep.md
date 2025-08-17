[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [objects/merge-deep](../README.md) / mergeDeep

# Function: mergeDeep()

> **mergeDeep**\<`T`\>(`target`, `source`): `T`

Defined in: [objects/merge-deep.ts:23](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/objects/merge-deep.ts#L23)

Recursively merges the properties of a source object into a target object.
For each property, if both the target and source values are objects, they are merged deeply.
Otherwise, the source value overwrites the target value.

## Type Parameters

### T

`T` *extends* `object`

The type of the target object.

## Parameters

### target

`T`

The target object to merge properties into.

### source

`Partial`\<`T`\>

The source object whose properties will be merged into the target.

## Returns

`T`

The merged target object.

## Example

```ts
const target = { a: 1, b: { c: 2 } };
const source = { b: { d: 3 }, e: 4 };
const merged = mergeDeep(target, source);
// merged is { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

## Remarks

This function performs a deep merge, meaning that nested objects are merged recursively.
If you only want a shallow merge, consider using Object.assign or the spread operator.
