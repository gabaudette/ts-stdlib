[**@ts-stdlib/string v0.1.0**](../../../README.md)

***

[@ts-stdlib/string](../../../README.md) / [case-conversion/case-conversion](../README.md) / toTitleCase

# Function: toTitleCase()

> **toTitleCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:141](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/string/src/case-conversion/case-conversion.ts#L141)

Converts a given string to title case, capitalizing the first letter of each word.

## Parameters

### text

`string`

The input string to convert.

## Returns

`string`

The input string with the first letter of each word capitalized.

## Example

```typescript
toTitleCase("hello world"); // "Hello World"
toTitleCase("typeScript is awesome"); // "TypeScript Is Awesome"
```
