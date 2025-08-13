/**
 * Sorts an array using the selection sort algorithm.
 *
 * Iterates through the array, repeatedly finding the minimum element
 * from the unsorted portion and swapping it with the first unsorted element.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to be sorted. The sorting is done in-place.
 * @param compareFn - A comparison function that returns a negative number if the first argument is less than the second, zero if they're equal, and a positive number otherwise.
 * @returns The sorted array.
 * @see {@link https://en.wikipedia.org/wiki/Selection_sort} for more information on selection sort.
 */
export function selectionSort<T>(
	array: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	if (array.length < 2) return array;

	for (let i = 0; i < array.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < array.length; j++) {
			if (compareFn(array[j], array[minIndex]) < 0) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			[array[i], array[minIndex]] = [array[minIndex], array[i]];
		}
	}

	return array;
}
