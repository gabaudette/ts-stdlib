import { describe, it, expect } from "vitest";
import { factorize, isPrime, isFactorial, isPerfectSquare } from "./factor";

// Tests for factorize
describe("factorize", () => {
	it("returns all positive integer factors of 12", () => {
		expect(factorize(12)).toEqual([1, 2, 3, 4, 6, 12]);
	});

	it("returns [1] for 1", () => {
		expect(factorize(1)).toEqual([1]);
	});

	it("returns [1, 13] for a prime number", () => {
		expect(factorize(13)).toEqual([1, 13]);
	});

	it("returns [1, 2, 4, 8, 16] for 16", () => {
		expect(factorize(16)).toEqual([1, 2, 4, 8, 16]);
	});

	it("returns [1, 2, 5, 10] for 10", () => {
		expect(factorize(10)).toEqual([1, 2, 5, 10]);
	});
});

// Tests for isPrime
describe("isPrime", () => {
	it("returns true for prime numbers", () => {
		expect(isPrime(2)).toBe(true);
		expect(isPrime(3)).toBe(true);
		expect(isPrime(5)).toBe(true);
		expect(isPrime(13)).toBe(true);
		expect(isPrime(97)).toBe(true);
	});

	it("returns false for non-prime numbers", () => {
		expect(isPrime(1)).toBe(false);
		expect(isPrime(0)).toBe(false);
		expect(isPrime(-7)).toBe(false);
		expect(isPrime(4)).toBe(false);
		expect(isPrime(100)).toBe(false);
	});
});

// Tests for isFactorial
describe("isFactorial", () => {
	it("returns true for factorial numbers", () => {
		expect(isFactorial(1)).toBe(true); // 0! and 1!
		expect(isFactorial(2)).toBe(true); // 2!
		expect(isFactorial(6)).toBe(true); // 3!
		expect(isFactorial(24)).toBe(true); // 4!
		expect(isFactorial(120)).toBe(true); // 5!
		expect(isFactorial(720)).toBe(true); // 6!
	});

	it("returns false for non-factorial numbers", () => {
		expect(isFactorial(3)).toBe(false);
		expect(isFactorial(4)).toBe(false);
		expect(isFactorial(5)).toBe(false);
		expect(isFactorial(10)).toBe(false);
		expect(isFactorial(-1)).toBe(false);
	});
});

// Tests for isPerfectSquare
describe("isPerfectSquare", () => {
	it("returns true for perfect squares", () => {
		expect(isPerfectSquare(0)).toBe(true);
		expect(isPerfectSquare(1)).toBe(true);
		expect(isPerfectSquare(4)).toBe(true);
		expect(isPerfectSquare(9)).toBe(true);
		expect(isPerfectSquare(16)).toBe(true);
		expect(isPerfectSquare(100)).toBe(true);
	});

	it("returns false for non-perfect squares", () => {
		expect(isPerfectSquare(-1)).toBe(false);
		expect(isPerfectSquare(2)).toBe(false);
		expect(isPerfectSquare(3)).toBe(false);
		expect(isPerfectSquare(5)).toBe(false);
		expect(isPerfectSquare(10)).toBe(false);
	});
});
