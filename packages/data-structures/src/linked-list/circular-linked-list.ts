
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

	public peekFirst(): T | undefined {
		return this.tail ? this.tail.next.value : undefined;
	}

	public peekLast(): T | undefined {
		return this.tail ? this.tail.value : undefined;
	}

	public *[Symbol.iterator](): IterableIterator<T> {
		if (!this.tail) return;
		let current = this.tail.next;
		do {
			yield current.value;
			current = current.next;
		} while (current !== this.tail.next);
	}

	public clear(): void {
		this.tail = null;
		this._size = 0;
	}
}
