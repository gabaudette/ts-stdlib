[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateLucasSequence

# Function: generateLucasSequence()

> **generateLucasSequence**(`n`): `number`[]

Defined in: algebra/sequence.ts:266

Generates the first `n` terms of the Lucas sequence.

The Lucas sequence is similar to the Fibonacci sequence, but starts with 2 and 1.
Each subsequent term is the sum of the two preceding terms:
  L(0) = 2, L(1) = 1, L(n) = L(n-1) + L(n-2) for n > 1.

## Parameters

### n

`number`

The number of terms to generate in the sequence.

## Returns

`number`[]

An array containing the first `n` terms of the Lucas sequence.

## Example

```typescript
generateLucasSequence(5); // returns [2, 1, 3, 4, 7]
```
