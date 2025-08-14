import { describe, it, expect } from "vitest";
import {
	ICircle,
	isValidCircle,
	getCircleCircumference,
	getCircleArea,
	getCircleDiameter,
	getCircleArcLength,
	getCircleSectorArea,
	areCirclesEqual,
	scaleCircle,
} from "./circle";

describe("isValidCircle", () => {
	it("returns true for a valid circle", () => {
		expect(isValidCircle({ radius: 5 })).toBe(true);
	});

	it("returns false for zero radius", () => {
		expect(isValidCircle({ radius: 0 })).toBe(false);
	});

	it("returns false for negative radius", () => {
		expect(isValidCircle({ radius: -3 })).toBe(false);
	});

	it("returns false for non-number radius", () => {
		expect(isValidCircle({ radius: "abc" as unknown as number })).toBe(false);
	});
});

describe("getCircleCircumference", () => {
	it("returns correct circumference for valid circle", () => {
		expect(getCircleCircumference({ radius: 5 })).toBeCloseTo(2 * Math.PI * 5);
	});

	it("returns null for invalid circle", () => {
		expect(getCircleCircumference({ radius: 0 })).toBeNull();
		expect(getCircleCircumference({ radius: -1 })).toBeNull();
	});
});

describe("getCircleArea", () => {
	it("returns correct area for valid circle", () => {
		expect(getCircleArea({ radius: 5 })).toBeCloseTo(Math.PI * 25);
	});

	it("returns null for invalid circle", () => {
		expect(getCircleArea({ radius: 0 })).toBeNull();
		expect(getCircleArea({ radius: -2 })).toBeNull();
	});
});

describe("getCircleDiameter", () => {
	it("returns correct diameter for valid circle", () => {
		expect(getCircleDiameter({ radius: 5 })).toBe(10);
	});

	it("returns null for invalid circle", () => {
		expect(getCircleDiameter({ radius: 0 })).toBeNull();
		expect(getCircleDiameter({ radius: -2 })).toBeNull();
	});
});

describe("getCircleArcLength", () => {
	it("returns correct arc length for valid circle and angle", () => {
		expect(getCircleArcLength({ radius: 5 }, Math.PI / 4)).toBeCloseTo(
			(5 * Math.PI) / 4,
		);
	});

	it("returns null for invalid circle", () => {
		expect(getCircleArcLength({ radius: 0 }, Math.PI)).toBeNull();
	});
});

describe("getCircleSectorArea", () => {
	it("returns correct sector area for valid circle and angle", () => {
		expect(getCircleSectorArea({ radius: 5 }, Math.PI / 4)).toBeCloseTo(
			(0.5 * 25 * Math.PI) / 4,
		);
	});

	it("returns null for invalid circle", () => {
		expect(getCircleSectorArea({ radius: 0 }, Math.PI)).toBeNull();
	});
});

describe("areCirclesEqual", () => {
	it("returns true for circles with same radius", () => {
		expect(areCirclesEqual({ radius: 5 }, { radius: 5 })).toBe(true);
	});

	it("returns false for circles with different radii", () => {
		expect(areCirclesEqual({ radius: 5 }, { radius: 6 })).toBe(false);
	});

	it("returns false if either circle is invalid", () => {
		expect(areCirclesEqual({ radius: 0 }, { radius: 5 })).toBe(false);
		expect(areCirclesEqual({ radius: 5 }, { radius: -1 })).toBe(false);
	});
});

describe("scaleCircle", () => {
	it("returns new circle with scaled radius for valid input", () => {
		expect(scaleCircle({ radius: 5 }, 2)).toEqual({ radius: 10 });
	});

	it("returns null for invalid circle", () => {
		expect(scaleCircle({ radius: 0 }, 2)).toBeNull();
	});

	it("returns null for non-positive scale", () => {
		expect(scaleCircle({ radius: 5 }, 0)).toBeNull();
		expect(scaleCircle({ radius: 5 }, -2)).toBeNull();
	});
});
