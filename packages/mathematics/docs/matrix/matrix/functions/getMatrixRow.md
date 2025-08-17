[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixRow

# Function: getMatrixRow()

> **getMatrixRow**(`matrix`, `rowIndex`): `null` \| [`MatrixRow`](../type-aliases/MatrixRow.md)

Defined in: [matrix/matrix.ts:72](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/matrix/matrix.ts#L72)

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
