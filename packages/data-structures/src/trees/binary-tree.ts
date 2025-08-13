import { TreeNode } from "./tree-node";

/**
 * Represents a node in a binary tree structure.
 *
 * @typeParam T - The type of the value stored in the node.
 * @extends TreeNode<T>
 */
export class BinaryTreeNode<T> extends TreeNode<T> {}

/**
 * Represents a generic binary tree data structure.
 *
 * @typeParam T - The type of values stored in the tree nodes.
 *
 * @remarks
 * The `BinaryTree` class provides methods to insert nodes, retrieve the root node,
 * clear the tree, calculate the height of the tree, and check if the tree is empty.
 * Nodes can be inserted as left or right children of a specified parent node.
 *
 * @example
 * ```typescript
 * const tree = new BinaryTree<number>();
 * const root = tree.insert(1);
 * const leftChild = tree.insert(2, root, true);
 * const rightChild = tree.insert(3, root, false);
 * ```
 * @see {@link BinaryTreeNode} for the structure of each node in the tree.
 * @see {@link https://en.wikipedia.org/wiki/Binary_tree} for more information on binary trees.
 */
export class BinaryTree<T> {
	private root: BinaryTreeNode<T> | null = null;

    /**
     * Inserts a new node with the specified value into the binary tree.
     * 
     * - If the tree is empty, the new node becomes the root.
     * - For non-root insertions, a parent node must be specified.
     * - The new node is inserted as either the left or right child of the parent, based on the `left` parameter.
     * - Throws an error if the specified child position is already occupied.
     *
     * @param value The value to store in the new node.
     * @param parent The parent node to attach the new node to. If `null`, the new node becomes the root.
     * @param left If `true`, inserts as the left child; if `false`, inserts as the right child. Defaults to `true`.
     * @returns The newly inserted `BinaryTreeNode<T>`.
     * @throws Error if parent is not specified for non-root insertions, or if the child position is already occupied.
     */
	public insert(
		value: T,
		parent: BinaryTreeNode<T> | null = null,
		left: boolean = true,
	): BinaryTreeNode<T> {
		const node = new BinaryTreeNode(value);
		if (!this.root) {
			this.root = node;
			return node;
		}

		if (!parent) {
			throw new Error("Parent node must be specified for non-root insertions.");
		}

		if (left) {
			if (parent.left) {
				throw new Error("Left child already exists.");
			}
			parent.left = node;
		} else {
			if (parent.right) {
				throw new Error("Right child already exists.");
			}
			parent.right = node;
		}

		return node;
	}

    /**
     * Returns the root node of the binary tree.
     *
     * @returns The root node of type `BinaryTreeNode<T>`, or `null` if the tree is empty.
     */
	public getRoot(): BinaryTreeNode<T> | null {
		return this.root;
	}

    /**
     * Removes all nodes from the binary tree, resetting it to an empty state.
     *
     * After calling this method, the tree will have no root node and all references to nodes will be cleared.
     */
	public clear(): void {
		this.root = null;
	}

    /**
     * Calculates the height of the binary tree starting from the specified node.
     *
     * The height of a node is defined as the number of edges on the longest path from the node to a leaf.
     * If the node is `null`, the height is considered to be `0`.
     *
     * @param node - The node from which to calculate the height. Defaults to the root of the tree.
     * @returns The height of the tree from the specified node.
     */
	public getHeight(node: BinaryTreeNode<T> | null = this.root): number {
		if (!node) {
			return 0;
		}
		
		const leftHeight = this.getHeight(node.left);
		const rightHeight = this.getHeight(node.right);

		return Math.max(leftHeight, rightHeight) + 1;
	}

    /**
     * Determines whether the binary tree is empty.
     *
     * @returns `true` if the tree has no nodes; otherwise, `false`.
     */
	public isEmpty(): boolean {
		return this.root === null;
	}
}
