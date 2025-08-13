/**
 * Determines whether the provided value is a non-null object and not an array.
 *
 * @param item - The value to check.
 * @returns True if the value is a non-null object and not an array; otherwise, false.
 */
export function isObject(item: unknown): item is object {
	return item !== null && typeof item === "object" && !Array.isArray(item);
}
