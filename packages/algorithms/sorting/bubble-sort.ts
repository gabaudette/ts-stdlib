/**
 * Sorts an array using the bubble sort algorithm.
 *
 * The function sorts the array in-place according to the provided comparison function.
 * Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
 * The process is repeated until the array is sorted.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to be sorted.
 * @param compareFn - A function that defines the sort order. It should return a negative number if the first argument is less than the second, zero if they're equal, and a positive number if the first is greater.
 * @returns The sorted array.
 *
 * @example
 * ```typescript
 * const arr = [5, 3, 8, 4, 2];
 * bubbleSort(arr, (a, b) => a - b); // [2, 3, 4, 5, 8]
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Bubble_sort} for more information on bubble sort.
 */
export function bubbleSort(arr: number[]): number[] {
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}

	return arr;
}
