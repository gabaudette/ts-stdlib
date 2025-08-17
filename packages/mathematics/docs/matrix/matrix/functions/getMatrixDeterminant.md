[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixDeterminant

# Function: getMatrixDeterminant()

> **getMatrixDeterminant**(`matrix`): `null` \| `number`

Defined in: [matrix/matrix.ts:240](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/matrix/matrix.ts#L240)

Calculates the determinant of a square matrix.

The function supports matrices of any size (1x1, 2x2, or larger).
For matrices larger than 2x2, it recursively computes the determinant
using Laplace expansion (cofactor expansion) along the first row.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The square matrix for which to compute the determinant.

## Returns

`null` \| `number`

The determinant of the matrix, or `null` if the input is invalid or empty.
