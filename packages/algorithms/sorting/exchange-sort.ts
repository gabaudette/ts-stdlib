/**
 * Sorts an array in-place using the exchange sort algorithm.
 * Exchange sort compares each pair of elements and swaps them if they are out of order,
 * resulting in a sorted array after all passes.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to be sorted. The sorting is performed in-place.
 * @param compareFn - A comparison function that returns a positive number if the first argument is greater,
 *                    a negative number if the second is greater, and zero if they are equal.
 * @returns The sorted array.
 *
 * @example
 * ```typescript
 * const arr = [3, 1, 2];
 * exchangeSort(arr, (a, b) => a - b); // [1, 2, 3]
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Sorting_algorithm#Exchange_sort} for more information on exchange sort.
 */
export function exchangeSort<T>(
	array: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	const n = array.length;

	for (let i = 0; i < n - 1; i++) {
		for (let j = i + 1; j < n; j++) {
			if (compareFn(array[i], array[j]) > 0) {
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
	}
	return array;
}
