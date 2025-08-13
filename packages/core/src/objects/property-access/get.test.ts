import { describe, it, expect } from "vitest";
import { get } from "./get";

describe("get", () => {
	it("should return the value of an existing property", () => {
		const obj = { a: 1, b: "test", c: true };
		expect(get(obj, "a")).toBe(1);
		expect(get(obj, "b")).toBe("test");
		expect(get(obj, "c")).toBe(true);
	});

	it("should return undefined for a missing property", () => {
		const obj = { x: 42 };
		// @ts-expect-error: 'y' does not exist on type
		expect(get(obj, "y")).toBeUndefined();
	});

	it("should work with objects with optional properties", () => {
		type User = { id: number; name?: string };
		const user: User = { id: 1 };
		expect(get(user, "name")).toBeUndefined();
		expect(get(user, "id")).toBe(1);
	});

	it("should work with arrays (numeric keys)", () => {
		const arr = [10, 20, 30];
		expect(get(arr, 0)).toBe(10);
		expect(get(arr, 2)).toBe(30);
		expect(get(arr, 5)).toBeUndefined();
	});

	it("should work with objects with symbol keys", () => {
		const sym = Symbol("key");
		const obj = { [sym]: "value" };
		expect(get(obj, sym)).toBe("value");
	});

	it("should return undefined if property exists but value is undefined", () => {
		const obj = { a: undefined };
		expect(get(obj, "a")).toBeUndefined();
	});
});
