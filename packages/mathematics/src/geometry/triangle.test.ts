import { describe, it, expect } from "vitest";
import {
	isValidTriangle,
	getTriangleType,
	getTriangleArea,
	getTrianglePerimeter,
	getTriangleCircumradius,
	getTriangleCentroid,
	getTriangleOrthocenter,
	getTriangleAngles,
	pythagoreanTheorem,
	inversePythagoreanTheorem,
	heronsFormula,
	areTrianglesEqual,
	getTriangleCircumcenter,
	getTriangleIncenter,
} from "./triangle";

describe("isValidTriangle", () => {
	it("returns true for a valid triangle", () => {
		expect(isValidTriangle({ a: 3, b: 4, c: 5 })).toBe(true);
	});
	it("returns false for an invalid triangle", () => {
		expect(isValidTriangle({ a: 1, b: 2, c: 3 })).toBe(false);
		expect(isValidTriangle({ a: 1, b: 1, c: 3 })).toBe(false);
	});
});

describe("getTriangleType", () => {
	it("returns 'equilateral' for all equal sides", () => {
		expect(getTriangleType({ a: 2, b: 2, c: 2 })).toBe("equilateral");
	});
	it("returns 'isosceles' for two equal sides", () => {
		expect(getTriangleType({ a: 2, b: 2, c: 3 })).toBe("isosceles");
		expect(getTriangleType({ a: 3, b: 2, c: 2 })).toBe("isosceles");
		expect(getTriangleType({ a: 2, b: 3, c: 2 })).toBe("isosceles");
	});
	it("returns 'scalene' for all different sides", () => {
		expect(getTriangleType({ a: 3, b: 4, c: 5 })).toBe("scalene");
	});
	it("returns 'invalid' for invalid triangles", () => {
		expect(getTriangleType({ a: 1, b: 2, c: 3 })).toBe("invalid");
	});
});

describe("getTriangleArea", () => {
	it("returns correct area for a valid triangle", () => {
		expect(getTriangleArea({ a: 3, b: 4, c: 5 })).toBe(6);
	});
	it("returns null for invalid triangle", () => {
		expect(getTriangleArea({ a: 1, b: 2, c: 3 })).toBeNull();
	});
});

describe("getTrianglePerimeter", () => {
	it("returns correct perimeter for a valid triangle", () => {
		expect(getTrianglePerimeter({ a: 3, b: 4, c: 5 })).toBe(12);
	});
	it("returns null for invalid triangle", () => {
		expect(getTrianglePerimeter({ a: 1, b: 2, c: 3 })).toBeNull();
	});
});

describe("getTriangleCircumradius", () => {
	it("returns correct circumradius for a valid triangle", () => {
		expect(getTriangleCircumradius({ a: 3, b: 4, c: 5 })).toBeCloseTo(2.5);
	});
	it("returns null for invalid triangle", () => {
		expect(getTriangleCircumradius({ a: 1, b: 2, c: 3 })).toBeNull();
	});
});

describe("getTriangleCentroid", () => {
	it("returns centroid for a valid triangle", () => {
		expect(getTriangleCentroid({ a: 3, b: 4, c: 5 })).toEqual({ x: 4, y: 4 });
	});
	it("returns null for invalid triangle", () => {
		expect(getTriangleCentroid({ a: 1, b: 2, c: 3 })).toBeNull();
	});
});

describe("getTriangleOrthocenter", () => {
	it("returns orthocenter for a valid triangle", () => {
		expect(getTriangleOrthocenter({ a: 3, b: 4, c: 5 })).toEqual({
			x: 4,
			y: 4,
		});
	});
	it("returns null for invalid triangle", () => {
		expect(getTriangleOrthocenter({ a: 1, b: 2, c: 3 })).toBeNull();
	});
});

describe("getTriangleAngles", () => {
	it("returns correct angles for a valid triangle", () => {
		const angles = getTriangleAngles({ a: 3, b: 4, c: 5 });
		expect(angles).not.toBeNull();
		if (angles) {
			expect(angles.A + angles.B + angles.C).toBeCloseTo(180, 5);
			expect(angles.A).toBeCloseTo(36.8699, 3);
			expect(angles.B).toBeCloseTo(53.1301, 3);
			expect(angles.C).toBeCloseTo(90, 3);
		}
	});
	it("returns null for invalid triangle", () => {
		expect(getTriangleAngles({ a: 1, b: 2, c: 3 })).toBeNull();
	});
});

describe("pythagoreanTheorem", () => {
	it("returns correct hypotenuse", () => {
		expect(pythagoreanTheorem(3, 4)).toBe(5);
		expect(pythagoreanTheorem(5, 12)).toBe(13);
	});
});

describe("inversePythagoreanTheorem", () => {
	it("returns correct leg", () => {
		expect(inversePythagoreanTheorem(5, 3)).toBe(4);
		expect(inversePythagoreanTheorem(13, 5)).toBe(12);
	});
	it("throws for invalid input", () => {
		expect(() => inversePythagoreanTheorem(3, 5)).toThrow();
	});
});

describe("heronsFormula", () => {
	it("returns correct area", () => {
		expect(heronsFormula(3, 4, 5)).toBe(6);
		expect(heronsFormula(5, 5, 6)).toBeCloseTo(12, 5);
	});
});

describe("areTrianglesEqual", () => {
	it("returns true for triangles with same sides in any order", () => {
		expect(areTrianglesEqual({ a: 3, b: 4, c: 5 }, { a: 5, b: 4, c: 3 })).toBe(
			true,
		);
	});
	it("returns false for triangles with different sides", () => {
		expect(areTrianglesEqual({ a: 3, b: 4, c: 5 }, { a: 3, b: 4, c: 6 })).toBe(
			false,
		);
	});
	it("returns false if either triangle is invalid", () => {
		expect(areTrianglesEqual({ a: 1, b: 2, c: 3 }, { a: 3, b: 4, c: 5 })).toBe(
			false,
		);
	});
});

describe("getTriangleCircumcenter", () => {
	it("returns circumcenter for a valid triangle", () => {
		expect(getTriangleCircumcenter({ a: 3, b: 4, c: 5 })).toEqual({
			x: 4,
			y: 4,
		});
	});
	it("returns null for invalid triangle", () => {
		expect(getTriangleCircumcenter({ a: 1, b: 2, c: 3 })).toBeNull();
	});
});

describe("getTriangleIncenter", () => {
	it("returns incenter for a valid triangle", () => {
		expect(getTriangleIncenter({ a: 3, b: 4, c: 5 })).toEqual({ x: 4, y: 4 });
	});
	it("returns null for invalid triangle", () => {
		expect(getTriangleIncenter({ a: 1, b: 2, c: 3 })).toBeNull();
	});
});
