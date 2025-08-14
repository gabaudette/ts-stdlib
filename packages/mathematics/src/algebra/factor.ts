/**
 * Returns all positive integer factors of a given number `n`.
 *
 * The function computes and returns an array of all numbers that divide `n` without a remainder,
 * sorted in ascending order.
 *
 * @param n - The number to factorize. Must be a positive integer.
 * @returns An array of all positive integer factors of `n`, sorted in ascending order.
 *
 * @example
 * ```typescript
 * factorize(12); // returns [1, 2, 3, 4, 6, 12]
 * ```
 */
export function factorize(n: number): number[] {
	const factors: number[] = [];
	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			factors.push(i);
			if (i !== n / i) {
				factors.push(n / i);
			}
		}
	}

	return factors.sort((a, b) => a - b);
}

/**
 * Determines whether a given number is a prime number.
 *
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param n - The number to test for primality.
 * @returns `true` if the number is prime; otherwise, `false`.
 *
 * @remarks
 * This function uses trial division up to the square root of `n` to determine
 * if `n` is prime.
 * You should consider using a more efficient algorithm for larger values of `n`.
 * Additionally, for very large numbers, you may want to use a probabilistic primality test.
 *
 * @example
 * ```
 * isPrime(5); // returns true
 * isPrime(4); // returns false
 * ```
 */
export function isPrime(n: number): boolean {
	if (n <= 1) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}

/**
 * Determines whether a given number is a factorial of some integer.
 *
 * A number is considered a factorial if there exists a non-negative integer `k`
 * such that `n = k!` (i.e., `n` is the product of all positive integers up to `k`).
 *
 * @param n - The number to check.
 * @returns `true` if `n` is a factorial of some integer, otherwise `false`.
 *
 * @example
 * ```
 * isFactorial(1); // returns true
 * isFactorial(2); // returns true
 * isFactorial(3); // returns false
 * isFactorial(4); // returns false
 * isFactorial(5); // returns false
 * isFactorial(6); // returns true
 * ```
 */
export function isFactorial(n: number): boolean {
	if (n < 0) {
		return false;
	}

	let i = 1;
	let factorial = 1;
	while (factorial < n) {
		i++;
		factorial *= i;
	}

	return factorial === n;
}

/**
 * Determines whether a given number is a perfect square.
 *
 * A perfect square is an integer that is the square of another integer.
 * This function returns `true` if the input number is a non-negative integer
 * whose square root is also an integer, and `false` otherwise.
 *
 * @param n - The number to check.
 * @returns `true` if `n` is a perfect square, otherwise `false`.
 *
 * @example
 * ```
 * isPerfectSquare(4); // returns true
 * isPerfectSquare(5); // returns false
 * ```
 */
export function isPerfectSquare(n: number): boolean {
	if (n < 0) {
		return false;
	}

	const sqrt = Math.sqrt(n);
	return sqrt * sqrt === n;
}
