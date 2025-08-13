[**@ts-standard-library/string v1.0.3**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toPascalCase

# Function: toPascalCase()

> **toPascalCase**(`str`): `string`

Defined in: [case-conversion/case-conversion.ts:91](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/string/src/case-conversion/case-conversion.ts#L91)

Converts a given string to PascalCase.

Each word in the input string is capitalized and concatenated without spaces.
For example, "hello world" becomes "HelloWorld".

## Parameters

### str

`string`

## Returns

`string`

The PascalCase version of the input string.

## Example

```typescript
toPascalCase("hello world"); // "HelloWorld"
toPascalCase("typeScript is awesome"); // "TypeScriptIsAwesome"
```
