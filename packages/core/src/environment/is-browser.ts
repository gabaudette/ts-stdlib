/**
 * Determines if the current runtime environment is a web browser.
 *
 * @returns {boolean} `true` if running in a browser environment, otherwise `false`.
 *
 * This function checks for the existence of `window`, `document`, and `document.createElement`
 * to reliably detect browser contexts.
 */
export function isBrowser(): boolean {
	return (
		typeof window !== "undefined" &&
		typeof document !== "undefined" &&
		typeof document.createElement === "function"
	);
}
