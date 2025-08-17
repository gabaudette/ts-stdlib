[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixAntiDiagonal

# Function: getMatrixAntiDiagonal()

> **getMatrixAntiDiagonal**(`matrix`): `null` \| `number`[]

Defined in: [matrix/matrix.ts:134](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/matrix/matrix.ts#L134)

Returns the anti-diagonal elements of a given matrix.

The anti-diagonal (also known as the counter-diagonal or secondary diagonal) consists of elements from the top-right to the bottom-left of the matrix.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The input matrix from which to extract the anti-diagonal. Must be a non-empty 2D array.

## Returns

`null` \| `number`[]

An array containing the anti-diagonal elements of the matrix, or `null` if the input is not a valid matrix.
