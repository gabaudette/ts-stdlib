import { isObject } from "../types/guards/is-object";

/**
 * Recursively merges the properties of a source object into a target object.
 * For each property, if both the target and source values are objects, they are merged deeply.
 * Otherwise, the source value overwrites the target value.
 *
 * @typeParam T - The type of the target object.
 * @param target - The target object to merge properties into.
 * @param source - The source object whose properties will be merged into the target.
 * @returns The merged target object.
 *
 * @example
 * const target = { a: 1, b: { c: 2 } };
 * const source = { b: { d: 3 }, e: 4 };
 * const merged = mergeDeep(target, source);
 * // merged is { a: 1, b: { c: 2, d: 3 }, e: 4 }
 *
 * @remarks
 * This function performs a deep merge, meaning that nested objects are merged recursively.
 * If you only want a shallow merge, consider using Object.assign or the spread operator.
 */
export function mergeDeep<T extends object>(target: T, source: Partial<T>): T {
	for (const key in source) {
		// biome-ignore lint/suspicious/noPrototypeBuiltins: TypeScript allows any type for keys
		if (Object.prototype.hasOwnProperty.call(source, key)) {
			const targetValue = target[key];
			const sourceValue = source[key];

			if (isObject(targetValue) && isObject(sourceValue)) {
				target[key] = mergeDeep(targetValue, sourceValue);
			} else {
				target[key] = sourceValue as (typeof target)[typeof key];
			}
		}
	}

	return target;
}
