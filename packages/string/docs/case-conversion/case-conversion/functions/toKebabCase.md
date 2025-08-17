[**@ts-standard-library/string v1.0.4**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toKebabCase

# Function: toKebabCase()

> **toKebabCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:72](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/string/src/case-conversion/case-conversion.ts#L72)

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
