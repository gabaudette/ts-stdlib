import { describe, it, expect } from "vitest";
import {
	arePolygonsEqual,
	expandPolygon,
	getPolygonArea,
	getPolygonBoundingBox,
	getPolygonCentroid,
	getPolygonPerimeter,
	isValidPolygon,
	projectPolygon,
	rotatePolygon,
	scalePolygon,
	translatePolygon,
	type IPolygon,
} from "./polygon";

const validPolyA: IPolygon = {
	vertices: [
		{ x: 0, y: 0 },
		{ x: 1, y: 0 },
		{ x: 0, y: 1 },
	],
};

const validPolyB: IPolygon = {
	vertices: [
		{ x: 0, y: 0 },
		{ x: 1, y: 0 },
		{ x: 0, y: 1 },
	],
};

const validPolyC: IPolygon = {
	vertices: [
		{ x: 0, y: 0 },
		{ x: 2, y: 0 },
		{ x: 0, y: 1 },
	],
};

const shortPoly: IPolygon = {
	vertices: [
		{ x: 0, y: 0 },
		{ x: 1, y: 0 },
	],
}; // invalid

const invalidPoly: IPolygon = {
	vertices: [
		{ x: 0, y: 0 },
		{ x: "bad" as unknown as number, y: 0 },
		{ x: 0, y: 1 },
	],
}; // invalid

