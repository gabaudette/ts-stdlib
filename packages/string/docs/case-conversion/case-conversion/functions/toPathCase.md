[**@ts-stdlib/string v0.1.0**](../../../README.md)

***

[@ts-stdlib/string](../../../README.md) / [case-conversion/case-conversion](../README.md) / toPathCase

# Function: toPathCase()

> **toPathCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:190](https://github.com/gabaudette/ts-stdlib/blob/8e7816af16ba99a04cff637dfff9fab2e1e392d8/packages/string/src/case-conversion/case-conversion.ts#L190)

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
