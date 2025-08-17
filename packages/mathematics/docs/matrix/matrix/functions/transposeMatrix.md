[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / transposeMatrix

# Function: transposeMatrix()

> **transposeMatrix**(`matrix`): `null` \| [`Matrix`](../type-aliases/Matrix.md)

Defined in: [matrix/matrix.ts:170](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/matrix/matrix.ts#L170)

Returns the transpose of the given matrix.

The transpose of a matrix is obtained by swapping its rows and columns.
If the input is not a valid non-empty matrix, the function returns `null`.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The matrix to transpose, represented as a 2D array.

## Returns

`null` \| [`Matrix`](../type-aliases/Matrix.md)

The transposed matrix as a new 2D array, or `null` if the input is invalid.
