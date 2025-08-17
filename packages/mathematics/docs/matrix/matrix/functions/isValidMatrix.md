[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / isValidMatrix

# Function: isValidMatrix()

> **isValidMatrix**(`matrix`): `boolean`

Defined in: [matrix/matrix.ts:278](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/matrix/matrix.ts#L278)

Determines whether the provided object is a valid matrix.

A valid matrix is defined as a non-empty array of arrays, where each row is an array
of the same length (i.e., all rows have the same number of columns).

## Parameters

### matrix

[`Matrix`](../type-aliases/Matrix.md)

The matrix to validate.

## Returns

`boolean`

`true` if the input is a valid matrix; otherwise, `false`.
