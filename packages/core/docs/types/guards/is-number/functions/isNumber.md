[**@ts-standard-library/core v1.0.1**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-number](../README.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`): `value is number`

Defined in: [types/guards/is-number.ts:13](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/core/src/types/guards/is-number.ts#L13)

Determines whether the provided value is of type `number`.

## Parameters

### value

`unknown`

The value to check.

## Returns

`value is number`

`true` if the value is a number; otherwise, `false`.

## Example

```typescript
isNumber(42); // true
isNumber("42"); // false
```
