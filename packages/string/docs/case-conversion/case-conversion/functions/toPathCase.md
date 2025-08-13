[**@ts-stdlib/string v1.0.1**](../../../README.md)

***

[@ts-stdlib/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toPathCase

# Function: toPathCase()

> **toPathCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:190](https://github.com/gabaudette/ts-stdlib/blob/94404285f4faf17348604cdfd50e84b4b9ee7b00/packages/string/src/case-conversion/case-conversion.ts#L190)

Converts a string to path case, replacing all whitespace characters with slashes ("/")
and converting the result to lowercase.

## Parameters

### text

`string`

The input string to convert.

## Returns

`string`

The path case version of the input string.

## Example

```typescript
toPathCase("Hello World Example"); // "hello/world/example"
```
