/**
 * Determines whether the provided value is of type `number`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a number; otherwise, `false`.
 *
 * @example
 * ```typescript
 * isNumber(42); // true
 * isNumber("42"); // false
 * ```
 */
export function isNumber(value: unknown): value is number {
	return typeof value === "number";
}

/**
 * Determines whether the provided value is an array consisting entirely of numbers.
 *
 * @param value - The value to check.
 * @returns True if the value is an array where every element is a number; otherwise, false.
 *
 * @example
 * isNumberArray([1, 2, 3]); // true
 * isNumberArray([1, "2", 3]); // false
 */
export function isNumberArray(value: unknown): value is number[] {
	return Array.isArray(value) && value.every(isNumber);
}
