/**
 * Represents the dimensions of a matrix.
 *
 * @property rows - The number of rows in the matrix.
 * @property cols - The number of columns in the matrix.
 */
export type MatrixSize = { rows: number; cols: number };

/**
 * Represents a single row in a matrix, defined as an array of `MatrixElement` values.
 *
 * @remarks
 * Each `MatrixRow` corresponds to one horizontal line of elements in a matrix structure.
 * The type of each element is determined by `MatrixElement`.
 */
export type MatrixRow = MatrixElement[];

/**
 * Represents a single column in a matrix, defined as an array of matrix elements.
 * Each element in the array corresponds to a row entry in the column.
 *
 * @see MatrixElement
 */
export type MatrixColumn = MatrixElement[];

/**
 * Represents a two-dimensional array (matrix) of elements.
 * Each inner array corresponds to a row in the matrix, and each element within the inner array is a matrix element.
 *
 * @remarks
 * The type of each matrix element is defined by `MatrixElement`.
 *
 * @example
 * ```typescript
 * const matrix: Matrix = [
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ];
 * ```
 */
export type Matrix = MatrixElement[][];

/**
 * Represents a single element within a matrix.
 *
 * @remarks
 * This type is used to define the value type for elements in matrix data structures.
 *
 * @see {@link Matrix}
 */
export type MatrixElement = number;

/**
 * Creates a new matrix with the specified number of rows and columns,
 * initializing all elements to zero.
 *
 * @param rows - The number of rows in the matrix.
 * @param cols - The number of columns in the matrix.
 * @returns A matrix represented as an array of rows, where each row is an array of numbers initialized to zero.
 */
export function createMatrix(rows: number, cols: number): Matrix {
	return Array.from({ length: rows }, () => Array(cols).fill(0) as MatrixRow);
}

/**
 * Retrieves a specific row from a matrix.
 *
 * @param matrix - The matrix from which to extract the row.
 * @param rowIndex - The zero-based index of the row to retrieve.
 * @returns The row at the specified index as a `MatrixRow`, or `null` if the index is out of bounds or the input is not a valid matrix.
 */
export function getMatrixRow(
	matrix: Matrix,
	rowIndex: number,
): MatrixRow | null {
	if (!Array.isArray(matrix) || rowIndex < 0 || rowIndex >= matrix.length) {
		return null;
	}
	return matrix[rowIndex];
}

/**
 * Retrieves a specific column from a matrix.
 *
 * @param matrix - The input matrix represented as an array of arrays.
 * @param colIndex - The zero-based index of the column to retrieve.
 * @returns The column as an array if the column exists in all rows; otherwise, `null`.
 *
 * @remarks
 * - Returns `null` if the input is not a valid matrix or if the column index is out of bounds.
 * - The returned column will have the same number of elements as the number of rows in the matrix if valid.
 */
export function getMatrixColumn(
	matrix: Matrix,
	colIndex: number,
): MatrixColumn | null {
	if (!Array.isArray(matrix) || colIndex < 0) {
		return null;
	}

	const column: MatrixColumn = matrix
		.map((row) => row[colIndex])
		.filter((value) => value !== undefined) as MatrixColumn;
	return column.length === matrix.length ? column : null;
}

/**
 * Returns the main diagonal elements of a square or rectangular matrix.
 *
 * Iterates over the input matrix and collects the elements where the row and column indices are equal.
 * If the input is not a valid non-empty matrix, returns `null`.
 *
 * @param matrix - The input matrix represented as an array of arrays.
 * @returns An array containing the diagonal elements of the matrix, or `null` if the input is invalid.
 */
export function getMatrixDiagonal(matrix: Matrix): MatrixElement[] | null {
	if (!Array.isArray(matrix) || matrix.length === 0) {
		return null;
	}

	return matrix
		.map((row, index) => row[index])
		.filter((value) => value !== undefined) as MatrixElement[];
}

/**
 * Returns the anti-diagonal elements of a given matrix.
 *
 * The anti-diagonal (also known as the counter-diagonal or secondary diagonal) consists of elements from the top-right to the bottom-left of the matrix.
 *
 * @param matrix - The input matrix from which to extract the anti-diagonal. Must be a non-empty 2D array.
 * @returns An array containing the anti-diagonal elements of the matrix, or `null` if the input is not a valid matrix.
 */
export function getMatrixAntiDiagonal(matrix: Matrix): MatrixElement[] | null {
	if (!Array.isArray(matrix) || matrix.length === 0) {
		return null;
	}

	return matrix
		.map((row, index) => row[row.length - 1 - index])
		.filter((value) => value !== undefined) as MatrixElement[];
}

/**
 * Returns the size of a given matrix as an object containing the number of rows and columns.
 *
 * @param matrix - The matrix to determine the size of.
 * @returns An object with `rows` and `cols` properties representing the matrix dimensions,
 *          or `null` if the input is not a valid non-empty matrix.
 */
