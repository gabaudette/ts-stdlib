[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / createIdentityMatrix

# Function: createIdentityMatrix()

> **createIdentityMatrix**(`size`): `null` \| [`Matrix`](../type-aliases/Matrix.md)

Defined in: [matrix/matrix.ts:195](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/matrix/matrix.ts#L195)

Creates an identity matrix of the specified size.

An identity matrix is a square matrix with ones on the main diagonal and zeros elsewhere.

## Parameters

### size

`number`

The number of rows and columns for the identity matrix. Must be greater than 0.

## Returns

`null` \| [`Matrix`](../type-aliases/Matrix.md)

A new identity matrix of the given size, or `null` if the size is less than or equal to 0.
