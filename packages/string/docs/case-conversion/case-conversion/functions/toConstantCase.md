[**@ts-stdlib/string v1.0.1**](../../../README.md)

***

[@ts-stdlib/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toConstantCase

# Function: toConstantCase()

> **toConstantCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:174](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/string/src/case-conversion/case-conversion.ts#L174)

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
