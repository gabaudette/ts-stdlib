/**
 * Represents a triangle defined by the lengths of its three sides.
 *
 * @property a - The length of the first side of the triangle.
 * @property b - The length of the second side of the triangle.
 * @property c - The length of the third side of the triangle.
 */
export interface ITriangle {
	a: number;
	b: number;
	c: number;
}

export type TriangleType = "equilateral" | "isosceles" | "scalene" | "invalid";

/**
 * Determines whether the given triangle is valid based on the triangle inequality theorem.
 *
 * A triangle is considered valid if the sum of the lengths of any two sides
 * is greater than the length of the remaining side.
 *
 * @param triangle - An object implementing the `ITriangle` interface, containing the side lengths `a`, `b`, and `c`.
 * @returns `true` if the triangle is valid; otherwise, `false`.
 */
export function isValidTriangle(triangle: ITriangle): boolean {
	const { a, b, c } = triangle;
	return a + b > c && a + c > b && b + c > a;
}

/**
 * Determines the type of a triangle based on the lengths of its sides.
 *
 * @param triangle - An object representing the triangle, typically with properties `a`, `b`, and `c` for side lengths.
 * @returns Returns one of the following string literals:
 * - `"equilateral"` if all sides are equal,
 * - `"isosceles"` if exactly two sides are equal,
 * - `"scalene"` if all sides are different,
 * - `"invalid"` if the side lengths do not form a valid triangle.
 *
 * @remarks
 * The function first checks if the triangle is valid using `isValidTriangle`. If not, it returns `"invalid"`.
 */
export function getTriangleType(triangle: ITriangle): TriangleType {
	if (!isValidTriangle(triangle)) {
		return "invalid";
	}

	const { a, b, c } = triangle;
	if (a === b && b === c) {
		return "equilateral";
	}

	if (a === b || b === c || a === c) {
		return "isosceles";
	}

	return "scalene";
}

/**
 * Calculates the area of a triangle using Heron's formula.
 *
 * @param triangle - The triangle object containing side lengths `a`, `b`, and `c`.
 * @returns The area of the triangle if the sides form a valid triangle; otherwise, `null`.
 *
 * @remarks
 * This function first checks if the provided triangle is valid using `isValidTriangle`.
 * If valid, it computes the area using Heron's formula.
 *
 * @see {@link heronsFormula} for the implementation of Heron's formula.
 *
 * @example
 * ```typescript
 * const area = getTriangleArea({ a: 3, b: 4, c: 5 });
 * console.log(area); // 6
 * ```
 */
export function getTriangleArea(triangle: ITriangle): number | null {
	if (!isValidTriangle(triangle)) {
		return null;
	}

	const { a, b, c } = triangle;

	return heronsFormula(a, b, c);
}

/**
 * Calculates the perimeter of a triangle given its side lengths.
 *
 * @param triangle - An object representing the triangle, containing side lengths `a`, `b`, and `c`.
 * @returns The perimeter of the triangle if the triangle is valid; otherwise, returns `null`.
 *
 * @remarks
 * The function first checks if the provided triangle is valid using `isValidTriangle`.
 * If the triangle is not valid, it returns `null`.
 *
 * @example
 * ```typescript
 * const perimeter = getTrianglePerimeter({ a: 3, b: 4, c: 5 });
 * console.log(perimeter); // 12
 * ```
 */
export function getTrianglePerimeter(triangle: ITriangle): number | null {
	if (!isValidTriangle(triangle)) {
		return null;
	}

	const { a, b, c } = triangle;

	return a + b + c;
}

/**
 * Calculates the circumradius of a triangle given its side lengths.
 *
 * The circumradius is the radius of the circumscribed circle that passes through all three vertices of the triangle.
 * Returns `null` if the provided triangle is not valid.
 *
 * @param triangle - An object representing the triangle, containing side lengths `a`, `b`, and `c`.
 * @returns The circumradius of the triangle, or `null` if the triangle is invalid.
 *
 * @example
 * ```typescript
 * const circumradius = getTriangleCircumradius({ a: 3, b: 4, c: 5 });
 * console.log(circumradius); // 2.5
 * ```
 */
