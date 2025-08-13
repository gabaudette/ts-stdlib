/**
 * Determines whether the specified key exists as a property on the given object.
 *
 * @typeParam T - The type of the object to check.
 * @typeParam K - The type of the key to check for, constrained to the keys of T.
 * @param obj - The object to check for the presence of the property.
 * @param key - The property key to check for on the object.
 * @returns `true` if the key exists in the object; otherwise, `false`.
 *
 * @example
 * const user = { id: 1, name: "Alice" };
 * const hasName = has(user, "name"); // true
 * const hasAge = has(user, "age");   // false
 *
 * @remarks
 * This function is a simple utility for checking the existence of properties on objects.
 */
export function has<T extends object, K extends keyof T>(
	obj: T,
	key: K,
): boolean {
	return key in obj;
}
