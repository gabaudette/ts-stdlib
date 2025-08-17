[**@ts-standard-library/string v1.0.6**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toConstantCase

# Function: toConstantCase()

> **toConstantCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:168](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/string/src/case-conversion/case-conversion.ts#L168)

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
