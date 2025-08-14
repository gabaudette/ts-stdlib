/**
 * Represents a two-dimensional vector with `x` and `y` numeric components.
 *
 * @property x - The horizontal component of the vector.
 * @property y - The vertical component of the vector.
 *
 * @example
 * const v: Vector2D = { x: 1, y: 2 };
 * console.log(v); // { x: 1, y: 2 }
 */
export type Vector2D = {
	x: number;
	y: number;
};

/**
 * Represents a three-dimensional vector with numeric x, y, and z components.
 *
 * @property x - The x-coordinate of the vector.
 * @property y - The y-coordinate of the vector.
 * @property z - The z-coordinate of the vector.
 *
 * @example
 * const v: Vector3D = { x: 1, y: 2, z: 3 };
 * console.log(v); // { x: 1, y: 2, z: 3 }
 */
export type Vector3D = {
	x: number;
	y: number;
	z: number;
};

/**
 * Adds two 2D vectors and returns the resulting vector.
 *
 * @param v1 - The first vector to add.
 * @param v2 - The second vector to add.
 * @returns A new `Vector2D` object representing the sum of `v1` and `v2`.
 *
 * @example
 * const v1: Vector2D = { x: 1, y: 2 };
 * const v2: Vector2D = { x: 3, y: 4 };
 * const result = addVectors2D(v1, v2);
 * console.log(result); // { x: 4, y: 6 }
 */
export function addVectors2D(v1: Vector2D, v2: Vector2D): Vector2D {
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y,
	};
}

/**
 * Adds two 3D vectors component-wise and returns the resulting vector.
 *
 * @param v1 - The first 3D vector to add.
 * @param v2 - The second 3D vector to add.
 * @returns A new `Vector3D` object representing the sum of `v1` and `v2`.
 *
 * @example
 * const v1: Vector3D = { x: 1, y: 2, z: 3 };
 * const v2: Vector3D = { x: 4, y: 5, z: 6 };
 * const result = addVectors3D(v1, v2);
 * console.log(result); // { x: 5, y: 7, z: 9 }
 */
export function addVectors3D(v1: Vector3D, v2: Vector3D): Vector3D {
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y,
		z: v1.z + v2.z,
	};
}

/**
 * Subtracts the components of two 2D vectors and returns the resulting vector.
 *
 * @param v1 - The minuend vector (the vector to subtract from).
 * @param v2 - The subtrahend vector (the vector to subtract).
 * @returns A new `Vector2D` object representing the difference between `v1` and `v2`.
 *
 * @example
 * const v1: Vector2D = { x: 1, y: 2 };
 * const v2: Vector2D = { x: 3, y: 4 };
 * const result = subtractVectors2D(v1, v2);
 * console.log(result); // { x: -2, y: -2 }
 */
export function subtractVectors2D(v1: Vector2D, v2: Vector2D): Vector2D {
	return {
		x: v1.x - v2.x,
		y: v1.y - v2.y,
	};
}

/**
 * Subtracts two 3D vectors component-wise.
 *
 * @param v1 - The minuend vector (the vector to subtract from).
 * @param v2 - The subtrahend vector (the vector to subtract).
 * @returns A new `Vector3D` representing the result of `v1 - v2`.
 *
 * @example
 * const v1: Vector3D = { x: 1, y: 2, z: 3 };
 * const v2: Vector3D = { x: 4, y: 5, z: 6 };
 * const result = subtractVectors3D(v1, v2);
 * console.log(result); // { x: -3, y: -3, z: -3 }
 */
export function subtractVectors3D(v1: Vector3D, v2: Vector3D): Vector3D {
	return {
		x: v1.x - v2.x,
		y: v1.y - v2.y,
		z: v1.z - v2.z,
	};
}

/**
 * Calculates the dot product of two 2-dimensional vectors.
 *
 * @param v1 - The first 2D vector.
 * @param v2 - The second 2D vector.
 * @returns The dot product of the two vectors as a number.
 *
 * @example
 * const v1: Vector2D = { x: 1, y: 2 };
 * const v2: Vector2D = { x: 3, y: 4 };
 * const result = dotProduct2D(v1, v2);
 * console.log(result); // 11
 */
export function dotProduct2D(v1: Vector2D, v2: Vector2D): number {
	return v1.x * v2.x + v1.y * v2.y;
}

