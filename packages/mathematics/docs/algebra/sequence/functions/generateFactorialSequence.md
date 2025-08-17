[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateFactorialSequence

# Function: generateFactorialSequence()

> **generateFactorialSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:240](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/sequence.ts#L240)

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
