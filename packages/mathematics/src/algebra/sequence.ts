import { isPrime } from "./factor";

/**
 * Generates the Fibonacci sequence up to the specified number of terms.
 *
 * @param n - The number of terms to generate in the Fibonacci sequence.
 * @returns An array containing the first `n` numbers of the Fibonacci sequence.
 *
 * @example
 * ```typescript
 * generateFibonacciSequence(5); // returns [0, 1, 1, 2, 3]
 * ```
 */
export function generateFibonacciSequence(n: number): number[] {
	const sequence: number[] = [];
	let a = 0;
	let b = 1;
	for (let i = 0; i < n; i++) {
		sequence.push(a);
		const next = a + b;
		a = b;
		b = next;
	}
	return sequence;
}

/**
 * Generates a sequence of the first `n` prime numbers.
 *
 * @param n - The number of prime numbers to generate.
 * @returns An array containing the first `n` prime numbers.
 *
 * @example
 * ```typescript
 * generatePrimeSequence(5); // returns [2, 3, 5, 7, 11]
 * ```
 */
export function generatePrimeSequence(n: number): number[] {
	const primes: number[] = [];
	let num = 2;
	while (primes.length < n) {
		if (isPrime(num)) {
			primes.push(num);
		}
		num++;
	}
	return primes;
}

/**
 * Generates an array containing the first `n` even numbers, starting from 0.
 *
 * @param n - The number of even numbers to generate.
 * @returns An array of the first `n` even numbers.
 *
 * @example
 * ```typescript
 * generateEvenSequence(5); // returns [0, 2, 4, 6, 8]
 * ```
 */
export function generateEvenSequence(n: number): number[] {
	const evens: number[] = [];
	for (let i = 0; i < n; i++) {
		evens.push(i * 2);
	}
	return evens;
}

/**
 * Generates a sequence of the first `n` odd numbers.
 *
 * @param n - The number of odd numbers to generate.
 * @returns An array containing the first `n` odd numbers, starting from 1.
 *
 * @example
 * ```typescript
 * generateOddSequence(5); // returns [1, 3, 5, 7, 9]
 * ```
 */
export function generateOddSequence(n: number): number[] {
	const odds: number[] = [];
	for (let i = 0; i < n; i++) {
		odds.push(i * 2 + 1);
	}
	return odds;
}

/**
 * Generates an arithmetic sequence as an array of numbers.
 *
 * An arithmetic sequence is a sequence of numbers in which the difference between consecutive terms is constant.
 *
 * @param start - The first term of the sequence.
 * @param difference - The common difference between consecutive terms.
 * @param n - The number of terms to generate in the sequence.
 * @returns An array containing the generated arithmetic sequence.
 *
 * @example
 * ```typescript
 * generateArithmeticSequence(2, 3, 5); // Returns [2, 5, 8, 11, 14]
 * ```
 */
export function generateArithmeticSequence(
	start: number,
	difference: number,
	n: number,
): number[] {
	const sequence: number[] = [];
	for (let i = 0; i < n; i++) {
		sequence.push(start + i * difference);
	}

	return sequence;
}

/**
 * Generates a geometric sequence of numbers.
 *
 * A geometric sequence is a sequence where each term after the first is found by multiplying the previous term by a fixed, non-zero number called the ratio.
 *
 * @param start - The first term of the sequence.
 * @param ratio - The common ratio between consecutive terms.
 * @param n - The number of terms to generate.
 * @returns An array containing the geometric sequence of length `n`.
 *
 * @example
 * ```typescript
 * generateGeometricSequence(2, 3, 5); // returns [2, 6, 18, 54, 162]
 * ```
 */
export function generateGeometricSequence(
	start: number,
	ratio: number,
	n: number,
): number[] {
	const sequence: number[] = [];
	for (let i = 0; i < n; i++) {
		sequence.push(start * ratio ** i);
	}

	return sequence;
}

/**
 * Generates the first `n` terms of the harmonic sequence.
 *
 * The harmonic sequence is defined as: [1, 1/2, 1/3, ..., 1/n].
 *
 * @param n - The number of terms to generate in the sequence. Must be a positive integer.
 * @returns An array containing the first `n` terms of the harmonic sequence.
 *
 * @example
 * ```typescript
 * generateHarmonicSequence(5); // returns [1, 0.5, 0.333..., 0.25, 0.2]
 * ```
 */
export function generateHarmonicSequence(n: number): number[] {
	const sequence: number[] = [];
	for (let i = 1; i <= n; i++) {
		sequence.push(1 / i);
	}

	return sequence;
}

/**
 * Generates the first `n` triangular numbers as an array.
 *
 * A triangular number is the sum of the natural numbers up to a given number.
 * The nth triangular number is given by the formula: n * (n + 1) / 2.
 *
 * @param n - The number of triangular numbers to generate.
 * @returns An array containing the first `n` triangular numbers.
 *
 * @example
 * ```typescript
 * generateTriangularSequence(5); // [1, 3, 6, 10, 15]
 * ```
 */
export function generateTriangularSequence(n: number): number[] {
	const sequence: number[] = [];
	for (let i = 1; i <= n; i++) {
		sequence.push((i * (i + 1)) / 2);
	}

	return sequence;
}

/**
 * Generates a sequence of square numbers from 1 to n (inclusive).
 *
 * @param n - The number of square numbers to generate.
 * @returns An array containing the squares of the numbers from 1 to n.
 *
 * @example
 * ```typescript
 * generateSquareSequence(5); // Returns [1, 4, 9, 16, 25]
 * ```
 */