/**
 * Calculates the dot product of two 3-dimensional vectors.
 *
 * The dot product is defined as the sum of the products of the corresponding components
 * of the two vectors: (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z).
 *
 * @param v1 - The first 3D vector.
 * @param v2 - The second 3D vector.
 * @returns The dot product of the two vectors as a number.
 *
 * @example
 * const v1: Vector3D = { x: 1, y: 2, z: 3 };
 * const v2: Vector3D = { x: 4, y: 5, z: 6 };
 * const result = dotProduct3D(v1, v2);
 * console.log(result); // 32
 */
export function dotProduct3D(v1: Vector3D, v2: Vector3D): number {
	return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}

/**
 * Calculates the magnitude (length) of a 2D vector.
 *
 * @param v - The 2D vector for which to compute the magnitude.
 * @returns The magnitude (Euclidean norm) of the vector.
 *
 * @example
 * const v: Vector2D = { x: 3, y: 4 };
 * const result = magnitude2D(v);
 * console.log(result); // 5
 */
export function magnitude2D(v: Vector2D): number {
	return Math.sqrt(v.x * v.x + v.y * v.y);
}

/**
 * Calculates the magnitude (length) of a 3-dimensional vector.
 *
 * @param v - The 3D vector for which to compute the magnitude.
 * @returns The magnitude (Euclidean norm) of the vector.
 *
 * @example
 * const v: Vector3D = { x: 1, y: 2, z: 3 };
 * const result = magnitude3D(v);
 * console.log(result); // 3.7416573867739413
 */
