import { beforeEach, describe, it, expect } from "vitest";
import { Xorshift } from "./xorshift";

describe("Xorshift", () => {
    let rng: Xorshift;

    beforeEach(() => {
        rng = new Xorshift(12345);
    });

    it("should produce deterministic sequence for the same seed", () => {
        const rng1 = new Xorshift(42);
        const rng2 = new Xorshift(42);

        const seq1 = Array.from({ length: 5 }, () => rng1.randomInt());
        const seq2 = Array.from({ length: 5 }, () => rng2.randomInt());

        expect(seq1).toEqual(seq2);
    });

    it("should produce different sequences for different seeds", () => {
        const rng1 = new Xorshift(1);
        const rng2 = new Xorshift(2);

        const seq1 = Array.from({ length: 5 }, () => rng1.randomInt());
        const seq2 = Array.from({ length: 5 }, () => rng2.randomInt());

        expect(seq1).not.toEqual(seq2);
    });

    it("randomInt should return a 32-bit unsigned integer", () => {
        for (let i = 0; i < 10; i++) {
            const value = rng.randomInt();
            expect(Number.isInteger(value)).toBe(true);
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThanOrEqual(0xffffffff);
        }
    });

    it("random should return a float between 0 (inclusive) and 1 (exclusive)", () => {
        for (let i = 0; i < 10; i++) {
            const value = rng.random();
            expect(typeof value).toBe("number");
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThan(1);
        }
    });

    it("next should update internal state and return a 32-bit unsigned integer", () => {
        const initial = (rng as any).state;
        const nextValue = rng.next();
        expect(Number.isInteger(nextValue)).toBe(true);
        expect(nextValue).toBeGreaterThanOrEqual(0);
        expect(nextValue).toBeLessThanOrEqual(0xffffffff);
        expect((rng as any).state).not.toBe(initial);
    });
});