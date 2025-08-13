import { describe, it, expect } from "vitest";
import { parseJson } from "./parse";


describe("parseJson", () => {
    it("parses a valid JSON string to an object", () => {
        const json = '{"a":1,"b":"test"}';
        const result = parseJson<{ a: number; b: string }>(json);
        expect(result).toEqual({ a: 1, b: "test" });
    });

    it("parses a valid JSON string to an array", () => {
        const json = '[1, 2, 3]';
        const result = parseJson<number[]>(json);
        expect(result).toEqual([1, 2, 3]);
    });

    it("returns undefined for invalid JSON string", () => {
        const invalidJson = '{"a":1,}';
        const result = parseJson(invalidJson);
        expect(result).toBeUndefined();
    });

    it("returns undefined for non-JSON string", () => {
        const notJson = "hello world";
        const result = parseJson(notJson);
        expect(result).toBeUndefined();
    });

    it("parses a valid JSON string representing a primitive", () => {
        const json = '42';
        const result = parseJson<number>(json);
        expect(result).toBe(42);
    });

    it("parses a valid JSON string representing null", () => {
        const json = 'null';
        const result = parseJson<null>(json);
        expect(result).toBeNull();
    });
});