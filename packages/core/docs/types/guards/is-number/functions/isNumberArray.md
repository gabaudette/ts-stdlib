[**@ts-standard-library/core v1.0.1**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-number](../README.md) / isNumberArray

# Function: isNumberArray()

> **isNumberArray**(`value`): `value is number[]`

Defined in: [types/guards/is-number.ts:27](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/core/src/types/guards/is-number.ts#L27)

Determines whether the provided value is an array consisting entirely of numbers.

## Parameters

### value

`unknown`

The value to check.

## Returns

`value is number[]`

True if the value is an array where every element is a number; otherwise, false.

## Example

```ts
isNumberArray([1, 2, 3]); // true
isNumberArray([1, "2", 3]); // false
```
