[**@ts-stdlib/string v0.1.0**](../../../README.md)

***

[@ts-stdlib/string](../../../README.md) / [case-conversion/case-conversion](../README.md) / toCamelCase

# Function: toCamelCase()

> **toCamelCase**(`str`): `string`

Defined in: [case-conversion/case-conversion.ts:116](https://github.com/gabaudette/ts-standard-library/blob/ff5d83fe4b66247fa084c3cd3ca7e6ef97c8bcfa/packages/string/src/case-conversion/case-conversion.ts#L116)

Converts a given string to camelCase format.

Splits the input string by spaces, lowercases the first word,
and capitalizes the first letter of each subsequent word, then joins them together.

## Parameters

### str

`string`

## Returns

`string`

The camelCase formatted string.

## Example

```typescript
toCamelCase("hello world"); // "helloWorld"
toCamelCase("TypeScript is awesome"); // "typeScriptIsAwesome"
```
