[**@ts-standard-library/core v1.0.3**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-string](../README.md) / isStringArray

# Function: isStringArray()

> **isStringArray**(`value`): `value is string[]`

Defined in: [types/guards/is-string.ts:29](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/types/guards/is-string.ts#L29)

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
