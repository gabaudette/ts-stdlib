import { beforeEach, describe, expect, it } from "vitest";
import { BST } from "./bst";

describe("BST", () => {
	let bst: BST<number>;

	beforeEach(() => {
		bst = new BST<number>();
	});

	it("should insert values and find them", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);

		expect(bst.find(10)?.value).toBe(10);
		expect(bst.find(5)?.value).toBe(5);
		expect(bst.find(15)?.value).toBe(15);
		expect(bst.find(20)).toBeNull();
	});

	it("should not insert duplicate values", () => {
		bst.insert(10);
		bst.insert(10);
		bst.insert(10);

		// Only one node with value 10 should exist
		expect(bst.getRoot()?.value).toBe(10);
		expect(bst.getRoot()?.left).toBeNull();
		expect(bst.getRoot()?.right).toBeNull();
	});

	it("should delete leaf nodes", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);

		bst.delete(5);
		expect(bst.find(5)).toBeNull();
		expect(bst.find(10)).not.toBeNull();
		expect(bst.find(15)).not.toBeNull();
	});

	it("should delete nodes with one child", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(2);

		bst.delete(5);
		expect(bst.find(5)).toBeNull();
		expect(bst.find(2)).not.toBeNull();
		expect(bst.getRoot()?.left?.value).toBe(2);
	});

	it("should delete nodes with two children", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(12);
		bst.insert(18);

		bst.delete(15);
		expect(bst.find(15)).toBeNull();
		expect(bst.find(12)).not.toBeNull();
		expect(bst.find(18)).not.toBeNull();
	});

	it("should return correct height", () => {
		expect(bst.getHeight()).toBe(0);
		bst.insert(10);
		expect(bst.getHeight()).toBe(1);
		bst.insert(5);
		bst.insert(15);
		expect(bst.getHeight()).toBe(2);
		bst.insert(2);
		expect(bst.getHeight()).toBe(3);
	});

	it("should clear the tree", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.clear();
		expect(bst.getRoot()).toBeNull();
		expect(bst.getHeight()).toBe(0);
	});

	it("should work with custom comparator", () => {
		type Obj = { key: number };
		const cmp = (a: Obj, b: Obj) => a.key - b.key;
		const objBst = new BST<Obj>(cmp);

		objBst.insert({ key: 10 });
		objBst.insert({ key: 5 });
		objBst.insert({ key: 15 });

		expect(objBst.find({ key: 10 })?.value.key).toBe(10);
		expect(objBst.find({ key: 5 })?.value.key).toBe(5);
		expect(objBst.find({ key: 15 })?.value.key).toBe(15);
		expect(objBst.find({ key: 20 })).toBeNull();
	});
});

describe("_delete (internal)", () => {
	it("should return null when deleting from an empty tree", () => {
		const bst = new BST<number>();
		// @ts-expect-private
		// @ts-ignore
		expect(bst._delete(null, 10)).toBeNull();
	});

	it("should delete the root node with no children", () => {
		const bst = new BST<number>();
		bst.insert(10);
		// @ts-ignore
		const result = bst._delete(bst.getRoot(), 10);
		expect(result).toBeNull();
	});

	it("should delete the root node with only left child", () => {
		const bst = new BST<number>();
		bst.insert(10);
		bst.insert(5);
		// @ts-ignore
		const result = bst._delete(bst.getRoot(), 10);
		expect(result?.value).toBe(5);
		expect(result?.left).toBeNull();
		expect(result?.right).toBeNull();
	});

	it("should delete the root node with only right child", () => {
		const bst = new BST<number>();
		bst.insert(10);
		bst.insert(15);
		// @ts-ignore
		const result = bst._delete(bst.getRoot(), 10);
		expect(result?.value).toBe(15);
		expect(result?.left).toBeNull();
		expect(result?.right).toBeNull();
	});

	it("should delete the root node with two children (replace with min larger node)", () => {
		const bst = new BST<number>();
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(12);
		bst.insert(18);
		// @ts-ignore
		const result = bst._delete(bst.getRoot(), 10);
		expect(result?.value).toBe(12);
		expect(result?.right?.value).toBe(15);
		expect(result?.left?.value).toBe(5);
	});

	it("should delete a node with two children where right child has no left child", () => {
		const bst = new BST<number>();
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		// @ts-ignore
		const result = bst._delete(bst.getRoot(), 10);
		expect(result?.value).toBe(15);
		expect(result?.left?.value).toBe(5);
		expect(result?.right).toBeNull();
	});

	it("should not modify the tree if value does not exist", () => {
		const bst = new BST<number>();
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		// @ts-ignore
		const result = bst._delete(bst.getRoot(), 42);
		expect(result?.value).toBe(10);
		expect(result?.left?.value).toBe(5);
		expect(result?.right?.value).toBe(15);
	});
});
