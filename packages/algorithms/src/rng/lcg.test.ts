import { describe, it, expect, beforeEach } from "vitest";
import { LCG } from "./lcg";

describe("LCG", () => {
	let rng: LCG;

	beforeEach(() => {
		rng = new LCG(12345);
	});

	it("should generate deterministic sequence for same seed", () => {
		const rng1 = new LCG(42);
		const rng2 = new LCG(42);

		const seq1 = [rng1.randomInt(), rng1.randomInt(), rng1.randomInt()];
		const seq2 = [rng2.randomInt(), rng2.randomInt(), rng2.randomInt()];

		expect(seq1).toEqual(seq2);
	});

	it("should generate different sequences for different seeds", () => {
		const rng1 = new LCG(1);
		const rng2 = new LCG(2);

		const seq1 = [rng1.randomInt(), rng1.randomInt(), rng1.randomInt()];
		const seq2 = [rng2.randomInt(), rng2.randomInt(), rng2.randomInt()];

		expect(seq1).not.toEqual(seq2);
	});

	it("randomInt() should return an integer within expected range", () => {
		for (let i = 0; i < 10; i++) {
			const value = rng.randomInt();
			expect(Number.isInteger(value)).toBe(true);
			expect(value).toBeGreaterThanOrEqual(0);
			expect(value).toBeLessThan(0x80000000);
		}
	});

	it("random() should return a float in [0, 1)", () => {
		for (let i = 0; i < 10; i++) {
			const value = rng.random();
			expect(typeof value).toBe("number");
			expect(value).toBeGreaterThanOrEqual(0);
			expect(value).toBeLessThan(1);
		}
	});

	it("next() should update state and return next pseudo-random number", () => {
		const first = rng.next();
		const second = rng.next();
		expect(typeof first).toBe("number");
		expect(typeof second).toBe("number");
		expect(first).not.toBe(second);
	});

	it("should produce repeatable output for a known seed", () => {
		const knownRng = new LCG(123);
		const expected = [
			(0x4c1906 * 123 + 1) % 0x80000000,
			(0x4c1906 * ((0x4c1906 * 123 + 1) % 0x80000000) + 1) % 0x80000000,
		];
		expect(knownRng.next()).toBe(expected[0]);
		expect(knownRng.next()).toBe(expected[1]);
	});
});
