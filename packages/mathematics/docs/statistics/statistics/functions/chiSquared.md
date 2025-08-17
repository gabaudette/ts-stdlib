[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / chiSquared

# Function: chiSquared()

> **chiSquared**(`observed`, `expected`): `null` \| `number`

Defined in: [statistics/statistics.ts:254](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/statistics/statistics.ts#L254)

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
