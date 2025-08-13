/**
 * Retrieves the value of a specified property from an object.
 *
 * @typeParam T - The type of the object.
 * @typeParam K - The key of the property to access, constrained to the keys of `T`.
 * @param obj - The object from which to retrieve the property value.
 * @param key - The key of the property to retrieve.
 * @returns The value of the specified property, or `undefined` if the property does not exist.
 *
 * @example
 * const user = { id: 1, name: "Alice" };
 * const userName = get(user, "name"); // "Alice"
 * const userAge = get(user, "age");   // undefined
 *
 * @remarks
 * This function is a simple utility for safely accessing properties on objects.
 */
export function get<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
	return obj[key];
}
