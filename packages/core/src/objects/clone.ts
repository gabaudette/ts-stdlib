/**
 * Creates a deep clone of the provided object or array.
 *
 * Recursively copies all properties and nested objects/arrays,
 * ensuring that the returned value is a new instance with no shared references
 * to the original object or its nested structures.
 *
 * @typeParam T - The type of the object to clone.
 * @param obj - The object or array to clone.
 * @returns A deep clone of the input object or array.
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const copy = clone(original);
 * // copy is { a: 1, b: { c: 2 } }, but a different instance
 *
 * @remarks
 * This function performs a deep clone, meaning that nested objects are copied recursively.
 * If you only want a shallow clone, consider using Object.assign or the spread operator.
 */
export function clone<T>(obj: T): T {
	if (obj === null || typeof obj !== "object") {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map((item) => clone(item)) as unknown as T;
	}

	const clonedObj = {} as T;
	for (const key in obj) {
		// biome-ignore lint/suspicious/noPrototypeBuiltins: TypeScript allows any type for keys
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			clonedObj[key] = clone(obj[key]);
		}
	}

	return clonedObj;
}
