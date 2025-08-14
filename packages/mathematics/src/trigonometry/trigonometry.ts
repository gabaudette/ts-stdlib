/**
 * Calculates the secant of a given angle (in radians).
 *
 * The secant is defined as the reciprocal of the cosine function: sec(x) = 1 / cos(x).
 *
 * @param angle - The angle in radians for which to compute the secant.
 * @returns The secant of the given angle.
 *
 * @remarks
 * If the cosine of the angle is zero, the result will be Infinity or -Infinity.
 *
 * @example
 * const result = sec(Math.PI / 3); // result is 2
 */
export function sec(angle: number): number {
	return 1 / Math.cos(angle);
}

/**
 * Calculates the cosecant of a given angle (in radians).
 *
 * The cosecant is the reciprocal of the sine function: csc(x) = 1 / sin(x).
 *
 * @param angle - The angle in radians for which to calculate the cosecant.
 * @returns The cosecant of the given angle.
 * @throws {RangeError} If the angle is a multiple of π, where the sine is zero and the cosecant is undefined.
 *
 * @example
 * ```typescript
 * const result = csc(Math.PI / 2); // result is 1
 * ```
 */
export function csc(angle: number): number {
	return 1 / Math.sin(angle);
}

/**
 * Calculates the cotangent of a given angle (in radians).
 *
 * @param angle - The angle in radians for which to calculate the cotangent.
 * @returns The cotangent of the specified angle.
 *
 * @remarks
 * The cotangent is defined as the reciprocal of the tangent function: cot(x) = 1 / tan(x).
 * If the tangent of the angle is zero, this function will return `Infinity` or `-Infinity`.
 *
 * @example
 * const result = cot(Math.PI / 4); // result is 1
 */
export function cot(angle: number): number {
	return 1 / Math.tan(angle);
}

/**
 * Calculates the arcsecant (inverse secant) of a number.
 *
 * @param value - The input value for which to compute the arcsecant. Must be outside the interval (-1, 1).
 * @returns The arcsecant of the input value, in radians.
 * @throws {RangeError} If the input value is within the interval (-1, 1), where arcsecant is undefined.
 *
 * @see [Math.acos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos)
 *
 * @example
 * ```typescript
 * const result = asec(2); // result is π/3
 * ```
 */
export function asec(value: number): number {
	return Math.acos(1 / value);
}

/**
 * Calculates the inverse cosecant (arc-cosecant) of a number.
 *
 * @param value - The value for which to compute the arc-cosecant. Must not be 0.
 * @returns The angle in radians whose cosecant is the given value.
 * @throws {RangeError} If the input value is 0, as division by zero is not allowed.
 *
 * @remarks
 * The result is in the range [-π/2, π/2], excluding 0.
 * This function computes `Math.asin(1 / value)`.
 *
 * @example
 * const result = acsc(2); // result is π/6
 */
export function acsc(value: number): number {
	return Math.asin(1 / value);
}

/**
 * Calculates the inverse cotangent (arc cotangent) of a number.
 *
 * @param value - The value for which to compute the arc cotangent.
 * @returns The arc cotangent of the input value, in radians.
 *
 * @remarks
 * The result is in the range [0, π] radians.
 * This function computes `atan(1 / value)`.
 *
 * @example
 * const result = acot(1); // result is π/4
 */
export function acot(value: number): number {
	return Math.atan(1 / value);
}

/**
 * Converts an angle from degrees to radians.
 *
 * @param degrees - The angle in degrees to convert.
 * @returns The angle in radians.
 *
 * @example
 * ```typescript
 * const radians = degreesToRadians(180); // returns Math.PI
 * ```
 */
export function degreesToRadians(degrees: number): number {
	return degrees * (Math.PI / 180);
}

/**
 * Converts an angle from radians to degrees.
 *
 * @param radians - The angle in radians to convert.
 * @returns The equivalent angle in degrees.
 *
 * @example
 * ```typescript
 * const degrees = radiansToDegrees(Math.PI); // returns 180
 * ```
 */
export function radiansToDegrees(radians: number): number {
	return radians * (180 / Math.PI);
}

/**
 * Normalizes an angle in radians to the range [0, 2π).
 *
 * @param angle - The angle in radians to normalize.
 * @returns The normalized angle in the range [0, 2π).
 *
 * @example
 * ```typescript
 * const normalized = normalizeAngle(Math.PI); // returns Math.PI
 * ```
 */
export function normalizeAngle(angle: number): number {
	return angle % (2 * Math.PI);
}

/**
 * Wraps the given angle to the range [0, 2π).
 *
 * @param angle - The angle in radians to wrap.
 * @returns The wrapped angle in the range [0, 2π).
 *
 * @example
 * ```typescript
 * const wrapped = wrapAngle(3 * Math.PI); // returns Math.PI
 * ```
 */
export function wrapAngle(angle: number): number {
	return normalizeAngle(angle + Math.PI);
}

