[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / getMatrixMinor

# Function: getMatrixMinor()

> **getMatrixMinor**(`matrix`, `row`, `col`): `null` \| [`Matrix`](../type-aliases/Matrix.md)

Defined in: [matrix/matrix.ts:216](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/matrix/matrix.ts#L216)

Returns the minor of a matrix by removing the specified row and column.

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The input matrix from which to compute the minor.

### row

`number`

The index of the row to remove.

### col

`number`

The index of the column to remove.

## Returns

`null` \| [`Matrix`](../type-aliases/Matrix.md)

The resulting minor matrix, or `null` if the input is not a valid matrix.
