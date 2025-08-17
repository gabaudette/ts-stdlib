[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generatePellSequence

# Function: generatePellSequence()

> **generatePellSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:295](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/algebra/sequence.ts#L295)

Generates the first `n` terms of the Pell sequence.

The Pell sequence is defined by the recurrence relation:
  P(n) = 2 * P(n-1) + P(n-2)
with initial values P(0) = 2 and P(1) = 1.

## Parameters

### n

`number`

The number of terms to generate.

## Returns

`number`[]

An array containing the first `n` Pell numbers.

## Example

```typescript
generatePellSequence(5); // returns [2, 1, 4, 9, 22]
```
