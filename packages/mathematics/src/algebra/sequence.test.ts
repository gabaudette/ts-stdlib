import { describe, it, expect } from "vitest";
import {
	generateFibonacciSequence,
	generatePrimeSequence,
	generateEvenSequence,
	generateOddSequence,
	generateArithmeticSequence,
	generateGeometricSequence,
	generateHarmonicSequence,
	generateTriangularSequence,
	generateSquareSequence,
	generateCubeSequence,
	generateFactorialSequence,
	generateLucasSequence,
	generatePellSequence,
	generateJacobsthalSequence,
	generateKarnaughMapSequence,
	generateGrayCodeSequence,
} from "./sequence";

describe("generateFibonacciSequence", () => {
	it("generates the first 5 Fibonacci numbers", () => {
		expect(generateFibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateFibonacciSequence(0)).toEqual([]);
	});
});

describe("generatePrimeSequence", () => {
	it("generates the first 5 prime numbers", () => {
		expect(generatePrimeSequence(5)).toEqual([2, 3, 5, 7, 11]);
	});

	it("returns an empty array for n=0", () => {
		expect(generatePrimeSequence(0)).toEqual([]);
	});
});

describe("generateEvenSequence", () => {
	it("generates the first 5 even numbers", () => {
		expect(generateEvenSequence(5)).toEqual([0, 2, 4, 6, 8]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateEvenSequence(0)).toEqual([]);
	});
});

describe("generateOddSequence", () => {
	it("generates the first 5 odd numbers", () => {
		expect(generateOddSequence(5)).toEqual([1, 3, 5, 7, 9]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateOddSequence(0)).toEqual([]);
	});
});

describe("generateArithmeticSequence", () => {
	it("generates an arithmetic sequence", () => {
		expect(generateArithmeticSequence(2, 3, 5)).toEqual([2, 5, 8, 11, 14]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateArithmeticSequence(1, 1, 0)).toEqual([]);
	});
});

describe("generateGeometricSequence", () => {
	it("generates a geometric sequence", () => {
		expect(generateGeometricSequence(2, 3, 5)).toEqual([2, 6, 18, 54, 162]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateGeometricSequence(1, 2, 0)).toEqual([]);
	});
});

describe("generateHarmonicSequence", () => {
	it("generates the first 5 harmonic numbers", () => {
		expect(generateHarmonicSequence(5)).toEqual([1, 0.5, 1 / 3, 0.25, 0.2]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateHarmonicSequence(0)).toEqual([]);
	});
});

describe("generateTriangularSequence", () => {
	it("generates the first 5 triangular numbers", () => {
		expect(generateTriangularSequence(5)).toEqual([1, 3, 6, 10, 15]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateTriangularSequence(0)).toEqual([]);
	});
});

describe("generateSquareSequence", () => {
	it("generates the first 5 square numbers", () => {
		expect(generateSquareSequence(5)).toEqual([1, 4, 9, 16, 25]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateSquareSequence(0)).toEqual([]);
	});
});

describe("generateCubeSequence", () => {
	it("generates the first 4 cube numbers", () => {
		expect(generateCubeSequence(4)).toEqual([1, 8, 27, 64]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateCubeSequence(0)).toEqual([]);
	});
});

describe("generateFactorialSequence", () => {
	it("generates the first 5 factorial numbers", () => {
		expect(generateFactorialSequence(5)).toEqual([1, 2, 6, 24, 120]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateFactorialSequence(0)).toEqual([]);
	});
});

describe("generateLucasSequence", () => {
	it("generates the first 5 Lucas numbers", () => {
		expect(generateLucasSequence(5)).toEqual([2, 1, 3, 4, 7]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateLucasSequence(0)).toEqual([]);
	});
});

describe("generatePellSequence", () => {
	it("generates the first 5 Pell numbers", () => {
		expect(generatePellSequence(5)).toEqual([2, 1, 4, 9, 22]);
	});

	it("returns an empty array for n=0", () => {
		expect(generatePellSequence(0)).toEqual([]);
	});
});

describe("generateJacobsthalSequence", () => {
	it("generates the first 5 Jacobsthal numbers", () => {
		expect(generateJacobsthalSequence(5)).toEqual([0, 1, 2, 5, 12]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateJacobsthalSequence(0)).toEqual([]);
	});
});

describe("generateKarnaughMapSequence", () => {
	it("generates a Karnaugh map sequence of length 4", () => {
		expect(generateKarnaughMapSequence(4)).toEqual([0, 1, 2, 3]);
	});

	it("returns an empty array for n=0", () => {
		expect(generateKarnaughMapSequence(0)).toEqual([]);
	});
});

describe("generateGrayCodeSequence", () => {
	it("generates the Gray code sequence for 2 bits", () => {
		expect(generateGrayCodeSequence(2)).toEqual([0, 1, 3, 2]);
	});

	it("generates the Gray code sequence for 3 bits", () => {
		expect(generateGrayCodeSequence(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4]);
	});

	it("returns [0] for n=0", () => {
		expect(generateGrayCodeSequence(0)).toEqual([0]);
	});
});
