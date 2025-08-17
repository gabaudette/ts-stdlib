[**@ts-standard-library/mathematics v1.0.0**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / isValidMatrix

# Function: isValidMatrix()

> **isValidMatrix**(`matrix`): `boolean`

Defined in: [matrix/matrix.ts:278](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/mathematics/src/matrix/matrix.ts#L278)

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
