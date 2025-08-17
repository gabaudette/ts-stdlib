[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixDiagonal

# Function: getMatrixDiagonal()

> **getMatrixDiagonal**(`matrix`): `null` \| `number`[]

Defined in: [matrix/matrix.ts:116](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/matrix/matrix.ts#L116)

Returns the main diagonal elements of a square or rectangular matrix.

Iterates over the input matrix and collects the elements where the row and column indices are equal.
If the input is not a valid non-empty matrix, returns `null`.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The input matrix represented as an array of arrays.

## Returns

`null` \| `number`[]

An array containing the diagonal elements of the matrix, or `null` if the input is invalid.
