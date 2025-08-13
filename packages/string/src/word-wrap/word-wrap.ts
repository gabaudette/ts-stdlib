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
	if (!text.trim()) {
		return "";
	}

	const words = text.trim().split(/\s+/);
	const lines: string[] = [];
	let currentLine = "";

	for (const word of words) {
		if (currentLine.length === 0) {
			currentLine = word;
		} else if (`${currentLine} ${word}`.length <= width) {
			currentLine += ` ${word}`;
		} else {
			lines.push(currentLine);
			currentLine = word;
		}
	}

	if (currentLine) {
		lines.push(currentLine);
	}

	return lines.join("\n");
}