/**
 * Determines whether a given angle lies between two other angles on a circle.
 *
 * All angles are normalized to the range [0, 2π) before comparison.
 * The interval is considered inclusive of both start and end.
 * If the start angle is greater than the end angle, the interval wraps around 2π.
 *
 * @param angle - The angle to test, in radians.
 * @param start - The start of the interval, in radians.
 * @param end - The end of the interval, in radians.
 * @returns `true` if the angle is between start and end (inclusive), accounting for wrapping; otherwise, `false`.
 *
 * @example
 * ```typescript
 * const isBetween = isAngleBetween(Math.PI / 4, 0, Math.PI / 2); // returns true
 * ```
 */
export function isAngleBetween(
	angle: number,
	start: number,
	end: number,
): boolean {
	const normalizedAngle = normalizeAngle(angle);
	const normalizedStart = normalizeAngle(start);
	const normalizedEnd = normalizeAngle(end);

	if (normalizedStart < normalizedEnd) {
		return (
			normalizedAngle >= normalizedStart && normalizedAngle <= normalizedEnd
		);
	} else {
		return (
			normalizedAngle >= normalizedStart || normalizedAngle <= normalizedEnd
		);
	}
}

/**
 * Determines whether two angles are equal after normalizing them.
 *
 * This function normalizes both input angles (typically to the range [0, 2π) or [0, 360°),
 * depending on the implementation of `normalizeAngle`) and checks if they are equivalent.
 *
 * @param angle1 - The first angle to compare, in radians or degrees.
 * @param angle2 - The second angle to compare, in radians or degrees.
 * @returns `true` if the normalized angles are equal; otherwise, `false`.
 *
 * @example
 * ```typescript
 * const isEqual = isAngleEqual(Math.PI / 4, Math.PI / 4); // returns true
 * ```
 */
export function isAngleEqual(angle1: number, angle2: number): boolean {
	return normalizeAngle(angle1) === normalizeAngle(angle2);
}

/**
 * Determines whether the normalized value of `angle1` is less than the normalized value of `angle2`.
 *
 * Both angles are normalized (typically to the range [0, 2π) or [0, 360)), and then compared.
 *
 * @param angle1 - The first angle, in radians or degrees, to compare.
 * @param angle2 - The second angle, in radians or degrees, to compare.
 * @returns `true` if the normalized `angle1` is less than the normalized `angle2`, otherwise `false`.
 *
 * @example
 * ```typescript
 * const isLessThan = isAngleLessThan(Math.PI / 4, Math.PI / 2); // returns true
 * ```
 */
export function isAngleLessThan(angle1: number, angle2: number): boolean {
	return normalizeAngle(angle1) < normalizeAngle(angle2);
}

/**
 * Determines whether the first angle is greater than the second angle after normalization.
 *
 * Both angles are normalized (typically to the range [0, 360) or [0, 2π), depending on the implementation of `normalizeAngle`),
 * and then compared.
 *
 * @param angle1 - The first angle to compare, in degrees or radians.
 * @param angle2 - The second angle to compare, in degrees or radians.
 * @returns `true` if the normalized `angle1` is greater than the normalized `angle2`, otherwise `false`.
 *
 * @example
 * ```typescript
 * const isGreaterThan = isAngleGreaterThan(Math.PI / 2, Math.PI / 4); // returns true
 * ```
 */
export function isAngleGreaterThan(angle1: number, angle2: number): boolean {
	return normalizeAngle(angle1) > normalizeAngle(angle2);
}

/**
 * Determines whether two angles are not equal after normalization.
 *
 * This function normalizes both input angles (typically to a standard range, such as [0, 2π) or [0°, 360°)),
 * and then compares them for inequality.
 *
 * @param angle1 - The first angle to compare, in radians or degrees (depending on the implementation of `normalizeAngle`).
 * @param angle2 - The second angle to compare, in the same unit as `angle1`.
 * @returns `true` if the normalized angles are not equal; otherwise, `false`.
 *
 * @example
 * ```typescript
 * const isNotEqual = isAngleNotEqual(Math.PI / 4, Math.PI / 2); // returns true
 * ```
 */
export function isAngleNotEqual(angle1: number, angle2: number): boolean {
	return normalizeAngle(angle1) !== normalizeAngle(angle2);
}

/**
 * Determines whether the first angle is less than or equal to the second angle,
 * after normalizing both angles to a standard range (typically [0, 2π) or [0, 360)).
 *
 * @param angle1 - The first angle in radians (or degrees, depending on `normalizeAngle` implementation).
 * @param angle2 - The second angle in radians (or degrees, depending on `normalizeAngle` implementation).
 * @returns `true` if the normalized `angle1` is less than or equal to the normalized `angle2`, otherwise `false`.
 *
 * @remarks
 * The normalization function (`normalizeAngle`) should ensure both angles are compared within the same range.
 *
 * @example
 * ```typescript
 * const isLessThanOrEqual = isAngleLessThanOrEqual(Math.PI / 4, Math.PI / 2); // returns true
 * ```
 */
