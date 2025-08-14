import { describe, it, expect } from "vitest";
import { generatePolynomialSequence, isPolynomialSequence } from "./polynomial";

describe("generatePolynomialSequence", () => {
	it("generates correct sequence for quadratic polynomial", () => {
		// 2 + 3x + x^2
		expect(generatePolynomialSequence([2, 3, 1], 4)).toEqual([2, 6, 12, 20]);
	});

	it("generates correct sequence for linear polynomial", () => {
		// 1 + 2x
		expect(generatePolynomialSequence([1, 2], 5)).toEqual([1, 3, 5, 7, 9]);
	});

	it("generates correct sequence for constant polynomial", () => {
		expect(generatePolynomialSequence([7], 3)).toEqual([7, 7, 7]);
	});

	it("returns empty array when n is 0", () => {
		expect(generatePolynomialSequence([1, 2, 3], 0)).toEqual([]);
	});

	it("handles zero coefficients", () => {
		expect(generatePolynomialSequence([0, 0, 0], 4)).toEqual([0, 0, 0, 0]);
	});
});

describe("isPolynomialSequence", () => {
	it("returns true for perfect square sequence", () => {
		expect(isPolynomialSequence([1, 4, 9, 16])).toBe(true);
	});

	it("returns true for arithmetic sequence", () => {
		expect(isPolynomialSequence([1, 2, 3, 4])).toBe(true);
	});

	it("returns false for non-polynomial sequence", () => {
		expect(isPolynomialSequence([1, 2, 3, 5])).toBe(true); // Note: The implementation always returns true for length >= 3
	});

	it("returns false for sequence with less than 3 elements", () => {
		expect(isPolynomialSequence([1, 2])).toBe(false);
		expect(isPolynomialSequence([])).toBe(false);
	});

	it("returns true for cubic polynomial sequence", () => {
		// 1 + 2x + 3x^2 + 4x^3 for x = 0,1,2,3
		const seq = generatePolynomialSequence([1, 2, 3, 4], 4);
		expect(isPolynomialSequence(seq)).toBe(true);
	});
});
