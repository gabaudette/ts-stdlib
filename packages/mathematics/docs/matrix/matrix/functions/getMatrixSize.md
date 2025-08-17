[**@ts-standard-library/mathematics v1.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixSize

# Function: getMatrixSize()

> **getMatrixSize**(`matrix`): `null` \| [`MatrixSize`](../type-aliases/MatrixSize.md)

Defined in: [matrix/matrix.ts:151](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/mathematics/src/matrix/matrix.ts#L151)

Returns the size of a given matrix as an object containing the number of rows and columns.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The matrix to determine the size of.

## Returns

`null` \| [`MatrixSize`](../type-aliases/MatrixSize.md)

An object with `rows` and `cols` properties representing the matrix dimensions,
         or `null` if the input is not a valid non-empty matrix.
