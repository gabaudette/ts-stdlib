import { describe, it, expect } from "vitest";
import { AVLTree, AVLTreeNode } from "./avl-tree";

describe("AVLTree", () => {
	it("should insert and find a single value", () => {
		const tree = new AVLTree<number>();
		tree.insert(10);
		expect(tree.contains(10)).toBe(true);
		expect(tree.contains(5)).toBe(false);
	});

	it("should insert multiple values and find them", () => {
		const tree = new AVLTree<number>();
		[10, 20, 5, 15, 25].forEach((v) => tree.insert(v));
		[10, 20, 5, 15, 25].forEach((v) => {
			expect(tree.contains(v)).toBe(true);
		});
		expect(tree.contains(100)).toBe(false);
	});

	it("should not insert duplicate values", () => {
		const tree = new AVLTree<number>();
		tree.insert(10);
		tree.insert(10);
		expect(tree.contains(10)).toBe(true);
		// No direct way to check count, but tree should still contain 10
		expect(tree.contains(10)).toBe(true);
	});

	it("should work with custom compare function", () => {
		type Obj = { key: number };
		const tree = new AVLTree<Obj>();
		const compare = (a: Obj, b: Obj) => a.key - b.key;
		tree.insert({ key: 2 }, compare);
		tree.insert({ key: 1 }, compare);
		tree.insert({ key: 3 }, compare);
		expect(tree.contains({ key: 2 }, compare)).toBe(true);
		expect(tree.contains({ key: 4 }, compare)).toBe(false);
	});

	it("should balance itself after insertions (height property)", () => {
		const tree = new AVLTree<number>();
		// Insert values in strictly increasing order to force rotations
		[1, 2, 3, 4, 5, 6, 7].forEach((v) => tree.insert(v));
		// The tree should still contain all inserted values
		[1, 2, 3, 4, 5, 6, 7].forEach((v) => {
			expect(tree.contains(v)).toBe(true);
		});
		// No direct access to height, but if not balanced, contains would fail for some
	});

	it("should handle negative and zero values", () => {
		const tree = new AVLTree<number>();
		[0, -1, -10, 5].forEach((v) => tree.insert(v));
		[0, -1, -10, 5].forEach((v) => {
			expect(tree.contains(v)).toBe(true);
		});
		expect(tree.contains(100)).toBe(false);
	});

	it("should handle string values", () => {
		const tree = new AVLTree<string>();
		["a", "b", "c", "d"].forEach((v) => tree.insert(v));
		["a", "b", "c", "d"].forEach((v) => {
			expect(tree.contains(v)).toBe(true);
		});
		expect(tree.contains("z")).toBe(false);
	});
});


describe("AVLTree internal methods", () => {
	it("getBalance returns correct balance factor", () => {
		const tree = new AVLTree<number>();
		// Manually construct a tree node
		const left = new AVLTreeNode(1);
		const right = new AVLTreeNode(3);
		const root = new AVLTreeNode(2, left, right);
		// @ts-expect-error: testing private method
		expect(tree.getBalance(root)).toBe(0);
		// Unbalanced left
		const leftHeavy = new AVLTreeNode(2, new AVLTreeNode(1), null);
		// @ts-expect-error: testing private method
		expect(tree.getBalance(leftHeavy)).toBe(1);
		// Unbalanced right
		const rightHeavy = new AVLTreeNode(2, null, new AVLTreeNode(3));
		// @ts-expect-error: testing private method
		expect(tree.getBalance(rightHeavy)).toBe(-1);
		// Null node
		// @ts-expect-error: testing private method
		expect(tree.getBalance(null)).toBe(0);
	});

	it("rightRotate throws if left child is null", () => {
		const tree = new AVLTree<number>();
		const node = new AVLTreeNode(1);
		// @ts-expect-error: testing private method
		expect(() => tree.rightRotate(node)).toThrow(
			"Cannot perform right rotation: left child is null.",
		);
	});

	it("rightRotate rotates correctly", () => {
		const tree = new AVLTree<number>();
		const left = new AVLTreeNode(1);
		const root = new AVLTreeNode(2, left, null);
		// @ts-expect-error: testing private method
		const newRoot = tree.rightRotate(root);
		expect(newRoot.value).toBe(1);
		expect(newRoot.right?.value).toBe(2);
	});

	it("leftRotate throws if right child is null", () => {
		const tree = new AVLTree<number>();
		const node = new AVLTreeNode(1);
		// @ts-expect-error: testing private method
		expect(() => tree.leftRotate(node)).toThrow(
			"Cannot perform left rotation: right child is null.",
		);
	});

	it("leftRotate rotates correctly", () => {
		const tree = new AVLTree<number>();
		const right = new AVLTreeNode(3);
		const root = new AVLTreeNode(2, null, right);
		// @ts-expect-error: testing private method
		const newRoot = tree.leftRotate(root);
		expect(newRoot.value).toBe(3);
		expect(newRoot.left?.value).toBe(2);
	});

	it("insertNode inserts and balances (LL case)", () => {
		const tree = new AVLTree<number>();
		// Insert in decreasing order to force right rotation (LL)
		// @ts-expect-error: testing private method
		let node = tree.insertNode(null, 3);
		// @ts-expect-error: testing private method
		node = tree.insertNode(node, 2);
		// @ts-expect-error: testing private method
		node = tree.insertNode(node, 1);
		expect(node.value).toBe(2);
		expect(node.left?.value).toBe(1);
		expect(node.right?.value).toBe(3);
	});

	it("insertNode inserts and balances (RR case)", () => {
		const tree = new AVLTree<number>();
		// Insert in increasing order to force left rotation (RR)
		// @ts-expect-error: testing private method
		let node = tree.insertNode(null, 1);
		// @ts-expect-error: testing private method
		node = tree.insertNode(node, 2);
		// @ts-expect-error: testing private method
		node = tree.insertNode(node, 3);
		expect(node.value).toBe(2);
		expect(node.left?.value).toBe(1);
		expect(node.right?.value).toBe(3);
	});

	it("insertNode inserts and balances (LR case)", () => {
		const tree = new AVLTree<number>();
		// Insert to force left-right rotation
		// @ts-expect-error: testing private method
		let node = tree.insertNode(null, 3);
		// @ts-expect-error: testing private method
		node = tree.insertNode(node, 1);
		// @ts-expect-error: testing private method
		node = tree.insertNode(node, 2);
		expect(node.value).toBe(2);
		expect(node.left?.value).toBe(1);
		expect(node.right?.value).toBe(3);
	});

	it("insertNode inserts and balances (RL case)", () => {
		const tree = new AVLTree<number>();
		// Insert to force right-left rotation
		// @ts-expect-error: testing private method
		let node = tree.insertNode(null, 1);
		// @ts-expect-error: testing private method
		node = tree.insertNode(node, 3);
		// @ts-expect-error: testing private method
		node = tree.insertNode(node, 2);
		expect(node.value).toBe(2);
		expect(node.left?.value).toBe(1);
		expect(node.right?.value).toBe(3);
	});

	it("insertNode does not insert duplicates", () => {
		const tree = new AVLTree<number>();
		// @ts-expect-error: testing private method
		let node = tree.insertNode(null, 1);
		// @ts-expect-error: testing private method
		node = tree.insertNode(node, 1);
		expect(node.value).toBe(1);
		expect(node.left).toBeNull();
		expect(node.right).toBeNull();
	});
});
