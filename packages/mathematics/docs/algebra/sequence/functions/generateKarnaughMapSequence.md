[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateKarnaughMapSequence

# Function: generateKarnaughMapSequence()

> **generateKarnaughMapSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:343](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/sequence.ts#L343)

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
