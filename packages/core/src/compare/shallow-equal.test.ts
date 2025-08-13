import { describe, it, expect } from "vitest";
import { shallowEqual } from "./shallow-equal";

describe("shallowEqual", () => {
	it("returns true for strictly equal primitives", () => {
		expect(shallowEqual(1, 1)).toBe(true);
		expect(shallowEqual("a", "a")).toBe(true);
		expect(shallowEqual(true, true)).toBe(true);
		expect(shallowEqual(null, null)).toBe(true);
		expect(shallowEqual(undefined, undefined)).toBe(true);
	});

	it("returns false for different primitives", () => {
		expect(shallowEqual(1, 2)).toBe(false);
		expect(shallowEqual("a", "b")).toBe(false);
		expect(shallowEqual(true, false)).toBe(false);
		expect(shallowEqual(null, undefined)).toBe(false);
	});

	it("returns true for same array reference", () => {
		const arr = [1, 2, 3];
		expect(shallowEqual(arr, arr)).toBe(true);
	});

	it("returns true for arrays with same elements", () => {
		expect(shallowEqual([1, 2, 3], [1, 2, 3])).toBe(true);
		expect(shallowEqual([], [])).toBe(true);
	});

	it("returns false for arrays with different lengths", () => {
		expect(shallowEqual([1, 2], [1, 2, 3])).toBe(false);
	});

	it("returns false for arrays with different elements", () => {
		expect(shallowEqual([1, 2, 3], [1, 2, 4])).toBe(false);
	});

	it("returns true for same object reference", () => {
		const obj = { a: 1, b: 2 };
		expect(shallowEqual(obj, obj)).toBe(true);
	});

	it("returns true for objects with same keys and values", () => {
		expect(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
		expect(shallowEqual({}, {})).toBe(true);
	});

	it("returns false for objects with different keys", () => {
		expect(shallowEqual({ a: 1, b: 2 }, { a: 1, c: 2 })).toBe(false);
		expect(shallowEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
	});

	it("returns false for objects with different values", () => {
		expect(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
	});

	it("returns false for nested objects/arrays with different references", () => {
		expect(shallowEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(false);
		expect(shallowEqual([[1]], [[1]])).toBe(false);
	});

	it("returns false if one is null and the other is object", () => {
		expect(shallowEqual(null, {})).toBe(false);
		expect(shallowEqual({}, null)).toBe(false);
	});
});
