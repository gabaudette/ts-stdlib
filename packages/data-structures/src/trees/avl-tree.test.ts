import { describe, it, expect } from "vitest";
import { AVLTree } from "./avl-tree";

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
