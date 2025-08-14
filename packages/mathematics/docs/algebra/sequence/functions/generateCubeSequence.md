[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateCubeSequence

# Function: generateCubeSequence()

> **generateCubeSequence**(`n`): `number`[]

Defined in: algebra/sequence.ts:222

Generates a sequence of cube numbers from 1 to `n`.

Each element in the returned array is the cube of its 1-based index (i.e., `i ** 3` for `i` from 1 to `n`).

## Parameters

### n

`number`

The number of terms in the cube sequence to generate.

## Returns

`number`[]

An array containing the first `n` cube numbers.

## Example

```typescript
generateCubeSequence(4); // returns [1, 8, 27, 64]
```
