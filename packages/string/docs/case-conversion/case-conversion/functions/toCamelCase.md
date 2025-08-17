[**@ts-standard-library/string v1.0.6**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toCamelCase

# Function: toCamelCase()

> **toCamelCase**(`str`): `string`

Defined in: [case-conversion/case-conversion.ts:116](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/string/src/case-conversion/case-conversion.ts#L116)

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
