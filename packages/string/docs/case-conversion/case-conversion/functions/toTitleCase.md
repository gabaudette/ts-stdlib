[**@ts-standard-library/string v1.0.6**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toTitleCase

# Function: toTitleCase()

> **toTitleCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:135](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/string/src/case-conversion/case-conversion.ts#L135)

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
