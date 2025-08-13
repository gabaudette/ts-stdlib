import { TreeNode } from "./tree-node";

/**
 * Represents a node in a Binary Search Tree (BST).
 * Inherits from {@link TreeNode}, and is typically used to store data and references to child nodes.
 *
 * @typeParam T - The type of value stored in the node.
 */
export class BSTNode<T> extends TreeNode<T> {}

/**
 * Represents a generic Binary Search Tree (BST) data structure.
 *
 * @typeParam T - The type of elements stored in the tree.
 *
 * @remarks
 * The BST supports insertion, deletion, search, and utility operations.
 * A custom comparator function can be provided to determine the ordering of elements.
 *
 * @example
 * ```typescript
 * const bst = new BST<number>();
 * bst.insert(5);
 * bst.insert(3);
 * bst.insert(7);
 * const found = bst.find(3); // Returns the node containing 3
 * bst.delete(5); // Removes the node containing 5
 * bst.clear(); // Removes all nodes
 * ```
 *
 * @see {@link BSTNode} for the structure of each node in the tree.
 * @see {@link https://en.wikipedia.org/wiki/Binary_search_tree} for more information on binary search trees.
 */
export class BST<T> {
	private root: BSTNode<T> | null = null;

	constructor(private compare: (a: T, b: T) => number = this._defaultCompare) {}

	private _defaultCompare<K>(a: K, b: K): number {
		if (a > b) {
			return 1;
		}
		if (a < b) {
			return -1;
		}
		return 0;
	}

	public insert(value: T): void {
		this.root = this._insert(this.root, value);
	}

	private _insert(node: BSTNode<T> | null, value: T): BSTNode<T> {
		if (!node) {
			return new BSTNode(value);
		}

		const cmp = this.compare(value, node.value);
		if (cmp < 0) {
			node.left = this._insert(node.left, value);
		} else if (cmp > 0) {
			node.right = this._insert(node.right, value);
		}
		return node;
	}

	public find(value: T): BSTNode<T> | null {
		let node = this.root;
		while (node) {
			const cmp = this.compare(value, node.value);
			if (cmp === 0) return node;
			node = cmp < 0 ? node.left : node.right;
		}
		return null;
	}

	public delete(value: T): void {
		this.root = this._delete(this.root, value);
	}

	private _delete(node: BSTNode<T> | null, value: T): BSTNode<T> | null {
		if (!node) {
			return null;
		}

		const cmp = this.compare(value, node.value);
		if (cmp < 0) {
			node.left = this._delete(node.left, value);
		} else if (cmp > 0) {
			node.right = this._delete(node.right, value);
		} else {
			if (!node.left) {
				return node.right;
			}

			if (!node.right) {
				return node.left;
			}

			let minLargerNode = node.right;
			while (minLargerNode.left) {
				minLargerNode = minLargerNode.left;
			}

			node.value = minLargerNode.value;
			node.right = this._delete(node.right, minLargerNode.value);
		}
		return node;
	}

	public getRoot(): BSTNode<T> | null {
		return this.root;
	}

	public clear(): void {
		this.root = null;
	}
	public getHeight(): number {
		const getHeight = (node: BSTNode<T> | null): number => {
			if (!node) {
				return 0;
			}
			const leftHeight = getHeight(node.left);
			const rightHeight = getHeight(node.right);
			return Math.max(leftHeight, rightHeight) + 1;
		};
		return getHeight(this.root);
	}
}
