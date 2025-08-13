/**
 * Determines whether the provided object has no own enumerable properties.
 *
 * @param obj - The object to check for emptiness.
 * @returns `true` if the object has no own enumerable properties, otherwise `false`.
 *
 * @example
 * const obj = {};
 * console.log(isEmptyObject(obj)); // true
 *
 * const obj2 = { a: 1 };
 * console.log(isEmptyObject(obj2)); // false
 */
export function isEmptyObject(obj: Record<string, unknown>): boolean {
	return Object.keys(obj).length === 0;
}
