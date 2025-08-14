[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/factor](../README.md) / isPrime

# Function: isPrime()

> **isPrime**(`n`): `boolean`

Defined in: algebra/factor.ts:49

Determines whether a given number is a prime number.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

## Parameters

### n

`number`

The number to test for primality.

## Returns

`boolean`

`true` if the number is prime; otherwise, `false`.

## Remarks

This function uses trial division up to the square root of `n` to determine
if `n` is prime.
You should consider using a more efficient algorithm for larger values of `n`.
Additionally, for very large numbers, you may want to use a probabilistic primality test.

## Example

```
isPrime(5); // returns true
isPrime(4); // returns false
```
