import { Stack } from "./stack";

/**
 * A stack data structure with a fixed maximum capacity.
 *
 * Wraps a standard LIFO (last-in, first-out) stack while enforcing an upper bound
 * on the number of elements it can contain. Attempts to exceed that bound result
 * in a thrown error, allowing callers to explicitly handle overflow conditions
 * instead of silently discarding data.
 *
 * @typeParam T - The element type stored in the stack.
 *
 * @remarks
 * - The maximum size is validated at construction time.
 * - Pushing beyond the configured capacity throws an `Error` with the message "Stack overflow".
 * - This class relies on the base `Stack` implementation for core behavior such as
 *   storage, iteration, and size querying.
 *
 * @example
 * ```ts
 * const stack = new BoundedStack<number>(3);
 * stack.push(10);
 * stack.push(20);
 * stack.push(30);
 * // Next line will throw: Error: "Stack overflow"
 * stack.push(40);
 * ```
 *
 * @example
 * ```ts
 * // Handling overflow gracefully
 * function safePush<T>(s: BoundedStack<T>, value: T) {
 *   try {
 *     s.push(value);
 *   } catch (e) {
 *     if (e instanceof Error && e.message === "Stack overflow") {
 *       // Handle full stack (e.g., log, resize strategy, etc.)
 *     } else {
 *       throw e;
 *     }
 *   }
 * }
 * ```
 *
 * @throws {Error} Thrown by the constructor if:
 * - `maxSize <= 0`
 * - `maxSize > Number.MAX_SAFE_INTEGER`
 *
 * @throws {Error} Thrown by `push` if the stack is already at its maximum capacity
 * (overflow condition).
 */
export class BoundedStack<T> extends Stack<T> {
	private maxSize: number;

	constructor(maxSize: number, initialValues?: T[]) {
		super(initialValues);
		if (maxSize <= 0) {
			throw new Error("Invalid stack size: Must be greater than 0");
		}
		if (maxSize > Number.MAX_SAFE_INTEGER) {
			throw new Error(
				`Invalid stack size: Must be less than or equal to ${Number.MAX_SAFE_INTEGER}`,
			);
		}

		this.maxSize = maxSize;
	}

	/**
	 * @summary Push a new value onto the stack and enforces the maximum size limit.
	 * @throws If the stack is full or exceeds the maximum size.
	 * @param {T} value - The value to push.
	 */
	public push(value: T): void {
		if (super.size() >= this.maxSize) {
			throw new Error("Stack overflow");
		}

		super.push(value);
	}
}
