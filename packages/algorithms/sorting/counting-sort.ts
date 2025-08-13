/**
 * Sorts an array of non-negative integers using the counting sort algorithm.
 *
 * @param array - The array of non-negative integers to sort.
 * @param max - The maximum value in the array.
 * @returns A new array containing the sorted elements.
 *
 * @remarks
 * Counting sort is efficient for sorting integers when the range of input values (max) is not significantly larger than the number of elements.
 * This implementation assumes all numbers in the input array are between 0 and `max`, inclusive.
 *
 * @example
 * ```typescript
 * const arr = [4, 2, 2, 8, 3, 3, 1];
 * const sorted = countingSort(arr, 8);
 * // sorted: [1, 2, 2, 3, 3, 4, 8]
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Counting_sort} for more information on counting sort.
 */
export function countingSort(array: number[], max: number): number[] {
	if (array.length === 0) return [];
	if (max < 0) throw new Error("Max must be a non-negative integer");
	if (array.some((num) => num < 0 || num > max)) {
		throw new Error(`All numbers must be between 0 and ${max}`);
	}

	const count = new Array(max + 1).fill(0);
	for (const num of array) {
		count[num]++;
	}
	const result: number[] = [];
	for (let i = 0; i < count.length; i++) {
		result.push(...Array(count[i]).fill(i));
	}
	return result;
}
