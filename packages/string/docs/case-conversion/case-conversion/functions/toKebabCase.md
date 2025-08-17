[**@ts-standard-library/string v1.0.5**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toKebabCase

# Function: toKebabCase()

> **toKebabCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:72](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/string/src/case-conversion/case-conversion.ts#L72)

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
