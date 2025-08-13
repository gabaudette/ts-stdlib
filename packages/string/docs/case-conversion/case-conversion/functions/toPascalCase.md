[**@ts-stdlib/string v0.1.0**](../../../README.md)

***

[@ts-stdlib/string](../../../README.md) / [case-conversion/case-conversion](../README.md) / toPascalCase

# Function: toPascalCase()

> **toPascalCase**(`text`): `string`

Defined in: case-conversion/case-conversion.ts:91

Converts a given string to PascalCase.

Each word in the input string is capitalized and concatenated without spaces.
For example, "hello world" becomes "HelloWorld".

## Parameters

### text

`string`

The input string to convert.

## Returns

`string`

The PascalCase version of the input string.

## Example

```typescript
toPascalCase("hello world"); // "HelloWorld"
toPascalCase("typeScript is awesome"); // "TypeScriptIsAwesome"
```
