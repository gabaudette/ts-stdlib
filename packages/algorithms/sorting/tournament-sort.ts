/**
 * Sorts an array using the tournament sort algorithm.
 *
 * Tournament sort is a comparison-based sorting algorithm that recursively divides the array,
 * sorts the subarrays, and merges them using the provided comparison function.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to be sorted.
 * @param compareFn - A function that defines the sort order. It should return a negative value if the first argument is less than the second, zero if they're equal, and a positive value otherwise.
 * @returns A new array containing the sorted elements.
 * @see {@link https://en.wikipedia.org/wiki/Tournament_sort} for more information on tournament sort.
 */
export function tournamentSort<T>(
	array: T[],
	compareFn: (a: T, b: T) => number,
): T[] {
	if (array.length < 2) return array;

	const tournament = (start: number, end: number): T[] => {
		if (start === end) return [array[start]];

		const mid = Math.floor((start + end) / 2);
		const left = tournament(start, mid);
		const right = tournament(mid + 1, end);

		return merge(left, right, compareFn);
	};

	return tournament(0, array.length - 1);
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
