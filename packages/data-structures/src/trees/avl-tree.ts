/**
 * Represents a node in an AVL (Adelson-Velsky and Landis) tree.
 * Each node contains a value, references to its left and right child nodes,
 * and maintains its height for balancing purposes.
 *
 * @typeParam T - The type of the value stored in the node.
 * @property height - The height of the node in the tree (default is 1).
 * @property value - The value stored in the node.
 * @property left - Reference to the left child node, or null if none.
 * @property right - Reference to the right child node, or null if none.
 */
export class AVLTreeNode<T> {
	public height: number = 1;
	constructor(
		public value: T,
		public left: AVLTreeNode<T> | null = null,
		public right: AVLTreeNode<T> | null = null,
	) {}
}

/**
 * Represents an AVL (Adelson-Velsky and Landis) self-balancing binary search tree.
 *
 * The AVLTree maintains balance by automatically performing rotations during insertions,
 * ensuring that the heights of the left and right subtrees of any node differ by at most one.
 * This guarantees O(log n) time complexity for insertion and search operations.
 *
 * @typeParam T - The type of values stored in the tree.
 *
 * @example
 * ```typescript
 * const tree = new AVLTree<number>();
 * tree.insert(10);
 * tree.insert(20);
 * tree.insert(5);
 * console.log(tree.contains(10)); // true
 * ```
 *
 * @remarks
 * This class provides methods for inserting values into the tree and checking for their existence.
 *
 * @see {@link AVLTreeNode} for the structure of each node in the tree.
 * @see {@link https://en.wikipedia.org/wiki/AVL_tree} for more information on AVL trees.
 */
export class AVLTree<T> {
	private root: AVLTreeNode<T> | null = null;

	private _defaultCompare<K>(a: K, b: K): number {
		if (a > b) {
			return 1;
		}

		if (a < b) {
			return -1;
		}
		
		return 0;
	}

	private getHeight(node: AVLTreeNode<T> | null): number {
		return node ? node.height : 0;
	}

	private getBalance(node: AVLTreeNode<T> | null): number {
		return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
	}

	private rightRotate(y: AVLTreeNode<T>): AVLTreeNode<T> {
		if (!y.left) {
			throw new Error("Cannot perform right rotation: left child is null.");
		}

		const x = y.left;
		const T2 = x.right;

		x.right = y;
		y.left = T2;

		y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
		x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

		return x;
	}

	private leftRotate(x: AVLTreeNode<T>): AVLTreeNode<T> {
		if (!x.right) {
			throw new Error("Cannot perform left rotation: right child is null.");
		}

		const y = x.right;
		const T2 = y.left;

		y.left = x;
		x.right = T2;

		x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
		y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

		return y;
	}

	private insertNode(
		node: AVLTreeNode<T> | null,
		value: T,
		compare: (a: T, b: T) => number = this._defaultCompare,
	): AVLTreeNode<T> {
		if (!node) {
			return new AVLTreeNode(value);
		}

		if (compare(value, node.value) < 0) {
			node.left = this.insertNode(node.left, value, compare);
		} else if (compare(value, node.value) > 0) {
			node.right = this.insertNode(node.right, value, compare);
		} else {
			return node;
		}

		node.height =
			1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

		const balance = this.getBalance(node);

		if (
			balance > 1 &&
			node.left !== null &&
			compare(value, node.left.value) < 0
		) {
			return this.rightRotate(node);
		}

		if (
			balance < -1 &&
			node.right !== null &&
			compare(value, node.right.value) > 0
		) {
			return this.leftRotate(node);
		}

		if (
			balance > 1 &&
			node.left !== null &&
			compare(value, node.left.value) > 0
		) {
			node.left = this.leftRotate(node.left);
			return this.rightRotate(node);
		}

		if (
			balance < -1 &&
			node.right !== null &&
			compare(value, node.right.value) < 0
		) {
			node.right = this.rightRotate(node.right);
			return this.leftRotate(node);
		}

		return node;
	}

    /**
     * Inserts a value into the AVL tree.
     *
     * @param value - The value to insert into the tree.
     * @param compare - Optional comparison function to determine the order of elements.
     *                  Defaults to the tree's internal comparison function.
     */
	public insert(
		value: T,
		compare: (a: T, b: T) => number = this._defaultCompare,
	): void {
		this.root = this.insertNode(this.root, value, compare);
	}

    /**
     * Determines whether the AVL tree contains a node with the specified value.
     *
     * @param value - The value to search for in the tree.
     * @param compare - Optional comparison function to determine the order of values.
     *                  Defaults to the tree's internal comparison function.
     * @returns `true` if the value exists in the tree; otherwise, `false`.
     */
	public contains(
		value: T,
		compare: (a: T, b: T) => number = this._defaultCompare,
	): boolean {
		let current = this.root;
		while (current) {
			const cmp = compare(value, current.value);
			if (cmp === 0) {
				return true;
			}

			current = cmp < 0 ? current.left : current.right;
		}
		
		return false;
	}
}
