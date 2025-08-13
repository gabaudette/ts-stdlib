import { describe, it, expect } from "vitest";
import { isJsonString, isJsonObject } from "./is-json";

describe("isJsonString", () => {
	it("returns true for valid JSON strings", () => {
		expect(isJsonString('{"a":1}')).toBe(true);
		expect(isJsonString("[1,2,3]")).toBe(true);
		expect(isJsonString('"string"')).toBe(true);
		expect(isJsonString("123")).toBe(true); // valid JSON number
		expect(isJsonString("true")).toBe(true);
		expect(isJsonString("null")).toBe(true);
	});

	it("returns false for invalid JSON strings", () => {
		expect(isJsonString("{a:1}")).toBe(false);
		expect(isJsonString("unquoted string")).toBe(false);
		expect(isJsonString('{"a":1')).toBe(false);
		expect(isJsonString("")).toBe(false);
	});

	it("returns false for non-string values", () => {
		expect(isJsonString(123)).toBe(false);
		expect(isJsonString({})).toBe(false);
		expect(isJsonString([])).toBe(false);
		expect(isJsonString(null)).toBe(false);
		expect(isJsonString(undefined)).toBe(false);
		expect(isJsonString(true)).toBe(false);
	});
});

describe("isJsonObject", () => {
	it("returns true for plain objects", () => {
		expect(isJsonObject({ a: 1 })).toBe(true);
		expect(isJsonObject({})).toBe(true);
		expect(isJsonObject({ nested: { b: 2 } })).toBe(true);
	});

	it("returns true for arrays", () => {
		expect(isJsonObject([1, 2, 3])).toBe(true);
		expect(isJsonObject([])).toBe(true);
	});

	it("returns false for non-objects", () => {
		expect(isJsonObject("string")).toBe(false);
		expect(isJsonObject(123)).toBe(false);
		expect(isJsonObject(true)).toBe(false);
		expect(isJsonObject(null)).toBe(false);
		expect(isJsonObject(undefined)).toBe(false);
	});

	it("returns false for objects that can't be stringified", () => {
		const circular: any = {};
		circular.self = circular;
		expect(isJsonObject(circular)).toBe(false);

		const bigIntObj = { value: BigInt(10) };
		expect(isJsonObject(bigIntObj)).toBe(false);
	});
});
