import { interpolate } from "./template-interpolation";
import { describe, it, expect } from "vitest";

describe("interpolate", () => {
	it("replaces a single placeholder with a string value", () => {
		expect(interpolate("Hello, {{name}}!", { name: "Alice" })).toBe(
			"Hello, Alice!",
		);
	});

	it("replaces multiple placeholders with corresponding values", () => {
		expect(
			interpolate("Hello, {{first}} {{last}}!", { first: "John", last: "Doe" }),
		).toBe("Hello, John Doe!");
	});

	it("replaces placeholders with number and boolean values", () => {
		expect(
			interpolate("You have {{count}} new messages. Active: {{active}}", {
				count: 5,
				active: true,
			}),
		).toBe("You have 5 new messages. Active: true");
	});

	it("replaces missing keys with empty string", () => {
		expect(interpolate("Hello, {{name}}!", {})).toBe("Hello, !");
	});

	it("handles templates with no placeholders", () => {
		expect(interpolate("No placeholders here.", { foo: "bar" })).toBe(
			"No placeholders here.",
		);
	});

	it("handles adjacent placeholders", () => {
		expect(interpolate("{{a}}{{b}}{{c}}", { a: 1, b: 2, c: 3 })).toBe("123");
	});

	it("does not replace keys not wrapped in double curly braces", () => {
		expect(interpolate("Hello, {name}!", { name: "Bob" })).toBe(
			"Hello, {name}!",
		);
	});

	it("handles repeated placeholders", () => {
		expect(interpolate("{{word}} {{word}}", { word: "echo" })).toBe(
			"echo echo",
		);
	});

	it("handles placeholders with boolean false and 0", () => {
		expect(interpolate("False: {{f}}, Zero: {{z}}", { f: false, z: 0 })).toBe(
			"False: false, Zero: 0",
		);
	});
});
