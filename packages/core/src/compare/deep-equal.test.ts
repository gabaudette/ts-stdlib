import { describe, expect, it } from "vitest";
import { deepEqual } from "./deep-equal";

describe("deepEqual", () => {
	it("returns true for strictly equal primitives", () => {
		expect(deepEqual(1, 1)).toBe(true);
		expect(deepEqual("a", "a")).toBe(true);
		expect(deepEqual(true, true)).toBe(true);
		expect(deepEqual(null, null)).toBe(true);
		expect(deepEqual(undefined, undefined)).toBe(true);
	});

	it("returns false for different primitives", () => {
		expect(deepEqual(1, 2)).toBe(false);
		expect(deepEqual("a", "b")).toBe(false);
		expect(deepEqual(true, false)).toBe(false);
		expect(deepEqual(null, undefined)).toBe(false);
	});

	it("returns true for deeply equal arrays", () => {
		expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
		expect(deepEqual([], [])).toBe(true);
		expect(deepEqual([[1], [2]], [[1], [2]])).toBe(true);
	});

	it("returns false for arrays with different elements or lengths", () => {
		expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
		expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false);
		expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
	});

	it("returns true for deeply equal objects", () => {
		expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
		expect(deepEqual({}, {})).toBe(true);
		expect(deepEqual({ x: { y: [1, 2] } }, { x: { y: [1, 2] } })).toBe(true);
	});

	it("returns false for objects with different keys or values", () => {
		expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
		expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false);
		expect(deepEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
	});

	it("returns true for equal Date objects", () => {
		expect(deepEqual(new Date(0), new Date(0))).toBe(true);
		expect(deepEqual(new Date("2020-01-01"), new Date("2020-01-01"))).toBe(
			true,
		);
	});

	it("returns false for different Date objects", () => {
		expect(deepEqual(new Date(0), new Date(1))).toBe(false);
		expect(deepEqual(new Date("2020-01-01"), new Date("2021-01-01"))).toBe(
			false,
		);
	});

	it("handles nested structures", () => {
		const a = { x: [1, { y: 2 }], z: { w: [3, 4] } };
		const b = { x: [1, { y: 2 }], z: { w: [3, 4] } };
		expect(deepEqual(a, b)).toBe(true);

		const c = { x: [1, { y: 3 }], z: { w: [3, 4] } };
		expect(deepEqual(a, c)).toBe(false);
	});

	it("handles null values correctly", () => {
		expect(deepEqual(null, null)).toBe(true);
		expect(deepEqual(null, {})).toBe(false);
		expect(deepEqual({}, null)).toBe(false);
	});
});
