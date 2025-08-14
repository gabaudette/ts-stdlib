import type { Vector2D } from "../vector/vector";

/**
 * Represents a polygon defined by a sequence of 2D vertices.
 *
 * @remarks
 * The vertices are stored as an array of `Vector2D` objects, where each vertex defines a corner of the polygon.
 *
 * @property vertices - An array of `Vector2D` instances representing the ordered vertices of the polygon.
 */
export interface IPolygon {
	vertices: Vector2D[];
}

/**
 * Determines whether the given polygon is valid.
 *
 * A valid polygon must have a `vertices` property that is an array containing at least three elements.
 * Each vertex must be an object with numeric `x` and `y` properties.
 *
 * @param polygon - The polygon object to validate, expected to have a `vertices` array.
 * @returns `true` if the polygon is valid, otherwise `false`.
 *
 * @example
 * ```typescript
 * const polygon = {
 *   vertices: [
 *     { x: 0, y: 0 },
 *     { x: 1, y: 0 },
 *     { x: 1, y: 1 },
 *   ],
 * };
 * console.log(isValidPolygon(polygon)); // true
 * ```
 */
export function isValidPolygon(polygon: IPolygon): boolean {
	if (!Array.isArray(polygon.vertices) || polygon.vertices.length < 3) {
		return false;
	}

	for (const vertex of polygon.vertices) {
		if (typeof vertex.x !== "number" || typeof vertex.y !== "number") {
			return false;
		}
	}

	return true;
}

/**
 * Calculates the area of a polygon using the Shoelace formula.
 *
 * @param polygon - The polygon object containing an array of vertices.
 * @returns The area of the polygon as a number, or `null` if the polygon is invalid.
 *
 * @remarks
 * The function first checks if the provided polygon is valid using `isValidPolygon`.
 * If the polygon is invalid, it returns `null`. Otherwise, it computes the area
 * by iterating over the vertices and applying the Shoelace formula.
 *
 * @example
 * ```typescript
 * const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const area = getPolygonArea(polygon); // area = 6
 * ```
 */
export function getPolygonArea(polygon: IPolygon): number | null {
	if (!isValidPolygon(polygon)) {
		return null;
	}

	let area = 0;
	const vertices = polygon.vertices;

	for (let i = 0; i < vertices.length; i++) {
		const j = (i + 1) % vertices.length;
		area += vertices[i].x * vertices[j].y;
		area -= vertices[j].x * vertices[i].y;
	}

	return Math.abs(area) / 2;
}

/**
 * Calculates the perimeter of a polygon by summing the distances between consecutive vertices.
 *
 * @param polygon - The polygon object implementing the `IPolygon` interface, which must have a `vertices` property (an array of points with `x` and `y` coordinates).
 * @returns The perimeter of the polygon as a number, or `null` if the polygon is invalid.
 *
 * @remarks
 * The function first checks if the provided polygon is valid using `isValidPolygon`. If invalid, it returns `null`.
 * The perimeter is computed by iterating through each vertex and summing the Euclidean distances between consecutive vertices, including the edge from the last vertex back to the first.
 *
 * @example
 * ```typescript
 * const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const perimeter = getPolygonPerimeter(polygon); // perimeter = 14
 * ```
 */
export function getPolygonPerimeter(polygon: IPolygon): number | null {
	if (!isValidPolygon(polygon)) {
		return null;
	}

	let perimeter = 0;
	const vertices = polygon.vertices;

	for (let i = 0; i < vertices.length; i++) {
		const j = (i + 1) % vertices.length;
		const dx = vertices[j].x - vertices[i].x;
		const dy = vertices[j].y - vertices[i].y;
		perimeter += Math.sqrt(dx * dx + dy * dy);
	}

	return perimeter;
}

/**
 * Calculates the centroid (geometric center) of a polygon by averaging its vertices' coordinates.
 *
 * @param polygon - The polygon object implementing the `IPolygon` interface, containing an array of vertices.
 * @returns The centroid as a `Vector2D` object if the polygon is valid; otherwise, returns `null`.
 *
 * @remarks
 * The centroid is computed as the arithmetic mean of the x and y coordinates of all vertices.
 * The function first checks if the polygon is valid using `isValidPolygon`.
 *
 * @example
 * ```
 * const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const centroid = getPolygonCentroid(polygon); // centroid = { x: 2, y: 1 }
 * ```
 */
