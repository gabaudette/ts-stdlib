import type { ITreeNode } from "../tree-node";

/**
 * @description Perform a pre-order traversal of the AVL tree. (NLR)
 * @see https://en.wikipedia.org/wiki/Tree_traversal#Pre-order
 * @param callback A callback function to process each value.
 */
export function preOrderTraversal<T>(callback: (value: T) => void): void {
	function traverse(node: ITreeNode<T> | null) {
		if (!node) {
			return;
		}

		callback(node.value);
		traverse(node.left);
		traverse(node.right);
	}
	traverse(this.root);
}

/**
 * @description Perform a post-order traversal of the AVL tree. (LRN)
 * @see https://en.wikipedia.org/wiki/Tree_traversal#Post-order
 * @param callback A callback function to process each value.
 */
export function postOrderTraversal<T>(callback: (value: T) => void): void {
	function traverse(node: ITreeNode<T> | null) {
		if (!node) {
			return;
		}

		traverse(node.left);
		traverse(node.right);
		callback(node.value);
	}
	traverse(this.root);
}

/**
 * @description Perform an in-order traversal of the AVL tree. (LNR)
 * @see https://en.wikipedia.org/wiki/Tree_traversal#In-order
 * @param callback A callback function to process each value.
 */
export function inOrderTraversal<T>(callback: (value: T) => void): void {
	function traverse(node: ITreeNode<T> | null) {
		if (!node) {
			return;
		}

		traverse(node.left);
		callback(node.value);
		traverse(node.right);
	}
	traverse(this.root);
}

/**
 * @description Perform a reverse pre-order traversal of the AVL tree. (NRL)
 * @see https://en.wikipedia.org/wiki/Tree_traversal#Reverse_pre-order,_NRL
 * @param callback A callback function to process each value.
 */
export function reversePreOrderTraversal<T>(
	callback: (value: T) => void,
): void {
	function traverse(node: ITreeNode<T> | null) {
		if (!node) {
			return;
		}

		traverse(node.right);
		callback(node.value);
		traverse(node.left);
	}
	traverse(this.root);
}

/**
 * @description Perform a reverse post-order traversal of the AVL tree. (RLN)
 * @see https://en.wikipedia.org/wiki/Tree_traversal#Reverse_post-order,_RLN
 * @param callback A callback function to process each value.
 */
export function reversePostOrderTraversal<T>(
	callback: (value: T) => void,
): void {
	function traverse(node: ITreeNode<T> | null) {
		if (!node) {
			return;
		}

		traverse(node.right);
		traverse(node.left);
		callback(node.value);
	}
	traverse(this.root);
}

/**
 * @description Perform a reverse in-order traversal of the AVL tree. (RNL)
 * @see https://en.wikipedia.org/wiki/Tree_traversal#Reverse_in-order,_RNL
 * @param callback A callback function to process each value.
 */
export function reverseInOrderTraversal<T>(callback: (value: T) => void): void {
	function traverse(node: ITreeNode<T> | null) {
		if (!node) {
			return;
		}

		traverse(node.right);
		callback(node.value);
		traverse(node.left);
	}
	traverse(this.root);
}

/**
 * @description Perform a breadth-first search (BFS) traversal of the AVL tree.
 * @see https://en.wikipedia.org/wiki/Tree_traversal#Breadth-first_search
 * @see https://en.wikipedia.org/wiki/Breadth-first_search
 * @param callback A callback function to process each value.
 */
export function bfs<T>(callback: (value: T) => void): void {
	const queue: (ITreeNode<T> | null)[] = [this.root];
	while (queue.length > 0) {
		const node = queue.shift();
		if (node) {
			callback(node.value);
			queue.push(node.left);
			queue.push(node.right);
		}
	}
}
