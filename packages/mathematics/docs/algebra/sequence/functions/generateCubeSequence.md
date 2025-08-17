[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/sequence](../README.md) / generateCubeSequence

# Function: generateCubeSequence()

> **generateCubeSequence**(`n`): `number`[]

Defined in: [algebra/sequence.ts:222](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/sequence.ts#L222)

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
