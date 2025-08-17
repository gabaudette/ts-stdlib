[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/polynomial](../README.md) / generatePolynomialSequence

# Function: generatePolynomialSequence()

> **generatePolynomialSequence**(`coefficients`, `n`): `number`[]

Defined in: [algebra/polynomial.ts:17](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/algebra/polynomial.ts#L17)

Generates a sequence of values by evaluating a polynomial with the given coefficients
at integer points starting from 0 up to n - 1.

The polynomial is defined as:
  P(x) = coefficients[0] + coefficients[1] * x + coefficients[2] * x^2 + ... + coefficients[k] * x^k

## Parameters

### coefficients

`number`[]

An array of numbers representing the coefficients of the polynomial,
  where the index corresponds to the power of x.

### n

`number`

The number of terms to generate in the sequence.

## Returns

`number`[]

An array of numbers representing the polynomial evaluated at each integer from 0 to n - 1.

## Example

```ts
// Generates the sequence for the polynomial 2 + 3x + x^2 for x = 0, 1, 2, 3
generatePolynomialSequence([2, 3, 1], 4); // returns [2, 6, 12, 20]
```
