[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / mode

# Function: mode()

> **mode**(`numbers`): `null` \| `number`

Defined in: [statistics/statistics.ts:157](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/statistics/statistics.ts#L157)

Calculates the mode (the most frequently occurring value) of an array of numbers.

## Parameters

### numbers

`number`[]

An array of numbers to find the mode of.

## Returns

`null` \| `number`

The mode of the array if there is a single mode; otherwise, returns `null`.
         Returns `null` if the input array is empty or if there is no unique mode.

## Example

```typescript
mode([1, 2, 2, 3]); // returns 2
mode([1, 2, 3]);    // returns null (no unique mode)
mode([]);           // returns null (empty array)
```
