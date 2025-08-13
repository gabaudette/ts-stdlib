/**
 * Sorts an array using the insertion sort algorithm.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to be sorted. The sorting is performed in-place.
 * @param compareFn - A comparison function that defines the sort order.
 * It should return a negative number if the first argument is less than the second,
 * zero if they're equal, and a positive number if the first is greater.
 * @returns The sorted array.
 *
 * @example
 * ```typescript
 * const arr = [3, 1, 2];
 * const sorted = insertionSort(arr, (a, b) => a - b);
 * // sorted: [1, 2, 3]
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Insertion_sort} for more information on insertion sort.
 */
export function insertionSort<T>(
	array: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	if (array.length < 2) {
		return array;
	}

	for (let i = 1; i < array.length; i++) {
		const key = array[i];
		let j = i - 1;

		while (j >= 0 && compareFn(array[j], key) > 0) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = key;
	}

	return array;
}
