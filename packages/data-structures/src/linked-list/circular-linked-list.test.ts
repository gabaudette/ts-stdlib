import { beforeEach, describe, expect, it } from "vitest";
import { CircularLinkedList } from "./circular-linked-list";

describe("CircularLinkedList", () => {
	let list: CircularLinkedList<number>;

	beforeEach(() => {
		list = new CircularLinkedList<number>();
	});

	it("should start empty", () => {
		expect(list.size).toBe(0);
		expect(list.isEmpty()).toBe(true);
		expect(list.peekFirst()).toBeUndefined();
		expect(list.peekLast()).toBeUndefined();
	});

	it("should add elements to the end", () => {
		list.add(1);
		expect(list.size).toBe(1);
		expect(list.peekFirst()).toBe(1);
		expect(list.peekLast()).toBe(1);

		list.add(2);
		expect(list.size).toBe(2);
		expect(list.peekFirst()).toBe(1);
		expect(list.peekLast()).toBe(2);

		list.add(3);
		expect(list.size).toBe(3);
		expect(list.peekFirst()).toBe(1);
		expect(list.peekLast()).toBe(3);
	});

	it("should add elements to the front", () => {
		list.addFirst(1);
		expect(list.size).toBe(1);
		expect(list.peekFirst()).toBe(1);
		expect(list.peekLast()).toBe(1);

		list.addFirst(2);
		expect(list.size).toBe(2);
		expect(list.peekFirst()).toBe(2);
		expect(list.peekLast()).toBe(1);

		list.addFirst(3);
		expect(list.size).toBe(3);
		expect(list.peekFirst()).toBe(3);
		expect(list.peekLast()).toBe(1);
	});

	it("should remove first element", () => {
		list.add(1);
		list.add(2);
		list.add(3);
		expect(list.removeFirst()).toBe(1);
		expect(list.size).toBe(2);
		expect(list.peekFirst()).toBe(2);

		expect(list.removeFirst()).toBe(2);
		expect(list.size).toBe(1);
		expect(list.peekFirst()).toBe(3);

		expect(list.removeFirst()).toBe(3);
		expect(list.size).toBe(0);
		expect(list.peekFirst()).toBeUndefined();
		expect(list.removeFirst()).toBeUndefined();
	});

	it("should remove last element", () => {
		list.add(1);
		list.add(2);
		list.add(3);
		expect(list.removeLast()).toBe(3);
		expect(list.size).toBe(2);
		expect(list.peekLast()).toBe(2);

		expect(list.removeLast()).toBe(2);
		expect(list.size).toBe(1);
		expect(list.peekLast()).toBe(1);

		expect(list.removeLast()).toBe(1);
		expect(list.size).toBe(0);
		expect(list.peekLast()).toBeUndefined();
		expect(list.removeLast()).toBeUndefined();
	});

	it("should iterate over all elements", () => {
		list.add(1);
		list.add(2);
		list.add(3);
		const arr = Array.from(list);
		expect(arr).toEqual([1, 2, 3]);
	});

	it("should clear the list", () => {
		list.add(1);
		list.add(2);
		list.clear();
		expect(list.size).toBe(0);
		expect(list.isEmpty()).toBe(true);
		expect(list.peekFirst()).toBeUndefined();
		expect(list.peekLast()).toBeUndefined();
		expect(Array.from(list)).toEqual([]);
	});

	it("should handle single element removal correctly", () => {
		list.add(42);
		expect(list.removeFirst()).toBe(42);
		expect(list.size).toBe(0);
		expect(list.isEmpty()).toBe(true);

		list.add(99);
		expect(list.removeLast()).toBe(99);
		expect(list.size).toBe(0);
		expect(list.isEmpty()).toBe(true);
	});

	it("should handle mixed addFirst and add", () => {
		list.add(1);
		list.addFirst(2);
		list.add(3);
		list.addFirst(4);
		expect(Array.from(list)).toEqual([4, 2, 1, 3]);
		expect(list.size).toBe(4);
	});
});
