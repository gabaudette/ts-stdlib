[**@ts-standard-library/core v1.0.2**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-string](../README.md) / isString

# Function: isString()

> **isString**(`value`): `value is string`

Defined in: [types/guards/is-string.ts:13](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/core/src/types/guards/is-string.ts#L13)

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
