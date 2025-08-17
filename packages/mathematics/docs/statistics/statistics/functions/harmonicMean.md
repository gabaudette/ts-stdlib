[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / harmonicMean

# Function: harmonicMean()

> **harmonicMean**(`numbers`): `number`

Defined in: [statistics/statistics.ts:31](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/statistics/statistics.ts#L31)

Calculates the harmonic mean of an array of numbers.

The harmonic mean is defined as the number of elements divided by the sum of the reciprocals of the elements.
Returns 0 if the input array is empty.

## Parameters

### numbers

`number`[]

An array of numbers for which to calculate the harmonic mean.

## Returns

`number`

The harmonic mean of the input numbers, or 0 if the array is empty.

## Example

```typescript
const mean = harmonicMean([1, 2, 4]); // Returns 1.7142857142857142
```
