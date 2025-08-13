import { describe, expect, it } from "vitest";
import { DoubleLinkedList, DoubleLinkedListNode } from "./double-linked-list";

describe("DoubleLinkedListNode", () => {
	it("should create a node with the given value", () => {
		const node = new DoubleLinkedListNode(42);
		expect(node.value).toBe(42);
	});

	it("should have next and prev set to null by default", () => {
		const node = new DoubleLinkedListNode("test");
		expect(node.next).toBeNull();
		expect(node.prev).toBeNull();
	});

	it("should allow setting next and prev to other nodes", () => {
		const node1 = new DoubleLinkedListNode(1);
		const node2 = new DoubleLinkedListNode(2);
		node1.next = node2;
		node2.prev = node1;
		expect(node1.next).toBe(node2);
		expect(node2.prev).toBe(node1);
	});

	describe("DoubleLinkedList", () => {
		it("should initialize as empty", () => {
			const list = new DoubleLinkedList<number>();
			expect(list.size).toBe(0);
			expect(list.isEmpty).toBe(true);
			expect(list.headNode).toBeNull();
			expect(list.tailNode).toBeNull();
		});

		it("should push elements and update head/tail/size", () => {
			const list = new DoubleLinkedList<number>();
			list.push(1);
			expect(list.size).toBe(1);
			expect(list.isEmpty).toBe(false);
			expect(list.headNode?.value).toBe(1);
			expect(list.tailNode?.value).toBe(1);

			list.push(2);
			expect(list.size).toBe(2);
			expect(list.headNode?.value).toBe(1);
			expect(list.tailNode?.value).toBe(2);

			list.push(3);
			expect(list.size).toBe(3);
			expect(list.headNode?.value).toBe(1);
			expect(list.tailNode?.value).toBe(3);
		});

		it("should iterate values in order", () => {
			const list = new DoubleLinkedList<string>();
			list.push("a");
			list.push("b");
			list.push("c");
			const values = Array.from(list);
			expect(values).toEqual(["a", "b", "c"]);
		});

		it("should pop elements from the tail", () => {
			const list = new DoubleLinkedList<number>();
			list.push(10);
			list.push(20);
			list.push(30);

			expect(list.pop()).toBe(30);
			expect(list.size).toBe(2);
			expect(list.tailNode?.value).toBe(20);

			expect(list.pop()).toBe(20);
			expect(list.size).toBe(1);
			expect(list.tailNode?.value).toBe(10);

			expect(list.pop()).toBe(10);
			expect(list.size).toBe(0);
			expect(list.tailNode).toBeNull();
			expect(list.headNode).toBeNull();

			expect(list.pop()).toBeUndefined();
		});

		it("should clear the list", () => {
			const list = new DoubleLinkedList<number>();
			list.push(1);
			list.push(2);
			list.clear();
			expect(list.size).toBe(0);
			expect(list.isEmpty).toBe(true);
			expect(list.headNode).toBeNull();
			expect(list.tailNode).toBeNull();
		});

		it("should handle push and pop on single element", () => {
			const list = new DoubleLinkedList<number>();
			list.push(99);
			expect(list.size).toBe(1);
			expect(list.headNode?.value).toBe(99);
			expect(list.tailNode?.value).toBe(99);
			expect(list.pop()).toBe(99);
			expect(list.size).toBe(0);
			expect(list.headNode).toBeNull();
			expect(list.tailNode).toBeNull();
		});

		it("should maintain correct prev and next references", () => {
			const list = new DoubleLinkedList<number>();
			list.push(1);
			list.push(2);
			list.push(3);
			const head = list.headNode;
			const middle = head?.next;
			const tail = list.tailNode;

			expect(head?.value).toBe(1);
			expect(middle?.value).toBe(2);
			expect(tail?.value).toBe(3);

			expect(head?.prev).toBeNull();
			expect(middle?.prev).toBe(head);
			expect(middle?.next).toBe(tail);
			expect(tail?.next).toBeNull();
			expect(tail?.prev).toBe(middle);
		});
	});
});
