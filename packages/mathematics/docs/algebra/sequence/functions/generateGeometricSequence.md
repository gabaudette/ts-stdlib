[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateGeometricSequence

# Function: generateGeometricSequence()

> **generateGeometricSequence**(`start`, `ratio`, `n`): `number`[]

Defined in: [algebra/sequence.ts:131](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/sequence.ts#L131)

Generates a geometric sequence of numbers.

A geometric sequence is a sequence where each term after the first is found by multiplying the previous term by a fixed, non-zero number called the ratio.

## Parameters

### start

`number`

The first term of the sequence.

### ratio

`number`

The common ratio between consecutive terms.

### n

`number`

The number of terms to generate.

## Returns

`number`[]

An array containing the geometric sequence of length `n`.

## Example

```typescript
generateGeometricSequence(2, 3, 5); // returns [2, 6, 18, 54, 162]
```
