[**@ts-standard-library/string v1.0.4**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toTitleCase

# Function: toTitleCase()

> **toTitleCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:135](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/string/src/case-conversion/case-conversion.ts#L135)

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
