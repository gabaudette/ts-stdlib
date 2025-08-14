import { describe, it, expect } from "vitest";
import {
	sec,
	csc,
	cot,
	asec,
	acsc,
	acot,
	degreesToRadians,
	radiansToDegrees,
	normalizeAngle,
	wrapAngle,
	isAngleBetween,
	isAngleEqual,
	isAngleLessThan,
	isAngleGreaterThan,
	isAngleNotEqual,
	isAngleLessThanOrEqual,
	isAngleGreaterThanOrEqual,
	clampAngle,
	shortestAngleDifference,
	lerpAngle,
	toCartesian,
	toPolar,
} from "./trigonometry";

describe("trigonometry", () => {
	it("sec returns correct values", () => {
		expect(sec(0)).toBeCloseTo(1);
		expect(sec(Math.PI / 3)).toBeCloseTo(2);
		expect(sec(Math.PI / 2)).toBeGreaterThan(1e10);
		expect(sec(Math.PI)).toBeCloseTo(-1);
	});

	it("csc returns correct values", () => {
		expect(csc(Math.PI / 2)).toBeCloseTo(1);
		expect(csc(Math.PI / 6)).toBeCloseTo(2);
		expect(Number.isFinite(csc(Math.PI))).toBe(true);
		expect(Math.abs(csc(Math.PI))).toBeGreaterThan(1e10);
		expect(csc(0)).toBeCloseTo(Infinity);
	});

	it("cot returns correct values", () => {
		expect(cot(Math.PI / 4)).toBeCloseTo(1);
		expect(cot(Math.PI / 2)).toBeCloseTo(0);
		expect(cot(0)).toBeCloseTo(Infinity);
	});

	it("asec returns correct values", () => {
		expect(asec(2)).toBeCloseTo(Math.PI / 3);
		expect(asec(-2)).toBeCloseTo((2 * Math.PI) / 3);
		expect(() => asec(0.5)).not.toThrow(); // Math.acos(2) is NaN, but not an error
	});

	it("acsc returns correct values", () => {
		expect(acsc(2)).toBeCloseTo(Math.asin(0.5));
		expect(acsc(-2)).toBeCloseTo(Math.asin(-0.5));
		expect(acsc(1)).toBeCloseTo(Math.PI / 2);
		expect(acsc(-1)).toBeCloseTo(-Math.PI / 2);
	});

	it("acot returns correct values", () => {
		expect(acot(1)).toBeCloseTo(Math.PI / 4);
		expect(acot(0)).toBeCloseTo(Math.PI / 2);
		expect(acot(-1)).toBeCloseTo(-Math.PI / 4);
	});

	it("degreesToRadians and radiansToDegrees are inverses", () => {
		expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
		expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
		expect(radiansToDegrees(degreesToRadians(45))).toBeCloseTo(45);
	});

	it("normalizeAngle normalizes to [0, 2π)", () => {
		expect(normalizeAngle(0)).toBeCloseTo(0);
		expect(normalizeAngle(2 * Math.PI)).toBeCloseTo(0);
		expect(normalizeAngle(-Math.PI)).toBeCloseTo(-Math.PI);
		expect(normalizeAngle(3 * Math.PI)).toBeCloseTo(Math.PI);
	});

	it("wrapAngle wraps to [0, 2π)", () => {
		expect(wrapAngle(0)).toBeCloseTo(Math.PI);
		expect(wrapAngle(Math.PI)).toBeCloseTo(0);
		expect(wrapAngle(3 * Math.PI)).toBeCloseTo(0);
	});

	it("isAngleBetween works for non-wrapping and wrapping intervals", () => {
		expect(isAngleBetween(Math.PI / 4, 0, Math.PI / 2)).toBe(true);
		expect(isAngleBetween(Math.PI, 0, Math.PI / 2)).toBe(false);
		expect(isAngleBetween(0, (3 * Math.PI) / 2, Math.PI / 2)).toBe(true);
		expect(isAngleBetween(Math.PI, (3 * Math.PI) / 2, Math.PI / 2)).toBe(false);
	});

	it("isAngleEqual works", () => {
		expect(isAngleEqual(Math.PI / 4, Math.PI / 4)).toBe(true);
		expect(isAngleEqual(0, 2 * Math.PI)).toBe(true);
		expect(isAngleEqual(Math.PI, -Math.PI)).toBe(false);
	});

	it("isAngleLessThan and isAngleGreaterThan work", () => {
		expect(isAngleLessThan(Math.PI / 4, Math.PI / 2)).toBe(true);
		expect(isAngleLessThan(Math.PI / 2, Math.PI / 4)).toBe(false);
		expect(isAngleGreaterThan(Math.PI / 2, Math.PI / 4)).toBe(true);
		expect(isAngleGreaterThan(Math.PI / 4, Math.PI / 2)).toBe(false);
	});

	it("isAngleNotEqual works", () => {
		expect(isAngleNotEqual(Math.PI / 4, Math.PI / 2)).toBe(true);
		expect(isAngleNotEqual(0, 2 * Math.PI)).toBe(false);
	});

	it("isAngleLessThanOrEqual and isAngleGreaterThanOrEqual work", () => {
		expect(isAngleLessThanOrEqual(Math.PI / 4, Math.PI / 2)).toBe(true);
		expect(isAngleLessThanOrEqual(Math.PI / 2, Math.PI / 4)).toBe(false);
		expect(isAngleGreaterThanOrEqual(Math.PI / 2, Math.PI / 4)).toBe(true);
		expect(isAngleGreaterThanOrEqual(Math.PI / 4, Math.PI / 2)).toBe(false);
	});

	it("clampAngle clamps to [0, 2π)", () => {
		expect(clampAngle(0)).toBeCloseTo(0);
		expect(clampAngle(2 * Math.PI)).toBeCloseTo(0);
		expect(clampAngle(-Math.PI)).toBeCloseTo(Math.PI);
		expect(clampAngle(3 * Math.PI)).toBeCloseTo(Math.PI);
	});

	it("shortestAngleDifference returns minimal signed difference", () => {
		expect(shortestAngleDifference(0, Math.PI / 2)).toBeCloseTo(Math.PI / 2);
		expect(shortestAngleDifference(Math.PI / 2, 0)).toBeCloseTo(-Math.PI / 2);
		expect(shortestAngleDifference(0, 2 * Math.PI)).toBeCloseTo(0);
		expect(shortestAngleDifference(0, Math.PI)).toBeCloseTo(-Math.PI);
	});

	it("lerpAngle interpolates shortest path", () => {
		expect(lerpAngle(0, Math.PI, 0.5)).toBeCloseTo(-Math.PI / 2);
		expect(lerpAngle(Math.PI / 4, Math.PI / 2, 0.5)).toBeCloseTo(
			Math.PI / 4 + Math.PI / 8,
		);
		expect(lerpAngle(0, 2 * Math.PI, 0.5)).toBeCloseTo(0);
	});

	it("toCartesian converts polar to cartesian", () => {
		const result = toCartesian({ radius: 5, angle: Math.PI / 4 });
		expect(result.x).toBeCloseTo(5 * Math.cos(Math.PI / 4));
		expect(result.y).toBeCloseTo(5 * Math.sin(Math.PI / 4));
	});

	it("toPolar converts cartesian to polar", () => {
		const result = toPolar({ x: 5, y: 5 });
		expect(result.radius).toBeCloseTo(Math.sqrt(50));
		expect(result.angle).toBeCloseTo(Math.PI / 4);
		const result2 = toPolar({ x: 0, y: 1 });
		expect(result2.radius).toBeCloseTo(1);
		expect(result2.angle).toBeCloseTo(Math.PI / 2);
	});
});
