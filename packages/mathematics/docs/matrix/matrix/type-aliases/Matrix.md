[**@ts-standard-library/mathematics v1.0.1**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / Matrix

# Type Alias: Matrix

> **Matrix** = [`MatrixElement`](MatrixElement.md)[][]

Defined in: [matrix/matrix.ts:41](https://github.com/gabaudette/ts-stdlib/blob/7333da76bc775fbabd0907ad8519b912cfc2fe26/packages/mathematics/src/matrix/matrix.ts#L41)

Represents a two-dimensional array (matrix) of elements.
Each inner array corresponds to a row in the matrix, and each element within the inner array is a matrix element.

## Remarks

The type of each matrix element is defined by `MatrixElement`.

## Example

```typescript
const matrix: Matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
```
