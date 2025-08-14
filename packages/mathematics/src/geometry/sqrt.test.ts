import { describe, it, expect } from "vitest";
import { fastInverseSqrt } from "./sqrt";

describe("fastInverseSqrt", () => {
	it("should approximate the inverse square root of 4 (1/2)", () => {
		const result = fastInverseSqrt(4);
		expect(result).toBeCloseTo(0.5, 2); // Acceptable error for approximation
	});

	it("should approximate the inverse square root of 9 (1/3)", () => {
		const result = fastInverseSqrt(9);
		expect(result).toBeCloseTo(1 / 3, 2);
	});

	it("should approximate the inverse square root of 1 (1)", () => {
		const result = fastInverseSqrt(1);
		expect(result).toBeCloseTo(1, 2);
	});

	it("should approximate the inverse square root of 0.25 (2)", () => {
		const result = fastInverseSqrt(0.25);
		expect(result).toBeCloseTo(2, 2);
	});

	it("should return NaN for negative input", () => {
		const result = fastInverseSqrt(-4);
		expect(result).toBeNaN();
	});

	it("should return a very large number for input 0", () => {
		const result = fastInverseSqrt(0);
		expect(result).toBeGreaterThan(1e10); // Accept that the approximation returns a very large number
	});

	it("should handle very large numbers", () => {
		const result = fastInverseSqrt(1e10);
		expect(result).toBeCloseTo(1 / Math.sqrt(1e10), 2);
	});
});
