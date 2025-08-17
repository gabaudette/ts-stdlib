[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateHarmonicSequence

# Function: generateHarmonicSequence()

> **generateHarmonicSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:157](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/sequence.ts#L157)

Generates the first `n` terms of the harmonic sequence.

The harmonic sequence is defined as: [1, 1/2, 1/3, ..., 1/n].

## Parameters

### n

`number`

The number of terms to generate in the sequence. Must be a positive integer.

## Returns

`number`[]

An array containing the first `n` terms of the harmonic sequence.

## Example

```typescript
generateHarmonicSequence(5); // returns [1, 0.5, 0.333..., 0.25, 0.2]
```
