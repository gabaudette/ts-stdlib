import { describe, it, expect } from "vitest";
import { isNumber, isNumberArray } from "./is-number";

describe("isNumber", () => {
	it("returns true for numbers", () => {
		expect(isNumber(0)).toBe(true);
		expect(isNumber(42)).toBe(true);
		expect(isNumber(-1)).toBe(true);
		expect(isNumber(NaN)).toBe(true);
		expect(isNumber(Infinity)).toBe(true);
		expect(isNumber(-Infinity)).toBe(true);
	});

	it("returns false for non-numbers", () => {
		expect(isNumber("42")).toBe(false);
		expect(isNumber(null)).toBe(false);
		expect(isNumber(undefined)).toBe(false);
		expect(isNumber({})).toBe(false);
		expect(isNumber([])).toBe(false);
		expect(isNumber(true)).toBe(false);
		expect(isNumber(() => 1)).toBe(false);
		expect(isNumber(Symbol("1"))).toBe(false);
	});
});

describe("isNumberArray", () => {
	it("returns true for arrays of numbers", () => {
		expect(isNumberArray([1, 2, 3])).toBe(true);
		expect(isNumberArray([])).toBe(true); // empty array is valid
		expect(isNumberArray([0, -1, 3.14, NaN, Infinity])).toBe(true);
	});

	it("returns false for arrays with non-number elements", () => {
		expect(isNumberArray([1, "2", 3])).toBe(false);
		expect(isNumberArray([null, 2, 3])).toBe(false);
		expect(isNumberArray([1, undefined, 3])).toBe(false);
		expect(isNumberArray([1, {}, 3])).toBe(false);
		expect(isNumberArray([1, [], 3])).toBe(false);
		expect(isNumberArray([1, true, 3])).toBe(false);
	});

	it("returns false for non-arrays", () => {
		expect(isNumberArray(42)).toBe(false);
		expect(isNumberArray("not an array")).toBe(false);
		expect(isNumberArray({})).toBe(false);
		expect(isNumberArray(null)).toBe(false);
		expect(isNumberArray(undefined)).toBe(false);
	});
});
