/**
 * Wraps a given text into lines of specified maximum width, breaking lines at word boundaries.
 *
 * Splits the input text into words and constructs lines such that each line's length does not exceed the specified width.
 * Words are not split; if a word would cause the line to exceed the width, it is moved to the next line.
 *
 * @param text - The input string to be wrapped.
 * @param width - The maximum width (in characters) of each line.
 * @returns The wrapped text with lines separated by newline characters (`\n`).
 */
export function wordWrap(text: string, width: number): string {
	const words = text.split(" ");
	let currentLine = "";
	let result = "";

	for (const word of words) {
		if (currentLine.length + word.length + 1 > width) {
			result += `${currentLine.trim()}\n`;
			currentLine = "";
		}
		currentLine += `${word} `;
	}

	return `${result}${currentLine.trim()}`;
}
