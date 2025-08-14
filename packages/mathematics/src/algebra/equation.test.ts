import { describe, it, expect } from "vitest";
import { solveLinearEquation, solveQuadraticEquation } from "./equation";

describe("solveLinearEquation", () => {
	it("solves a simple linear equation", () => {
		expect(solveLinearEquation(2, -4)).toBe(2);
		expect(solveLinearEquation(-3, 9)).toBe(3);
		expect(solveLinearEquation(0.5, -1)).toBe(2);
	});

	it("returns null for a = 0 and b = 0 (infinitely many solutions)", () => {
		expect(solveLinearEquation(0, 0)).toBeNull();
	});

	it("returns null for a = 0 and b != 0 (no solution)", () => {
		expect(solveLinearEquation(0, 5)).toBeNull();
		expect(solveLinearEquation(0, -3)).toBeNull();
	});
});

describe("solveQuadraticEquation", () => {
	it("returns two real roots for positive discriminant", () => {
		// x^2 - 3x + 2 = 0 => roots: 1 and 2
		expect(solveQuadraticEquation(1, -3, 2)).toEqual([2, 1]);
		// 2x^2 - 8x + 6 = 0 => roots: 3 and 1
		expect(solveQuadraticEquation(2, -8, 6)).toEqual([3, 1]);
	});

	it("returns two equal roots for zero discriminant", () => {
		// x^2 - 2x + 1 = 0 => root: 1 (double root)
		expect(solveQuadraticEquation(1, -2, 1)).toEqual([1, 1]);
	});

	it("returns null for negative discriminant (no real roots)", () => {
		// x^2 + x + 1 = 0 has no real roots
		expect(solveQuadraticEquation(1, 1, 1)).toBeNull();
	});

	it("handles negative and fractional coefficients", () => {
		// -x^2 + 4x - 4 = 0 => roots: 2, 2 (double root)
		expect(solveQuadraticEquation(-1, 4, -4)).toEqual([2, 2]);
		// 0.5x^2 - x + 0.5 = 0 => root: 1 (double root)
		expect(solveQuadraticEquation(0.5, -1, 0.5)).toEqual([1, 1]);
	});
});
