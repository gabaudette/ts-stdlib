import { describe, it, expect } from "vitest";
import {
	keys,
	values,
	entries,
	mapValues,
	mapKeys,
	invert,
} from "./object-manipulation";

describe("object-manipulation", () => {
	describe("keys", () => {
		it("returns the keys of a simple object", () => {
			const obj = { a: 1, b: 2 };
			expect(keys(obj)).toEqual(["a", "b"]);
		});

		it("returns an empty array for an empty object", () => {
			expect(keys({})).toEqual([]);
		});

		it("does not include inherited properties", () => {
			const proto = { x: 1 };
			const obj = Object.create(proto);
			obj.a = 2;
			expect(keys(obj)).toEqual(["a"]);
		});
	});

	describe("values", () => {
		it("returns the values of a simple object", () => {
			const obj = { a: 1, b: "test" };
			expect(values(obj)).toEqual([1, "test"]);
		});

		it("returns an empty array for an empty object", () => {
			expect(values({})).toEqual([]);
		});
	});

	describe("entries", () => {
		it("returns the entries of a simple object", () => {
			const obj = { a: 1, b: 2 };
			expect(entries(obj)).toEqual([
				["a", 1],
				["b", 2],
			]);
		});

		it("returns an empty array for an empty object", () => {
			expect(entries({})).toEqual([]);
		});
	});

	describe("mapValues", () => {
		it("maps values correctly", () => {
			const obj = { a: 1, b: 2, c: 3 };
			const result = mapValues(obj, (value) => value * 2);
			expect(result).toEqual({ a: 2, b: 4, c: 6 });
		});

		it("can use key in mapping function", () => {
			const obj = { a: 1, b: 2 };
			const result = mapValues(obj, (value, key) => `${key}:${value}`);
			expect(result).toEqual({ a: "a:1", b: "b:2" });
		});

		it("returns an empty object for an empty input", () => {
			expect(mapValues({}, (v) => v)).toEqual({});
		});
	});

	describe("mapKeys", () => {
		it("maps keys to uppercase", () => {
			const obj = { a: 1, b: 2 };
			const result = mapKeys(obj, (key) => (key as string).toUpperCase());
			expect(result).toEqual({ A: 1, B: 2 });
		});

		it("handles numeric keys as strings", () => {
			const obj = { 1: "a", 2: "b" };
			const result = mapKeys(obj, (key) => `key${key}`);
			expect(result).toEqual({ key1: "a", key2: "b" });
		});

		it("returns an empty object for an empty input", () => {
			expect(mapKeys({}, (k) => k)).toEqual({});
		});
	});

	describe("invert", () => {
		it("inverts keys and values", () => {
			const obj = { a: 1, b: 2 };
			const result = invert(obj);
			expect(result).toEqual({ 1: "a", 2: "b" });
		});

		it("handles duplicate values (last key wins)", () => {
			const obj = { a: 1, b: 2, c: 1 };
			const result = invert(obj);
			// 'c' should overwrite 'a' for value 1
			expect(result).toEqual({ 1: "c", 2: "b" });
		});

		it("works with string values", () => {
			const obj = { a: "x", b: "y" };
			const result = invert(obj);
			expect(result).toEqual({ x: "a", y: "b" });
		});

		it("returns an empty object for an empty input", () => {
			expect(invert({})).toEqual({});
		});
	});
});
