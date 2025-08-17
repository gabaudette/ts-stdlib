[**@ts-standard-library/core v1.0.0**](../../../../README.md)

***

[@ts-standard-library/core](../../../../modules.md) / [types/guards/is-number](../README.md) / isNumberArray

# Function: isNumberArray()

> **isNumberArray**(`value`): `value is number[]`

Defined in: [types/guards/is-number.ts:27](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/types/guards/is-number.ts#L27)

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
