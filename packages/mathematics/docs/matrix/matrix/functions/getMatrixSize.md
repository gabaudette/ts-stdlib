[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixSize

# Function: getMatrixSize()

> **getMatrixSize**(`matrix`): `null` \| [`MatrixSize`](../type-aliases/MatrixSize.md)

Defined in: [matrix/matrix.ts:151](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/matrix/matrix.ts#L151)

Returns the size of a given matrix as an object containing the number of rows and columns.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The matrix to determine the size of.

## Returns

`null` \| [`MatrixSize`](../type-aliases/MatrixSize.md)

An object with `rows` and `cols` properties representing the matrix dimensions,
         or `null` if the input is not a valid non-empty matrix.