export function magnitude3D(v: Vector3D): number {
	return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

/**
 * Returns a normalized (unit length) 2D vector in the same direction as the input vector.
 *
 * @param v - The 2D vector to normalize.
 * @returns A new 2D vector with the same direction as `v` but with a magnitude of 1.
 * @remarks
 * If the input vector has zero magnitude, this function will return a vector with `NaN` components.
 *
 * @example
 * const v: Vector2D = { x: 3, y: 4 };
 * const result = normalize2D(v);
 * console.log(result); // { x: 0.6, y: 0.8 }
 */
export function normalize2D(v: Vector2D): Vector2D {
	const mag = magnitude2D(v);
	return {
		x: v.x / mag,
		y: v.y / mag,
	};
}

/**
 * Normalizes a 3D vector, returning a new vector with the same direction but a magnitude of 1.
 *
 * @param v - The 3D vector to normalize.
 * @returns A new `Vector3D` object representing the normalized vector.
 * @remarks
 * If the input vector has zero magnitude, this function will return a vector with `Infinity` or `NaN` components.
 *
 * @example
 * const v: Vector3D = { x: 3, y: 4, z: 5 };
 * const result = normalize3D(v);
 * console.log(result); // { x: 0.4242640687119285, y: 0.565685424949238, z: 0.7071067811865475 }
 */
export function normalize3D(v: Vector3D): Vector3D {
	const mag = magnitude3D(v);
	return {
		x: v.x / mag,
		y: v.y / mag,
		z: v.z / mag,
	};
}

/**
 * Scales a 2D vector by a given scalar value.
 *
 * @param v - The 2D vector to scale.
 * @param scalar - The scalar value to multiply each component of the vector by.
 * @returns A new 2D vector with each component scaled by the given scalar.
 *
 * @example
 * const v: Vector2D = { x: 3, y: 4 };
 * const result = scaleVector2D(v, 2);
 * console.log(result); // { x: 6, y: 8 }
 */
export function scaleVector2D(v: Vector2D, scalar: number): Vector2D {
	return {
		x: v.x * scalar,
		y: v.y * scalar,
	};
}

/**
 * Scales a 3D vector by a given scalar value.
 *
 * @param v - The input vector to scale.
 * @param scalar - The scalar value to multiply each component of the vector by.
 * @returns A new `Vector3D` object with each component scaled by the given scalar.
 *
 * @example
 * const v: Vector3D = { x: 1, y: 2, z: 3 };
 * const result = scaleVector3D(v, 2);
 * console.log(result); // { x: 2, y: 4, z: 6 }
 */
export function scaleVector3D(v: Vector3D, scalar: number): Vector3D {
	return {
		x: v.x * scalar,
		y: v.y * scalar,
		z: v.z * scalar,
	};
}

/**
 * Computes the cross product of two 3-dimensional vectors.
 *
 * The cross product of two vectors in 3D space results in a third vector
 * that is perpendicular to both input vectors, following the right-hand rule.
 *
 * @param v1 - The first 3D vector.
 * @param v2 - The second 3D vector.
 * @returns A new `Vector3D` object representing the cross product of `v1` and `v2`.
 *
 * @example
 * const v1: Vector3D = { x: 1, y: 2, z: 3 };
 * const v2: Vector3D = { x: 4, y: 5, z: 6 };
 * const result = crossProduct3D(v1, v2);
 * console.log(result); // { x: -3, y: 6, z: -3 }
 */
export function crossProduct3D(v1: Vector3D, v2: Vector3D): Vector3D {
	return {
		x: v1.y * v2.z - v1.z * v2.y,
		y: v1.z * v2.x - v1.x * v2.z,
		z: v1.x * v2.y - v1.y * v2.x,
	};
}

/**
 * Calculates the angle in radians between two 2D vectors.
 *
 * The angle is computed using the dot product formula:
 *   angle = acos((v1 · v2) / (|v1| * |v2|))
 *
 * @param v1 - The first 2D vector.
 * @param v2 - The second 2D vector.
 * @returns The angle between the two vectors in radians, in the range [0, π].
 *
 * @example
 * const v1: Vector2D = { x: 1, y: 0 };
 * const v2: Vector2D = { x: 0, y: 1 };
 * const result = angleBetweenVectors2D(v1, v2);
 * console.log(result); // 1.5707963267948966 (π/2 radians)
 */
export function angleBetweenVectors2D(v1: Vector2D, v2: Vector2D): number {
	const dot = dotProduct2D(v1, v2);
	const mag1 = magnitude2D(v1);
	const mag2 = magnitude2D(v2);
	return Math.acos(dot / (mag1 * mag2));
}

/**
 * Calculates the angle in radians between two 3D vectors.
 *
 * @param v1 - The first 3D vector.
 * @param v2 - The second 3D vector.
 * @returns The angle between `v1` and `v2` in radians.
 *
 * @remarks
 * The angle is computed using the arccosine of the normalized dot product of the two vectors.
 * If either vector has zero magnitude, the result will be `NaN`.
 *
 * @example
 * const v1: Vector3D = { x: 1, y: 0, z: 0 };
 * const v2: Vector3D = { x: 0, y: 1, z: 0 };
 * const result = angleBetweenVectors3D(v1, v2);
 * console.log(result); // 1.5707963267948966 (π/2 radians)
 */
export function angleBetweenVectors3D(v1: Vector3D, v2: Vector3D): number {
	const dot = dotProduct3D(v1, v2);
	const mag1 = magnitude3D(v1);
	const mag2 = magnitude3D(v2);
	return Math.acos(dot / (mag1 * mag2));
}

/**
 * Projects vector `v1` onto vector `v2` in 2D space.
 *
 * The projection is calculated as the scalar projection of `v1` onto `v2`,
 * resulting in a vector that lies on `v2` and represents the component of `v1` in the direction of `v2`.
 *
 * @param v1 - The vector to be projected.
 * @param v2 - The vector onto which `v1` is projected.
 * @returns The projection of `v1` onto `v2` as a new `Vector2D`.
 *
 * @example
 * const v1: Vector2D = { x: 3, y: 4 };
 * const v2: Vector2D = { x: 1, y: 0 };
 * const result = projectVector2D(v1, v2);
 * console.log(result); // { x: 3, y: 0 }
 */
export function projectVector2D(v1: Vector2D, v2: Vector2D): Vector2D {
	const dot = dotProduct2D(v1, v2);
	const mag2 = magnitude2D(v2);
	const scalar = dot / (mag2 * mag2);
	return scaleVector2D(v2, scalar);
}

/**
 * Projects the 3D vector `v1` onto the 3D vector `v2`.
 *
 * The projection of `v1` onto `v2` is a vector that represents the component of `v1` in the direction of `v2`.
 *
 * @param v1 - The vector to be projected.
 * @param v2 - The vector onto which `v1` is projected.
 * @returns A new `Vector3D` representing the projection of `v1` onto `v2`.
 *
 * @example
 * const v1: Vector3D = { x: 3, y: 4, z: 5 };
 * const v2: Vector3D = { x: 1, y: 0, z: 0 };
 * const result = projectVector3D(v1, v2);
 * console.log(result); // { x: 3, y: 0, z: 0 }
 */
export function projectVector3D(v1: Vector3D, v2: Vector3D): Vector3D {
	const dot = dotProduct3D(v1, v2);
	const mag2 = magnitude3D(v2);
	const scalar = dot / (mag2 * mag2);
	return scaleVector3D(v2, scalar);
}
