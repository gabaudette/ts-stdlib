[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / chiSquared

# Function: chiSquared()

> **chiSquared**(`observed`, `expected`): `null` \| `number`

Defined in: [statistics/statistics.ts:254](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/statistics/statistics.ts#L254)

Calculates the chi-squared statistic for two arrays of observed and expected frequencies.

The chi-squared statistic is a measure of how expectations compare to results. It is commonly used in hypothesis testing.

## Parameters

### observed

`number`[]

An array of observed frequencies.

### expected

`number`[]

An array of expected frequencies.

## Returns

`null` \| `number`

The chi-squared statistic as a number, or `null` if the input arrays have different lengths.

## Example

```typescript
const observed = [10, 20, 30];
const expected = [12, 18, 30];
const chi2 = chiSquared(observed, expected); // chi2 = 0.555...
```
