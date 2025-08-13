import { describe, it, expect } from "vitest";
import { isObject } from "./is-object";

describe("isObject", () => {
    it("returns true for plain objects", () => {
        expect(isObject({})).toBe(true);
        expect(isObject({ a: 1 })).toBe(true);
        expect(isObject(Object.create(null))).toBe(true);
    });

    it("returns false for arrays", () => {
        expect(isObject([])).toBe(false);
        expect(isObject([1, 2, 3])).toBe(false);
    });

    it("returns false for null", () => {
        expect(isObject(null)).toBe(false);
    });

    it("returns false for primitives", () => {
        expect(isObject(42)).toBe(false);
        expect(isObject("string")).toBe(false);
        expect(isObject(true)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(Symbol("sym"))).toBe(false);
        expect(isObject(BigInt(10))).toBe(false);
    });

    it("returns true for object wrappers", () => {
        expect(isObject(new Object())).toBe(true);
        expect(isObject(new Date())).toBe(true);
        expect(isObject(new Map())).toBe(true);
        expect(isObject(new Set())).toBe(true);
        expect(isObject(new Error())).toBe(true);
    });

    it("returns false for functions", () => {
        expect(isObject(function () {})).toBe(false);
        expect(isObject(() => {})).toBe(false);
        expect(isObject(class {})).toBe(false);
    });
});