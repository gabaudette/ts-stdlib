/**
 * Determines whether a value is neither `undefined` nor `null`.
 *
 * @typeParam T - The type of the value to check.
 * @param value - The value to test for being defined.
 * @returns `true` if the value is not `undefined` and not `null`; otherwise, `false`.
 *
 * @example
 * ```typescript
 * const maybeValue: string | undefined = getValue();
 * if (isDefined(maybeValue)) {
 *   // maybeValue is now of type string
 *   console.log(maybeValue.length);
 * }
 * ```
 */
export function isDefined<T>(value: T | undefined | null): value is T {
	return value !== undefined && value !== null;
}

/**
 * Filters out `undefined` and `null` values from an array.
 * @typeParam T - The type of elements in the input array.
 * @param array - The array to filter, which may contain `T`, `undefined`, or `null` values.
 * @returns A new array containing only the defined (non-`undefined`, non-`null`) values of type `T`.
 *
 * @example
 * ```typescript
 * const values: (string | undefined | null)[] = ['a', undefined, 'b', null, 'c'];
 * const definedValues = filterDefined(values);
 * // definedValues is of type string[]
 * ```
 */
export function filterDefined<T>(array: (T | undefined | null)[]): T[] {
	return array.filter(isDefined);
}
