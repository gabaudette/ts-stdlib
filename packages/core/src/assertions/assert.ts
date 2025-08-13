/**
 * Asserts that a given condition is true at runtime.
 *
 * If the condition evaluates to `false`, an `Error` is thrown with the provided message,
 * or a default message if none is specified. This function uses TypeScript's `asserts`
 * feature to inform the type system that the condition can be assumed true after this call.
 *
 * @param condition - The value to assert as truthy.
 * @param message - Optional error message to display if the assertion fails.
 * @throws {Error} Throws an error if the condition is falsy.
 */
export function assert(
	condition: unknown,
	message?: string,
): asserts condition {
	if (!condition) {
		throw new Error(message ?? "Assertion failed");
	}
}

/**
 * Asserts that a value should never occur.
 *
 * This function is typically used for exhaustive checks in switch statements
 * or other control flow constructs where all possible cases should be handled.
 * If called, it throws an error, indicating that an unexpected value was encountered.
 *
 * @param value - The value that should never occur.
 * @param message - Optional custom error message to include in the thrown error.
 * @throws {Error} Always throws an error with the provided message or a default message.
 */
export function assertNever(
	value: never,
	message?: string,
): asserts value is never {
	throw new Error(message ?? "Unexpected value");
}
