
/**
 * Sorts an array using the highly inefficient bogo sort algorithm, which repeatedly shuffles the array
 * until it is sorted according to the provided comparison function.
 *
 * @param array - The array to be sorted.
 * @param compareFn - A function that defines the sort order. It should return a negative value if the first argument is less than the second, zero if they're equal, and a positive value otherwise.
 * @returns The sorted array. Note: The sorting is performed in-place and the original array is mutated.
 *
 * @remarks
 * Bogo sort is an intentionally inefficient sorting algorithm and should not be used for practical purposes.
 * Its average time complexity is O((n+1)!), making it impractical for all but the smallest arrays.
 * 
 * Like for real, don't use this in production...
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
