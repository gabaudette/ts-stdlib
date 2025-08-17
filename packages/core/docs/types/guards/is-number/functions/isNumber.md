[**@ts-standard-library/core v1.0.2**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-number](../README.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`): `value is number`

Defined in: [types/guards/is-number.ts:13](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/core/src/types/guards/is-number.ts#L13)

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
