[**@ts-standard-library/string v1.0.4**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toPascalCase

# Function: toPascalCase()

> **toPascalCase**(`str`): `string`

Defined in: [case-conversion/case-conversion.ts:91](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/string/src/case-conversion/case-conversion.ts#L91)

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
