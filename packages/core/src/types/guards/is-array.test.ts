import { describe, expect, it } from "vitest";
import { isArray } from "./is-array";

describe("isArray", () => {
	it("returns true for arrays", () => {
		expect(isArray([])).toBe(true);
		expect(isArray([1, 2, 3])).toBe(true);
		expect(isArray([])).toBe(true);
		expect(isArray(Array.of(1, 2, 3))).toBe(true);
	});

	it("returns false for non-arrays", () => {
		expect(isArray({})).toBe(false);
		expect(isArray("string")).toBe(false);
		expect(isArray(123)).toBe(false);
		expect(isArray(null)).toBe(false);
		expect(isArray(undefined)).toBe(false);
		expect(isArray(() => {})).toBe(false);
		expect(isArray(new Set([1, 2, 3]))).toBe(false);
		expect(isArray(new Map())).toBe(false);
		expect(isArray(true)).toBe(false);
		expect(isArray(Symbol("sym"))).toBe(false);
	});
});
