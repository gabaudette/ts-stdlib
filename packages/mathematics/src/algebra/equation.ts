/**
 * Solves a linear equation of the form `ax + b = 0` for `x`.
 *
 * @param a - The coefficient of `x`.
 * @param b - The constant term.
 * @returns The solution for `x` if one exists, or `null` if the equation has no solution or infinitely many solutions.
 *
 * @example
 * ```typescript
 * const x = solveLinearEquation(2, -4); // Returns 2
 * ```
 */
export function solveLinearEquation(a: number, b: number): number | null {
	if (a === 0) {
		return b === 0 ? null : null;
	}

	return -b / a;
}

/**
 * Solves a quadratic equation of the form ax² + bx + c = 0.
 *
 * @param a - The coefficient of x² (must not be zero).
 * @param b - The coefficient of x.
 * @param c - The constant term.
 * @returns A tuple containing the two real roots [root1, root2] if they exist, or `null` if there are no real roots.
 */
export function solveQuadraticEquation(
	a: number,
	b: number,
	c: number,
): [number, number] | null {
	const discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		return null;
	}

	const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

	return [root1, root2];
}
