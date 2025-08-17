[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateGrayCodeSequence

# Function: generateGrayCodeSequence()

> **generateGrayCodeSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:367](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/sequence.ts#L367)

Generates the sequence of Gray codes for a given number of bits.

Gray code is a binary numeral system where two successive values differ in only one bit.
This function returns an array containing the Gray code sequence for `n` bits,
where each element is an integer representation of the Gray code.

## Parameters

### n

`number`

The number of bits for the Gray code sequence. Must be a non-negative integer.

## Returns

`number`[]

An array of numbers representing the Gray code sequence for `n` bits.

## Example

```typescript
generateGrayCodeSequence(2); // returns [0, 1, 3, 2]
```
