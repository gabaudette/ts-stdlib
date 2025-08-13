/**
 * Sorts an array using the merge sort algorithm.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to be sorted.
 * @param compareFn - A comparison function that defines the sort order.
 * It should return a negative number if `a < b`, zero if `a === b`, and a positive number if `a > b`.
 * @returns A new sorted array containing the elements of the input array.
 * @see [Merge Sort Visualization](https://www.geeksforgeeks.org/merge-sort/)
 * @see {@link https://en.wikipedia.org/wiki/Merge_sort} for more information on merge sort.
 */
export function mergeSort<T>(
	array: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	if (array.length < 2) {
		return array;
	}

	const mid = Math.floor(array.length / 2);
	const left = mergeSort(array.slice(0, mid), compareFn);
	const right = mergeSort(array.slice(mid), compareFn);

	return merge(left, right, compareFn);
}


/**
 * Merges two sorted arrays into a single sorted array using the provided comparison function.
 *
 * @typeParam T - The type of elements in the arrays.
 * @param left - The first sorted array.
 * @param right - The second sorted array.
 * @param compareFn - A function that compares two elements and returns a negative number if the first is less than the second, zero if they're equal, or a positive number if the first is greater.
 * @returns A new array containing all elements from `left` and `right`, sorted according to `compareFn`.
 */
function merge<T>(
	left: T[],
	right: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	const merged: T[] = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (compareFn(left[i], right[j]) < 0) {
			merged.push(left[i]);
			i++;
		} else {
			merged.push(right[j]);
			j++;
		}
	}

	return merged.concat(left.slice(i)).concat(right.slice(j));
}
