import { beforeEach, describe, expect, it, vi } from "vitest";
import { AVLTree } from "../avl-tree";
import {
	preOrderTraversal,
	postOrderTraversal,
	inOrderTraversal,
	reversePreOrderTraversal,
	reversePostOrderTraversal,
	reverseInOrderTraversal,
	bfs,
} from "./tree-traversal";

describe("Tree Traversal Functions", () => {
	let avlTree: AVLTree<number>;

	beforeEach(() => {
		avlTree = new AVLTree<number>();
		avlTree.insert(5);
		avlTree.insert(3);
		avlTree.insert(7);
		avlTree.insert(2);
		avlTree.insert(4);
		avlTree.insert(6);
		avlTree.insert(8);
		// Tree structure:
		//     5
		//    / \
		//   3   7
		//  / \ / \
		// 2  4 6  8
	});

	it("preOrderTraversal visits nodes in NLR order", () => {
		const result: number[] = [];
		preOrderTraversal.call(avlTree, (v: number) => result.push(v));
		expect(result).toEqual([5, 3, 2, 4, 7, 6, 8]);
	});

	it("postOrderTraversal visits nodes in LRN order", () => {
		const result: number[] = [];
		postOrderTraversal.call(avlTree, (v: number) => result.push(v));
		expect(result).toEqual([2, 4, 3, 6, 8, 7, 5]);
	});

	it("inOrderTraversal visits nodes in LNR order", () => {
		const result: number[] = [];
		inOrderTraversal.call(avlTree, (v: number) => result.push(v));
		expect(result).toEqual([2, 3, 4, 5, 6, 7, 8]);
	});

	it("reversePreOrderTraversal visits nodes in NRL order", () => {
		const result: number[] = [];
		reversePreOrderTraversal.call(avlTree, (v: number) => result.push(v));
		expect(result).toEqual([8, 7, 6, 5, 4, 3, 2]);
	});

	it("reversePostOrderTraversal visits nodes in RLN order", () => {
		const result: number[] = [];
		reversePostOrderTraversal.call(avlTree, (v: number) => result.push(v));
		expect(result).toEqual([8, 6, 7, 4, 2, 3, 5]);
	});

	it("reverseInOrderTraversal visits nodes in RNL order", () => {
		const result: number[] = [];
		reverseInOrderTraversal.call(avlTree, (v: number) => result.push(v));
		expect(result).toEqual([8, 7, 6, 5, 4, 3, 2]);
	});

	it("bfs visits nodes in level order", () => {
		const result: number[] = [];
		bfs.call(avlTree, (v) => result.push(v));
		expect(result).toEqual([5, 3, 7, 2, 4, 6, 8]);
	});

	it("traversals on empty tree do not call callback", () => {
		const emptyTree = new AVLTree<number>();
		const cb = vi.fn();
		preOrderTraversal.call(emptyTree, cb);
		postOrderTraversal.call(emptyTree, cb);
		inOrderTraversal.call(emptyTree, cb);
		reversePreOrderTraversal.call(emptyTree, cb);
		reversePostOrderTraversal.call(emptyTree, cb);
		reverseInOrderTraversal.call(emptyTree, cb);
		bfs.call(emptyTree, cb);
		expect(cb).not.toHaveBeenCalled();
	});
});
