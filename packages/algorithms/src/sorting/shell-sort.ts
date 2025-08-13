/**
 * Sorts an array using the Shell sort algorithm.
 *
 * Shell sort is an in-place comparison sort that generalizes insertion sort
 * by allowing the exchange of items that are far apart. The gap sequence used
 * here is n/2, n/4, ..., 1.
 *
 * @param array - The array to be sorted.
 * @param compareFn - A comparison function that returns a negative number if `a < b`,
 *   zero if `a === b`, and a positive number if `a > b`.
 * @returns The sorted array.
 *
 * @template T - The type of elements in the array.
 * @see {@link https://en.wikipedia.org/wiki/Shellsort} for more information on Shell sort.
 */
export function shellSort<T>(
	array: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	const n = array.length;
	let gap = Math.floor(n / 2);

	while (gap > 0) {
		for (let i = gap; i < n; i++) {
			const temp = array[i];
			let j = i;

			while (j >= gap && compareFn(array[j - gap], temp) > 0) {
				array[j] = array[j - gap];
				j -= gap;
			}
			array[j] = temp;
		}
		gap = Math.floor(gap / 2);
	}
	return array;
}
