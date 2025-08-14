/**
 * Calculates the Euclidean distance between two points in 2D space.
 *
 * @param pointA - The first point, with `x` and `y` coordinates.
 * @param pointB - The second point, with `x` and `y` coordinates.
 * @returns The distance between `pointA` and `pointB`.
 */
export function getDistance(
	pointA: { x: number; y: number },
	pointB: { x: number; y: number },
): number {
	return Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2);
}

/**
 * Calculates the shortest distance from a given point to a line segment defined by two endpoints.
 *
 * @param point - The point from which the distance to the line is measured.
 * @param lineStart - The starting point of the line segment.
 * @param lineEnd - The ending point of the line segment.
 * @returns The shortest distance from the point to the line segment. Returns 0 if the line segment has zero length.
 */
export function pointToLineDistance(
	point: { x: number; y: number },
	lineStart: { x: number; y: number },
	lineEnd: { x: number; y: number },
): number {
	const numerator = Math.abs(
		(lineEnd.y - lineStart.y) * point.x -
			(lineEnd.x - lineStart.x) * point.y +
			lineEnd.x * lineStart.y -
			lineEnd.y * lineStart.x,
	);

	const denominator = getDistance(lineStart, lineEnd);

	return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Calculates the minimum distance between two line segments in 2D space.
 *
 * The function computes the shortest distance from each endpoint of the first line segment
 * to the second line segment, and returns the smaller of the two distances.
 *
 * @param line1Start - The starting point of the first line segment.
 * @param line1End - The ending point of the first line segment.
 * @param line2Start - The starting point of the second line segment.
 * @param line2End - The ending point of the second line segment.
 * @returns The minimum distance between the two line segments.
 */
export function lineToLineDistance(
	line1Start: { x: number; y: number },
	line1End: { x: number; y: number },
	line2Start: { x: number; y: number },
	line2End: { x: number; y: number },
): number {
	const d1 = pointToLineDistance(line1Start, line2Start, line2End);
	const d2 = pointToLineDistance(line1End, line2Start, line2End);

	return Math.min(d1, d2);
}

/**
 * Calculates the shortest distance from a given point to a line segment defined by two endpoints.
 *
 * @param lineStart - The starting point of the line segment, with `x` and `y` coordinates.
 * @param lineEnd - The ending point of the line segment, with `x` and `y` coordinates.
 * @param point - The point from which the distance to the line segment is measured, with `x` and `y` coordinates.
 * @returns The shortest distance from the point to the line segment.
 */
export function lineToPointDistance(
	lineStart: { x: number; y: number },
	lineEnd: { x: number; y: number },
	point: { x: number; y: number },
): number {
	return pointToLineDistance(point, lineStart, lineEnd);
}

/**
 * Calculates the length of a line segment defined by two points.
 *
 * @param lineStart - The starting point of the line segment, with `x` and `y` coordinates.
 * @param lineEnd - The ending point of the line segment, with `x` and `y` coordinates.
 * @returns The distance between `lineStart` and `lineEnd`.
 */
export function getLineLength(
	lineStart: { x: number; y: number },
	lineEnd: { x: number; y: number },
): number {
	return getDistance(lineStart, lineEnd);
}

/**
 * Calculates the midpoint of a line segment defined by two points.
 *
 * @param lineStart - The starting point of the line segment, with `x` and `y` coordinates.
 * @param lineEnd - The ending point of the line segment, with `x` and `y` coordinates.
 * @returns An object representing the midpoint of the line segment, with `x` and `y` coordinates.
 */
export function getLineMidpoint(
	lineStart: { x: number; y: number },
	lineEnd: { x: number; y: number },
): { x: number; y: number } {
	return {
		x: (lineStart.x + lineEnd.x) / 2,
		y: (lineStart.y + lineEnd.y) / 2,
	};
}

/**
 * Calculates the angle (in degrees) between the horizontal axis and the line defined by two points.
 *
 * @param lineStart - The starting point of the line, with `x` and `y` coordinates.
 * @param lineEnd - The ending point of the line, with `x` and `y` coordinates.
 * @returns The angle in degrees between the line and the horizontal axis, ranging from -180 to 180.
 */
export function getLineAngle(
	lineStart: { x: number; y: number },
	lineEnd: { x: number; y: number },
): number {
	const deltaY = lineEnd.y - lineStart.y;
	const deltaX = lineEnd.x - lineStart.x;

	return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
}

/**
 * Calculates the slope of a line defined by two points.
 *
 * @param lineStart - The starting point of the line, with `x` and `y` coordinates.
 * @param lineEnd - The ending point of the line, with `x` and `y` coordinates.
 * @returns The slope of the line as a number, or `null` if the line is vertical (undefined slope).
 */
export function getLineSlope(
	lineStart: { x: number; y: number },
	lineEnd: { x: number; y: number },
): number | null {
	const deltaX = lineEnd.x - lineStart.x;
	const deltaY = lineEnd.y - lineStart.y;

	return deltaX === 0 ? null : deltaY / deltaX;
}

/**
 * Calculates the y-intercept of a line defined by two points.
 *
 * The y-intercept is the point where the line crosses the y-axis (i.e., where x = 0).
 * If the line is vertical (undefined slope), the function returns `null`.
 *
 * @param lineStart - The starting point of the line, with `x` and `y` coordinates.
 * @param lineEnd - The ending point of the line, with `x` and `y` coordinates.
 * @returns The y-intercept of the line, or `null` if the line is vertical.
 */
export function getLineYIntercept(
	lineStart: { x: number; y: number },
	lineEnd: { x: number; y: number },
): number | null {
	const slope = getLineSlope(lineStart, lineEnd);
	if (slope === null) {
		return null;
	}

	return lineStart.y - slope * lineStart.x;
}

/**
 * Calculates the slope and y-intercept of the line defined by two points.
 *
 * @param lineStart - The starting point of the line, with `x` and `y` coordinates.
 * @param lineEnd - The ending point of the line, with `x` and `y` coordinates.
 * @returns An object containing the `slope` and `yIntercept` of the line.
 *          If the line is vertical, both values will be `null`.
 */
export function getLineEquation(
	lineStart: { x: number; y: number },
	lineEnd: { x: number; y: number },
): { slope: number | null; yIntercept: number | null } {
	return {
		slope: getLineSlope(lineStart, lineEnd),
		yIntercept: getLineYIntercept(lineStart, lineEnd),
	};
}



/**
 * Calculates the axis-aligned bounding box for a line segment defined by two points.
 *
 * @param lineStart - The starting point of the line segment, with `x` and `y` coordinates.
 * @param lineEnd - The ending point of the line segment, with `x` and `y` coordinates.
 * @returns An object containing the minimum and maximum `x` and `y` values (`minX`, `minY`, `maxX`, `maxY`)
 *          that define the bounding box enclosing the line segment.
 */
export function getLineBoundingBox(
	lineStart: { x: number; y: number },
	lineEnd: { x: number; y: number },
): { minX: number; minY: number; maxX: number; maxY: number } {
	return {
		minX: Math.min(lineStart.x, lineEnd.x),
		minY: Math.min(lineStart.y, lineEnd.y),
		maxX: Math.max(lineStart.x, lineEnd.x),
		maxY: Math.max(lineStart.y, lineEnd.y),
	};
}

/**
 * Determines whether a given point lies within a specified axis-aligned bounding box.
 *
 * @param point - The point to test, with `x` and `y` coordinates.
 * @param boundingBox - The bounding box defined by its minimum and maximum `x` and `y` values.
 * @returns `true` if the point is inside or on the edge of the bounding box; otherwise, `false`.
 */
export function isPointInBoundingBox(
	point: { x: number; y: number },
	boundingBox: { minX: number; minY: number; maxX: number; maxY: number },
): boolean {
	return (
		point.x >= boundingBox.minX &&
		point.x <= boundingBox.maxX &&
		point.y >= boundingBox.minY &&
		point.y <= boundingBox.maxY
	);
}

/**
 * Determines whether two axis-aligned bounding boxes intersect.
 *
 * @param box1 - The first bounding box, defined by its minimum and maximum X and Y coordinates.
 * @param box2 - The second bounding box, defined by its minimum and maximum X and Y coordinates.
 * @returns `true` if the bounding boxes intersect or touch; otherwise, `false`.
 */
export function isBoundingBoxIntersecting(
	box1: { minX: number; minY: number; maxX: number; maxY: number },
	box2: { minX: number; minY: number; maxX: number; maxY: number },
): boolean {
	return !(
		box1.maxX < box2.minX ||
		box1.minX > box2.maxX ||
		box1.maxY < box2.minY ||
		box1.minY > box2.maxY
	);
}

/**
 * Calculates the center point of a given bounding box.
 *
 * @param boundingBox - An object representing the bounding box, with properties `minX`, `minY`, `maxX`, and `maxY`.
 * @returns An object containing the `x` and `y` coordinates of the center point of the bounding box.
 */
export function getBoundingBoxCenter(boundingBox: {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}): { x: number; y: number } {
	return {
		x: (boundingBox.minX + boundingBox.maxX) / 2,
		y: (boundingBox.minY + boundingBox.maxY) / 2,
	};
}

/**
 * Calculates the width and height of a bounding box given its minimum and maximum X and Y coordinates.
 *
 * @param boundingBox - An object containing the minimum and maximum X and Y coordinates of the bounding box.
 * @returns An object with the `width` and `height` of the bounding box.
 */
export function getBoundingBoxSize(boundingBox: {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}): { width: number; height: number } {
	return {
		width: boundingBox.maxX - boundingBox.minX,
		height: boundingBox.maxY - boundingBox.minY,
	};
}

/**
 * Returns the four corners of a bounding box given its minimum and maximum X and Y coordinates.
 *
 * @param boundingBox - An object containing the minimum and maximum X and Y coordinates of the bounding box.
 * @returns An object with the coordinates of the top-left, top-right, bottom-left, and bottom-right corners.
 *
 * @example
 * ```typescript
 * const corners = getBoundingBoxCorners({ minX: 0, minY: 0, maxX: 10, maxY: 5 });
 * // corners.topLeft => { x: 0, y: 0 }
 * // corners.topRight => { x: 10, y: 0 }
 * // corners.bottomLeft => { x: 0, y: 5 }
 * // corners.bottomRight => { x: 10, y: 5 }
 * ```
 */
export function getBoundingBoxCorners(boundingBox: {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}): {
	topLeft: { x: number; y: number };
	topRight: { x: number; y: number };
	bottomLeft: { x: number; y: number };
	bottomRight: { x: number; y: number };
} {
	return {
		topLeft: { x: boundingBox.minX, y: boundingBox.minY },
		topRight: { x: boundingBox.maxX, y: boundingBox.minY },
		bottomLeft: { x: boundingBox.minX, y: boundingBox.maxY },
		bottomRight: { x: boundingBox.maxX, y: boundingBox.maxY },
	};
}

/**
 * Calculates the area of a bounding box defined by its minimum and maximum X and Y coordinates.
 *
 * @param boundingBox - An object representing the bounding box with properties `minX`, `minY`, `maxX`, and `maxY`.
 * @returns The area of the bounding box as a number.
 */
export function getBoundingBoxArea(boundingBox: {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}): number {
	const size = getBoundingBoxSize(boundingBox);
	return size.width * size.height;
}

/**
 * Calculates the axis-aligned bounding box for a given array of 2D points.
 *
 * @param points - An array of points, each with `x` and `y` coordinates.
 * @returns An object containing the minimum and maximum `x` and `y` values (`minX`, `minY`, `maxX`, `maxY`)
 *          that define the bounding box, or `null` if the input array is empty.
 *
 * @example
 * ```typescript
 * const points = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: -1, y: 5 }];
 * const bbox = getBoundingBoxFromPoints(points);
 * // bbox = { minX: -1, minY: 2, maxX: 3, maxY: 5 }
 * ```
 */
export function getBoundingBoxFromPoints(
	points: Array<{ x: number; y: number }>,
): { minX: number; minY: number; maxX: number; maxY: number } | null {
	if (points.length === 0) {
		return null;
	}

	let minX = points[0].x;
	let minY = points[0].y;
	let maxX = points[0].x;
	let maxY = points[0].y;

	for (const point of points) {
		if (point.x < minX) {
			minX = point.x;
		}

		if (point.y < minY) {
			minY = point.y;
		}

		if (point.x > maxX) {
			maxX = point.x;
		}

		if (point.y > maxY) {
			maxY = point.y;
		}
	}

	return { minX, minY, maxX, maxY };
}

/**
 * Calculates the shortest distance from a given point to a line segment defined by two endpoints.
 *
 * @param point - The point from which the distance is measured, with `x` and `y` coordinates.
 * @param segmentStart - The starting point of the line segment, with `x` and `y` coordinates.
 * @param segmentEnd - The ending point of the line segment, with `x` and `y` coordinates.
 * @returns The shortest distance from the point to the line segment.
 *
 * @remarks
 * If the perpendicular projection of the point onto the line defined by the segment
 * falls outside the segment, the distance to the nearest endpoint is returned.
 */
export function getDistanceToLineSegment(
	point: { x: number; y: number },
	segmentStart: { x: number; y: number },
	segmentEnd: { x: number; y: number },
): number {
	const A = point.x - segmentStart.x;
	const B = point.y - segmentStart.y;
	const C = segmentEnd.x - segmentStart.x;
	const D = segmentEnd.y - segmentStart.y;

	const dot = A * C + B * D;
	const len_sq = C * C + D * D;

	let param = -1;

	if (len_sq !== 0) {
		param = dot / len_sq;
	}

	let xx: number, yy: number;

	if (param < 0) {
		xx = segmentStart.x;
		yy = segmentStart.y;
	} else if (param > 1) {
		xx = segmentEnd.x;
		yy = segmentEnd.y;
	} else {
		xx = segmentStart.x + param * C;
		yy = segmentStart.y + param * D;
	}

	const dx = point.x - xx;
	const dy = point.y - yy;

	return Math.sqrt(dx * dx + dy * dy);
}
