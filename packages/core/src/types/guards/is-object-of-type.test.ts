import { describe, it, expect } from "vitest";
import { isObjectOfType, isObjectOfTypeWithKeys } from "./is-object-of-type";

function isA(val: unknown): val is { a: number } {
	return (
		typeof val === "object" &&
		val !== null &&
		typeof (val as { a?: unknown }).a === "number"
	);
}

// Type guard for { a: number, b: string }
function isAB(val: unknown): val is { a: number; b: string } {
	return (
		typeof val === "object" &&
		val !== null &&
		typeof (val as unknown as { a?: unknown }).a === "number" &&
		typeof (val as unknown as { b?: unknown }).b === "string"
	);
}

describe("isObjectOfType", () => {
	it("returns true for object matching type guard", () => {
		expect(isObjectOfType({ a: 1 }, isA)).toBe(true);
	});

	it("returns false for object not matching type guard", () => {
		expect(isObjectOfType({ a: "1" }, isA)).toBe(false);
	});

	it("returns false for null", () => {
		expect(isObjectOfType(null, isA)).toBe(false);
	});

	it("returns false for non-object values", () => {
		expect(isObjectOfType(42, isA)).toBe(false);
		expect(isObjectOfType("test", isA)).toBe(false);
		expect(isObjectOfType(undefined, isA)).toBe(false);
		expect(isObjectOfType(true, isA)).toBe(false);
	});

	it("works with arrays if type guard allows", () => {
		const isArray = (val: unknown): val is number[] =>
			Array.isArray(val) && val.every((x) => typeof x === "number");
		expect(isObjectOfType([1, 2, 3], isArray)).toBe(true);
		expect(isObjectOfType([1, "2", 3], isArray)).toBe(false);
	});
});

describe("isObjectOfTypeWithKeys", () => {
	it("returns true for object matching type guard and all keys present", () => {
		expect(isObjectOfTypeWithKeys({ a: 1, b: "x" }, isAB, ["a", "b"])).toBe(
			true,
		);
	});

	it("returns false if type guard fails", () => {
		expect(isObjectOfTypeWithKeys({ a: 1, b: 2 }, isAB, ["a", "b"])).toBe(
			false,
		);
	});

	it("returns false if any key is missing", () => {
		expect(
			isObjectOfTypeWithKeys({ a: 1 }, isA, ["a", "b" as keyof { a: number }]),
		).toBe(false);
	});

	it("returns false for non-object values", () => {
		expect(isObjectOfTypeWithKeys(42, isA, ["a"])).toBe(false);
		expect(isObjectOfTypeWithKeys(null, isA, ["a"])).toBe(false);
	});

	it("returns true if object has extra keys", () => {
		expect(
			isObjectOfTypeWithKeys({ a: 1, b: "x", c: true }, isAB, ["a", "b"]),
		).toBe(true);
	});
});
