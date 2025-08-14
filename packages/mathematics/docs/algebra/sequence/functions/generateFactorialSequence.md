[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateFactorialSequence

# Function: generateFactorialSequence()

> **generateFactorialSequence**(`n`): `number`[]

Defined in: algebra/sequence.ts:240

Generates a sequence of factorial numbers up to the given number `n`.

Each element in the returned array represents the factorial of its (1-based) index.
For example, `generateFactorialSequence(5)` returns `[1, 2, 6, 24, 120]`.

## Parameters

### n

`number`

The number of terms in the factorial sequence to generate. Must be a non-negative integer.

## Returns

`number`[]

An array containing the factorial sequence from 1! up to n!.
