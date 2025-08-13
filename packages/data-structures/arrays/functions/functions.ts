/**
 * Groups the elements of an array by a specified key.
 * @param array The array to process.
 * @param key The key to group by.
 * @returns An object where the keys are the group values and the values are arrays of items in each group.
 */
/**
 * Groups the elements of an array based on the specified key.
 *
 * @typeParam T - The type of elements in the input array.
 * @param array - The array of objects to group.
 * @param key - The property name of each object to group by.
 * @returns An object where each key is a stringified value of the specified property,
 * and the value is an array of objects that share that property value.
 *
 * @example
 * ```typescript
 * const data = [
 *   { category: 'fruit', name: 'apple' },
 *   { category: 'fruit', name: 'banana' },
 *   { category: 'vegetable', name: 'carrot' }
 * ];
 * const grouped = groupBy(data, 'category');
 * // grouped = {
 * //   fruit: [
 * //     { category: 'fruit', name: 'apple' },
 * //     { category: 'fruit', name: 'banana' }
 * //   ],
 * //   vegetable: [
 * //     { category: 'vegetable', name: 'carrot' }
 * //   ]
 * // }
 * ```
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
	const groups: Record<string, T[]> = {};
	for (const item of array) {
		const groupKey = String(item[key]);
		if (!groups[groupKey]) {
			groups[groupKey] = [];
		}
		groups[groupKey].push(item);
	}
	return groups;
}

/**
 * Splits an array into two arrays based on a predicate function.
 *
 * The first array contains all elements for which the predicate returns `true`,
 * and the second array contains all elements for which the predicate returns `false`.
 *
 * @typeParam T - The type of elements in the input array.
 * @param array - The array to partition.
 * @param predicate - A function that tests each element for a condition.
 * @returns A tuple containing two arrays: the first with elements passing the predicate, the second with elements failing it.
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3, 4, 5];
 * const [evens, odds] = partition(numbers, n => n % 2 === 0);
 * // evens: [2, 4], odds: [1, 3, 5]
 * ```
 */
export function partition<T>(
	array: T[],
	predicate: (item: T) => boolean,
): [T[], T[]] {
	const pass: T[] = [];
	const fail: T[] = [];
	for (const item of array) {
		if (predicate(item)) {
			pass.push(item);
		} else {
			fail.push(item);
		}
	}
	return [pass, fail];
}

/**
 * Returns a new array containing only the unique elements from the input array, preserving their original order.
 *
 * @typeParam T - The type of elements in the input array.
 * @param array - The array from which to extract unique elements.
 * @returns A new array with duplicate elements removed.
 */
export function unique<T>(array: T[]): T[] {
	return Array.from(new Set(array));
}

/**
 * Combines two arrays into a single array of pairs.
 * Each pair contains elements from the same index of the input arrays.
 * The resulting array has the length of the shorter input array.
 *
 * @typeParam T - The type of elements in the first array.
 * @typeParam U - The type of elements in the second array.
 * @param array1 - The first array to zip.
 * @param array2 - The second array to zip.
 * @returns An array of pairs, where each pair contains one element from each input array.
 *
 * @example
 * ```typescript
 * zip([1, 2, 3], ['a', 'b', 'c']); // [[1, 'a'], [2, 'b'], [3, 'c']]
 * zip([1, 2], ['a', 'b', 'c']);    // [[1, 'a'], [2, 'b']]
 * ```
 */
export function zip<T, U>(array1: T[], array2: U[]): [T, U][] {
	const length = Math.min(array1.length, array2.length);
	const result: [T, U][] = [];
	for (let i = 0; i < length; i++) {
		result.push([array1[i], array2[i]]);
	}
	return result;
}

/**
 * Generates an array of numbers in a specified range.
 *
 * @param start - The starting number of the range (inclusive).
 * @param end - The ending number of the range (exclusive).
 * @returns An array containing numbers from `start` up to, but not including, `end`.
 *
 * @example
 * ```typescript
 * range(0, 5); // [0, 1, 2, 3, 4]
 * range(3, 7); // [3, 4, 5, 6]
 * ```
 */
export function range(start: number, end: number): number[] {
	return Array.from({ length: end - start }, (_, i) => i + start);
}

/**
 * Splits an array into chunks of a specified size.
 *
 * @param array - The array to be chunked.
 * @param size - The size of each chunk. Must be a positive integer.
 * @returns A new array containing subarrays (chunks) of the specified size.
 *          The last chunk may be smaller if the array cannot be evenly divided.
 *
 * @example
 * ```typescript
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 * ```
 */
