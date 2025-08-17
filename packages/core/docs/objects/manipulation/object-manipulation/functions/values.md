[**@ts-standard-library/core v1.0.0**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [objects/manipulation/object-manipulation](../README.md) / values

# Function: values()

> **values**\<`T`\>(`obj`): `T`\[keyof `T`\][]

Defined in: [objects/manipulation/object-manipulation.ts:41](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/objects/manipulation/object-manipulation.ts#L41)

Returns an array of the enumerable property values of the given object.

## Type Parameters

### T

`T` *extends* `object`

The type of the input object.

## Parameters

### obj

`T`

The object whose enumerable property values are to be returned.

## Returns

`T`\[keyof `T`\][]

An array containing the values of the object's enumerable properties.

## Example

```ts
const user = { id: 1, name: "Alice" };
const values = getValues(user);
console.log(values); // [1, "Alice"]
console.log(typeof values[0]); // number
console.log(typeof values[1]); // string
```

## Remarks

This function purports to provide a type-safe way to retrieve the values of an object.
Because the default behavior of `Object.values()` is to return an array of values,
this function uses a type assertion to ensure the returned values are correctly typed.
