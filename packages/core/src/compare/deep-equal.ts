/**
 * Performs a deep equality check between two values of the same type.
 *
 * This function recursively compares arrays, objects, and primitive values.
 * It also handles special cases such as `Date` objects.
 *
 * @typeParam T - The type of the values to compare.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` if the values are deeply equal, otherwise `false`.
 *
 * @example
 * ```typescript
 * deepEqual({ x: 1, y: [2, 3] }, { x: 1, y: [2, 3] }); // true
 * deepEqual([1, 2], [1, 2, 3]); // false
 * deepEqual(new Date(0), new Date(0)); // true
 * ```
 */
export function deepEqual<T>(a: T, b: T): boolean {
	if (a === b) {
		return true;
	}

	if (typeof a !== typeof b) {
		return false;
	}

	if (a instanceof Date && b instanceof Date) {
		return a.getTime() === b.getTime();
	}

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) {
			return false;
		}

		for (let i = 0; i < a.length; i++) {
			if (!deepEqual(a[i], b[i])) {
				return false;
			}
		}

		return true;
	}

	if (
		typeof a === "object" &&
		a !== null &&
		typeof b === "object" &&
		b !== null
	) {
		const keysA = Object.keys(a as Record<string, unknown>);
		const keysB = Object.keys(b as Record<string, unknown>);
		if (keysA.length !== keysB.length) {
			return false;
		}

		for (const key of keysA) {
			if (
				!keysB.includes(key) ||
				!deepEqual(
					(a as Record<string, unknown>)[key],
					(b as Record<string, unknown>)[key]
				)
			) {
				return false;
			}
		}

		return true;
	}

	return false;
}
