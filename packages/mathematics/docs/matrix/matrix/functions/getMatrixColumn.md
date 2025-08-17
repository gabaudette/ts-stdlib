[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixColumn

# Function: getMatrixColumn()

> **getMatrixColumn**(`matrix`, `colIndex`): `null` \| [`MatrixColumn`](../type-aliases/MatrixColumn.md)

Defined in: [matrix/matrix.ts:93](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/matrix/matrix.ts#L93)

Retrieves a specific column from a matrix.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The input matrix represented as an array of arrays.

### colIndex

`number`

The zero-based index of the column to retrieve.

## Returns

`null` \| [`MatrixColumn`](../type-aliases/MatrixColumn.md)

The column as an array if the column exists in all rows; otherwise, `null`.

## Remarks

- Returns `null` if the input is not a valid matrix or if the column index is out of bounds.
- The returned column will have the same number of elements as the number of rows in the matrix if valid.
