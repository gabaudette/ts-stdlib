import { describe, it, expect } from "vitest";
import { pick } from "./pick";

describe("pick", () => {
	it("should pick specified keys from an object", () => {
		const user = { id: 1, name: "Alice", age: 30 };
		const result = pick(user, ["id", "name"]);
		expect(result).toEqual({ id: 1, name: "Alice" });
	});

	it("should return an empty object if no keys are provided", () => {
		const obj = { a: 1, b: 2 };
		const result = pick(obj, []);
		expect(result).toEqual({});
	});

	it("should ignore keys that do not exist in the object", () => {
		const obj = { a: 1, b: 2 };
		// @ts-expect-error: 'c' is not a key of obj
		const result = pick(obj, ["a", "c"]);
		expect(result).toEqual({ a: 1 });
	});

	it("should work with objects with symbol keys", () => {
		const sym = Symbol("s");
		const obj = { a: 1, [sym]: 2 };
		const result = pick(obj, ["a" as keyof typeof obj, sym]);
		expect(result).toEqual({ a: 1, [sym]: 2 });
	});

	it("should not mutate the original object", () => {
		const obj = { a: 1, b: 2 };
		pick(obj, ["a"]);
		expect(obj).toEqual({ a: 1, b: 2 });
	});

	it("should work with empty objects", () => {
		const obj = {};
		const result = pick(obj, []);
		expect(result).toEqual({});
	});
});