export function getMatrixSize(matrix: Matrix): MatrixSize | null {
	if (!Array.isArray(matrix) || matrix.length === 0) {
		return null;
	}

	const cols = matrix[0].length;

	return { rows: matrix.length, cols };
}

/**
 * Returns the transpose of the given matrix.
 *
 * The transpose of a matrix is obtained by swapping its rows and columns.
 * If the input is not a valid non-empty matrix, the function returns `null`.
 *
 * @param matrix - The matrix to transpose, represented as a 2D array.
 * @returns The transposed matrix as a new 2D array, or `null` if the input is invalid.
 */
export function transposeMatrix(matrix: Matrix): Matrix | null {
	if (!Array.isArray(matrix) || matrix.length === 0) {
		return null;
	}

	const rows = matrix.length;
	const cols = matrix[0].length;
	const transposed = createMatrix(cols, rows);
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			transposed[j][i] = matrix[i][j];
		}
	}

	return transposed;
}

/**
 * Creates an identity matrix of the specified size.
 *
 * An identity matrix is a square matrix with ones on the main diagonal and zeros elsewhere.
 *
 * @param size - The number of rows and columns for the identity matrix. Must be greater than 0.
 * @returns A new identity matrix of the given size, or `null` if the size is less than or equal to 0.
 */
export function createIdentityMatrix(size: number): Matrix | null {
	if (size <= 0) {
		return null;
	}

	const identityMatrix = createMatrix(size, size);
	for (let i = 0; i < size; i++) {
		identityMatrix[i][i] = 1;
	}

	return identityMatrix;
}

/**
 * Returns the minor of a matrix by removing the specified row and column.
 *
 * @param matrix - The input matrix from which to compute the minor.
 * @param row - The index of the row to remove.
 * @param col - The index of the column to remove.
 * @returns The resulting minor matrix, or `null` if the input is not a valid matrix.
 */
export function getMatrixMinor(
	matrix: Matrix,
	row: number,
	col: number,
): Matrix | null {
	if (!Array.isArray(matrix) || matrix.length === 0) {
		return null;
	}

	return matrix
		.filter((_, r) => r !== row)
		.map((row) => row.filter((_, c) => c !== col)) as Matrix;
}

/**
 * Calculates the determinant of a square matrix.
 *
 * The function supports matrices of any size (1x1, 2x2, or larger).
 * For matrices larger than 2x2, it recursively computes the determinant
 * using Laplace expansion (cofactor expansion) along the first row.
 *
 * @param matrix - The square matrix for which to compute the determinant.
 * @returns The determinant of the matrix, or `null` if the input is invalid or empty.
 */
export function getMatrixDeterminant(matrix: Matrix): MatrixElement | null {
	if (!Array.isArray(matrix) || matrix.length === 0) {
		return null;
	}

	const size = matrix.length;
	if (size === 1) {
		return matrix[0][0];
	}

	if (size === 2) {
		return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
	}

	let determinant = 0;
	for (let col = 0; col < size; col++) {
		const cofactorMatrix = getMatrixMinor(matrix, 0, col);
		if (cofactorMatrix !== null) {
			const cofactorDeterminant = getMatrixDeterminant(cofactorMatrix);
			if (cofactorDeterminant !== null) {
				const sign = col % 2 === 0 ? 1 : -1;
				determinant += sign * matrix[0][col] * cofactorDeterminant;
			}
		}
	}

	return determinant;
}

/**
 * Determines whether the provided object is a valid matrix.
 *
 * A valid matrix is defined as a non-empty array of arrays, where each row is an array
 * of the same length (i.e., all rows have the same number of columns).
 *
 * @param matrix - The matrix to validate.
 * @returns `true` if the input is a valid matrix; otherwise, `false`.
 */
export function isValidMatrix(matrix: Matrix): boolean {
	if (!Array.isArray(matrix) || matrix.length === 0) {
		return false;
	}

	const cols = matrix[0].length;

	return matrix.every((row) => Array.isArray(row) && row.length === cols);
}

/**
 * Determines whether two matrices are equal.
 *
 * Two matrices are considered equal if they have the same dimensions and all corresponding elements are strictly equal (`===`).
 * If either matrix is invalid (as determined by `isValidMatrix`), the function returns `false`.
 *
 * @param matrixA - The first matrix to compare.
 * @param matrixB - The second matrix to compare.
 * @returns `true` if the matrices are equal; otherwise, `false`.
 */
export function areMatrixEqual(matrixA: Matrix, matrixB: Matrix): boolean {
	if (!isValidMatrix(matrixA) || !isValidMatrix(matrixB)) {
		return false;
	}

	const rows = matrixA.length;
	const cols = matrixA[0].length;

	if (rows !== matrixB.length || cols !== matrixB[0].length) {
		return false;
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (matrixA[i][j] !== matrixB[i][j]) {
				return false;
			}
		}
	}

	return true;
}
