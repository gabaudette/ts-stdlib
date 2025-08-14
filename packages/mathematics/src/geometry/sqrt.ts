/**
 * Computes an approximation of the inverse square root of a number using the fast inverse square root algorithm.
 *
 * This function is a TypeScript adaptation of the famous algorithm popularized by Quake III Arena.
 * It provides a fast approximation of `1 / Math.sqrt(x)` for positive floating-point numbers.
 *
 * @param x - The input number for which to compute the inverse square root. Must be positive.
 * @returns An approximate value of `1 / Math.sqrt(x)`.
 *
 * @see https://en.wikipedia.org/wiki/Fast_inverse_square_root
 * @example
 * // Approximating the inverse square root of 4
 * const approx = fastInverseSqrt(4);
 * console.log(approx); // Outputs: 0.49915
 *
 * @remarks
 * This function is not suitable for all use cases and may not provide accurate results for very small or very large values.
 *
 * @author John Carmack
 */
export function fastInverseSqrt(x: number): number {
	if (x < 0) {
		return NaN;
	}

	const threehalfs = 1.5;
	let y = x;

	const packed = new Float32Array(1);
	packed[0] = y;

	let i = new Int32Array(packed.buffer)[0]; // evil float point
	const magic = 0x5f3759df; // what the fuck ?

	i = magic - (i >> 1);

	new Int32Array(packed.buffer)[0] = i;

	y = packed[0];
	y = y * (threehalfs - x * 0.5 * y * y); // 1st iteration

	return y;
}
