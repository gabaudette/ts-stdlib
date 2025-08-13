import { describe, expect, it } from "vitest";
import {
	capitalize,
	toCamelCase,
	toConstantCase,
	toKebabCase,
	toLowerCase,
	toPascalCase,
	toPathCase,
	toSentenceCase,
	toSnakeCase,
	toTitleCase,
	toUpperCase,
} from "./case-conversion";

describe("case-conversion", () => {
	describe("toUpperCase", () => {
		it("converts all characters to uppercase", () => {
			expect(toUpperCase("hello")).toBe("HELLO");
			expect(toUpperCase("Hello World!")).toBe("HELLO WORLD!");
			expect(toUpperCase("123abc")).toBe("123ABC");
		});
	});

	describe("toLowerCase", () => {
		it("converts all characters to lowercase", () => {
			expect(toLowerCase("HELLO")).toBe("hello");
			expect(toLowerCase("Hello World!")).toBe("hello world!");
			expect(toLowerCase("123ABC")).toBe("123abc");
		});
	});

	describe("capitalize", () => {
		it("capitalizes the first character", () => {
			expect(capitalize("hello")).toBe("Hello");
			expect(capitalize("world")).toBe("World");
			expect(capitalize("hELLO")).toBe("HELLO");
			expect(capitalize("")).toBe("");
		});
	});

	describe("toSnakeCase", () => {
		it("converts string to snake_case", () => {
			expect(toSnakeCase("Hello World")).toBe("hello_world");
			expect(toSnakeCase("This is a test")).toBe("this_is_a_test");
			expect(toSnakeCase("Already_Snake_Case")).toBe("already_snake_case");
			expect(toSnakeCase("multiple   spaces")).toBe("multiple_spaces");
		});
	});

	describe("toKebabCase", () => {
		it("converts string to kebab-case", () => {
			expect(toKebabCase("Hello World")).toBe("hello-world");
			expect(toKebabCase("TypeScript Is Awesome")).toBe(
				"typescript-is-awesome",
			);
			expect(toKebabCase("already-kebab-case")).toBe("already-kebab-case");
			expect(toKebabCase("multiple   spaces")).toBe("multiple-spaces");
		});
	});

	describe("toPascalCase", () => {
		it("converts string to PascalCase", () => {
			expect(toPascalCase("hello world")).toBe("HelloWorld");
			expect(toPascalCase("typeScript is awesome")).toBe("TypeScriptIsAwesome");
			expect(toPascalCase("alreadyPascalCase")).toBe("AlreadyPascalCase");
			expect(toPascalCase("multiple   spaces")).toBe("MultipleSpaces");
		});
	});

	describe("toCamelCase", () => {
		it("converts string to camelCase", () => {
			expect(toCamelCase("hello world")).toBe("helloWorld");
			expect(toCamelCase("TypeScript is awesome")).toBe("typeScriptIsAwesome");
			expect(toCamelCase("alreadyCamelCase")).toBe("alreadyCamelCase");
			expect(toCamelCase("multiple   spaces")).toBe("multipleSpaces");
		});
	});

	describe("toTitleCase", () => {
		it("converts string to Title Case", () => {
			expect(toTitleCase("hello world")).toBe("Hello World");
			expect(toTitleCase("typeScript is awesome")).toBe(
				"TypeScript Is Awesome",
			);
			expect(toTitleCase("alreadyTitleCase")).toBe("AlreadyTitleCase");
			expect(toTitleCase("multiple   spaces")).toBe("Multiple   Spaces");
		});
	});

	describe("toSentenceCase", () => {
		it("converts string to sentence case", () => {
			expect(toSentenceCase("hello world")).toBe("Hello world");
			expect(toSentenceCase("TYPEscript IS AWESOME")).toBe(
				"Typescript is awesome",
			);
			expect(toSentenceCase("AlreadySentenceCase")).toBe("Alreadysentencecase");
			expect(toSentenceCase("")).toBe("");
		});
	});

	describe("toConstantCase", () => {
		it("converts string to CONSTANT_CASE", () => {
			expect(toConstantCase("hello world")).toBe("HELLO_WORLD");
			expect(toConstantCase("TypeScript is awesome")).toBe(
				"TYPESCRIPT_IS_AWESOME",
			);
			expect(toConstantCase("already_CONSTANT_CASE")).toBe(
				"ALREADY_CONSTANT_CASE",
			);
			expect(toConstantCase("multiple   spaces")).toBe("MULTIPLE_SPACES");
		});
	});

	describe("toPathCase", () => {
		it("converts string to path/case", () => {
			expect(toPathCase("Hello World Example")).toBe("hello/world/example");
			expect(toPathCase("TypeScript is awesome")).toBe("typescript/is/awesome");
			expect(toPathCase("already/path/case")).toBe("already/path/case");
			expect(toPathCase("multiple   spaces")).toBe("multiple/spaces");
		});
	});
});
