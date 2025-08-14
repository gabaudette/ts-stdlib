[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / areMatrixEqual

# Function: areMatrixEqual()

> **areMatrixEqual**(`matrixA`, `matrixB`): `boolean`

Defined in: [matrix/matrix.ts:298](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/matrix/matrix.ts#L298)

Determines whether two matrices are equal.

Two matrices are considered equal if they have the same dimensions and all corresponding elements are strictly equal (`===`).
If either matrix is invalid (as determined by `isValidMatrix`), the function returns `false`.

## Parameters

### matrixA

[`Matrix`](../type-aliases/Matrix.md)

The first matrix to compare.

### matrixB

[`Matrix`](../type-aliases/Matrix.md)

The second matrix to compare.

## Returns

`boolean`

`true` if the matrices are equal; otherwise, `false`.
