[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixRow

# Function: getMatrixRow()

> **getMatrixRow**(`matrix`, `rowIndex`): `null` \| [`MatrixRow`](../type-aliases/MatrixRow.md)

Defined in: matrix/matrix.ts:72

Retrieves a specific row from a matrix.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The matrix from which to extract the row.

### rowIndex

`number`

The zero-based index of the row to retrieve.

## Returns

`null` \| [`MatrixRow`](../type-aliases/MatrixRow.md)

The row at the specified index as a `MatrixRow`, or `null` if the index is out of bounds or the input is not a valid matrix.
