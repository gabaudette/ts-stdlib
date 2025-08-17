[**@ts-standard-library/string v1.0.4**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toSnakeCase

# Function: toSnakeCase()

> **toSnakeCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:53](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/string/src/case-conversion/case-conversion.ts#L53)

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
