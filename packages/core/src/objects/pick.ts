/**
 * Creates a new object composed of the specified keys from the given object.
 *
 * @typeParam T - The type of the source object.
 * @typeParam K - The union of keys to pick from the source object.
 * @param obj - The source object to pick properties from.
 * @param keys - An array of keys to select from the source object.
 * @returns A new object containing only the picked properties.
 *
 * @example
 * ```typescript
 * const user = { id: 1, name: 'Alice', age: 30 };
 * const result = pick(user, ['id', 'name']);
 * // result: { id: 1, name: 'Alice' }
 * ```
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
	return keys.reduce(
		(acc, key) => {
			if (key in obj) {
				acc[key] = obj[key];
			}
			return acc;
		},
		{} as Pick<T, K>,
	);
}
