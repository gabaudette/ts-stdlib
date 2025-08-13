[**@ts-standard-library/string v1.0.3**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toCamelCase

# Function: toCamelCase()

> **toCamelCase**(`str`): `string`

Defined in: [case-conversion/case-conversion.ts:116](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/string/src/case-conversion/case-conversion.ts#L116)

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
