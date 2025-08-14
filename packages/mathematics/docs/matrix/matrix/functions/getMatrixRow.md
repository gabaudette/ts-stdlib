[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixRow

# Function: getMatrixRow()

> **getMatrixRow**(`matrix`, `rowIndex`): `null` \| [`MatrixRow`](../type-aliases/MatrixRow.md)

Defined in: [matrix/matrix.ts:72](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/matrix/matrix.ts#L72)

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