export function isAngleLessThanOrEqual(
	angle1: number,
	angle2: number,
): boolean {
	return normalizeAngle(angle1) <= normalizeAngle(angle2);
}

/**
 * Determines whether the first angle is greater than or equal to the second angle,
 * after normalizing both angles to a standard range (typically [0, 2π) or [0, 360)).
 *
 * @param angle1 - The first angle, in radians or degrees, to compare.
 * @param angle2 - The second angle, in radians or degrees, to compare.
 * @returns `true` if the normalized value of `angle1` is greater than or equal to the normalized value of `angle2`; otherwise, `false`.
 *
 * @example
 * ```typescript
 * const isGreaterThanOrEqual = isAngleGreaterThanOrEqual(Math.PI / 2, Math.PI / 4); // returns true
 * ```
 */
export function isAngleGreaterThanOrEqual(
	angle1: number,
	angle2: number,
): boolean {
	return normalizeAngle(angle1) >= normalizeAngle(angle2);
}

/**
 * Clamps an angle in radians to the range [0, 2π).
 *
 * This function normalizes any given angle (in radians) so that the result
 * is always within the interval from 0 (inclusive) up to but not including 2π.
 * Useful for ensuring angles wrap correctly in trigonometric calculations.
 *
 * @param angle - The angle in radians to be clamped.
 * @returns The normalized angle in the range [0, 2π).
 *
 * @example
 * ```typescript
 * const clamped = clampAngle(Math.PI * 3); // returns Math.PI
 * ```
 */
export function clampAngle(angle: number): number {
	const twoPi = 2 * Math.PI;
	return ((angle % twoPi) + twoPi) % twoPi;
}

/**
 * Calculates the shortest signed angular difference between two angles.
 *
 * The result is the minimal angle (in radians) you would need to rotate from `angle1` to reach `angle2`,
 * normalized to the range [-π, π).
 *
 * @param angle1 - The starting angle in radians.
 * @param angle2 - The target angle in radians.
 * @returns The shortest signed angular difference in radians.
 *
 * @example
 * ```typescript
 * const difference = shortestAngleDifference(Math.PI / 4, Math.PI / 2);
 * console.log(difference); // 0.39269908169872414
 * ```
 */
export function shortestAngleDifference(
	angle1: number,
	angle2: number,
): number {
	const diff = normalizeAngle(angle2 - angle1 + Math.PI) - Math.PI;
	return diff;
}

/**
 * Linearly interpolates between two angles, taking the shortest path around the circle.
 *
 * @param start - The starting angle in radians.
 * @param end - The ending angle in radians.
 * @param t - The interpolation factor, typically between 0 (start) and 1 (end).
 * @returns The interpolated angle in radians, normalized to the range [0, 2π).
 *
 * @remarks
 * This function ensures interpolation takes the shortest angular distance between `start` and `end`.
 * The result is normalized to a standard angle range.
 *
 * @example
 * ```typescript
 * const interpolated = lerpAngle(Math.PI / 4, Math.PI / 2, 0.5);
 * console.log(interpolated); // 0.39269908169872414
 * ```
 */
export function lerpAngle(start: number, end: number, t: number): number {
	const diff = shortestAngleDifference(start, end);
	return normalizeAngle(start + diff * t);
}

/**
 * Converts polar coordinates to Cartesian coordinates.
 *
 * @param polar - An object containing the `radius` (distance from origin) and `angle` (in radians).
 * @returns An object with `x` and `y` properties representing the Cartesian coordinates.
 *
 * @example
 * ```typescript
 * const cartesian = toCartesian({ radius: 5, angle: Math.PI / 4 });
 * console.log(cartesian); // { x: 3.5355339059327378, y: 3.5355339059327378 }
 * ```
 */
export function toCartesian(polar: { radius: number; angle: number }): {
	x: number;
	y: number;
} {
	const { radius, angle } = polar;
	return {
		x: radius * Math.cos(angle),
		y: radius * Math.sin(angle),
	};
}

/**
 * Converts Cartesian coordinates to polar coordinates.
 *
 * @param cartesian - An object containing the Cartesian coordinates `{ x, y }`.
 * @returns An object with `radius` (the distance from the origin) and `angle` (the angle in radians from the positive x-axis).
 *
 * @example
 * ```typescript
 * const polar = toPolar({ x: 5, y: 5 });
 * console.log(polar); // { radius: 7.0710678118654755, angle: 0.7853981633974483 }
 * ```
 */
export function toPolar(cartesian: { x: number; y: number }): {
	radius: number;
	angle: number;
} {
	const { x, y } = cartesian;
	return {
		radius: Math.sqrt(x * x + y * y),
		angle: Math.atan2(y, x),
	};
}
