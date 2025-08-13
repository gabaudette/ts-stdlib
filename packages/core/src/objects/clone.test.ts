import { describe, it, expect } from "vitest";
import { clone } from "./clone";

describe("clone", () => {
	it("should return primitives as is", () => {
		expect(clone(42)).toBe(42);
		expect(clone("hello")).toBe("hello");
		expect(clone(true)).toBe(true);
		expect(clone(null)).toBe(null);
		expect(clone(undefined)).toBe(undefined);
	});

	it("should deep clone a simple object", () => {
		const original = { a: 1, b: 2 };
		const copy = clone(original);
		expect(copy).toEqual(original);
		expect(copy).not.toBe(original);
	});

	it("should deep clone nested objects", () => {
		const original = { a: { b: { c: 3 } } };
		const copy = clone(original);
		expect(copy).toEqual(original);
		expect(copy.a).not.toBe(original.a);
		expect(copy.a.b).not.toBe(original.a.b);
	});

	it("should deep clone arrays", () => {
		const original = [1, 2, 3];
		const copy = clone(original);
		expect(copy).toEqual(original);
		expect(copy).not.toBe(original);
	});

	it("should deep clone arrays of objects", () => {
		const original = [{ a: 1 }, { b: 2 }];
		const copy = clone(original);
		expect(copy).toEqual(original);
		expect(copy[0]).not.toBe(original[0]);
		expect(copy[1]).not.toBe(original[1]);
	});

	it("should deep clone objects with arrays", () => {
		const original = { arr: [1, 2, { x: 3 }] };
		const copy = clone(original);
		expect(copy).toEqual(original);
		expect(copy.arr).not.toBe(original.arr);
		expect(copy.arr[2]).not.toBe(original.arr[2]);
	});

	it("should handle empty objects and arrays", () => {
		expect(clone({})).toEqual({});
		expect(clone([])).toEqual([]);
	});

	it("should not copy prototype properties", () => {
		function Foo(this: { x: number }) {
			this.x = 1;
		}
		Foo.prototype.y = 2;
		const original = new (Foo as unknown as { new (): { x: number } })();
		const copy = clone(original);
		expect(copy).toEqual({ x: 1 });
		expect((copy as { y?: number }).y).toBeUndefined();
	});
});
