[**@ts-stdlib/string v0.1.0**](../../../README.md)

***

[@ts-stdlib/string](../../../README.md) / [case-conversion/case-conversion](../README.md) / toSnakeCase

# Function: toSnakeCase()

> **toSnakeCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:53](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/string/src/case-conversion/case-conversion.ts#L53)

Converts a given string to snake_case.

This function replaces all whitespace characters in the input string with underscores
and converts the entire string to lowercase.

## Parameters

### text

`string`

The input string to convert.

## Returns

`string`

The snake_case version of the input string.

## Example

```typescript
toSnakeCase('Hello World'); // returns 'hello_world'
toSnakeCase('This is a test'); // returns 'this_is_a_test'
```
