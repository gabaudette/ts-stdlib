import { describe, expect, it } from "vitest";
import { DoubleLinkedListNode } from "./double-linked-list";

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
});