export function chunk<T>(array: T[], size: number): T[][] {
	const result: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
}

/**
 * Returns the last `n` elements of an array.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to query.
 * @param n - The number of elements to return from the end of the array. Defaults to 1.
 * @returns An array containing the last `n` elements of the input array. Returns an empty array if `n` is less than or equal to 0.
 */
export function last<T>(array: T[], n: number = 1): T[] {
	if (n <= 0) {
		return [];
	}
	return array.slice(-n);
}

/**
 * Returns the first `n` elements of an array.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to query.
 * @param n - The number of elements to return from the start of the array. Defaults to 1.
 * @returns An array containing the first `n` elements of the input array. Returns an empty array if `n` is less than or equal to 0.
 */
export function first<T>(array: T[], n: number = 1): T[] {
	if (n <= 0) {
		return [];
	}
	return array.slice(0, n);
}

/**
 * Returns a new array containing the elements that are present in both `array1` and `array2`.
 *
 * @typeParam T - The type of elements in the input arrays.
 * @param array1 - The first array to compare.
 * @param array2 - The second array to compare.
 * @returns An array of elements found in both `array1` and `array2`. The order is preserved from `array1`.
 *
 * @example
 * ```typescript
 * intersection([1, 2, 3], [2, 3, 4]); // returns [2, 3]
 * ```
 */
export function intersection<T>(array1: T[], array2: T[]): T[] {
	return array1.filter((item) => array2.includes(item));
}

/**
 * Returns a new array containing the unique elements from both input arrays.
 * The order of elements is preserved based on their first occurrence.
 *
 * @typeParam T - The type of elements in the input arrays.
 * @param array1 - The first array to include in the union.
 * @param array2 - The second array to include in the union.
 * @returns A new array containing the union of `array1` and `array2`, with duplicates removed.
 */
export function union<T>(array1: T[], array2: T[]): T[] {
	return unique([...array1, ...array2]);
}

/**
 * Returns a new array containing the elements from `array1` that are not present in `array2`.
 *
 * @typeParam T - The type of elements in the input arrays.
 * @param array1 - The array to filter.
 * @param array2 - The array containing elements to exclude from `array1`.
 * @returns A new array with elements from `array1` that are not found in `array2`.
 *
 * @example
 * ```typescript
 * difference([1, 2, 3], [2, 4]); // returns [1, 3]
 * ```
 */
export function difference<T>(array1: T[], array2: T[]): T[] {
	return array1.filter((item) => !array2.includes(item));
}

/**
 * Returns the symmetric difference between two arrays.
 * The symmetric difference consists of elements that are present in either of the arrays, but not in both.
 *
 * @typeParam T - The type of elements in the arrays.
 * @param array1 - The first array to compare.
 * @param array2 - The second array to compare.
 * @returns A new array containing the elements that are unique to each array.
 *
 * @example
 * ```typescript
 * symmetricDifference([1, 2, 3], [3, 4, 5]); // [1, 2, 4, 5]
 * ```
 */
export function symmetricDifference<T>(array1: T[], array2: T[]): T[] {
	const diff1 = difference(array1, array2);
	const diff2 = difference(array2, array1);
	return [...diff1, ...diff2];
}

/**
 * Randomly shuffles the elements of an array in place using the Fisher-Yates algorithm.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to shuffle. The original array is modified.
 * @returns The shuffled array.
 *
 * @example
 * ```typescript
 * const arr = [1, 2, 3, 4];
 * shuffle(arr); // arr is now shuffled, e.g., [3, 1, 4, 2]
 * ```
 */
export function shuffle<T>(array: T[]): T[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

/**
 * Returns a new array containing only the first occurrence of each element,
 * as determined by the value returned from the provided key selector function.
 *
 * @typeParam T - The type of elements in the input array.
 * @typeParam K - The type of the key used to determine uniqueness.
 * @param array - The array to filter for distinct elements.
 * @param key - A function that takes an element and returns a key used for uniqueness comparison.
 * @returns A new array with only the first occurrence of each unique key.
 *
 * @example
 * ```typescript
 * const data = [{ id: 1 }, { id: 2 }, { id: 1 }];
 * const unique = distinctBy(data, item => item.id);
 * // unique = [{ id: 1 }, { id: 2 }]
 * ```
 */
export function distinctBy<T, K>(array: T[], key: (item: T) => K): T[] {
	const seen = new Set<K>();
	return array.filter((item) => {
		const k = key(item);
		if (seen.has(k)) {
			return false;
		}
		seen.add(k);
		return true;
	});
}