export function getPolygonCentroid(polygon: IPolygon): Vector2D | null {
	if (!isValidPolygon(polygon)) {
		return null;
	}

	const centroid = { x: 0, y: 0 };
	const vertices = polygon.vertices;
	for (const vertex of vertices) {
		centroid.x += vertex.x;
		centroid.y += vertex.y;
	}

	centroid.x /= vertices.length;
	centroid.y /= vertices.length;

	return centroid;
}

/**
 * Determines whether two polygons are equal by comparing their vertices.
 *
 * Two polygons are considered equal if:
 * - Both polygons are valid (as determined by `isValidPolygon`).
 * - Both polygons have the same number of vertices.
 * - Each corresponding vertex in both polygons has the same `x` and `y` coordinates.
 *
 * @param polygon1 - The first polygon to compare.
 * @param polygon2 - The second polygon to compare.
 * @returns `true` if the polygons are equal; otherwise, `false`.
 *
 * @example
 * ```
 * const polygon1 = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const polygon2 = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const areEqual = arePolygonsEqual(polygon1, polygon2); // areEqual = true
 * ```
 */
export function arePolygonsEqual(
	polygon1: IPolygon,
	polygon2: IPolygon,
): boolean {
	if (!isValidPolygon(polygon1) || !isValidPolygon(polygon2)) {
		return false;
	}

	if (polygon1.vertices.length !== polygon2.vertices.length) {
		return false;
	}

	for (let i = 0; i < polygon1.vertices.length; i++) {
		if (
			polygon1.vertices[i].x !== polygon2.vertices[i].x ||
			polygon1.vertices[i].y !== polygon2.vertices[i].y
		) {
			return false;
		}
	}

	return true;
}

/**
 * Calculates the axis-aligned bounding box for a given polygon.
 *
 * @param polygon - The polygon for which to compute the bounding box.
 * @returns An object containing the minimum and maximum coordinates (`min` and `max`) as `Vector2D`,
 *          or `null` if the polygon is invalid.
 *
 * @remarks
 * The bounding box is the smallest rectangle (aligned with the axes) that completely contains the polygon.
 * The function returns `null` if the input polygon is not valid according to `isValidPolygon`.
 *
 * @example
 * ```
 * const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const boundingBox = getPolygonBoundingBox(polygon);
 * // boundingBox = { min: { x: 0, y: 0 }, max: { x: 4, y: 3 } }
 * ```
 */
export function getPolygonBoundingBox(
	polygon: IPolygon,
): { min: Vector2D; max: Vector2D } | null {
	if (!isValidPolygon(polygon)) {
		return null;
	}

	let minX = Infinity;
	let minY = Infinity;
	let maxX = -Infinity;
	let maxY = -Infinity;

	for (const vertex of polygon.vertices) {
		if (vertex.x < minX) {
			minX = vertex.x;
		}

		if (vertex.y < minY) {
			minY = vertex.y;
		}

		if (vertex.x > maxX) {
			maxX = vertex.x;
		}

		if (vertex.y > maxY) {
			maxY = vertex.y;
		}
	}

	return {
		min: { x: minX, y: minY },
		max: { x: maxX, y: maxY },
	};
}

/**
 * Translates a polygon by a given 2D vector offset.
 *
 * @param polygon - The polygon to translate.
 * @param offset - The 2D vector by which to translate the polygon.
 * @returns A new polygon with all vertices translated by the offset, or `null` if the input polygon is invalid.
 *
 * @example
 * ```
 * const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const offset = { x: 1, y: 1 };
 * const translatedPolygon = translatePolygon(polygon, offset);
 * // translatedPolygon = { vertices: [{ x: 1, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 4 }] }
 * ```
 */
export function translatePolygon(
	polygon: IPolygon,
	offset: Vector2D,
): IPolygon | null {
	if (!isValidPolygon(polygon)) {
		return null;
	}

	const translatedVertices = polygon.vertices.map((vertex) => ({
		x: vertex.x + offset.x,
		y: vertex.y + offset.y,
	}));

	return { vertices: translatedVertices };
}

/**
 * Scales a polygon by a given factor.
 *
 * @param polygon - The polygon to scale, represented by its vertices.
 * @param scale - The scaling factor to apply to each vertex coordinate.
 * @returns A new polygon with scaled vertices, or `null` if the input polygon is invalid.
 *
 * @example
 * ```
 * const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const scale = 2;
 * const scaledPolygon = scalePolygon(polygon, scale);
 * // scaledPolygon = { vertices: [{ x: 0, y: 0 }, { x: 8, y: 0 }, { x: 8, y: 6 }] }
 * ```
 */
