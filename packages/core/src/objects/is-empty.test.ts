import { describe, it, expect } from "vitest";
import { isEmptyObject } from "./is-empty";

describe("isEmptyObject", () => {
	it("returns true for an empty object", () => {
		expect(isEmptyObject({})).toBe(true);
	});

	it("returns false for an object with one property", () => {
		expect(isEmptyObject({ a: 1 })).toBe(false);
	});

	it("returns false for an object with multiple properties", () => {
		expect(isEmptyObject({ a: 1, b: 2 })).toBe(false);
	});

	it("returns true for an object with no own enumerable properties", () => {
		const obj = Object.create({ a: 1 });
		expect(isEmptyObject(obj)).toBe(true);
	});

	it("returns false for an object with non-enumerable own property", () => {
		const obj: Record<string, unknown> = {};
		Object.defineProperty(obj, "hidden", {
			value: 42,
			enumerable: false,
		});
		expect(isEmptyObject(obj)).toBe(true);
	});

	it("returns true for an object created with null prototype and no properties", () => {
		const obj = Object.create(null);
		expect(isEmptyObject(obj)).toBe(true);
	});

	it("returns false for an object created with null prototype and properties", () => {
		const obj = Object.create(null);
		obj.a = 1;
		expect(isEmptyObject(obj)).toBe(false);
	});
});
