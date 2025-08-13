[**@ts-stdlib/string v0.1.0**](../../../README.md)

***

[@ts-stdlib/string](../../../README.md) / [case-conversion/case-conversion](../README.md) / toKebabCase

# Function: toKebabCase()

> **toKebabCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:72](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/string/src/case-conversion/case-conversion.ts#L72)

Converts a given string to kebab-case.

This function replaces all whitespace characters in the input string with hyphens (`-`)
and converts the entire string to lowercase.

## Parameters

### text

`string`

The input string to convert.

## Returns

`string`

The kebab-case version of the input string.

## Example

```typescript
toKebabCase("Hello World"); // "hello-world"
toKebabCase("TypeScript Is Awesome"); // "typescript-is-awesome"
```
