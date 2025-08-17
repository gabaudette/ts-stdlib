[**@ts-standard-library/string v1.0.4**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toConstantCase

# Function: toConstantCase()

> **toConstantCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:168](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/string/src/case-conversion/case-conversion.ts#L168)

Converts a given string to CONSTANT_CASE.

This function replaces all whitespace characters in the input string with underscores
and transforms all letters to uppercase.

## Parameters

### text

`string`

The input string to convert.

## Returns

`string`

The converted string in CONSTANT_CASE format.

## Example

```typescript
toConstantCase("hello world"); // "HELLO_WORLD"
toConstantCase("TypeScript is awesome"); // "TYPESCRIPT_IS_AWESOME"
```
