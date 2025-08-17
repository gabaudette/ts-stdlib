[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateKarnaughMapSequence

# Function: generateKarnaughMapSequence()

> **generateKarnaughMapSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:343](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/algebra/sequence.ts#L343)

Generates a sequence of numbers for a Karnaugh map of size `n`.

## Parameters

### n

`number`

The number of elements in the sequence.

## Returns

`number`[]

An array of numbers from 0 to `n - 1`.

## Remarks

This function currently generates a simple linear sequence. For a true Karnaugh map sequence,
a Gray code sequence may be required.

## See

[generateGrayCodeSequence](generateGrayCodeSequence.md)
