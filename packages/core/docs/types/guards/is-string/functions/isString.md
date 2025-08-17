[**@ts-standard-library/core v1.0.1**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-string](../README.md) / isString

# Function: isString()

> **isString**(`value`): `value is string`

Defined in: [types/guards/is-string.ts:13](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/core/src/types/guards/is-string.ts#L13)

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
