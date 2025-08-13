import { describe, it, expect } from "vitest";
import { omit } from "./omit";

describe("omit", () => {
    it("should omit a single key from an object", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = omit(obj, ["b"]);
        expect(result).toEqual({ a: 1, c: 3 });
        expect(result).not.toBe(obj);
    });

    it("should omit multiple keys from an object", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = omit(obj, ["b", "c"]);
        expect(result).toEqual({ a: 1 });
    });

    it("should return a shallow copy if no keys are omitted", () => {
        const obj = { a: 1, b: 2 };
        const result = omit(obj, []);
        expect(result).toEqual(obj);
        expect(result).not.toBe(obj);
    });

    it("should not throw if keys to omit do not exist", () => {
        const obj = { a: 1, b: 2 };
        const result = omit(obj, ["c" as keyof typeof obj]);
        expect(result).toEqual({ a: 1, b: 2 });
    });

    it("should work with objects with symbol keys", () => {
        const sym = Symbol("s");
        const obj = { a: 1, [sym]: 2 };
        const result = omit(obj, [sym]);
        expect(result).toEqual({ a: 1 });
        expect(sym in result).toBe(false);
    });

    it("should not mutate the original object", () => {
        const obj = { a: 1, b: 2 };
        omit(obj, ["b"]);
        expect(obj).toEqual({ a: 1, b: 2 });
    });

    it("should work with empty object", () => {
        const obj: Record<string, unknown> = {};
        const result = omit(obj, ["a"]);
        expect(result).toEqual({});
    });
});