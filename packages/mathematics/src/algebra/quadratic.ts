/**
 * Generates a sequence of numbers based on a quadratic formula.
 *
 * The sequence is generated using the formula: `a * i^2 + b * i + c` for each `i` from 0 to `n - 1`.
 *
 * @param a - The coefficient of the quadratic term.
 * @param b - The coefficient of the linear term.
 * @param c - The constant term.
 * @param n - The number of terms to generate in the sequence.
 * @returns An array of numbers representing the quadratic sequence.
 *
 * @example
 * // Generates the sequence for the quadratic equation 2x^2 + 3x + 1 for x = 0, 1, 2, 3
 * generateQuadraticSequence(2, 3, 1, 4); // returns [1, 6, 13, 22]
 */
export function generateQuadraticSequence(
	a: number,
	b: number,
	c: number,
	n: number,
): number[] {
	const sequence: number[] = [];
	for (let i = 0; i < n; i++) {
		sequence.push(a * i ** 2 + b * i + c);
	}

	return sequence;
}

/**
 * Determines whether a given numeric sequence is a quadratic sequence.
 *
 * A quadratic sequence is one in which the second differences between consecutive terms are constant.
 * This function checks if the input sequence has at least three elements and verifies if the sequence
 * is quadratic by analyzing the differences between terms.
 *
 * @param sequence - An array of numbers representing the sequence to check.
 * @returns `true` if the sequence is quadratic, otherwise `false`.
 *
 * @example
 * // Checks if the sequence [1, 4, 9, 16] is quadratic
 * isQuadraticSequence([1, 4, 9, 16]); // returns true
 */
export function isQuadraticSequence(sequence: number[]): boolean {
	if (sequence.length < 3) {
		return false;
	}

	const commonDifference = sequence[1] - sequence[0];
	for (let i = 2; i < sequence.length; i++) {
		const currentDifference = sequence[i] - sequence[i - 1];
		if (currentDifference !== commonDifference) {
			return false;
		}
	}

	return true;
}
