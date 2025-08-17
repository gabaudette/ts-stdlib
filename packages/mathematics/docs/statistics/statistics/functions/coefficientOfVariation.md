[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / coefficientOfVariation

# Function: coefficientOfVariation()

> **coefficientOfVariation**(`numbers`): `null` \| `number`

Defined in: [statistics/statistics.ts:109](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/statistics/statistics.ts#L109)

Calculates the coefficient of variation (CV) for a given array of numbers.
The coefficient of variation is defined as the ratio of the standard deviation
to the mean, expressed as a percentage.

## Parameters

### numbers

`number`[]

An array of numbers for which to compute the coefficient of variation.

## Returns

`null` \| `number`

The coefficient of variation as a percentage, or `null` if the input array is empty
         or if the standard deviation cannot be computed.

## Remarks

The coefficient of variation is useful for comparing the degree of variation
between different datasets, even if their means are drastically different.

## Example

```typescript
const data = [10, 12, 23, 23, 16, 23, 21, 16];
const cv = coefficientOfVariation(data); // e.g., returns 27.5
```
