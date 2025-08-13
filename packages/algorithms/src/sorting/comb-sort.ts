/**
 * Sorts an array using the comb sort algorithm.
 *
 * Comb sort improves on bubble sort by using a gap sequence to eliminate turtles, or small values near the end of the list,
 * which slow down bubble sort. The gap starts as the length of the array and shrinks by a shrink factor (typically 1.3)
 * until it reaches 1. The algorithm continues swapping elements until no swaps are needed.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to be sorted. The sorting is performed in-place.
 * @param compareFn - A comparison function that returns a negative number if the first argument is less than the second,
 *                    zero if they're equal, and a positive number if the first is greater than the second.
 * @returns The sorted array.
 *
 * @example
 * ```typescript
 * const arr = [5, 3, 8, 4, 2];
 * combSort(arr, (a, b) => a - b);
 * // arr is now [2, 3, 4, 5, 8]
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Comb_sort} for more information on comb sort.
 */
export function combSort<T>(
	array: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	const shrinkFactor = 1.3;
	let gap = array.length;
	let swapped = true;

	while (gap > 1 || swapped) {
		gap = Math.max(1, Math.floor(gap / shrinkFactor));
		swapped = false;

		for (let i = 0; i + gap < array.length; i++) {
			if (compareFn(array[i], array[i + gap]) > 0) {
				[array[i], array[i + gap]] = [array[i + gap], array[i]];
				swapped = true;
			}
		}
	}
	return array;
}
