[**@ts-standard-library/string v1.0.7**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toPathCase

# Function: toPathCase()

> **toPathCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:184](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/string/src/case-conversion/case-conversion.ts#L184)

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
