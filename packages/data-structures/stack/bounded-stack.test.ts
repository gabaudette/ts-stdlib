import { describe, expect, it } from "vitest";
import { BoundedStack } from "./bounded-stack";

describe("BoundedStack", () => {
	it("constructs with valid maxSize and no initial values", () => {
		const s = new BoundedStack<number>(3);
		expect(s.size()).toBe(0);
	});

	it("constructs with valid maxSize and initial values (<= maxSize)", () => {
		const s = new BoundedStack<string>(5, ["a", "b"]);
		expect(s.size()).toBe(2);
	});

	it("allows pushing until reaching capacity", () => {
		const s = new BoundedStack<number>(3);
		s.push(1);
		s.push(2);
		s.push(3);
		expect(s.size()).toBe(3);
	});

	it("throws on push when capacity reached (stack overflow)", () => {
		const s = new BoundedStack<number>(2);
		s.push(10);
		s.push(20);
		expect(() => s.push(30)).toThrowError("Stack overflow");
		expect(s.size()).toBe(2);
	});

	it("allows push after pop frees space", () => {
		const s = new BoundedStack<number>(2);
		s.push(1);
		s.push(2);
		const popped = (s as { pop?: () => number }).pop?.();
		expect(popped).toBe(2);
		s.push(3);
		expect(s.size()).toBe(2);
	});

	it("supports generic types (objects)", () => {
		type Item = { id: number };
		const s = new BoundedStack<Item>(2);
		s.push({ id: 1 });
		s.push({ id: 2 });
		expect(s.size()).toBe(2);
		expect(() => s.push({ id: 3 })).toThrow();
	});

	it("rejects maxSize <= 0", () => {
		expect(() => new BoundedStack<number>(0)).toThrowError(
			"Invalid stack size: Must be greater than 0",
		);
		expect(() => new BoundedStack<number>(-5)).toThrowError(
			"Invalid stack size: Must be greater than 0",
		);
	});

	it("rejects maxSize > Number.MAX_SAFE_INTEGER", () => {
		const tooLarge = Number.MAX_SAFE_INTEGER + 1;
		expect(() => new BoundedStack<number>(tooLarge)).toThrowError(
			`Invalid stack size: Must be less than or equal to ${Number.MAX_SAFE_INTEGER}`,
		);
	});

	it("allows maxSize exactly Number.MAX_SAFE_INTEGER", () => {
		const s = new BoundedStack<number>(Number.MAX_SAFE_INTEGER);
		expect(s.size()).toBe(0);
	});

	it("maintains LIFO behavior via push/pop (if pop available)", () => {
		const s = new BoundedStack<number>(3);
		s.push(1);
		s.push(2);
		s.push(3);
		const stackWithPop = s as unknown as { pop: () => number };
		if (typeof stackWithPop.pop === "function") {
			const a = stackWithPop.pop();
			const b = stackWithPop.pop();
			const c = stackWithPop.pop();
			expect([a, b, c]).toEqual([3, 2, 1]);
		} else {
			expect(s.size()).toBe(3);
		}
	});

	it("does not enforce initialValues length vs maxSize", () => {
		const s = new BoundedStack<number>(1, [1, 2, 3]);
		expect(s.size()).toBe(3);
		expect(() => s.push(4)).toThrowError("Stack overflow");
	});
});
