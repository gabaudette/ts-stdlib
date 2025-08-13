
export interface Node<T> {
	value: T;
	next: Node<T> | null;
}

/**
 * Represents a singly linked list data structure.
 *
 * @typeParam T - The type of elements stored in the list.
 *
 * @example
 * ```typescript
 * const list = new SingleLinkedList<number>();
 * list.append(1);
 * list.prepend(0);
 * list.delete(1);
 * ```
 *
 * @remarks
 * - Supports efficient append and prepend operations.
 * - Maintains references to both head and tail nodes.
 * - Provides methods for searching, deleting, and checking list properties.
 *
 * @see {@link Node} for the structure of each node in the list.
 * @see {@link https://en.wikipedia.org/wiki/Linked_list#Singly_linked_lists} for more information on singly linked lists.
 */
export class SingleLinkedList<T> {
	private head: Node<T> | null = null;
	private tail: Node<T> | null = null;
	private length: number = 0;

	private createNode(value: T): Node<T> {
		return { value, next: null };
	}

	/**
	 * Appends a new node with the specified value to the end of the linked list.
	 *
	 * @param value - The value to be added to the list.
	 *
	 * @remarks
	 * If the list is empty, the new node becomes both the head and the tail.
	 * Otherwise, the new node is added after the current tail, and the tail reference is updated.
	 * The length of the list is incremented after the operation.
	 */
	public append(value: T): void {
		const newNode = this.createNode(value);
		if (this.head) {
			if (this.tail) {
				this.tail.next = newNode;
				this.tail = newNode;
			}
		} else {
			this.head = newNode;
			this.tail = newNode;
		}

		this.length++;
	}

    /**
     * Inserts a new node with the specified value at the beginning of the linked list.
     * 
     * If the list is empty, the new node becomes both the head and the tail.
     * Otherwise, the new node is set as the new head, and its `next` pointer references the previous head.
     * 
     * @param value - The value to be stored in the new node.
     */
	public prepend(value: T): void {
		const newNode = this.createNode(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
	}

    /**
     * Deletes the first node in the linked list that contains the specified value.
     *
     * @param value - The value to delete from the list.
     * @returns `true` if a node was deleted; otherwise, `false`.
     *
     * @remarks
     * If the list is empty or the value is not found, the method returns `false`.
     * If the deleted node is the head or tail, the corresponding pointer is updated.
     * The length of the list is decremented when a node is deleted.
     */
	public delete(value: T): boolean {
		if (!this.head) {
			return false;
		}

		if (this.head.value === value) {
			this.head = this.head.next;
			if (!this.head) {
				this.tail = null;
			}

			this.length--;

			return true;
		}

		let current = this.head;
		while (current.next) {
			if (current.next.value === value) {
				current.next = current.next.next;
				if (!current.next) {
					this.tail = current;
				}

				this.length--;

				return true;
			}

			current = current.next;
		}

		return false;
	}

    /**
     * Searches for the first node in the linked list that contains the specified value.
     *
     * @param value - The value to search for in the list.
     * @returns The first node containing the value, or `null` if no such node exists.
     */
	public find(value: T): Node<T> | null {
		let current = this.head;
		while (current) {
			if (current.value === value) {
				return current;
			}
			
			current = current.next;
		}

		return null;
	}

    /**
     * Returns the number of elements in the linked list.
     *
     * @returns The current size of the linked list.
     */
	public getSize(): number {
		return this.length;
	}

    /**
     * Returns the tail node of the linked list.
     *
     * @returns The last node in the list, or `null` if the list is empty.
     */
	public getTail(): Node<T> | null {
		return this.tail;
	}

    /**
     * Returns the head node of the linked list.
     *
     * @returns The first node in the list, or `null` if the list is empty.
     */
	public getHead(): Node<T> | null {
		return this.head;
	}

    /**
     * Determines whether the linked list is empty.
     *
     * @returns `true` if the list contains no elements, otherwise `false`.
     */
	public isEmpty(): boolean {
		return this.length === 0;
	}
}
