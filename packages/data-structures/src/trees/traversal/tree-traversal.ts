import type { ITreeNode } from "../tree-node";

/**
 * Performs a pre-order traversal on a binary tree, invoking a callback for each node's value.
 *
 * In pre-order traversal, the current node is processed before its left and right children.
 *
 * @typeParam T - The type of the value stored in each tree node.
 * @param root - The root node of the binary tree to traverse. If null, the traversal does nothing.
 * @param callback - A function to call with the value of each visited node.
 */
export function preOrderTraversal<T>(
	root: ITreeNode<T> | null,
	callback: (value: T) => void,
): void {
	function traverse(node: ITreeNode<T> | null) {
		if (!node) {
			return;
		}

		callback(node.value);
		traverse(node.left);
		traverse(node.right);
	}

	traverse(root);
}

/**
 * Performs a post-order traversal on a binary tree, invoking a callback for each node's value.
 *
 * In post-order traversal, the left subtree is visited first, then the right subtree,
 * and finally the current node.
 *
 * @typeParam T - The type of the value stored in each tree node.
 * @param root - The root node of the binary tree to traverse. If null, nothing is traversed.
 * @param callback - A function to call with the value of each visited node.
 */
export function postOrderTraversal<T>(
	root: ITreeNode<T> | null,
	callback: (value: T) => void,
): void {
	function traverse(node: ITreeNode<T> | null) {
		if (!node) {
			return;
		}

		traverse(node.left);
		traverse(node.right);
		callback(node.value);
	}

	traverse(root);
}


/**
 * Performs an in-order traversal on a binary tree, invoking a callback for each node's value.
 *
 * In-order traversal visits the left subtree, then the current node, and finally the right subtree.
 *
 * @typeParam T - The type of the value stored in each tree node.
 * @param root - The root node of the binary tree to traverse. If `null`, the traversal does nothing.
 * @param callback - A function to call with the value of each visited node.
 */
export function inOrderTraversal<T>(
	root: ITreeNode<T> | null,
	callback: (value: T) => void,
): void {
	function traverse(node: ITreeNode<T> | null) {
		if (!node) {
			return;
		}

		traverse(node.left);
		callback(node.value);
		traverse(node.right);
	}
	
	traverse(root);
}


/**
 * Performs a reverse pre-order traversal (right, root, left) on a binary tree.
 *
 * @typeParam T - The type of the value stored in each tree node.
 * @param root - The root node of the tree to traverse. If `null`, the traversal does nothing.
 * @param callback - A function to call with the value of each visited node.
 *
 * @remarks
 * In reverse pre-order traversal, the right subtree is visited first, then the current node,
 * and finally the left subtree. This is the opposite order of the standard pre-order traversal.
 */
export function reversePreOrderTraversal<T>(
	root: ITreeNode<T> | null,
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

	traverse(root);
}

/**
 * Traverses a binary tree in reverse post-order (right, left, root) and invokes a callback for each node's value.
 *
 * @typeParam T - The type of the value stored in each tree node.
 * @param root - The root node of the tree to traverse. If `null`, traversal does nothing.
 * @param callback - A function to call with the value of each visited node.
 *
 * @remarks
 * This traversal visits the right subtree first, then the left subtree, and finally the current node.
 */
export function reversePostOrderTraversal<T>(
	root: ITreeNode<T> | null,
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

	traverse(root);
}


/**
 * Performs a reverse in-order traversal (right, root, left) on a binary tree.
 * 
 * @template T The type of the value stored in each tree node.
 * @param root The root node of the binary tree to traverse. If `null`, the traversal does nothing.
 * @param callback A function to be called with the value of each visited node.
 *
 * @remarks
 * Reverse in-order traversal visits nodes in descending order for a binary search tree.
 */
export function reverseInOrderTraversal<T>(
	root: ITreeNode<T> | null,
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

	traverse(root);
}

/**
 * Performs a breadth-first search (BFS) traversal on a binary tree.
 *
 * @typeParam T - The type of the value stored in each tree node.
 * @param root - The root node of the binary tree to traverse. If `null`, the function does nothing.
 * @param callback - A function to be called with the value of each visited node.
 *
 * @remarks
 * This function traverses the tree level by level, visiting all nodes at each depth before moving to the next level.
 */
export function bfs<T>(
	root: ITreeNode<T> | null,
	callback: (value: T) => void,
): void {
	const queue: (ITreeNode<T> | null)[] = [root];
	while (queue.length > 0) {
		const node = queue.shift();
		if (node) {
			callback(node.value);
			queue.push(node.left);
			queue.push(node.right);
		}
	}
}
