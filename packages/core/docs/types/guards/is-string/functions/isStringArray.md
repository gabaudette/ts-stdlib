[**@ts-standard-library/core v1.0.1**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-string](../README.md) / isStringArray

# Function: isStringArray()

> **isStringArray**(`value`): `value is string[]`

Defined in: [types/guards/is-string.ts:29](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/core/src/types/guards/is-string.ts#L29)

Determines whether the provided value is an array of strings.

## Parameters

### value

`unknown`

The value to check.

## Returns

`value is string[]`

True if the value is an array where every element is a string; otherwise, false.

## Example

```typescript
isStringArray(["hello", "world"]); // true
isStringArray(["hello", 123]);     // false
```
