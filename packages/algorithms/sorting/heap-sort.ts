/**
 * Sorts an array of numbers in ascending order using the heap sort algorithm.
 *
 * Heap sort is an in-place, comparison-based sorting algorithm with O(n log n) time complexity.
 * This implementation modifies the input array and returns the sorted array.
 *
 * @param array - The array of numbers to sort.
 * @returns The sorted array in ascending order.
 * @see [Heap Sort Visualization](https://www.geeksforgeeks.org/heap-sort/)
 * @see {@link https://en.wikipedia.org/wiki/Heapsort} for more information on heap sort.
 */
export function heapSort(array: number[]): number[] {
	const n = array.length;

	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(array, n, i);
	}

	for (let i = n - 1; i > 0; i--) {
		[array[0], array[i]] = [array[i], array[0]];
		heapify(array, i, 0);
	}

	return array;
}

/**
 * Maintains the max-heap property for a subtree rooted at index `i` in the given array.
 * Assumes that the binary trees rooted at left and right children of `i` are already max-heaps.
 *
 * @param array - The array representing the heap.
 * @param n - The size of the heap within the array.
 * @param i - The index of the root of the subtree to heapify.
 */
function heapify(array: number[], n: number, i: number): void {
	let largest = i;
	const left = 2 * i + 1;
	const right = 2 * i + 2;

	if (left < n && array[left] > array[largest]) {
		largest = left;
	}

	if (right < n && array[right] > array[largest]) {
		largest = right;
	}

	if (largest !== i) {
		[array[i], array[largest]] = [array[largest], array[i]];
		heapify(array, n, largest);
	}
}
