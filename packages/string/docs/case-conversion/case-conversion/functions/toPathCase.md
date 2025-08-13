[**@ts-standard-library/string v1.0.3**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toPathCase

# Function: toPathCase()

> **toPathCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:184](https://github.com/gabaudette/ts-stdlib/blob/f3564012967e497619352a1e83b33c59ea25d02c/packages/string/src/case-conversion/case-conversion.ts#L184)

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
