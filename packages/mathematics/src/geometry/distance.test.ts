import { describe, it, expect } from "vitest";
import {
	getDistance,
	pointToLineDistance,
	lineToLineDistance,
	lineToPointDistance,
	getLineLength,
	getLineMidpoint,
	getLineAngle,
	getLineSlope,
	getLineYIntercept,
	getLineEquation,
	getLineBoundingBox,
	isPointInBoundingBox,
	isBoundingBoxIntersecting,
	getBoundingBoxCenter,
	getBoundingBoxSize,
	getBoundingBoxCorners,
	getBoundingBoxArea,
	getBoundingBoxFromPoints,
	getDistanceToLineSegment,
} from "./distance";

describe("getDistance", () => {
	it("returns 0 for identical points", () => {
		expect(getDistance({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
	});
	it("returns correct Euclidean distance", () => {
		expect(getDistance({ x: 0, y: 0 }, { x: 3, y: 4 })).toBe(5);
		expect(getDistance({ x: 1, y: 2 }, { x: 4, y: 6 })).toBeCloseTo(5);
	});
});

describe("pointToLineDistance", () => {
	it("returns 0 if point is on the line", () => {
		expect(
			pointToLineDistance({ x: 1, y: 1 }, { x: 0, y: 0 }, { x: 2, y: 2 }),
		).toBeCloseTo(0);
	});

	it("returns correct distance for horizontal line", () => {
		expect(
			pointToLineDistance({ x: 1, y: 2 }, { x: 0, y: 0 }, { x: 2, y: 0 }),
		).toBe(2);
	});

	it("returns 0 for zero-length line", () => {
		expect(
			pointToLineDistance({ x: 1, y: 1 }, { x: 0, y: 0 }, { x: 0, y: 0 }),
		).toBe(0);
	});
});

describe("lineToLineDistance", () => {
	it("returns 0 for overlapping lines", () => {
		expect(
			lineToLineDistance(
				{ x: 0, y: 0 },
				{ x: 2, y: 2 },
				{ x: 0, y: 0 },
				{ x: 2, y: 2 },
			),
		).toBe(0);
	});

	it("returns correct minimum distance", () => {
		expect(
			lineToLineDistance(
				{ x: 0, y: 0 },
				{ x: 0, y: 1 },
				{ x: 2, y: 0 },
				{ x: 2, y: 1 },
			),
		).toBe(2);
	});
});

describe("lineToPointDistance", () => {
	it("returns 0 if point is on the line", () => {
		expect(
			lineToPointDistance({ x: 0, y: 0 }, { x: 2, y: 2 }, { x: 1, y: 1 }),
		).toBeCloseTo(0);
	});

	it("returns correct distance", () => {
		expect(
			lineToPointDistance({ x: 0, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 2 }),
		).toBe(2);
	});
});

describe("getLineLength", () => {
	it("returns correct length", () => {
		expect(getLineLength({ x: 0, y: 0 }, { x: 3, y: 4 })).toBe(5);
	});
});

describe("getLineMidpoint", () => {
	it("returns correct midpoint", () => {
		expect(getLineMidpoint({ x: 0, y: 0 }, { x: 2, y: 2 })).toEqual({
			x: 1,
			y: 1,
		});
	});
});

describe("getLineAngle", () => {
	it("returns 0 for horizontal line", () => {
		expect(getLineAngle({ x: 0, y: 0 }, { x: 1, y: 0 })).toBe(0);
	});

	it("returns 90 for vertical line up", () => {
		expect(getLineAngle({ x: 0, y: 0 }, { x: 0, y: 1 })).toBe(90);
	});

	it("returns -90 for vertical line down", () => {
		expect(getLineAngle({ x: 0, y: 0 }, { x: 0, y: -1 })).toBe(-90);
	});
});

describe("getLineSlope", () => {
	it("returns correct slope", () => {
		expect(getLineSlope({ x: 0, y: 0 }, { x: 2, y: 2 })).toBe(1);
	});

	it("returns null for vertical line", () => {
		expect(getLineSlope({ x: 1, y: 0 }, { x: 1, y: 2 })).toBeNull();
	});
});

describe("getLineYIntercept", () => {
	it("returns correct y-intercept", () => {
		expect(getLineYIntercept({ x: 0, y: 1 }, { x: 2, y: 3 })).toBe(1);
	});

	it("returns null for vertical line", () => {
		expect(getLineYIntercept({ x: 1, y: 0 }, { x: 1, y: 2 })).toBeNull();
	});
});

describe("getLineEquation", () => {
	it("returns correct slope and yIntercept", () => {
		expect(getLineEquation({ x: 0, y: 1 }, { x: 2, y: 3 })).toEqual({
			slope: 1,
			yIntercept: 1,
		});
	});

	it("returns nulls for vertical line", () => {
		expect(getLineEquation({ x: 1, y: 0 }, { x: 1, y: 2 })).toEqual({
			slope: null,
			yIntercept: null,
		});
	});
});

describe("getLineBoundingBox", () => {
	it("returns correct bounding box", () => {
		expect(getLineBoundingBox({ x: 1, y: 2 }, { x: 3, y: 4 })).toEqual({
			minX: 1,
			minY: 2,
			maxX: 3,
			maxY: 4,
		});
		expect(getLineBoundingBox({ x: 3, y: 4 }, { x: 1, y: 2 })).toEqual({
			minX: 1,
			minY: 2,
			maxX: 3,
			maxY: 4,
		});
	});
});

describe("isPointInBoundingBox", () => {
	it("returns true for point inside", () => {
		expect(
			isPointInBoundingBox(
				{ x: 2, y: 3 },
				{ minX: 1, minY: 2, maxX: 4, maxY: 5 },
			),
		).toBe(true);
	});

	it("returns false for point outside", () => {
		expect(
			isPointInBoundingBox(
				{ x: 0, y: 0 },
				{ minX: 1, minY: 2, maxX: 4, maxY: 5 },
			),
		).toBe(false);
	});

	it("returns true for point on edge", () => {
		expect(
			isPointInBoundingBox(
				{ x: 1, y: 2 },
				{ minX: 1, minY: 2, maxX: 4, maxY: 5 },
			),
		).toBe(true);
	});
});

describe("isBoundingBoxIntersecting", () => {
	it("returns true for overlapping boxes", () => {
		expect(
			isBoundingBoxIntersecting(
				{ minX: 0, minY: 0, maxX: 2, maxY: 2 },
				{ minX: 1, minY: 1, maxX: 3, maxY: 3 },
			),
		).toBe(true);
	});

	it("returns false for non-overlapping boxes", () => {
		expect(
			isBoundingBoxIntersecting(
				{ minX: 0, minY: 0, maxX: 1, maxY: 1 },
				{ minX: 2, minY: 2, maxX: 3, maxY: 3 },
			),
		).toBe(false);
	});

	it("returns true for touching boxes", () => {
		expect(
			isBoundingBoxIntersecting(
				{ minX: 0, minY: 0, maxX: 1, maxY: 1 },
				{ minX: 1, minY: 1, maxX: 2, maxY: 2 },
			),
		).toBe(true);
	});
});

describe("getBoundingBoxCenter", () => {
	it("returns correct center", () => {
		expect(
			getBoundingBoxCenter({ minX: 0, minY: 0, maxX: 2, maxY: 2 }),
		).toEqual({ x: 1, y: 1 });
	});
});

describe("getBoundingBoxSize", () => {
	it("returns correct size", () => {
		expect(getBoundingBoxSize({ minX: 1, minY: 2, maxX: 4, maxY: 6 })).toEqual({
			width: 3,
			height: 4,
		});
	});
});

describe("getBoundingBoxCorners", () => {
	it("returns correct corners", () => {
		const corners = getBoundingBoxCorners({
			minX: 0,
			minY: 0,
			maxX: 10,
			maxY: 5,
		});
		expect(corners.topLeft).toEqual({ x: 0, y: 0 });
		expect(corners.topRight).toEqual({ x: 10, y: 0 });
		expect(corners.bottomLeft).toEqual({ x: 0, y: 5 });
		expect(corners.bottomRight).toEqual({ x: 10, y: 5 });
	});
});

describe("getBoundingBoxArea", () => {
	it("returns correct area", () => {
		expect(getBoundingBoxArea({ minX: 1, minY: 2, maxX: 4, maxY: 6 })).toBe(12);
	});
});

describe("getBoundingBoxFromPoints", () => {
	it("returns correct bounding box for points", () => {
		const points = [
			{ x: 1, y: 2 },
			{ x: 3, y: 4 },
			{ x: -1, y: 5 },
		];
		expect(getBoundingBoxFromPoints(points)).toEqual({
			minX: -1,
			minY: 2,
			maxX: 3,
			maxY: 5,
		});
	});

	it("returns null for empty array", () => {
		expect(getBoundingBoxFromPoints([])).toBeNull();
	});
});

describe("getDistanceToLineSegment", () => {
	it("returns 0 if point is on the segment", () => {
		expect(
			getDistanceToLineSegment({ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 0 }),
		).toBe(0);
	});

	it("returns correct distance for point above segment", () => {
		expect(
			getDistanceToLineSegment({ x: 1, y: 2 }, { x: 0, y: 0 }, { x: 2, y: 0 }),
		).toBe(2);
	});

	it("returns distance to nearest endpoint if projection is outside segment", () => {
		expect(
			getDistanceToLineSegment({ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 0 }),
		).toBe(1);
		expect(
			getDistanceToLineSegment({ x: 3, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 0 }),
		).toBe(1);
	});
});

describe("getBoundingBoxFromPoints (edge cases)", () => {
	it("returns correct bounding box for single point", () => {
		const points = [{ x: 5, y: 7 }];
		expect(getBoundingBoxFromPoints(points)).toEqual({
			minX: 5,
			minY: 7,
			maxX: 5,
			maxY: 7,
		});
	});

	it("returns correct bounding box for two points", () => {
		const points = [
			{ x: 1, y: 2 },
			{ x: 3, y: 0 },
		];
		expect(getBoundingBoxFromPoints(points)).toEqual({
			minX: 1,
			minY: 0,
			maxX: 3,
			maxY: 2,
		});
	});
});

describe("getDistanceToLineSegment (edge cases)", () => {
	it("returns distance to endpoint for degenerate segment (zero length)", () => {
		expect(
			getDistanceToLineSegment({ x: 1, y: 1 }, { x: 0, y: 0 }, { x: 0, y: 0 }),
		).toBeCloseTo(Math.sqrt(2));
	});

	it("returns 0 for point exactly at segment start", () => {
		expect(
			getDistanceToLineSegment({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 0 }),
		).toBe(0);
	});

	it("returns 0 for point exactly at segment end", () => {
		expect(
			getDistanceToLineSegment({ x: 2, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 0 }),
		).toBe(0);
	});
});

describe("getLineAngle (edge cases)", () => {
	it("returns 180 for line to the left", () => {
		expect(getLineAngle({ x: 1, y: 0 }, { x: 0, y: 0 })).toBe(180);
	});

	it("returns -135 for line down and left", () => {
		expect(getLineAngle({ x: 1, y: 1 }, { x: 0, y: 0 })).toBeCloseTo(-135);
	});
});

describe("getLineSlope (edge cases)", () => {
	it("returns 0 for horizontal line", () => {
		expect(getLineSlope({ x: 0, y: 2 }, { x: 3, y: 2 })).toBe(0);
	});

	it("returns negative slope", () => {
		expect(getLineSlope({ x: 0, y: 2 }, { x: 2, y: 0 })).toBe(-1);
	});
});

describe("getLineYIntercept (edge cases)", () => {
	it("returns correct y-intercept for negative slope", () => {
		expect(getLineYIntercept({ x: 0, y: 2 }, { x: 2, y: 0 })).toBe(2);
	});
});

describe("getLineEquation (edge cases)", () => {
	it("returns correct values for horizontal line", () => {
		expect(getLineEquation({ x: 0, y: 2 }, { x: 3, y: 2 })).toEqual({
			slope: 0,
			yIntercept: 2,
		});
	});
});

describe("getBoundingBoxSize (edge cases)", () => {
	it("returns zero width and height for degenerate box", () => {
		expect(getBoundingBoxSize({ minX: 1, minY: 2, maxX: 1, maxY: 2 })).toEqual({
			width: 0,
			height: 0,
		});
	});
});

describe("getBoundingBoxArea (edge cases)", () => {
	it("returns 0 for degenerate box", () => {
		expect(getBoundingBoxArea({ minX: 1, minY: 2, maxX: 1, maxY: 2 })).toBe(0);
	});
});

describe("isBoundingBoxIntersecting (edge cases)", () => {
	it("returns true for identical boxes", () => {
		const box = { minX: 1, minY: 2, maxX: 3, maxY: 4 };
		expect(isBoundingBoxIntersecting(box, box)).toBe(true);
	});

	it("returns false for boxes separated by 1 unit", () => {
		expect(
			isBoundingBoxIntersecting(
				{ minX: 0, minY: 0, maxX: 1, maxY: 1 },
				{ minX: 2, minY: 2, maxX: 3, maxY: 3 },
			),
		).toBe(false);
	});
});
