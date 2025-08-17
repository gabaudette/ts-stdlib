[**@ts-standard-library/core v1.0.3**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-string](../README.md) / isString

# Function: isString()

> **isString**(`value`): `value is string`

Defined in: [types/guards/is-string.ts:13](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/types/guards/is-string.ts#L13)

Determines whether the provided value is of type `string`.

## Parameters

### value

`unknown`

The value to check.

## Returns

`value is string`

`true` if the value is a string, otherwise `false`.

## Example

```typescript
isString("hello"); // true
isString(123);     // false
```
