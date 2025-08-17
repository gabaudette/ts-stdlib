[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateFibonacciSequence

# Function: generateFibonacciSequence()

> **generateFibonacciSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:14](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/algebra/sequence.ts#L14)

Generates the Fibonacci sequence up to the specified number of terms.

## Parameters

### n

`number`

The number of terms to generate in the Fibonacci sequence.

## Returns

`number`[]

An array containing the first `n` numbers of the Fibonacci sequence.

## Example

```typescript
generateFibonacciSequence(5); // returns [0, 1, 1, 2, 3]
```
