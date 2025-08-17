[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateJacobsthalSequence

# Function: generateJacobsthalSequence()

> **generateJacobsthalSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:317](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/sequence.ts#L317)

Generates the Jacobsthal sequence up to the specified number of terms.

The Jacobsthal sequence is defined by the recurrence relation:
  J(0) = 0, J(1) = 1, and J(n) = J(n-1) + 2 * J(n-2) for n > 1.

## Parameters

### n

`number`

The number of terms to generate in the sequence.

## Returns

`number`[]

An array containing the first `n` terms of the Jacobsthal sequence.

## Example

```typescript
generateJacobsthalSequence(5); // returns [0, 1, 1, 3, 5]
```
