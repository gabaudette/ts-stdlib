[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / correlationCoefficient

# Function: correlationCoefficient()

> **correlationCoefficient**(`x`, `y`): `null` \| `number`

Defined in: [statistics/statistics.ts:290](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/statistics/statistics.ts#L290)

Calculates the Pearson correlation coefficient between two numeric arrays.

The correlation coefficient measures the linear relationship between two datasets,
returning a value between -1 and 1. A value of 1 indicates a perfect positive linear
relationship, -1 indicates a perfect negative linear relationship, and 0 indicates
no linear relationship.

## Parameters

### x

`number`[]

The first array of numbers.

### y

`number`[]

The second array of numbers.

## Returns

`null` \| `number`

The Pearson correlation coefficient as a number, or `null` if the input arrays
         have different lengths or are empty. Returns `0` if the denominator is zero.

## Example

```typescript
const x = [1, 2, 3, 4, 5];
const y = [2, 4, 6, 8, 10];
const r = correlationCoefficient(x, y); // r = 1
```
