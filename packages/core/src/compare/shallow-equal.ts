/**
 * Performs a shallow equality comparison between two values.
 *
 * - For primitive values, returns `true` if they are strictly equal (`===`).
 * - For arrays, returns `true` if they have the same length and all corresponding elements are strictly equal.
 * - For plain objects, returns `true` if they have the same set of keys and all corresponding property values are strictly equal.
 * - Returns `false` for values of different types, or if any shallow property/element differs.
 *
 * @typeParam T - The type of the values to compare.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` if the values are shallowly equal, otherwise `false`.
 */
export function shallowEqual<T>(a: T, b: T): boolean {
	if (a === b) {
		return true;
	}

	if (typeof a !== typeof b) {
		return false;
	}

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) {
			return false;
		}

		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) {
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
				(a as Record<string, unknown>)[key] !== (b as Record<string, unknown>)[key]
			) {
				return false;
			}
		}

		return true;
	}

	return false;
}
