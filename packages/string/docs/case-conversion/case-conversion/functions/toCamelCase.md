[**@ts-stdlib/string v1.0.1**](../../../README.md)

***

[@ts-stdlib/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toCamelCase

# Function: toCamelCase()

> **toCamelCase**(`str`): `string`

Defined in: [case-conversion/case-conversion.ts:116](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/string/src/case-conversion/case-conversion.ts#L116)

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
