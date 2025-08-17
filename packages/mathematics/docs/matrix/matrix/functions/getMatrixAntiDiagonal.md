[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixAntiDiagonal

# Function: getMatrixAntiDiagonal()

> **getMatrixAntiDiagonal**(`matrix`): `null` \| `number`[]

Defined in: [matrix/matrix.ts:134](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/matrix/matrix.ts#L134)

Returns the anti-diagonal elements of a given matrix.

The anti-diagonal (also known as the counter-diagonal or secondary diagonal) consists of elements from the top-right to the bottom-left of the matrix.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The input matrix from which to extract the anti-diagonal. Must be a non-empty 2D array.

## Returns

`null` \| `number`[]

An array containing the anti-diagonal elements of the matrix, or `null` if the input is not a valid matrix.
