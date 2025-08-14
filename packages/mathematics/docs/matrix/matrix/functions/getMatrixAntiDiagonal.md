[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixAntiDiagonal

# Function: getMatrixAntiDiagonal()

> **getMatrixAntiDiagonal**(`matrix`): `null` \| `number`[]

Defined in: [matrix/matrix.ts:134](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/matrix/matrix.ts#L134)

Returns the anti-diagonal elements of a given matrix.

The anti-diagonal (also known as the counter-diagonal or secondary diagonal) consists of elements from the top-right to the bottom-left of the matrix.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The input matrix from which to extract the anti-diagonal. Must be a non-empty 2D array.

## Returns

`null` \| `number`[]

An array containing the anti-diagonal elements of the matrix, or `null` if the input is not a valid matrix.
