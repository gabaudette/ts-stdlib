[**@ts-standard-library/mathematics v1.0.3**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [matrix/matrix](../README.md) / Matrix

# Type Alias: Matrix

> **Matrix** = [`MatrixElement`](MatrixElement.md)[][]

Defined in: [matrix/matrix.ts:41](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/mathematics/src/matrix/matrix.ts#L41)

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
