/**
 * Sorts an array using a distribution sort algorithm, which divides the input into buckets
 * based on a value extracted from each item, sorts each bucket, and then concatenates the results.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array of elements to sort.
 * @param compareFn - A comparison function used to sort elements within each bucket.
 * @param getValue - A function that extracts a numeric value from each element, used for bucket assignment.
 * @returns A new array containing the sorted elements.
 *
 * @see {@link https://en.wikipedia.org/wiki/Distribution_sort} for more information on distribution sort.
 *
 * @remarks
 * - The number of buckets is determined by the square root of the array's length.
 * - This algorithm is efficient for data that is uniformly distributed.
 * - The sorting within each bucket uses the provided `compareFn`.
 */
export function distributionSort<T>(
	arr: T[],
	compareFn: (a: T, b: T) => number,
	keyFn: (item: T) => number,
): T[] {
	if (arr.length === 0) return [];
	const min = Math.min(...arr.map(keyFn));
	const max = Math.max(...arr.map(keyFn));
	const buckets: T[][] = Array.from({ length: max - min + 1 }, () => []);
	for (const item of arr) {
		buckets[keyFn(item) - min].push(item);
	}
	return buckets.flat().sort(compareFn);
}
