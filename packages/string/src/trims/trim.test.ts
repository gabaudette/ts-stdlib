import { describe, it, expect } from "vitest";
import { trimStart, trimEnd } from "./trim";

describe("trimStart", () => {
    it("removes leading spaces", () => {
        expect(trimStart("   hello")).toBe("hello");
    });

    it("removes leading tabs and newlines", () => {
        expect(trimStart("\n\t  hello")).toBe("hello");
    });

    it("does not remove trailing whitespace", () => {
        expect(trimStart("   hello   ")).toBe("hello   ");
    });

    it("returns the same string if no leading whitespace", () => {
        expect(trimStart("hello")).toBe("hello");
    });

    it("returns empty string if input is only whitespace", () => {
        expect(trimStart("   \t\n")).toBe("");
    });

    it("returns empty string if input is empty", () => {
        expect(trimStart("")).toBe("");
    });
});

describe("trimEnd", () => {
    it("removes trailing spaces", () => {
        expect(trimEnd("hello   ")).toBe("hello");
    });

    it("removes trailing tabs and newlines", () => {
        expect(trimEnd("hello\t\n  ")).toBe("hello");
    });

    it("does not remove leading whitespace", () => {
        expect(trimEnd("   hello   ")).toBe("   hello");
    });

    it("returns the same string if no trailing whitespace", () => {
        expect(trimEnd("hello")).toBe("hello");
    });

    it("returns empty string if input is only whitespace", () => {
        expect(trimEnd("   \t\n")).toBe("");
    });

    it("returns empty string if input is empty", () => {
        expect(trimEnd("")).toBe("");
    });
});