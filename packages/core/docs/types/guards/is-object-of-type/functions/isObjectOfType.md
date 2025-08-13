[**@ts-standard-library/core v0.0.1**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-object-of-type](../README.md) / isObjectOfType

# Function: isObjectOfType()

> **isObjectOfType**\<`T`\>(`value`, `typeGuard`): `value is T`

Defined in: types/guards/is-object-of-type.ts:13

Determines whether a given value is a non-null object and satisfies a specified type guard.

## Type Parameters

### T

`T`

The type to check for.

## Parameters

### value

`unknown`

The value to be checked.

### typeGuard

(`val`) => `val is T`

A type guard function that asserts whether the value is of type T.

## Returns

`value is T`

`true` if the value is a non-null object and passes the type guard; otherwise, `false`.

## Example

```ts
isObjectOfType({ a: 1 }, (val): val is { a: number } => typeof val.a === "number"); // true
isObjectOfType({ a: "1" }, (val): val is { a: number } => typeof val.a === "number"); // false
```
