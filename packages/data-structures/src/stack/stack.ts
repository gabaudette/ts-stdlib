
/**
 * Represents a generic stack data structure, supporting typical stack operations such as push, pop, peek, and clear.
 *
 * @typeParam T - The type of elements stored in the stack.
 *
 * @example
 * ```typescript
 * const stack = new Stack<number>([1, 2, 3]);
 * stack.push(4);
 * const top = stack.peek(); // 4
 * const popped = stack.pop(); // 4
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Stack_(abstract_data_type)} for more information on stacks.
 * @see {@link BoundedStack} for a bounded stack implementation.
 */
export class Stack<T> {
	private nodes: T[] = [];

	constructor(initialValues?: T[]) {
		if (initialValues) {
			for (const value of initialValues) {
				this.push(value);
			}
		}
	}

	/**
	 * Adds a value to the top of the stack.
	 *
	 * @param value - The value to be pushed onto the stack.
	 * @throws {Error} If the stack size exceeds `Number.MAX_SAFE_INTEGER (9007199254740991 2^53 − 1.)`.
	 */
	public push(value: T) {
		if (this.size() > Number.MAX_SAFE_INTEGER) {
			throw new Error("Stack overflow");
		}

		this.nodes.push(value);
	}

	/**
	 * Removes and returns the top element from the stack.
	 *
	 * @returns The element at the top of the stack, or `undefined` if the stack is empty.
	 */
	public pop(): T | undefined {
		return this.nodes.pop();
	}

	/**
	 * Returns the top element of the stack without removing it.
	 * If the stack is empty, returns `undefined`.
	 *
	 * @returns The top element of the stack, or `undefined` if the stack is empty.
	 */
	public peek(): T | undefined {
		if (this.size() === 0) {
			return undefined;
		}

		return this.nodes[this.nodes.length - 1];
	}

	/**
	 * Checks whether the stack is empty.
	 *
	 * @returns {boolean} `true` if the stack contains no elements, otherwise `false`.
	 */
	public isEmpty(): boolean {
		return this.nodes.length === 0;
	}

	/**
	 * Returns the number of elements currently in the stack.
	 *
	 * @returns {number} The size of the stack.
	 */
	public size(): number {
		return this.nodes.length;
	}

	/**
	 * Removes all elements from the stack, resetting it to an empty state.
	 *
	 * @remarks
	 * After calling this method, the stack will contain no elements.
	 */
	public clear(): void {
		this.nodes = [];
	}
}
