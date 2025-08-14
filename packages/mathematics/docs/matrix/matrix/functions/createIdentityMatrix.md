[**@ts-standard-library/mathematics v0.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / createIdentityMatrix

# Function: createIdentityMatrix()

> **createIdentityMatrix**(`size`): `null` \| [`Matrix`](../type-aliases/Matrix.md)

Defined in: matrix/matrix.ts:195

Creates an identity matrix of the specified size.

An identity matrix is a square matrix with ones on the main diagonal and zeros elsewhere.

## Parameters

### size

`number`

The number of rows and columns for the identity matrix. Must be greater than 0.

## Returns

`null` \| [`Matrix`](../type-aliases/Matrix.md)

A new identity matrix of the given size, or `null` if the size is less than or equal to 0.
