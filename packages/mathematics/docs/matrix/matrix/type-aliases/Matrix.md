[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / Matrix

# Type Alias: Matrix

> **Matrix** = [`MatrixElement`](MatrixElement.md)[][]

Defined in: [matrix/matrix.ts:41](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/matrix/matrix.ts#L41)

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
