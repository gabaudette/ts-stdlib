[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/factor](../README.md) / factorize

# Function: factorize()

> **factorize**(`n`): `number`[]

Defined in: [algebra/factor.ts:15](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/algebra/factor.ts#L15)

Returns all positive integer factors of a given number `n`.

The function computes and returns an array of all numbers that divide `n` without a remainder,
sorted in ascending order.

## Parameters

### n

`number`

The number to factorize. Must be a positive integer.

## Returns

`number`[]

An array of all positive integer factors of `n`, sorted in ascending order.

## Example

```typescript
factorize(12); // returns [1, 2, 3, 4, 6, 12]
```
