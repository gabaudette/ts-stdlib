[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixSize

# Function: getMatrixSize()

> **getMatrixSize**(`matrix`): `null` \| [`MatrixSize`](../type-aliases/MatrixSize.md)

Defined in: [matrix/matrix.ts:151](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/matrix/matrix.ts#L151)

Returns the size of a given matrix as an object containing the number of rows and columns.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The matrix to determine the size of.

## Returns

`null` \| [`MatrixSize`](../type-aliases/MatrixSize.md)

An object with `rows` and `cols` properties representing the matrix dimensions,
         or `null` if the input is not a valid non-empty matrix.
