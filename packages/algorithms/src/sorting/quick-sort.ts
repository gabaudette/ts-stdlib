/**
 * Sorts an array using the Quick Sort algorithm.
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
 * const arr = [3, 1, 4, 1, 5, 9];
 * const sorted = quickSort(arr, (a, b) => a - b);
 * // sorted: [1, 1, 3, 4, 5, 9]
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Quicksort} for more information on quick sort.
 */
export function quickSort<T>(
	array: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	if (array.length < 2) {
		return array;
	}

	const partition = (low: number, high: number): number => {
		const pivot = array[high];
		let i = low - 1;

		for (let j = low; j < high; j++) {
			if (compareFn(array[j], pivot) < 0) {
				i++;
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
		[array[i + 1], array[high]] = [array[high], array[i + 1]];
		return i + 1;
	};

	const sort = (low: number, high: number): void => {
		if (low < high) {
			const pivotIndex = partition(low, high);
			sort(low, pivotIndex - 1);
			sort(pivotIndex + 1, high);
		}
	};

	sort(0, array.length - 1);
	return array;
}
