/**
 * Returns an array of the own enumerable property names (keys) of the given object.
 *
 * @typeParam T - The type of the input object.
 * @param obj - The object whose own enumerable property names are to be returned.
 * @returns An array of keys of the object, typed as `(keyof T)[]`.
 *
 * @example
 * const user = { id: 1, name: "Alice" };
 * const keys = getKeys(user);
 * console.log(keys); // ["id", "name"]
 *
 * @remarks
 * This function purports to provide a type-safe way to retrieve the keys of an object.
 * Because the default behavior of `Object.keys()` is to return an array of strings,
 * this function uses a type assertion to ensure the returned keys are correctly typed.
 */
export function keys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}

/**
 * Returns an array of the enumerable property values of the given object.
 *
 * @typeParam T - The type of the input object.
 * @param obj - The object whose enumerable property values are to be returned.
 * @returns An array containing the values of the object's enumerable properties.
 *
 * @example
 * const user = { id: 1, name: "Alice" };
 * const values = getValues(user);
 * console.log(values); // [1, "Alice"]
 * console.log(typeof values[0]); // number
 * console.log(typeof values[1]); // string
 *
 * @remarks
 * This function purports to provide a type-safe way to retrieve the values of an object.
 * Because the default behavior of `Object.values()` is to return an array of values,
 * this function uses a type assertion to ensure the returned values are correctly typed.
 */
export function values<T extends object>(obj: T): T[keyof T][] {
	return Object.values(obj) as T[keyof T][];
}

/**
 * Returns an array of the object's own enumerable string-keyed property [key, value] pairs.
 *
 * This function is a typed wrapper around `Object.entries`, preserving the key and value types of the input object.
 *
 * @typeParam T - The type of the input object.
 * @param obj - The object whose enumerable own property [key, value] pairs are to be returned.
 * @returns An array of [key, value] pairs for each enumerable property of the object.
 *
 * @example
 * const user = { id: 1, name: "Alice" };
 * const entries = getEntries(user);
 * console.log(entries); // [["id", 1], ["name", "Alice"]]
 * console.log(typeof entries[0][0]); // string
 * console.log(typeof entries[0][1]); // number
 * console.log(typeof entries[1][0]); // string
 * console.log(typeof entries[1][1]); // string
 */
export function entries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
	return Object.entries(obj) as [keyof T, T[keyof T]][];
}

/**
 * Creates a new object with the same keys as the input object, but with the values transformed by the provided mapping function.
 *
 * @typeParam T - The type of the input object.
 * @typeParam U - The type of the values in the resulting object.
 * @param obj - The source object whose values will be mapped.
 * @param fn - A function that is called for each value and key in the object. It returns the new value for that key.
 * @returns A new object with the same keys as `obj`, but with values returned by `fn`.
 *
 * @example
 * ```typescript
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = mapValues(obj, (value) => value * 2);
 * // result: { a: 2, b: 4, c: 6 }
 * ```
 */
export function mapValues<T extends object, U>(
	obj: T,
	fn: (value: T[keyof T], key: keyof T) => U,
): { [K in keyof T]: U } {
	const result: Partial<{ [K in keyof T]: U }> = {};
	for (const [key, value] of entries(obj)) {
		result[key] = fn(value, key);
	}

	return result as { [K in keyof T]: U };
}

/**
 * Creates a new object with the keys mapped by the provided function.
 *
 * @typeParam T - The type of the input object.
 * @typeParam K - The type of the new keys, must be a string.
 * @param obj - The source object whose keys will be mapped.
 * @param fn - A function that receives each key of the source object and returns a new key.
 * @returns A new object with keys transformed by `fn` and values preserved from the original object.
 *
 * @example
 * ```typescript
 * const obj = { a: 1, b: 2 };
 * const result = mapKeys(obj, key => key.toUpperCase());
 * // result: { A: 1, B: 2 }
 * ```
 */
export function mapKeys<T extends object, K extends string>(
	obj: T,
	fn: (key: keyof T) => K,
): { [P in K]: T[keyof T] } {
	const result: Partial<{ [P in K]: T[keyof T] }> = {};
	for (const [key, value] of entries(obj)) {
		result[fn(key)] = value;
	}

	return result as { [P in K]: T[keyof T] };
}

/**
 * Inverts the keys and values of an object. The returned object maps each value of the original object
 * (that is a string, number, or symbol) to its corresponding key. If multiple keys share the same value,
 * only one of them will be preserved in the result.
 *
 * @typeParam T - The type of the input object.
 * @param obj - The object whose keys and values are to be inverted.
 * @returns An object where the keys are the values of the input object and the values are the corresponding keys.
 *
 * @example
 * ```typescript
 * const obj = { a: 1, b: 2, c: 1 };
 * const inverted = invert(obj);
 * // inverted: { 1: 'c', 2: 'b' }
 * ```
 */
export function invert<T extends object>(
	obj: T,
): { [V in T[keyof T] & (string | number | symbol)]: { [K in keyof T]: T[K] extends V ? K : never }[keyof T] } {
	const result: Partial<Record<string | number | symbol, keyof T>> = {};
	for (const [key, value] of entries(obj)) {
		result[value as string | number | symbol] = key;
	}

	return result as { [V in T[keyof T] & (string | number | symbol)]: { [K in keyof T]: T[K] extends V ? K : never }[keyof T] };
}
