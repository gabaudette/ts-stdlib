import { describe, it, expect } from "vitest";
import {
	Vector2D,
	Vector3D,
	addVectors2D,
	addVectors3D,
	subtractVectors2D,
	subtractVectors3D,
	dotProduct2D,
	dotProduct3D,
	magnitude2D,
	magnitude3D,
	normalize2D,
	normalize3D,
	scaleVector2D,
	scaleVector3D,
	crossProduct3D,
	angleBetweenVectors2D,
	angleBetweenVectors3D,
	projectVector2D,
	projectVector3D,
} from "./vector";

describe("Vector2D operations", () => {
	it("addVectors2D adds two vectors", () => {
		expect(addVectors2D({ x: 1, y: 2 }, { x: 3, y: 4 })).toEqual({
			x: 4,
			y: 6,
		});
	});

	it("subtractVectors2D subtracts two vectors", () => {
		expect(subtractVectors2D({ x: 1, y: 2 }, { x: 3, y: 4 })).toEqual({
			x: -2,
			y: -2,
		});
	});

	it("dotProduct2D computes the dot product", () => {
		expect(dotProduct2D({ x: 1, y: 2 }, { x: 3, y: 4 })).toBe(11);
	});

	it("magnitude2D computes the magnitude", () => {
		expect(magnitude2D({ x: 3, y: 4 })).toBe(5);
	});

	it("normalize2D returns a unit vector", () => {
		const v = normalize2D({ x: 3, y: 4 });
		expect(v.x).toBeCloseTo(0.6);
		expect(v.y).toBeCloseTo(0.8);
		expect(magnitude2D(v)).toBeCloseTo(1);
	});

	it("normalize2D returns NaN components for zero vector", () => {
		const v = normalize2D({ x: 0, y: 0 });
		expect(Number.isNaN(v.x)).toBe(true);
		expect(Number.isNaN(v.y)).toBe(true);
	});

	it("scaleVector2D scales a vector", () => {
		expect(scaleVector2D({ x: 3, y: 4 }, 2)).toEqual({ x: 6, y: 8 });
	});

	it("angleBetweenVectors2D returns correct angle", () => {
		const v1 = { x: 1, y: 0 };
		const v2 = { x: 0, y: 1 };
		expect(angleBetweenVectors2D(v1, v2)).toBeCloseTo(Math.PI / 2);
	});

	it("projectVector2D projects v1 onto v2", () => {
		const v1 = { x: 3, y: 4 };
		const v2 = { x: 1, y: 0 };
		expect(projectVector2D(v1, v2)).toEqual({ x: 3, y: 0 });
	});
});

describe("Vector3D operations", () => {
	it("addVectors3D adds two vectors", () => {
		expect(addVectors3D({ x: 1, y: 2, z: 3 }, { x: 4, y: 5, z: 6 })).toEqual({
			x: 5,
			y: 7,
			z: 9,
		});
	});

	it("subtractVectors3D subtracts two vectors", () => {
		expect(
			subtractVectors3D({ x: 1, y: 2, z: 3 }, { x: 4, y: 5, z: 6 }),
		).toEqual({ x: -3, y: -3, z: -3 });
	});

	it("dotProduct3D computes the dot product", () => {
		expect(dotProduct3D({ x: 1, y: 2, z: 3 }, { x: 4, y: 5, z: 6 })).toBe(32);
	});

	it("magnitude3D computes the magnitude", () => {
		expect(magnitude3D({ x: 1, y: 2, z: 3 })).toBeCloseTo(3.7416573867739413);
	});

	it("normalize3D returns a unit vector", () => {
		const v = normalize3D({ x: 3, y: 4, z: 5 });
		expect(v.x).toBeCloseTo(0.4242640687119285);
		expect(v.y).toBeCloseTo(0.565685424949238);
		expect(v.z).toBeCloseTo(0.7071067811865475);
		expect(magnitude3D(v)).toBeCloseTo(1);
	});

	it("normalize3D returns NaN/Infinity for zero vector", () => {
		const v = normalize3D({ x: 0, y: 0, z: 0 });
		expect(Number.isNaN(v.x) || !Number.isFinite(v.x)).toBe(true);
		expect(Number.isNaN(v.y) || !Number.isFinite(v.y)).toBe(true);
		expect(Number.isNaN(v.z) || !Number.isFinite(v.z)).toBe(true);
	});

	it("scaleVector3D scales a vector", () => {
		expect(scaleVector3D({ x: 1, y: 2, z: 3 }, 2)).toEqual({
			x: 2,
			y: 4,
			z: 6,
		});
	});

	it("crossProduct3D computes the cross product", () => {
		const v1 = { x: 1, y: 2, z: 3 };
		const v2 = { x: 4, y: 5, z: 6 };
		expect(crossProduct3D(v1, v2)).toEqual({ x: -3, y: 6, z: -3 });
	});

	it("angleBetweenVectors3D returns correct angle", () => {
		const v1 = { x: 1, y: 0, z: 0 };
		const v2 = { x: 0, y: 1, z: 0 };
		expect(angleBetweenVectors3D(v1, v2)).toBeCloseTo(Math.PI / 2);
	});

	it("projectVector3D projects v1 onto v2", () => {
		const v1 = { x: 3, y: 4, z: 5 };
		const v2 = { x: 1, y: 0, z: 0 };
		expect(projectVector3D(v1, v2)).toEqual({ x: 3, y: 0, z: 0 });
	});
});
