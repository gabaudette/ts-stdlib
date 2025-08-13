import { describe, it, expect, beforeEach } from "vitest";
import { SingleLinkedList, Node } from "./single-linked-list";

describe("SingleLinkedList", () => {
	let list: SingleLinkedList<number>;

	beforeEach(() => {
		list = new SingleLinkedList<number>();
	});

	it("should be empty on creation", () => {
		expect(list.isEmpty()).toBe(true);
		expect(list.getSize()).toBe(0);
		expect(list.getHead()).toBeNull();
		expect(list.getTail()).toBeNull();
	});

	it("should append elements", () => {
		list.append(1);
		expect(list.isEmpty()).toBe(false);
		expect(list.getSize()).toBe(1);
		expect(list.getHead()?.value).toBe(1);
		expect(list.getTail()?.value).toBe(1);

		list.append(2);
		expect(list.getSize()).toBe(2);
		expect(list.getHead()?.value).toBe(1);
		expect(list.getTail()?.value).toBe(2);
		expect(list.getHead()?.next?.value).toBe(2);
	});

	it("should prepend elements", () => {
		list.prepend(1);
		expect(list.getHead()?.value).toBe(1);
		expect(list.getTail()?.value).toBe(1);

		list.prepend(2);
		expect(list.getHead()?.value).toBe(2);
		expect(list.getTail()?.value).toBe(1);
		expect(list.getHead()?.next?.value).toBe(1);
		expect(list.getSize()).toBe(2);
	});

	it("should find elements", () => {
		list.append(1);
		list.append(2);
		list.append(3);

		expect(list.find(2)?.value).toBe(2);
		expect(list.find(4)).toBeNull();
	});

	it("should delete head element", () => {
		list.append(1);
		list.append(2);
		list.append(3);

		expect(list.delete(1)).toBe(true);
		expect(list.getHead()?.value).toBe(2);
		expect(list.getSize()).toBe(2);
	});

	it("should delete tail element", () => {
		list.append(1);
		list.append(2);
		list.append(3);

		expect(list.delete(3)).toBe(true);
		expect(list.getTail()?.value).toBe(2);
		expect(list.getSize()).toBe(2);
		expect(list.getTail()?.next).toBeNull();
	});

	it("should delete middle element", () => {
		list.append(1);
		list.append(2);
		list.append(3);

		expect(list.delete(2)).toBe(true);
		expect(list.getSize()).toBe(2);
		expect(list.find(2)).toBeNull();
		expect(list.getHead()?.next?.value).toBe(3);
	});

	it("should return false when deleting non-existent element", () => {
		list.append(1);
		expect(list.delete(2)).toBe(false);
		expect(list.getSize()).toBe(1);
	});

	it("should handle delete on empty list", () => {
		expect(list.delete(1)).toBe(false);
		expect(list.getSize()).toBe(0);
	});

	it("should update head and tail to null when last element is deleted", () => {
		list.append(1);
		expect(list.delete(1)).toBe(true);
		expect(list.getHead()).toBeNull();
		expect(list.getTail()).toBeNull();
		expect(list.isEmpty()).toBe(true);
	});

	it("should work with different types", () => {
		const strList = new SingleLinkedList<string>();
		strList.append("a");
		strList.append("b");
		expect(strList.getHead()?.value).toBe("a");
		expect(strList.getTail()?.value).toBe("b");
		expect(strList.find("b")).not.toBeNull();
		expect(strList.delete("a")).toBe(true);
		expect(strList.getHead()?.value).toBe("b");
	});
});
