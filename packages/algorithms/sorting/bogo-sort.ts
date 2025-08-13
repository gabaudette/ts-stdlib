/**
 * Sorts an array using the highly inefficient bogo sort algorithm.
 * Bogo sort repeatedly shuffles the array until it is sorted according to the provided comparison function.
 *
 * @template T The type of elements in the array.
 * @param array The array to be sorted. The sorting is performed in-place.
 * @param compareFn A function that defines the sort order. It should return a negative value if the first argument is less than the second, zero if they're equal, and a positive value otherwise.
 * @returns The sorted array.
 *
 * @remarks
 * Bogo sort has extremely poor performance and should only be used for educational or entertainment purposes.
 * @see {@link https://en.wikipedia.org/wiki/Bogo_sort} for more information on bogo sort.
 * @remarks
 * Like for real, don't use this in production.
 */
export function bogoSort<T>(
	array: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	if (array.length < 2) return array;

	const isSorted = (arr: T[]): boolean => {
		for (let i = 1; i < arr.length; i++) {
			if (compareFn(arr[i - 1], arr[i]) > 0) return false;
		}
		return true;
	};

	while (!isSorted(array)) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	return array;
}
