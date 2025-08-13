import { describe, it, expect, afterEach } from "vitest";
import { isBrowser } from "./is-browser";

describe("isBrowser", () => {
	const originalWindow = globalThis.window;
	const originalDocument = globalThis.document;

	afterEach(() => {
		// Restore original globals after each test
		if (typeof originalWindow !== "undefined") {
			globalThis.window = originalWindow;
		} else {
			delete (globalThis as unknown as { window?: unknown }).window;
		}
		if (typeof originalDocument !== "undefined") {
			globalThis.document = originalDocument;
		} else {
			delete (globalThis as unknown as { document?: unknown }).document;
		}
	});

	it("returns true when window, document, and document.createElement exist", () => {
		(globalThis as unknown as { window: unknown }).window = {};
		(globalThis as Record<string, unknown>).document = { createElement: () => {} };
		expect(isBrowser()).toBe(true);
	});

	it("returns false when window is undefined", () => {
		delete (globalThis as Record<string, unknown>).window;
		(globalThis as Record<string, unknown>).document = { createElement: () => {} };
		expect(isBrowser()).toBe(false);
	});

	it("returns false when document is undefined", () => {
		(globalThis as Record<string, unknown>).window = {};
		delete (globalThis as Record<string, unknown>).document;
		expect(isBrowser()).toBe(false);
	});

	it("returns false when document.createElement is not a function", () => {
		(globalThis as Record<string, unknown>).window = {};
		(globalThis as Record<string, unknown>).document = { createElement: 123 };
		expect(isBrowser()).toBe(false);
	});
});
