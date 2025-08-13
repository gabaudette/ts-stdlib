/**
 * Represents a node in a double linked list.
 *
 * @typeParam T - The type of the value stored in the node.
 * @property value - The value contained in the node.
 * @property next - Reference to the next node in the list, or `null` if this is the last node.
 * @property prev - Reference to the previous node in the list, or `null` if this is the first node.
 * @param value - The value to store in the node
 */
export class DoubleLinkedListNode<T> {
	public value: T;
	public next: DoubleLinkedListNode<T> | null = null;
	public prev: DoubleLinkedListNode<T> | null = null;

	constructor(value: T) {
		this.value = value;
	}
}

/**
 * Represents a generic double linked list data structure.
 *
 * @typeParam T - The type of elements stored in the list.
 *
 * @remarks
 * This class provides efficient insertion and removal of elements at both ends of the list.
 * It maintains references to both the head and tail nodes, allowing bidirectional traversal.
 *
 * @example
 * ```typescript
 * const list = new DoubleLinkedList<number>();
 * list.push(1);
 * list.push(2);
 * list.push(3);
 * for (const value of list) {
 *   console.log(value); // 1, 2, 3
 * }
 * ```
 * @see {@link DoubleLinkedListNode} for the structure of each node in the list.
 * @see {@link https://en.wikipedia.org/wiki/Doubly_linked_list} for more information on double linked lists.
 */
export class DoubleLinkedList<T> {
	private head: DoubleLinkedListNode<T> | null = null;
	private tail: DoubleLinkedListNode<T> | null = null;
	private length: number = 0;

	/**
	 * Adds a new element with the specified value to the end of the double linked list.
	 *
	 * @param value - The value to be added to the list.
	 *
	 * @remarks
	 * If the list is empty, the new node becomes both the head and tail.
	 * Otherwise, the new node is appended after the current tail.
	 * The length of the list is incremented.
	 */
	public push(value: T): void {
		const node = new DoubleLinkedListNode(value);
		if (!this.tail) {
			this.head = this.tail = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
	}

	/**
	 * Removes and returns the value from the end (tail) of the double linked list.
	 * If the list is empty, returns `undefined`.
	 *
	 * @returns {T | undefined} The value of the removed tail node, or `undefined` if the list is empty.
	 */
	public pop(): T | undefined {
		if (!this.tail) {
			return;
		}

		const value = this.tail.value;
		if (this.head === this.tail) {
			this.head = this.tail = null;
		} else {
			this.tail = this.tail.prev;
			if (this.tail) {
				this.tail.next = null;
			}
		}

		this.length--;

		return value;
	}

	/**
	 * Returns an iterator that yields each value in the double linked list in order from head to tail.
	 *
	 * @returns {IterableIterator<T>} An iterator over the values in the list.
	 */
	public *[Symbol.iterator](): IterableIterator<T> {
		let current = this.head;
		while (current) {
			yield current.value;
			current = current.next;
		}
	}

	/**
	 * Removes all nodes from the linked list, resetting its state.
	 * After calling this method, the list will be empty and its length will be zero.
	 */
	public clear(): void {
		this.head = this.tail = null;
		this.length = 0;
	}

	/**
	 * Gets the number of elements in the double linked list.
	 * @returns The current length of the list.
	 */
	public get size(): number {
		return this.length;
	}

	/**
	 * Indicates whether the linked list contains no elements.
	 * @returns `true` if the list is empty; otherwise, `false`.
	 */
	public get isEmpty(): boolean {
		return this.length === 0;
	}

	/**
	 * Gets the head (first) node of the double linked list.
	 * @returns The head node if the list is not empty; otherwise, `null`.
	 */
	public get headNode(): DoubleLinkedListNode<T> | null {
		return this.head;
	}

	/**
	 * Gets the tail (last) node of the double linked list.
	 * @returns The last node in the list, or `null` if the list is empty.
	 */
	public get tailNode(): DoubleLinkedListNode<T> | null {
		return this.tail;
	}
}
