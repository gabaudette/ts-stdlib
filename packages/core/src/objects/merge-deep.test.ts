import { describe, expect, it } from "vitest";
import { mergeDeep } from "./merge-deep";

describe("mergeDeep", () => {
	it("merges flat objects", () => {
		const target = { a: 1, b: 2 };
		const source = { b: 3, c: 4 };
		const result = mergeDeep({ ...target }, source);
		expect(result).toEqual({ a: 1, b: 3, c: 4 });
	});

	it("deeply merges nested objects", () => {
		const target = { a: 1, b: { c: 2, d: 5 } };
		const source = { b: { d: 3, e: 4 }, f: 6 };
		// biome-ignore lint/suspicious/noExplicitAny: Target and source are deeply cloned
		const result = mergeDeep({ ...target, b: { ...target.b } }, source as any);
		expect(result).toEqual({ a: 1, b: { c: 2, d: 3, e: 4 }, f: 6 });
	});

	it("overwrites non-object values", () => {
		const target = { a: 1, b: { c: 2 } };
		const source = { b: 5 };
		// biome-ignore lint/suspicious/noExplicitAny: Target and source are deeply cloned
		const result = mergeDeep({ ...target, b: { ...target.b } }, source as any);
		expect(result).toEqual({ a: 1, b: 5 });
	});

	it("handles arrays as values (source array overwrites target array)", () => {
		const target = { a: [1, 2], b: 2 };
		const source = { a: [3, 4] };
		const result = mergeDeep({ ...target }, source);
		expect(result).toEqual({ a: [3, 4], b: 2 });
	});

	it("does not merge prototype properties", () => {
		class Proto {
			x: number;
			constructor() {
				this.x = 1;
			}
			y?: number;
		}
		Proto.prototype.y = 2;
		const target = new Proto();
		const source = { x: 3, y: 4 };
		const result = mergeDeep({ ...target }, source);
		expect(result).toEqual({ x: 3, y: 4 });
	});

	it("returns the target object (mutates target)", () => {
		const target: Record<string, unknown> = { a: 1 };
		const source: Record<string, unknown> = { b: 2 };
		const result = mergeDeep(target, source);
		expect(result).toBe(target);
		expect(result).toEqual({ a: 1, b: 2 });
	});

	it("handles empty source", () => {
		const target = { a: 1 };
		const source = {};
		const result = mergeDeep({ ...target }, source);
		expect(result).toEqual({ a: 1 });
	});

	it("handles empty target", () => {
		const target = {};
		const source = { a: 1 };
		const result = mergeDeep({ ...target }, source);
		expect(result).toEqual({ a: 1 });
	});
});
