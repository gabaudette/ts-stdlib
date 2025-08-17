[**@ts-standard-library/core v1.0.0**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-defined](../README.md) / filterDefined

# Function: filterDefined()

> **filterDefined**\<`T`\>(`array`): `T`[]

Defined in: [types/guards/is-defined.ts:34](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/types/guards/is-defined.ts#L34)

Filters out `undefined` and `null` values from an array.

## Type Parameters

### T

`T`

The type of elements in the input array.

## Parameters

### array

(`undefined` \| `null` \| `T`)[]

The array to filter, which may contain `T`, `undefined`, or `null` values.

## Returns

`T`[]

A new array containing only the defined (non-`undefined`, non-`null`) values of type `T`.

## Example

```typescript
const values: (string | undefined | null)[] = ['a', undefined, 'b', null, 'c'];
const definedValues = filterDefined(values);
// definedValues is of type string[]
```
