import { describe, it, expect } from "vitest";
import { has } from "./has";

describe("has", () => {
	it("returns true for existing own property", () => {
		const obj = { a: 1, b: 2 };
		expect(has(obj, "a")).toBe(true);
		expect(has(obj, "b")).toBe(true);
	});

	it("returns false for non-existing property", () => {
		const obj = { a: 1 };
		// @ts-expect-error
		expect(has(obj, "b")).toBe(false);
	});

	it("returns true for properties with undefined values", () => {
		const obj = { a: undefined };
		expect(has(obj, "a")).toBe(true);
	});

	it("returns true for inherited properties", () => {
		const proto = { x: 42 };
		const obj = Object.create(proto);
		expect(has(obj, "x")).toBe(true);
	});


	it("returns false for properties not in object or its prototype", () => {
		const obj = Object.create(null);
		expect(has(obj, "toString" as string)).toBe(false);
	});
});
