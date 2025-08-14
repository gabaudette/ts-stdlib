[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / transposeMatrix

# Function: transposeMatrix()

> **transposeMatrix**(`matrix`): `null` \| [`Matrix`](../type-aliases/Matrix.md)

Defined in: matrix/matrix.ts:170

Returns the transpose of the given matrix.

The transpose of a matrix is obtained by swapping its rows and columns.
If the input is not a valid non-empty matrix, the function returns `null`.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The matrix to transpose, represented as a 2D array.

## Returns

`null` \| [`Matrix`](../type-aliases/Matrix.md)

The transposed matrix as a new 2D array, or `null` if the input is invalid.