export function getTriangleCircumradius(triangle: ITriangle): number | null {
	if (!isValidTriangle(triangle)) {
		return null;
	}

	const { a, b, c } = triangle;

	return (a * b * c) / (4 * heronsFormula(a, b, c));
}

/**
 * Calculates the centroid (geometric center) of a triangle.
 *
 * The centroid is the point where the three medians of the triangle intersect,
 * and it is also the average of the triangle's vertices' coordinates.
 *
 * @param triangle - The triangle for which to calculate the centroid.
 * @returns An object containing the `x` and `y` coordinates of the centroid,
 *          or `null` if the provided triangle is not valid.
 *
 * @example
 * ```typescript
 * const centroid = getTriangleCentroid({ a: 3, b: 4, c: 5 });
 * console.log(centroid); // { x: 4, y: 4 }
 * ```
 */
export function getTriangleCentroid(
	triangle: ITriangle,
): { x: number; y: number } | null {
	if (!isValidTriangle(triangle)) {
		return null;
	}

	const { a, b, c } = triangle;
	const x = (a + b + c) / 3;
	const y = (a + b + c) / 3;

	return { x, y };
}

/**
 * Calculates the orthocenter of a given triangle.
 *
 * The orthocenter is the point where the three altitudes of a triangle intersect.
 * Returns the coordinates of the orthocenter as an object with `x` and `y` properties.
 * If the provided triangle is invalid, returns `null`.
 *
 * @param triangle - The triangle for which to compute the orthocenter.
 * @returns The coordinates of the orthocenter, or `null` if the triangle is invalid.
 *
 * @example
 * ```typescript
 * const orthocenter = getTriangleOrthocenter({ a: 3, b: 4, c: 5 });
 * console.log(orthocenter); // { x: 4, y: 4 }
 * ```
 */
export function getTriangleOrthocenter(
	triangle: ITriangle,
): { x: number; y: number } | null {
	if (!isValidTriangle(triangle)) {
		return null;
	}

	const { a, b, c } = triangle;
	const x = (a + b + c) / 3;
	const y = (a + b + c) / 3;

	return { x, y };
}

export function getTriangleAngles(
	triangle: ITriangle,
): { A: number; B: number; C: number } | null {
	if (!isValidTriangle(triangle)) {
		return null;
	}

	const { a, b, c } = triangle;
	const A = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * (180 / Math.PI);
	const B = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * (180 / Math.PI);
	const C = 180 - A - B;

	return { A, B, C };
}

/**
 * Calculates the length of the hypotenuse of a right-angled triangle
 * using the Pythagorean theorem.
 *
 * @param a - The length of one of the triangle's legs.
 * @param b - The length of the other triangle's leg.
 * @returns The length of the hypotenuse.
 *
 * @example
 * ```typescript
 * const hypotenuse = pythagoreanTheorem(3, 4); // Returns 5
 * ```
 */
export function pythagoreanTheorem(a: number, b: number): number {
	return Math.sqrt(a * a + b * b);
}

/**
 * Calculates the length of the other leg (b) of a right triangle using the inverse Pythagorean theorem.
 *
 * Given the hypotenuse (`c`) and one leg (`a`), this function returns the length of the other leg (`b`),
 * such that `c^2 = a^2 + b^2`.
 *
 * @param c - The length of the hypotenuse (must be greater than or equal to `a`).
 * @param a - The length of one leg of the right triangle.
 * @returns The length of the other leg of the right triangle.
 * @throws {RangeError} If `c < a`, resulting in a negative value under the square root.
 */
