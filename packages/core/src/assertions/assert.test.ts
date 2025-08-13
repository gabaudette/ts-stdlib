import { describe, it, expect } from "vitest";
import { assert } from "./assert";
import { assertNever } from "./assert";

describe("assert", () => {
	it("does not throw when condition is true", () => {
		expect(() => assert(true)).not.toThrow();
		expect(() => assert(1)).not.toThrow();
		expect(() => assert("non-empty")).not.toThrow();
		expect(() => assert({})).not.toThrow();
	});

	it("throws with default message when condition is false", () => {
		expect(() => assert(false)).toThrowError("Assertion failed");
		expect(() => assert(0)).toThrowError("Assertion failed");
		expect(() => assert("")).toThrowError("Assertion failed");
		expect(() => assert(null)).toThrowError("Assertion failed");
		expect(() => assert(undefined)).toThrowError("Assertion failed");
	});

	it("throws with custom message when provided", () => {
		expect(() => assert(false, "Custom error")).toThrowError("Custom error");
		expect(() => assert(0, "Zero is falsy")).toThrowError("Zero is falsy");
	});

	describe("assertNever", () => {
		it("throws with default message when called", () => {
			// @ts-expect-error: purposely passing a value to trigger the error
			expect(() => assertNever("unexpected")).toThrowError("Unexpected value");
		});

		it("throws with custom message when provided", () => {
			// @ts-expect-error: purposely passing a value to trigger the error
			expect(() => assertNever(42, "Should never happen")).toThrowError(
				"Should never happen",
			);
		});
	});
});