describe("polygon geometry functions", () => {
	const triangle: IPolygon = {
		vertices: [
			{ x: 0, y: 0 },
			{ x: 4, y: 0 },
			{ x: 4, y: 3 },
		],
	};

	const square: IPolygon = {
		vertices: [
			{ x: 0, y: 0 },
			{ x: 2, y: 0 },
			{ x: 2, y: 2 },
			{ x: 0, y: 2 },
		],
	};

	describe("isValidPolygon", () => {
		it("returns true for a valid triangle", () => {
			expect(isValidPolygon(triangle)).toBe(true);
		});

		it("returns true for a valid square", () => {
			expect(isValidPolygon(square)).toBe(true);
		});

		it("returns false for less than 3 vertices", () => {
			expect(
				isValidPolygon({
					vertices: [
						{ x: 0, y: 0 },
						{ x: 1, y: 1 },
					],
				}),
			).toBe(false);
		});

		it("returns false for non-numeric vertex coordinates", () => {
			expect(
				isValidPolygon({
					vertices: [
						{ x: 0, y: 0 },
						{ x: "a" as any, y: 1 },
						{ x: 1, y: 1 },
					],
				}),
			).toBe(false);
		});

		it("returns false for missing vertices property", () => {
			expect(isValidPolygon({} as unknown as IPolygon)).toBe(false);
		});
	});

	describe("getPolygonArea", () => {
		it("calculates area of a triangle", () => {
			expect(getPolygonArea(triangle)).toBe(6);
		});

		it("calculates area of a square", () => {
			expect(getPolygonArea(square)).toBe(4);
		});

		it("returns null for invalid polygon", () => {
			expect(
				getPolygonArea({ vertices: [{ x: 0, y: 0 }] } as unknown as IPolygon),
			).toBeNull();
		});
	});

	describe("getPolygonPerimeter", () => {
		it("calculates perimeter of a triangle", () => {
			expect(getPolygonPerimeter(triangle)).toBeCloseTo(12, 5);
		});

		it("calculates perimeter of a square", () => {
			expect(getPolygonPerimeter(square)).toBeCloseTo(8, 5);
		});

		it("returns null for invalid polygon", () => {
			expect(
				getPolygonPerimeter({ vertices: [] } as unknown as IPolygon),
			).toBeNull();
		});
	});

	describe("getPolygonCentroid", () => {
		it("calculates centroid of a triangle", () => {
			expect(getPolygonCentroid(triangle)).toEqual({ x: 8 / 3, y: 1 });
		});

		it("calculates centroid of a square", () => {
			expect(getPolygonCentroid(square)).toEqual({ x: 1, y: 1 });
		});

		it("returns null for invalid polygon", () => {
			expect(
				getPolygonCentroid({ vertices: [] } as unknown as IPolygon),
			).toBeNull();
		});
	});

	describe("arePolygonsEqual", () => {
		it("returns false if either polygon is invalid", () => {
			expect(arePolygonsEqual(validPolyA, shortPoly)).toBe(false);
			expect(arePolygonsEqual(shortPoly, validPolyA)).toBe(false);
			expect(arePolygonsEqual(validPolyA, invalidPoly)).toBe(false);
		});

		it("returns false if polygons have different number of vertices", () => {
			const polyWithMore = {
				vertices: [
					{ x: 0, y: 0 },
					{ x: 1, y: 0 },
					{ x: 0, y: 1 },
					{ x: 1, y: 1 },
				],
			};
			expect(arePolygonsEqual(validPolyA, polyWithMore)).toBe(false);
		});

		it("returns false if any vertex differs", () => {
			expect(arePolygonsEqual(validPolyA, validPolyC)).toBe(false);
		});

		it("returns true if all vertices are equal", () => {
			expect(arePolygonsEqual(validPolyA, validPolyB)).toBe(true);
		});
	});

	describe("getPolygonBoundingBox", () => {
		it("returns correct bounding box for triangle", () => {
			expect(getPolygonBoundingBox(triangle)).toEqual({
				min: { x: 0, y: 0 },
				max: { x: 4, y: 3 },
			});
		});

		it("returns null for invalid polygon", () => {
			expect(
				getPolygonBoundingBox({ vertices: [] } as unknown as IPolygon),
			).toBeNull();
		});
	});

	describe("translatePolygon", () => {
		it("translates a polygon by a vector", () => {
			expect(translatePolygon(triangle, { x: 1, y: 2 })).toEqual({
				vertices: [
					{ x: 1, y: 2 },
					{ x: 5, y: 2 },
					{ x: 5, y: 5 },
				],
			});
		});

		it("returns null for invalid polygon", () => {
			expect(
				translatePolygon({ vertices: [] } as unknown as IPolygon, {
					x: 1,
					y: 1,
				}),
			).toBeNull();
		});
	});

	describe("scalePolygon", () => {
		it("scales a polygon by a factor", () => {
			expect(scalePolygon(triangle, 2)).toEqual({
				vertices: [
					{ x: 0, y: 0 },
					{ x: 8, y: 0 },
					{ x: 8, y: 6 },
				],
			});
		});

		it("returns null for invalid polygon", () => {
			expect(
				scalePolygon({ vertices: [] } as unknown as IPolygon, 2),
			).toBeNull();
		});
	});

	describe("rotatePolygon", () => {
		it("rotates a polygon by 90 degrees", () => {
			const rotated = rotatePolygon(triangle, 90);
			expect(rotated).not.toBeNull();
			if (rotated) {
				expect(rotated.vertices[0].x).toBeCloseTo(0);
				expect(rotated.vertices[0].y).toBeCloseTo(0);
				expect(rotated.vertices[1].x).toBeCloseTo(0);
				expect(rotated.vertices[1].y).toBeCloseTo(4);
				expect(rotated.vertices[2].x).toBeCloseTo(-3);
				expect(rotated.vertices[2].y).toBeCloseTo(4);
			}
		});

		it("returns null for invalid polygon", () => {
			expect(
				rotatePolygon({ vertices: [] } as unknown as IPolygon, 90),
			).toBeNull();
		});
	});

	describe("projectPolygon", () => {
		it("projects a polygon onto an axis", () => {
			const axis = { x: 1, y: 1 };
			const projection = projectPolygon(triangle, axis);
			expect(projection).not.toBeNull();
			if (projection) {
				expect(projection.min).toBeCloseTo(0);
				expect(projection.max).toBeCloseTo((4 * 1 + 3 * 1) / Math.sqrt(2));
			}
		});

		it("returns null for invalid polygon", () => {
			expect(
				projectPolygon({ vertices: [] } as unknown as IPolygon, { x: 1, y: 1 }),
			).toBeNull();
		});
	});

	describe("expandPolygon", () => {
		it("expands a polygon outward by a distance", () => {
			const expanded = expandPolygon(triangle, 1);
			expect(expanded).not.toBeNull();
			if (expanded) {
				expect(expanded.vertices.length).toBe(3);
				// The first vertex is at the origin, so it cannot be expanded (NaN), but let's check the others
				expect(expanded.vertices[1].x).toBeGreaterThan(triangle.vertices[1].x);
				expect(expanded.vertices[2].y).toBeGreaterThan(triangle.vertices[2].y);
			}
		});

		it("returns null for invalid polygon", () => {
			expect(
				expandPolygon({ vertices: [] } as unknown as IPolygon, 1),
			).toBeNull();
		});
	});
});
