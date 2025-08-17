[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/factor](../README.md) / factorize

# Function: factorize()

> **factorize**(`n`): `number`[]

Defined in: [algebra/factor.ts:15](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/algebra/factor.ts#L15)

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