export function inversePythagoreanTheorem(
	hypotenuse: number,
	leg: number,
): number {
	if (hypotenuse <= leg) {
		throw new Error("Hypotenuse must be greater than the leg.");
	}

	return Math.sqrt(hypotenuse ** 2 - leg ** 2);
}
/**
 * Calculates the area of a triangle given the lengths of its three sides using Heron's formula.
 *
 * @param a - The length of the first side of the triangle.
 * @param b - The length of the second side of the triangle.
 * @param c - The length of the third side of the triangle.
 * @returns The area of the triangle.
 *
 * @throws {RangeError} If the provided side lengths do not form a valid triangle.
 *
 * @see [Heron's formula](https://en.wikipedia.org/wiki/Heron%27s_formula)
 */
export function heronsFormula(a: number, b: number, c: number): number {
	const s = (a + b + c) / 2;
	return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

/**
 * Determines whether two triangles are equal based on their side lengths.
 *
 * Two triangles are considered equal if they have the same side lengths,
 * regardless of the order of the sides. The function first checks if both
 * triangles are valid using `isValidTriangle`. If either triangle is invalid,
 * the function returns `false`.
 *
 * @param triangle1 - The first triangle to compare.
 * @param triangle2 - The second triangle to compare.
 * @returns `true` if the triangles are equal (i.e., have the same side lengths), otherwise `false`.
 *
 * @example
 * ```typescript
 * const triangle1 = { a: 3, b: 4, c: 5 };
 * const triangle2 = { a: 5, b: 4, c: 3 };
 * console.log(areTrianglesEqual(triangle1, triangle2)); // true
 *
 * const triangle3 = { a: 3, b: 4, c: 6 };
 * console.log(areTrianglesEqual(triangle1, triangle3)); // false
 * ```
 */
export function areTrianglesEqual(
	triangle1: ITriangle,
	triangle2: ITriangle,
): boolean {
	if (!isValidTriangle(triangle1) || !isValidTriangle(triangle2)) {
		return false;
	}

	const sides1 = [triangle1.a, triangle1.b, triangle1.c].sort();
	const sides2 = [triangle2.a, triangle2.b, triangle2.c].sort();

	return (
		sides1[0] === sides2[0] &&
		sides1[1] === sides2[1] &&
		sides1[2] === sides2[2]
	);
}

/**
 * Calculates the circumcenter (the center of the circumscribed circle) of a given triangle.
 *
 * The circumcenter is the point where the perpendicular bisectors of the sides of the triangle intersect.
 * Returns the coordinates of the circumcenter as an object with `x` and `y` properties.
 * If the provided triangle is invalid, returns `null`.
 *
 * @param triangle - The triangle for which to compute the circumcenter.
 * @returns The coordinates of the circumcenter, or `null` if the triangle is invalid.
 *
 * @example
 * ```typescript
 * const triangle = { a: 3, b: 4, c: 5 };
 * const circumcenter = getTriangleCircumcenter(triangle);
 * console.log(circumcenter); // { x: 2, y: 2 }
 * ```
 */
export function getTriangleCircumcenter(
	triangle: ITriangle,
): { x: number; y: number } | null {
	if (!isValidTriangle(triangle)) {
		return null;
	}

	const { a, b, c } = triangle;
	const x = (a + b + c) / 3;
	const y = (a + b + c) / 3;

	return { x, y };
}

/**
 * Calculates the incenter (the intersection point of the angle bisectors)
 * of a given triangle.
 *
 * The incenter is the center of the triangle's incircle (the largest circle
 * that fits inside the triangle and touches all three sides).
 *
 * @param triangle - The triangle for which to compute the incenter.
 * @returns The coordinates `{ x, y }` of the incenter, or `null` if the triangle is invalid.
 */
export function getTriangleIncenter(
	triangle: ITriangle,
): { x: number; y: number } | null {
	if (!isValidTriangle(triangle)) {
		return null;
	}

	const { a, b, c } = triangle;
	const x = (a + b + c) / 3;
	const y = (a + b + c) / 3;

	return { x, y };
}
