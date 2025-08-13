/**
 * Represents a generic FIFO (first-in, first-out) queue data structure.
 *
 * @typeParam T - The type of elements stored in the queue.
 *
 * @example
 * ```typescript
 * const queue = new Queue<number>();
 * queue.enqueue(1);
 * queue.enqueue(2);
 * console.log(queue.dequeue()); // 1
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Queue_(abstract_data_type)} for more information on queues.
 * @see {@link BoundedQueue} for a bounded queue implementation.
 */
/**
 * Represents a generic queue data structure, supporting FIFO (first-in, first-out) operations.
 *
 * @typeParam T - The type of elements stored in the queue.
 *
 * @example
 * ```typescript
 * const queue = new Queue<number>();
 * queue.enqueue(1);
 * queue.enqueue(2);
 * console.log(queue.dequeue()); // 1
 * ```
 */
export class Queue<T> {
	private nodes: T[] = [];

	/**
	 * Adds an item to the end of the queue.
	 *
	 * @param item - The item to enqueue.
	 * @returns The enqueued item.
	 * @throws {Error} If the queue exceeds the maximum safe integer length.
	 */
	public enqueue(item: T): T {
		if (this.size() >= Number.MAX_SAFE_INTEGER) {
			throw new Error("Queue overflow");
		}

		this.nodes.push(item);

		return item;
	}

	/**
	 * Removes and returns the item at the front of the queue.
	 *
	 * @returns The dequeued item of type `T`, or `undefined` if the queue is empty.
	 */
	public dequeue(): T | undefined {
		return this.nodes.shift();
	}

	/**
	 * Returns the element at the front of the queue without removing it.
	 *
	 * @returns The front element of the queue if it exists; otherwise, `undefined`.
	 */
	public peek(): T | undefined {
		return this.nodes[0];
	}

	/**
	 * Determines whether the queue is empty.
	 *
	 * @returns `true` if the queue contains no elements; otherwise, `false`.
	 */
	public isEmpty(): boolean {
		return this.nodes.length === 0;
	}

	/**
	 * Returns the number of elements currently in the queue.
	 *
	 * @returns The size of the queue.
	 */
	public size(): number {
		return this.nodes.length;
	}

	/**
	 * Removes all elements from the queue, resetting it to an empty state.
	 *
	 * @remarks
	 * After calling this method, the queue will contain no nodes.
	 */
	public clear(): void {
		this.nodes = [];
	}
}
