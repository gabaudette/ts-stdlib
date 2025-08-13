import { describe, it, expect } from "vitest";
import { wordWrap } from "./word-wrap";

describe("wordWrap", () => {
    it("wraps text at word boundaries within the specified width", () => {
        const input = "The quick brown fox jumps over the lazy dog";
        const width = 10;
        const expected = "The quick\nbrown fox\njumps over\nthe lazy\ndog";
        expect(wordWrap(input, width)).toBe(expected);
    });

    it("returns the original text if it fits within the width", () => {
        const input = "Hello world";
        const width = 20;
        expect(wordWrap(input, width)).toBe("Hello world");
    });

    it("handles a single long word longer than the width", () => {
        const input = "supercalifragilisticexpialidocious";
        const width = 10;
        // The function does not split words, so the long word will be on its own line
        expect(wordWrap(input, width)).toBe("supercalifragilisticexpialidocious");
    });

    it("handles empty string input", () => {
        expect(wordWrap("", 10)).toBe("");
    });

    it("handles multiple spaces between words", () => {
        const input = "The   quick    brown";
        const width = 10;
        const expected = "The quick\nbrown";
        expect(wordWrap(input, width)).toBe(expected);
    });

    it("handles width of 1 (each word on its own line)", () => {
        const input = "a b c";
        const width = 1;
        const expected = "a\nb\nc";
        expect(wordWrap(input, width)).toBe(expected);
    });

    it("handles text with trailing spaces", () => {
        const input = "Hello world   ";
        const width = 7;
        const expected = "Hello\nworld";
        expect(wordWrap(input, width)).toBe(expected);
    });

    it("handles text with leading spaces", () => {
        const input = "   Hello world";
        const width = 7;
        const expected = "Hello\nworld";
        expect(wordWrap(input, width)).toBe(expected);
    });

    it("handles text with only spaces", () => {
        expect(wordWrap("     ", 3)).toBe("");
    });

    it("handles width equal to word length", () => {
        const input = "cat dog";
        const width = 3;
        const expected = "cat\ndog";
        expect(wordWrap(input, width)).toBe(expected);
    });
});