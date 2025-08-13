import { Queue } from "./queue";

/**
 * A queue data structure with a fixed maximum size.
 *
 * The `BoundedQueue` extends the standard `Queue` and adds a limit to the number of items
 * it can hold. Attempting to enqueue an item when the queue is full will throw an error.
 *
 * @typeParam T - The type of elements held in the queue.
 * @extends Queue<T>
 * @see {@link Queue} for the base Queue implementation.
 */
export class BoundedQueue<T> extends Queue<T> {
	private maxSize: number;

	constructor(maxSize: number) {
		super();
		this.maxSize = maxSize;
	}

	/**
	 * Adds an item to the queue.
	 * Throws an error if the queue has reached its maximum size.
	 *
	 * @param item - The item to enqueue.
	 * @returns The enqueued item.
	 * @throws {Error} If the queue is full.
	 */
	public enqueue(item: T): T {
		if (this.size() >= this.maxSize) {
			throw new Error("Queue overflow");
		}

		return super.enqueue(item);
	}
}
