/**
 * Removes whitespace from the beginning of a string.
 *
 * @param text - The input string to trim.
 * @returns A new string with leading whitespace removed.
 */
export function trimStart(text: string): string {
	return text.replace(/^\s+/, "");
}

/**
 * Removes trailing whitespace characters from the end of the given string.
 *
 * @param text - The input string to trim.
 * @returns A new string with trailing whitespace removed.
 */
export function trimEnd(text: string): string {
	return text.replace(/\s+$/, "");
}
