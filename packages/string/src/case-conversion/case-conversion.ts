/**
 * Converts all the characters in the given string to uppercase.
 *
 * @param text - The input string to convert.
 * @returns A new string with all characters in uppercase.
 */
export function toUpperCase(text: string): string {
	return text.toUpperCase();
}

/**
 * Converts all the characters in the given string to lowercase.
 *
 * @param text - The input string to convert.
 * @returns A new string with all characters in lowercase.
 */
export function toLowerCase(text: string): string {
	return text.toLowerCase();
}

/**
 * Converts the first character of the given string to uppercase and returns the resulting string.
 *
 * @param text - The input string to capitalize.
 * @returns The input string with its first character converted to uppercase.
 *
 * @example
 * ```typescript
 * capitalize('hello'); // returns 'Hello'
 * capitalize('world'); // returns 'World'
 * ```
 */
export function capitalize(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Converts a given string to snake_case.
 *
 * This function replaces all whitespace characters in the input string with underscores
 * and converts the entire string to lowercase.
 *
 * @param text - The input string to convert.
 *
 * @example
 * ```typescript
 * toSnakeCase('Hello World'); // returns 'hello_world'
 * toSnakeCase('This is a test'); // returns 'this_is_a_test'
 * ```
 *
 * @returns The snake_case version of the input string.
 */
export function toSnakeCase(text: string): string {
	return text.replace(/\s+/g, "_").toLowerCase();
}

/**
 * Converts a given string to kebab-case.
 *
 * This function replaces all whitespace characters in the input string with hyphens (`-`)
 * and converts the entire string to lowercase.
 *
 * @param text - The input string to convert.
 * @returns The kebab-case version of the input string.
 *
 * @example
 * ```typescript
 * toKebabCase("Hello World"); // "hello-world"
 * toKebabCase("TypeScript Is Awesome"); // "typescript-is-awesome"
 * ```
 */
export function toKebabCase(text: string): string {
	return text.replace(/\s+/g, "-").toLowerCase();
}

/**
 * Converts a given string to PascalCase.
 *
 * Each word in the input string is capitalized and concatenated without spaces.
 * For example, "hello world" becomes "HelloWorld".
 *
 * @param text - The input string to convert.
 * @returns The PascalCase version of the input string.
 *
 * @example
 * ```typescript
 * toPascalCase("hello world"); // "HelloWorld"
 * toPascalCase("typeScript is awesome"); // "TypeScriptIsAwesome"
 * ```
 */
export function toPascalCase(str: string): string {
	return str
		.replace(/[_\- ]+/g, " ")
		.split(" ")
		.map((word) =>
			word.length === 0 ? "" : word.charAt(0).toUpperCase() + word.slice(1),
		)
		.join("");
}

/**
 * Converts a given string to camelCase format.
 *
 * Splits the input string by spaces, lowercases the first word,
 * and capitalizes the first letter of each subsequent word, then joins them together.
 *
 * @param text - The input string to convert.
 * @returns The camelCase formatted string.
 *
 * @example
 * ```typescript
 * toCamelCase("hello world"); // "helloWorld"
 * toCamelCase("TypeScript is awesome"); // "typeScriptIsAwesome"
 * ```
 */
export function toCamelCase(str: string): string {
    const pascal = toPascalCase(str);
				return pascal.length > 0
					? pascal[0].toLowerCase() + pascal.slice(1)
					: "";
}

/**
 * Converts a given string to title case, capitalizing the first letter of each word.
 *
 * @param text - The input string to convert.
 * @returns The input string with the first letter of each word capitalized.
 *
 * @example
```typescript
 * toTitleCase("hello world"); // "Hello World"
 * toTitleCase("typeScript is awesome"); // "TypeScript Is Awesome"
 * ```
 */
export function toTitleCase(text: string): string {
	return text
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

/**
 * Converts the input string to sentence case.
 * The first character is capitalized and the rest are converted to lowercase.
 *
 * @param text - The string to convert.
 * @returns The sentence-cased string.
 */
export function toSentenceCase(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Converts a given string to CONSTANT_CASE.
 *
 * This function replaces all whitespace characters in the input string with underscores
 * and transforms all letters to uppercase.
 *
 * @param text - The input string to convert.
 * @returns The converted string in CONSTANT_CASE format.
 *
 * @example
 * ```typescript
 * toConstantCase("hello world"); // "HELLO_WORLD"
 * toConstantCase("TypeScript is awesome"); // "TYPESCRIPT_IS_AWESOME"
 * ```
 */
export function toConstantCase(text: string): string {
	return text.replace(/\s+/g, "_").toUpperCase();
}

/**
 * Converts a string to path case, replacing all whitespace characters with slashes ("/")
 * and converting the result to lowercase.
 *
 * @param text - The input string to convert.
 * @returns The path case version of the input string.
 *
 * @example
 * ```typescript
 * toPathCase("Hello World Example"); // "hello/world/example"
 * ```
 */
export function toPathCase(text: string): string {
	return text.replace(/\s+/g, "/").toLowerCase();
}
