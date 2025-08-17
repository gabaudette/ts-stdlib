[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateArithmeticSequence

# Function: generateArithmeticSequence()

> **generateArithmeticSequence**(`start`, `difference`, `n`): `number`[]

Defined in: [algebra/sequence.ts:103](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/sequence.ts#L103)

Generates an arithmetic sequence as an array of numbers.

An arithmetic sequence is a sequence of numbers in which the difference between consecutive terms is constant.

## Parameters

### start

`number`

The first term of the sequence.

### difference

`number`

The common difference between consecutive terms.

### n

`number`

The number of terms to generate in the sequence.

## Returns

`number`[]

An array containing the generated arithmetic sequence.

## Example

```typescript
generateArithmeticSequence(2, 3, 5); // Returns [2, 5, 8, 11, 14]
```
