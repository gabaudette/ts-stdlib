/**
 * Determines whether a given value is a non-null object and satisfies a specified type guard.
 *
 * @typeParam T - The type to check for.
 * @param value - The value to be checked.
 * @param typeGuard - A type guard function that asserts whether the value is of type T.
 * @returns `true` if the value is a non-null object and passes the type guard; otherwise, `false`.
 *
 * @example
 * isObjectOfType({ a: 1 }, (val): val is { a: number } => typeof val.a === "number"); // true
 * isObjectOfType({ a: "1" }, (val): val is { a: number } => typeof val.a === "number"); // false
 */
export function isObjectOfType<T>(
	value: unknown,
	typeGuard: (val: unknown) => val is T,
): value is T {
	return typeof value === "object" && value !== null && typeGuard(value);
}

/**
 * Determines if a given value is an object of a specific type and contains all specified keys.
 *
 * @typeParam T - The expected object type.
 * @param value - The value to be checked.
 * @param typeGuard - A type guard function that checks if the value is of type T.
 * @param keys - An array of keys that must be present in the object.
 * @returns `true` if the value is an object of type T and contains all specified keys; otherwise, `false`.
 */
export function isObjectOfTypeWithKeys<T extends object>(
	value: unknown,
	typeGuard: (val: unknown) => val is T,
	keys: (keyof T)[],
): value is T {
	return isObjectOfType(value, typeGuard) && keys.every((key) => key in value);
}
