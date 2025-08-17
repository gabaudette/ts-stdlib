[**@ts-standard-library/string v1.0.4**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [case-conversion/case-conversion](../README.md) / toPathCase

# Function: toPathCase()

> **toPathCase**(`text`): `string`

Defined in: [case-conversion/case-conversion.ts:184](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/string/src/case-conversion/case-conversion.ts#L184)

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
