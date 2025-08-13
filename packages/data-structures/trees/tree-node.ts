/**
 * Represents a node in a binary tree structure.
 *
 * @typeParam T - The type of the value stored in the node.
 * @implements ITreeNode<T>
 *
 * @property value - The value stored in the node.
 * @property left - Reference to the left child node, or `null` if none.
 * @property right - Reference to the right child node, or `null` if none.
 */

export interface ITreeNode<T> {
	value: T;
	left: ITreeNode<T> | null;
	right: ITreeNode<T> | null;
}

/**
 * Represents a single node in a (binary) tree structure.
 *
 * @typeParam T - The type of the value stored in the node.
 *
 * @remarks
 * A TreeNode holds a value and up to two child references (`left` and `right`),
 * making it suitable for binary trees (e.g., binary search trees, heaps, or
 * expression trees). Children default to `null`, allowing easy creation of
 * leaf nodes.
 *
 * This class implements the `ITreeNode<T>` interface (not shown here), which
 * is expected to define the shape of a tree node (value plus optional children).
 *
 * @example
 * // Creating a simple chain
 * const leaf = new TreeNode(3);
 * const parent = new TreeNode(2, leaf, null);
 * const root = new TreeNode(1, parent, null);
 *
 * @example
 * // Building a small binary tree
 * const left = new TreeNode(2);
 * const right = new TreeNode(3);
 * const root = new TreeNode(1, left, right);
 *
 * @param value - The data payload stored in the node.
 * @param left - (Optional) Reference to the left child node (defaults to null).
 * @param right - (Optional) Reference to the right child node (defaults to null).
 */
export class TreeNode<T> implements ITreeNode<T> {
	constructor(
		public value: T,
		public left: TreeNode<T> | null = null,
		public right: TreeNode<T> | null = null,
	) {}
}
