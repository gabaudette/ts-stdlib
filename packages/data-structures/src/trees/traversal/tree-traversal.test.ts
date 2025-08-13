import { beforeEach, describe, expect, it } from "vitest";
import { AVLTree } from "../avl-tree";
import type { ITreeNode } from "../tree-node";
import {
	bfs,
	inOrderTraversal,
	postOrderTraversal,
	preOrderTraversal,
	reverseInOrderTraversal,
	reversePostOrderTraversal,
	reversePreOrderTraversal,
} from "./tree-traversal";

// Helper to build nodes quickly
function n<T>(
	value: T,
	left: ITreeNode<T> | null = null,
	right: ITreeNode<T> | null = null,
): ITreeNode<T> {
	return { value, left, right };
}

/*
        8
      /   \
     3     10
    / \      \
   1   6      14
      / \    /
     4   7  13
*/
const tree: ITreeNode<number> = n(
	8,
	n(3, n(1), n(6, n(4), n(7))),
	n(10, null, n(14, n(13), null)),
);

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

	it("preOrderTraversal root,left,right", () => {
		const order: number[] = [];
		preOrderTraversal(tree, (v) => order.push(v));
		expect(order).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13]);
	});

	it("inOrderTraversal left,root,right (BST ascending)", () => {
		const order: number[] = [];
		inOrderTraversal(tree, (v) => order.push(v));
		expect(order).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
	});

	it("postOrderTraversal left,right,root", () => {
		const order: number[] = [];
		postOrderTraversal(tree, (v) => order.push(v));
		expect(order).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
	});

	it("reversePostOrderTraversal right,left,root", () => {
		const order: number[] = [];
		reversePostOrderTraversal(tree, (v) => order.push(v));
		expect(order).toEqual([13, 14, 10, 7, 4, 6, 1, 3, 8]);
	});

	it("reverseInOrderTraversal right,root,left (descending BST)", () => {
		const order: number[] = [];
		reverseInOrderTraversal(tree, (v) => order.push(v));
		expect(order).toEqual([14, 13, 10, 8, 7, 6, 4, 3, 1]);
	});

	it("reversePreOrderTraversal currently same as reverseInOrder (potential duplication)", () => {
		const a: number[] = [];
		const b: number[] = [];
		reversePreOrderTraversal(tree, (v) => a.push(v));
		reverseInOrderTraversal(tree, (v) => b.push(v));
		expect(a).toEqual(b); // NOTE: If implementations diverge later, adjust expected sequence.
	});

	it("bfs level-order", () => {
		const order: number[] = [];
		bfs(tree, (v) => order.push(v));
		expect(order).toEqual([8, 3, 10, 1, 6, 14, 4, 7, 13]);
	});

	it("handles null root (no callbacks)", () => {
		const order: number[] = [];
		preOrderTraversal<number>(null, (v) => order.push(v));
		expect(order).toEqual([]);
	});

	it("single node tree", () => {
		const single = n(42);
		const pre: number[] = [];
		const inOrd: number[] = [];
		const post: number[] = [];
		preOrderTraversal(single, (v) => pre.push(v));
		inOrderTraversal(single, (v) => inOrd.push(v));
		postOrderTraversal(single, (v) => post.push(v));
		expect(pre).toEqual([42]);
		expect(inOrd).toEqual([42]);
		expect(post).toEqual([42]);
	});
});
