/**
 * Represents a circle defined by its radius.
 *
 * @property radius - The radius of the circle.
 */
export interface ICircle {
	radius: number;
}

/**
 * Determines whether the provided circle object is a valid circle.
 *
 * A valid circle must have a `radius` property that is a positive number.
 *
 * @param circle - The circle object to validate.
 * @returns `true` if the circle is valid; otherwise, `false`.
 *
 * @example
 * ```
 * const circle = { radius: 5 };
 * console.log(isValidCircle(circle)); // true
 * ```
 */
export function isValidCircle(circle: ICircle): boolean {
	if (typeof circle.radius !== "number" || circle.radius <= 0) {
		return false;
	}

	return true;
}

/**
 * Calculates the circumference of a given circle.
 *
 * @param circle - The circle object for which to calculate the circumference.
 * @returns The circumference of the circle if the input is valid; otherwise, `null`.
 *
 * @example
 * ```
 * const circle = { radius: 5 };
 * console.log(getCircleCircumference(circle)); // 31.41592653589793
 * ```
 */
export function getCircleCircumference(circle: ICircle): number | null {
	if (!isValidCircle(circle)) {
		return null;
	}

	return 2 * Math.PI * circle.radius;
}

/**
 * Calculates the area of a circle given a valid `ICircle` object.
 *
 * @param circle - The circle object containing the radius property.
 * @returns The area of the circle if the input is valid; otherwise, `null`.
 *
 * @example
 * ```
 * const circle = { radius: 5 };
 * console.log(getCircleArea(circle)); // 78.53981633974483
 * ```
 */
export function getCircleArea(circle: ICircle): number | null {
	if (!isValidCircle(circle)) {
		return null;
	}

	return Math.PI * circle.radius ** 2;
}

/**
 * Calculates the diameter of a given circle.
 *
 * @param circle - The circle object to calculate the diameter for.
 * @returns The diameter of the circle if the input is valid; otherwise, `null`.
 *
 * @example
 * ```
 * const circle = { radius: 5 };
 * console.log(getCircleDiameter(circle)); // 10
 * ```
 */
export function getCircleDiameter(circle: ICircle): number | null {
	if (!isValidCircle(circle)) {
		return null;
	}

	return 2 * circle.radius;
}

/**
 * Calculates the length of an arc on a circle given the circle and the angle in radians.
 *
 * @param circle - The circle object implementing the `ICircle` interface.
 * @param angleInRadians - The angle subtended by the arc at the center of the circle, in radians.
 * @returns The length of the arc if the circle is valid; otherwise, `null`.
 *
 * @example
 * ```
 * const circle = { radius: 5 };
 * const angle = Math.PI / 4; // 45 degrees in radians
 * console.log(getCircleArcLength(circle, angle)); // 3.9269908169872414
 * ```
 */
export function getCircleArcLength(
	circle: ICircle,
	angleInRadians: number,
): number | null {
	if (!isValidCircle(circle)) {
		return null;
	}

	return circle.radius * angleInRadians;
}

/**
 * Calculates the area of a sector of a circle given the circle and the central angle in radians.
 *
 * @param circle - The circle object implementing the `ICircle` interface.
 * @param angleInRadians - The central angle of the sector in radians.
 * @returns The area of the sector, or `null` if the circle is invalid.
 *
 * @example
 * ```
 * const circle = { radius: 5 };
 * const angle = Math.PI / 4; // 45 degrees in radians
 * console.log(getCircleSectorArea(circle, angle)); // 19.634954084936208
 * ```
 */
export function getCircleSectorArea(
	circle: ICircle,
	angleInRadians: number,
): number | null {
	if (!isValidCircle(circle)) {
		return null;
	}

	return 0.5 * circle.radius ** 2 * angleInRadians;
}

/**
 * Determines whether two circles are equal based on their radii.
 *
 * This function first checks if both circles are valid using `isValidCircle`.
 * If either circle is invalid, it returns `false`. Otherwise, it compares
 * the `radius` properties of the two circles for equality.
 *
 * @param circle1 - The first circle to compare.
 * @param circle2 - The second circle to compare.
 * @returns `true` if both circles are valid and have the same radius, otherwise `false`.
 *
 * @example
 * ```
 * const circle1 = { radius: 5 };
 * const circle2 = { radius: 5 };
 * console.log(areCirclesEqual(circle1, circle2)); // true
 * ```
 */
export function areCirclesEqual(circle1: ICircle, circle2: ICircle): boolean {
	if (!isValidCircle(circle1) || !isValidCircle(circle2)) {
		return false;
	}

	return circle1.radius === circle2.radius;
}

/**
 * Scales the radius of a given circle by a specified factor.
 *
 * @param circle - The circle object to scale. Must be a valid `ICircle`.
 * @param scale - The scaling factor. Must be a positive number.
 * @returns A new `ICircle` object with the scaled radius, or `null` if the input circle is invalid or the scale is not positive.
 *
 * @example
 * ```
 * const circle = { radius: 5 };
 * const scaledCircle = scaleCircle(circle, 2);
 * console.log(scaledCircle); // { radius: 10 }
 * ```
 */
export function scaleCircle(circle: ICircle, scale: number): ICircle | null {
	if (!isValidCircle(circle) || scale <= 0) {
		return null;
	}

	return {
		radius: circle.radius * scale,
	};
}
