import { describe, it, expect } from "vitest";
import { set } from "./set";

describe("set", () => {
    it("should set a property to a new value", () => {
        const user = { id: 1, name: "Alice" };
        const updated = set(user, "name", "Bob");
        expect(updated).toEqual({ id: 1, name: "Bob" });
        expect(user).toEqual({ id: 1, name: "Alice" }); // original not mutated
    });

    it("should add a new property if it does not exist", () => {
        const obj = { a: 1 };
        const updated = set(obj as { a: number; b?: number }, "b", 2);
        expect(updated).toEqual({ a: 1, b: 2 });
    });

    it("should work with different value types", () => {
        const obj = { a: 1, b: true, c: "test" };
        expect(set(obj, "a", 42)).toEqual({ a: 42, b: true, c: "test" });
        expect(set(obj, "b", false)).toEqual({ a: 1, b: false, c: "test" });
        expect(set(obj, "c", "changed")).toEqual({ a: 1, b: true, c: "changed" });
    });

    it("should not mutate the original object", () => {
        const obj = { x: 10 };
        const updated = set(obj, "x", 20);
        expect(obj).toEqual({ x: 10 });
        expect(updated).not.toBe(obj);
    });

    it("should work with nested objects (shallow copy)", () => {
        const obj = { nested: { a: 1 }, b: 2 };
        const updated = set(obj, "b", 3);
        expect(updated).toEqual({ nested: { a: 1 }, b: 3 });
        expect(updated.nested).toBe(obj.nested); // shallow copy
    });
});