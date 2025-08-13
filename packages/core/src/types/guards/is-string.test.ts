import { describe, it, expect } from "vitest";
import { isString, isStringArray } from "./is-string";

describe("isString", () => {
    it("returns true for string literals", () => {
        expect(isString("hello")).toBe(true);
        expect(isString("")).toBe(true);
        expect(isString(String("test"))).toBe(true);
    });

    it("returns false for non-string values", () => {
        expect(isString(123)).toBe(false);
        expect(isString(true)).toBe(false);
        expect(isString(null)).toBe(false);
        expect(isString(undefined)).toBe(false);
        expect(isString({})).toBe(false);
        expect(isString([])).toBe(false);
        expect(isString(Symbol("s"))).toBe(false);
        expect(isString(new String("wrapped"))).toBe(false); // String object, not primitive
    });
});

describe("isStringArray", () => {
    it("returns true for arrays of strings", () => {
        expect(isStringArray(["a", "b", "c"])).toBe(true);
        expect(isStringArray([])).toBe(true);
        expect(isStringArray([""])).toBe(true);
    });

    it("returns false for arrays with non-string elements", () => {
        expect(isStringArray(["a", 1, "b"])).toBe(false);
        expect(isStringArray([null, "a"])).toBe(false);
        expect(isStringArray([undefined])).toBe(false);
        expect(isStringArray([{}])).toBe(false);
        expect(isStringArray([new String("wrapped")])).toBe(false);
    });

    it("returns false for non-array values", () => {
        expect(isStringArray("hello")).toBe(false);
        expect(isStringArray(123)).toBe(false);
        expect(isStringArray({})).toBe(false);
        expect(isStringArray(null)).toBe(false);
        expect(isStringArray(undefined)).toBe(false);
    });
});