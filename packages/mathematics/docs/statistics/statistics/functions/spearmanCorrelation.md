[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [statistics/statistics](../README.md) / spearmanCorrelation

# Function: spearmanCorrelation()

> **spearmanCorrelation**(`x`, `y`): `null` \| `number`

Defined in: [statistics/statistics.ts:806](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/statistics/statistics.ts#L806)

Calculates the Spearman rank correlation coefficient between two arrays of numbers.

The Spearman correlation measures the strength and direction of the monotonic relationship
between two variables. It is computed by ranking the input arrays and then calculating
the Pearson correlation coefficient of the ranks.

## Parameters

### x

`number`[]

The first array of numbers.

### y

`number`[]

The second array of numbers.

## Returns

`null` \| `number`

The Spearman correlation coefficient as a number between -1 and 1,
         or `null` if the input arrays are of different lengths or empty.

## Remarks

Both input arrays must have the same non-zero length. The function internally ranks the arrays
and uses the Pearson correlation on the ranks.
