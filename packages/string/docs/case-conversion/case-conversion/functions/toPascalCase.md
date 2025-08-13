[**@ts-stdlib/string v0.1.0**](../../../README.md)

***

[@ts-stdlib/string](../../../README.md) / [case-conversion/case-conversion](../README.md) / toPascalCase

# Function: toPascalCase()

> **toPascalCase**(`str`): `string`

Defined in: [case-conversion/case-conversion.ts:91](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/string/src/case-conversion/case-conversion.ts#L91)

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