export function scalePolygon(
	polygon: IPolygon,
	scale: number,
): IPolygon | null {
	if (!isValidPolygon(polygon)) {
		return null;
	}

	const scaledVertices = polygon.vertices.map((vertex) => ({
		x: vertex.x * scale,
		y: vertex.y * scale,
	}));

	return { vertices: scaledVertices };
}

/**
 * Rotates a polygon by a specified angle around the origin (0, 0).
 *
 * @param polygon - The polygon to rotate, represented by its vertices.
 * @param angle - The rotation angle in degrees (counterclockwise).
 * @returns The rotated polygon as a new object, or `null` if the input polygon is invalid.
 *
 * @remarks
 * The rotation is performed around the origin (0, 0). If you need to rotate around a different point,
 * translate the polygon before and after rotation.
 *
 * @see {@link isValidPolygon}
 *
 * @example
 * ```
 * const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const angle = 90;
 * const rotatedPolygon = rotatePolygon(polygon, angle);
 * // rotatedPolygon = { vertices: [{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: -3, y: 4 }] }
 * ```
 */
export function rotatePolygon(
	polygon: IPolygon,
	angle: number,
): IPolygon | null {
	if (!isValidPolygon(polygon)) {
		return null;
	}

	const radians = angle * (Math.PI / 180);
	const cos = Math.cos(radians);
	const sin = Math.sin(radians);
	const rotatedVertices = polygon.vertices.map((vertex) => ({
		x: vertex.x * cos - vertex.y * sin,
		y: vertex.x * sin + vertex.y * cos,
	}));

	return { vertices: rotatedVertices };
}

/**
 * Projects a polygon onto a given axis and returns the minimum and maximum scalar values
 * of the projection. This is commonly used in collision detection algorithms such as the
 * Separating Axis Theorem (SAT).
 *
 * @param polygon - The polygon to project, represented by an object implementing the `IPolygon` interface.
 * @param axis - The axis (as a `Vector2D`) onto which the polygon will be projected.
 * @returns An object containing the `min` and `max` scalar values of the projection, or `null` if the polygon is invalid.
 *
 * @example
 * ```
 * const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const axis = { x: 1, y: 1 };
 * const projection = projectPolygon(polygon, axis);
 * // projection = { min: 0, max: 7 }
 * ```
 */
export function projectPolygon(
	polygon: IPolygon,
	axis: Vector2D,
): { min: number; max: number } | null {
	if (!isValidPolygon(polygon)) {
		return null;
	}

	let min = Infinity;
	let max = -Infinity;

	for (const vertex of polygon.vertices) {
		const projection =
			(vertex.x * axis.x + vertex.y * axis.y) /
			Math.sqrt(axis.x ** 2 + axis.y ** 2);

		if (projection < min) {
			min = projection;
		}

		if (projection > max) {
			max = projection;
		}
	}

	return { min, max };
}

/**
 * Expands a polygon outward by a specified distance from its centroid.
 *
 * Each vertex of the polygon is moved away from the origin by the given distance,
 * along the direction from the origin to the vertex. If the input polygon is invalid,
 * the function returns `null`.
 *
 * @param polygon - The polygon to expand, represented by an object with a `vertices` array.
 * @param distance - The distance by which to expand the polygon.
 * @returns The expanded polygon as a new object, or `null` if the input polygon is invalid.
 *
 * @example
 * ```
 * const polygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] };
 * const distance = 1;
 * const expandedPolygon = expandPolygon(polygon, distance);
 * // expandedPolygon = { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }] }
 * ```
 */
export function expandPolygon(
	polygon: IPolygon,
	distance: number,
): IPolygon | null {
	if (!isValidPolygon(polygon)) {
		return null;
	}

	const expandedVertices = polygon.vertices.map((vertex) => ({
		x:
			vertex.x +
			(vertex.x / Math.sqrt(vertex.x ** 2 + vertex.y ** 2)) * distance,
		y:
			vertex.y +
			(vertex.y / Math.sqrt(vertex.x ** 2 + vertex.y ** 2)) * distance,
	}));

	return { vertices: expandedVertices };
}
