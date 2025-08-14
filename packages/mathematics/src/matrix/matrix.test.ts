import { describe, it, expect } from "vitest";
import {
	createMatrix,
	getMatrixRow,
	getMatrixColumn,
	getMatrixDiagonal,
	getMatrixAntiDiagonal,
	getMatrixSize,
	transposeMatrix,
	createIdentityMatrix,
	getMatrixMinor,
	getMatrixDeterminant,
	isValidMatrix,
	areMatrixEqual,
} from "./matrix";

describe("Matrix Utilities", () => {
	describe("createMatrix", () => {
		it("creates a matrix of zeros with given size", () => {
			expect(createMatrix(2, 3)).toEqual([
				[0, 0, 0],
				[0, 0, 0],
			]);
		});

		it("creates an empty matrix for 0 rows", () => {
			expect(createMatrix(0, 3)).toEqual([]);
		});

		it("creates rows of empty arrays for 0 cols", () => {
			expect(createMatrix(2, 0)).toEqual([[], []]);
		});
	});

	describe("getMatrixRow", () => {
		const m = [
			[1, 2],
			[3, 4],
		];

		it("returns the correct row", () => {
			expect(getMatrixRow(m, 1)).toEqual([3, 4]);
		});

		it("returns null for out of bounds", () => {
			expect(getMatrixRow(m, 2)).toBeNull();
			expect(getMatrixRow(m, -1)).toBeNull();
		});

		it("returns null for invalid matrix", () => {
			// @ts-expect-error
			expect(getMatrixRow(null, 0)).toBeNull();
		});
	});

	describe("getMatrixColumn", () => {
		const m = [
			[1, 2, 3],
			[4, 5, 6],
		];

		it("returns the correct column", () => {
			expect(getMatrixColumn(m, 1)).toEqual([2, 5]);
		});

		it("returns null for out of bounds", () => {
			expect(getMatrixColumn(m, 3)).toBeNull();
			expect(getMatrixColumn(m, -1)).toBeNull();
		});

		it("returns null for invalid matrix", () => {
			// @ts-expect-error
			expect(getMatrixColumn(null, 0)).toBeNull();
		});
	});

	describe("getMatrixDiagonal", () => {
		it("returns the main diagonal", () => {
			expect(
				getMatrixDiagonal([
					[1, 2],
					[3, 4],
				]),
			).toEqual([1, 4]);

			expect(
				getMatrixDiagonal([
					[1, 2, 3],
					[4, 5, 6],
				]),
			).toEqual([1, 5]);
		});

		it("returns null for invalid matrix", () => {
			// @ts-expect-error
			expect(getMatrixDiagonal(null)).toBeNull();
			expect(getMatrixDiagonal([])).toBeNull();
		});
	});

	describe("getMatrixAntiDiagonal", () => {
		it("returns the anti-diagonal", () => {
			expect(
				getMatrixAntiDiagonal([
					[1, 2],
					[3, 4],
				]),
			).toEqual([2, 3]);

			expect(
				getMatrixAntiDiagonal([
					[1, 2, 3],
					[4, 5, 6],
				]),
			).toEqual([3, 5]);
		});

		it("returns null for invalid matrix", () => {
			// @ts-expect-error
			expect(getMatrixAntiDiagonal(null)).toBeNull();
			expect(getMatrixAntiDiagonal([])).toBeNull();
		});
	});

	describe("getMatrixSize", () => {
		it("returns correct size", () => {
			expect(
				getMatrixSize([
					[1, 2, 3],
					[4, 5, 6],
				]),
			).toEqual({ rows: 2, cols: 3 });
		});

		it("returns null for invalid matrix", () => {
			// @ts-expect-error
			expect(getMatrixSize(null)).toBeNull();
			expect(getMatrixSize([])).toBeNull();
		});
	});

	describe("transposeMatrix", () => {
		it("transposes a matrix", () => {
			expect(
				transposeMatrix([
					[1, 2, 3],
					[4, 5, 6],
				]),
			).toEqual([
				[1, 4],
				[2, 5],
				[3, 6],
			]);
		});

		it("returns null for invalid matrix", () => {
			// @ts-expect-error
			expect(transposeMatrix(null)).toBeNull();
			expect(transposeMatrix([])).toBeNull();
		});
	});

	describe("createIdentityMatrix", () => {
		it("creates identity matrix", () => {
			expect(createIdentityMatrix(3)).toEqual([
				[1, 0, 0],
				[0, 1, 0],
				[0, 0, 1],
			]);
		});

		it("returns null for size <= 0", () => {
			expect(createIdentityMatrix(0)).toBeNull();
			expect(createIdentityMatrix(-2)).toBeNull();
		});
	});

	describe("getMatrixMinor", () => {
		const m = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];

		it("returns the correct minor", () => {
			expect(getMatrixMinor(m, 0, 0)).toEqual([
				[5, 6],
				[8, 9],
			]);
			expect(getMatrixMinor(m, 1, 1)).toEqual([
				[1, 3],
				[7, 9],
			]);
		});

		it("returns null for invalid matrix", () => {
			// @ts-expect-error
			expect(getMatrixMinor(null, 0, 0)).toBeNull();
			expect(getMatrixMinor([], 0, 0)).toBeNull();
		});
	});

	describe("getMatrixDeterminant", () => {
		it("returns determinant for 1x1", () => {
			expect(getMatrixDeterminant([[5]])).toBe(5);
		});

		it("returns determinant for 2x2", () => {
			expect(
				getMatrixDeterminant([
					[1, 2],
					[3, 4],
				]),
			).toBe(-2);
		});

		it("returns determinant for 3x3", () => {
			expect(
				getMatrixDeterminant([
					[6, 1, 1],
					[4, -2, 5],
					[2, 8, 7],
				]),
			).toBe(-306);
		});

		it("returns null for invalid matrix", () => {
			// @ts-expect-error
			expect(getMatrixDeterminant(null)).toBeNull();
			expect(getMatrixDeterminant([])).toBeNull();
		});
	});

	describe("isValidMatrix", () => {
		it("returns true for valid matrix", () => {
			expect(
				isValidMatrix([
					[1, 2],
					[3, 4],
				]),
			).toBe(true);
		});

		it("returns false for ragged matrix", () => {
			expect(isValidMatrix([[1, 2], [3]])).toBe(false);
		});

		it("returns false for empty or invalid", () => {
			expect(isValidMatrix([])).toBe(false);
			// @ts-expect-error
			expect(isValidMatrix(null)).toBe(false);
		});
	});

	describe("areMatrixEqual", () => {
		it("returns true for equal matrices", () => {
			expect(
				areMatrixEqual(
					[
						[1, 2],
						[3, 4],
					],
					[
						[1, 2],
						[3, 4],
					],
				),
			).toBe(true);
		});

		it("returns false for different matrices", () => {
			expect(
				areMatrixEqual(
					[
						[1, 2],
						[3, 4],
					],
					[
						[1, 2],
						[4, 3],
					],
				),
			).toBe(false);
		});

		it("returns false for different sizes", () => {
			expect(
				areMatrixEqual(
					[[1, 2]],
					[
						[1, 2],
						[3, 4],
					],
				),
			).toBe(false);
		});

		it("returns false for invalid matrices", () => {
			// @ts-expect-error
			expect(areMatrixEqual(null, [[1]])).toBe(false);
			// @ts-expect-error
			expect(areMatrixEqual([[1]], null)).toBe(false);
		});
	});
});
