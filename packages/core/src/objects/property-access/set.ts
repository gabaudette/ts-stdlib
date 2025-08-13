/**
 * Returns a new object with the specified property set to the given value.
 *
 * This function creates a shallow copy of the original object and updates the value
 * of the specified key. The original object is not mutated.
 *
 * @typeParam T - The type of the object.
 * @typeParam K - The key of the property to set, constrained to keys of T.
 * @param obj - The source object.
 * @param key - The property key to set.
 * @param value - The new value for the specified property.
 * @returns A new object with the updated property value.
 *
 * @example
 * const user = { id: 1, name: "Alice" };
 * const updatedUser = set(user, "name", "Bob");
 * console.log(updatedUser); // { id: 1, name: "Bob" }
 * 
 */
export function set<T extends object, K extends keyof T>(
	obj: T,
	key: K,
	value: T[K],
): T {
	return { ...obj, [key]: value };
}
