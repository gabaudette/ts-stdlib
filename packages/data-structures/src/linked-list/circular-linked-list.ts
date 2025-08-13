
/**
 * Represents a node in a circular singly linked list.
 *
 * @typeParam T - The type of the value stored in the node.
 *
 * Each node contains a value and a reference to the next node in the list.
 * In a circular linked list, the last node points back to itself or to the head node,
 * forming a closed loop.
 */
export class CircularLinkedListNode<T> {
	public value: T;
	public next: CircularLinkedListNode<T>;

	constructor(value: T) {
		this.value = value;
		this.next = this;
	}
}

/**
 * Represents a circular singly linked list data structure.
 *
 * In a circular linked list, the last node points back to the first node, forming a circle.
 * This implementation supports efficient addition and removal of elements at both the head and tail.
 *
 * @typeParam T - The type of elements stored in the list.
 *
 * @example
 * ```typescript
 * const list = new CircularLinkedList<number>();
 * list.add(1);
 * list.addFirst(0);
 * for (const value of list) {
 *   console.log(value); // 0, 1
 * }
 * ```
 *
 * @see {@link CircularLinkedListNode}
 * @see {@link https://en.wikipedia.org/wiki/Circular_linked_list} for more information on circular linked lists.
 */
export class CircularLinkedList<T> {
	private tail: CircularLinkedListNode<T> | null = null;
	private _size = 0;

	public get size(): number {
		return this._size;
	}

	public isEmpty(): boolean {
		return this._size === 0;
	}

	/**
	 * Adds a new element with the specified value to the circular linked list.
	 * The new node is inserted after the current tail and becomes the new tail.
	 *
	 * @param value - The value to be added to the list.
	 */
	public add(value: T): void {
		const node = new CircularLinkedListNode(value);
		if (!this.tail) {
			this.tail = node;
		} else {
			node.next = this.tail.next;
			this.tail.next = node;
			this.tail = node;
		}

		this._size++;
	}

	/**
	 * Inserts a new element at the beginning of the circular linked list.
	 * 
	 * @param value - The value to be added as the first element of the list.
	 * 
	 * If the list is empty, the new node becomes the tail and points to itself.
	 * Otherwise, the new node is inserted immediately after the tail, effectively
	 * becoming the new head of the list.
	 */
	public addFirst(value: T): void {
		const node = new CircularLinkedListNode(value);
		if (!this.tail) {
			this.tail = node;
		} else {
			node.next = this.tail.next;
			this.tail.next = node;
		}

		this._size++;
	}

	/**
	 * Removes and returns the first element (head) from the circular linked list.
	 * If the list is empty, returns `undefined`.
	 *
	 * @returns {T | undefined} The value of the removed head node, or `undefined` if the list is empty.
	 */
	public removeFirst(): T | undefined {
		if (!this.tail) {
			return;
		}

		const head = this.tail.next;
		if (this.tail === head) {
			this.tail = null;
		} else {
			this.tail.next = head.next;
		}

		this._size--;

		return head.value;
	}

	/**
	 * Removes and returns the last element from the circular linked list.
	 *
	 * If the list is empty, returns `undefined`.
	 * If the list contains only one element, removes it and sets the list to empty.
	 * Otherwise, removes the tail node, updates the tail reference, and returns the removed value.
	 *
	 * @returns {T | undefined} The value of the removed last element, or `undefined` if the list is empty.
	 */
	public removeLast(): T | undefined {
		if (!this.tail) {
			return;
		}

		let current = this.tail.next;
		if (this.tail === current) {
			const value = this.tail.value;
			this.tail = null;
			this._size--;
			return value;
		}

		while (current.next !== this.tail) {
			current = current.next;
		}

		const value = this.tail.value;

		current.next = this.tail.next;
		this.tail = current;
		this._size--;

		return value;
	}

	/**
	 * Returns the value of the first node in the circular linked list without removing it.
	 * If the list is empty, returns `undefined`.
	 *
	 * @returns {T | undefined} The value of the first node, or `undefined` if the list is empty.
	 */
	public peekFirst(): T | undefined {
		return this.tail ? this.tail.next.value : undefined;
	}

	/**
	 * Returns the value of the last node in the circular linked list without removing it.
	 * @returns The value of the last node if the list is not empty; otherwise, `undefined`.
	 */
	public peekLast(): T | undefined {
		return this.tail ? this.tail.value : undefined;
	}

	/**
	 * Returns an iterator over the elements in the circular linked list.
	 * Iterates starting from the node after the tail and continues until it loops back to the starting node.
	 * If the list is empty, the iterator yields nothing.
	 *
	 * @returns {IterableIterator<T>} An iterator over the values in the circular linked list.
	 */
	public *[Symbol.iterator](): IterableIterator<T> {
		if (!this.tail) {
			return;
		}

		let current = this.tail.next;
		do {
			yield current.value;
			current = current.next;
		} while (current !== this.tail.next);
	}

	/**
	 * Removes all elements from the circular linked list, resetting it to an empty state.
	 * After calling this method, the list will have a size of zero and no nodes.
	 */
	public clear(): void {
		this.tail = null;
		this._size = 0;
	}
}