export function generateSquareSequence(n: number): number[] {
	const sequence: number[] = [];
	for (let i = 1; i <= n; i++) {
		sequence.push(i ** 2);
	}

	return sequence;
}

/**
 * Generates a sequence of cube numbers from 1 to `n`.
 *
 * Each element in the returned array is the cube of its 1-based index (i.e., `i ** 3` for `i` from 1 to `n`).
 *
 * @param n - The number of terms in the cube sequence to generate.
 * @returns An array containing the first `n` cube numbers.
 *
 * @example
 * ```typescript
 * generateCubeSequence(4); // returns [1, 8, 27, 64]
 * ```
 */
export function generateCubeSequence(n: number): number[] {
	const sequence: number[] = [];
	for (let i = 1; i <= n; i++) {
		sequence.push(i ** 3);
	}

	return sequence;
}

/**
 * Generates a sequence of factorial numbers up to the given number `n`.
 *
 * Each element in the returned array represents the factorial of its (1-based) index.
 * For example, `generateFactorialSequence(5)` returns `[1, 2, 6, 24, 120]`.
 *
 * @param n - The number of terms in the factorial sequence to generate. Must be a non-negative integer.
 * @returns An array containing the factorial sequence from 1! up to n!.
 */
export function generateFactorialSequence(n: number): number[] {
	const sequence: number[] = [];
	let factorial = 1;
	for (let i = 1; i <= n; i++) {
		factorial *= i;
		sequence.push(factorial);
	}

	return sequence;
}

/**
 * Generates the first `n` terms of the Lucas sequence.
 *
 * The Lucas sequence is similar to the Fibonacci sequence, but starts with 2 and 1.
 * Each subsequent term is the sum of the two preceding terms:
 *   L(0) = 2, L(1) = 1, L(n) = L(n-1) + L(n-2) for n > 1.
 *
 * @param n - The number of terms to generate in the sequence.
 * @returns An array containing the first `n` terms of the Lucas sequence.
 *
 * @example
 * ```typescript
 * generateLucasSequence(5); // returns [2, 1, 3, 4, 7]
 * ```
 */
export function generateLucasSequence(n: number): number[] {
	const sequence: number[] = [];
	let a = 2;
	let b = 1;
	for (let i = 0; i < n; i++) {
		sequence.push(a);
		const next = a + b;
		a = b;
		b = next;
	}

	return sequence;
}

/**
 * Generates the first `n` terms of the Pell sequence.
 *
 * The Pell sequence is defined by the recurrence relation:
 *   P(n) = 2 * P(n-1) + P(n-2)
 * with initial values P(0) = 2 and P(1) = 1.
 *
 * @param n - The number of terms to generate.
 * @returns An array containing the first `n` Pell numbers.
 *
 * @example
 * ```typescript
 * generatePellSequence(5); // returns [2, 1, 4, 9, 22]
 * ```
 */
export function generatePellSequence(n: number): number[] {
	const seq: number[] = [];
	for (let i = 0; i < n; i++) {
		seq.push(i === 0 ? 2 : i === 1 ? 1 : 2 * seq[i - 1] + seq[i - 2]);
	}
	return seq;
}

/**
 * Generates the Jacobsthal sequence up to the specified number of terms.
 *
 * The Jacobsthal sequence is defined by the recurrence relation:
 *   J(0) = 0, J(1) = 1, and J(n) = J(n-1) + 2 * J(n-2) for n > 1.
 *
 * @param n - The number of terms to generate in the sequence.
 * @returns An array containing the first `n` terms of the Jacobsthal sequence.
 *
 * @example
 * ```typescript
 * generateJacobsthalSequence(5); // returns [0, 1, 1, 3, 5]
 * ```
 */
export function generateJacobsthalSequence(n: number): number[] {
	const sequence: number[] = [];
	let a = 0;
	let b = 1;
	for (let i = 0; i < n; i++) {
		sequence.push(a);
		const next = a + 2 * b;
		a = b;
		b = next;
	}

	return sequence;
}

/**
 * Generates a sequence of numbers for a Karnaugh map of size `n`.
 *
 * @param n - The number of elements in the sequence.
 * @returns An array of numbers from 0 to `n - 1`.
 *
 * @remarks
 * This function currently generates a simple linear sequence. For a true Karnaugh map sequence,
 * a Gray code sequence may be required.
 *
 * @see {@link generateGrayCodeSequence}
 */
export function generateKarnaughMapSequence(n: number): number[] {
	const sequence: number[] = [];
	for (let i = 0; i < n; i++) {
		sequence.push(i);
	}

	return sequence;
}

/**
 * Generates the sequence of Gray codes for a given number of bits.
 *
 * Gray code is a binary numeral system where two successive values differ in only one bit.
 * This function returns an array containing the Gray code sequence for `n` bits,
 * where each element is an integer representation of the Gray code.
 *
 * @param n - The number of bits for the Gray code sequence. Must be a non-negative integer.
 * @returns An array of numbers representing the Gray code sequence for `n` bits.
 *
 * @example
 * ```typescript
 * generateGrayCodeSequence(2); // returns [0, 1, 3, 2]
 * ```
 */
export function generateGrayCodeSequence(n: number): number[] {
	const sequence: number[] = [];
	for (let i = 0; i < 2 ** n; i++) {
		sequence.push(i ^ (i >> 1));
	}

	return sequence;
}
