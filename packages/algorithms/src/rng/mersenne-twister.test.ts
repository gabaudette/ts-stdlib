import { describe, expect, it } from "vitest";
import type { RNG } from "./interface/rng.interface";
import { MersenneTwister } from "./mersenne-twister";

describe("MersenneTwister", () => {
	it("should implement RNG interface", () => {
		const mt: RNG = new MersenneTwister(1234);
		expect(typeof mt.randomInt).toBe("function");
		expect(typeof mt.random).toBe("function");
	});

	it("should produce deterministic sequence for a given seed", () => {
		const mt1 = new MersenneTwister(42);
		const mt2 = new MersenneTwister(42);
		const seq1 = Array.from({ length: 10 }, () => mt1.randomInt());
		const seq2 = Array.from({ length: 10 }, () => mt2.randomInt());
		expect(seq1).toEqual(seq2);
	});

	it("should produce different sequences for different seeds", () => {
		const mt1 = new MersenneTwister(1);
		const mt2 = new MersenneTwister(2);
		const seq1 = Array.from({ length: 10 }, () => mt1.randomInt());
		const seq2 = Array.from({ length: 10 }, () => mt2.randomInt());
		expect(seq1).not.toEqual(seq2);
	});

	it("random() should return values in [0, 1)", () => {
		const mt = new MersenneTwister(123);
		for (let i = 0; i < 1000; ++i) {
			const val = mt.random();
			expect(val).toBeGreaterThanOrEqual(0);
			expect(val).toBeLessThan(1);
		}
	});

	it("randomInt() should return 32-bit unsigned integers", () => {
		const mt = new MersenneTwister(9876);
		for (let i = 0; i < 1000; ++i) {
			const val = mt.randomInt();
			expect(Number.isInteger(val)).toBe(true);
			expect(val).toBeGreaterThanOrEqual(0);
			expect(val).toBeLessThanOrEqual(0xffffffff);
		}
	});
});
