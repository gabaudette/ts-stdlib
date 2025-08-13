/**
 * Determines whether the provided value is of type `string`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a string, otherwise `false`.
 *
 * @example
 * ```typescript
 * isString("hello"); // true
 * isString(123);     // false
 * ```
 */
export function isString(value: unknown): value is string {
	return typeof value === "string";
}

/**
 * Determines whether the provided value is an array of strings.
 *
 * @param value - The value to check.
 * @returns True if the value is an array where every element is a string; otherwise, false.
 *
 * @example
 * ```typescript
 * isStringArray(["hello", "world"]); // true
 * isStringArray(["hello", 123]);     // false
 * ```
 */
export function isStringArray(value: unknown): value is string[] {
	return Array.isArray(value) && value.every(isString);
}
