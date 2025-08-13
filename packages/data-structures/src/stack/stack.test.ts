import { describe, expect, it } from "vitest";
import { Stack } from "./stack"; // adjust if path/name differs

describe("Stack", () => {
	it("starts empty", () => {
		const s = new Stack<number>();
		expect(s.size()).toBe(0);
		expect(s.isEmpty?.()).toBe(true);
	});

	it("pushes values and reports size", () => {
		const s = new Stack<number>();
		s.push(1);
		s.push(2);
		expect(s.size()).toBe(2);
	});

	it("peek returns top without removing", () => {
		const s = new Stack<string>();
		s.push("a");
		s.push("b");
		expect(s.peek?.()).toBe("b");
		expect(s.size()).toBe(2);
	});

	it("pop returns in LIFO order", () => {
		const s = new Stack<number>();
		s.push(10);
		s.push(20);
		s.push(30);
		expect(s.pop()).toBe(30);
		expect(s.pop()).toBe(20);
		expect(s.pop()).toBe(10);
		expect(s.size()).toBe(0);
	});

	it("pop on empty either returns undefined or throws", () => {
		const s = new Stack<number>();
		try {
			const v = s.pop();
			expect(v).toBeUndefined();
		} catch (e) {
			expect(e).toBeInstanceOf(Error);
		}
	});

	it("supports generic object types", () => {
		type Node = { id: number };
		const s = new Stack<Node>();
		s.push({ id: 1 });
		s.push({ id: 2 });
		expect(s.pop()).toEqual({ id: 2 });
	});

	it("should clear the stack", () => {
		const s = new Stack<number>();
		s.push(1);
		s.push(2);
		s.clear();
		expect(s.size()).toBe(0);
		expect(s.isEmpty?.()).toBe(true);
	});

	it("push throws error if stack size exceeds Number.MAX_SAFE_INTEGER", () => {
		const s = new Stack<number>();
		// Simulate stack size at MAX_SAFE_INTEGER by monkey-patching size()
		const origSize = s.size;
		s.size = () => Number.MAX_SAFE_INTEGER + 1;
		expect(() => s.push(42)).toThrowError("Stack overflow");
		// Restore original size method
		s.size = origSize;
	});

	it("peek returns undefined when stack is empty", () => {
		const s = new Stack<number>();
		expect(s.peek()).toBeUndefined();
	});

	it("push adds elements to the top of the stack", () => {
		const s = new Stack<number>();
		s.push(5);
		s.push(10);
		expect(s.peek()).toBe(10);
		s.push(20);
		expect(s.peek()).toBe(20);
	});
});
