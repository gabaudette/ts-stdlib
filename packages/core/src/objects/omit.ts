/**
 * Creates a shallow copy of the given object with the specified keys omitted.
 *
 * @typeParam T - The type of the source object.
 * @typeParam K - The union of keys to omit from the source object.
 * @param obj - The source object to omit properties from.
 * @param keys - An array of keys to omit from the resulting object.
 * @returns A new object with the specified keys omitted.
 *
 * @example
 * const original = { a: 1, b: 2, c: 3 };
 * const omitted = omit(original, ["b", "c"]);
 * // omitted is { a: 1 }, but a different instance
 */
export function omit<T extends object, K extends keyof T>(
	obj: T,
	keys: K[],
): Omit<T, K> {
	const result = { ...obj } as Omit<T, K>;
	for (const key of keys) {
		if (key in result) {
			delete (result as Omit<T, K> & { [P in K]: unknown })[key];
		}
	}

	return result;
}
