/**
 * Sorts an array of numbers using the radix sort algorithm.
 *
 * Radix sort processes each digit of the numbers, starting from the least significant digit
 * to the most significant digit, and sorts the array by distributing numbers into buckets
 * based on the current digit.
 *
 * @param array - The array of numbers to be sorted.
 * @param maxDigitLength - The maximum number of digits in the largest number in the array.
 * @returns A new array containing the sorted numbers.
 *
 * @example
 * ```typescript
 * const arr = [170, 45, 75, 90, 802, 24, 2, 66];
 * const sorted = radixSort(arr, 3);
 * // sorted: [2, 24, 45, 66, 75, 90, 170, 802]
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Radix_sort} for more information on radix sort.
 */
export function radixSort(array: number[], maxDigitLength: number): number[] {
	const getDigit = (num: number, place: number) => {
		const digit = Math.floor(Math.abs(num) / 10 ** place) % 10;
		return digit;
	};

	for (let i = 0; i < maxDigitLength; i++) {
		const buckets: number[][] = Array.from({ length: 10 }, () => []);
		for (const num of array) {
			const digit = getDigit(num, i);
			buckets[digit].push(num);
		}
		
		array = buckets.flat();
	}

	return array;
}
