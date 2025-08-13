import { describe, it, expect, assert } from "vitest";
import { isDefined, filterDefined } from "./is-defined";

describe("isDefined", () => {
	it("returns true for non-null, non-undefined values", () => {
		expect(isDefined(0)).toBe(true);
		expect(isDefined("")).toBe(true);
		expect(isDefined(false)).toBe(true);
		expect(isDefined([])).toBe(true);
		expect(isDefined({})).toBe(true);
	});

	it("returns false for undefined", () => {
		expect(isDefined(undefined)).toBe(false);
	});

	it("returns false for null", () => {
		expect(isDefined(null)).toBe(false);
	});

	it("narrows type correctly in a type guard", () => {
		const value: string | undefined = "hello";
		if (isDefined(value)) {
			assert(typeof value !== "undefined");
			expect(typeof value).toBe("string");
		}
	});
});

describe("filterDefined", () => {
	it("filters out undefined and null values", () => {
		const arr = [1, undefined, 2, null, 3];
		expect(filterDefined(arr)).toEqual([1, 2, 3]);
	});

	it("returns an empty array if all values are undefined or null", () => {
		expect(filterDefined([undefined, null, undefined])).toEqual([]);
	});

	it("returns the same array if no values are undefined or null", () => {
		expect(filterDefined([1, 2, 3])).toEqual([1, 2, 3]);
	});

	it("works with strings", () => {
		const arr = ["a", undefined, "b", null, "c"];
		expect(filterDefined(arr)).toEqual(["a", "b", "c"]);
	});

	it("preserves types after filtering", () => {
		const arr: (number | undefined | null)[] = [1, undefined, 2, null, 3];
		const result = filterDefined(arr);
		// Type assertion: result should be number[]
		result.forEach((num) => expect(typeof num).toBe("number"));
	});
});
