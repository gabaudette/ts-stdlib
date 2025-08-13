import { describe, it, expect, vi, afterEach } from "vitest";
import { isNode } from "./is-node";

describe("isNode", () => {
	const originalProcess = globalThis.process;

	afterEach(() => {
		// Restore the original process object after each test
		globalThis.process = originalProcess;
	});

	it("returns true when running in a Node.js-like environment", () => {
		// @ts-expect-error: mocking process for test
		globalThis.process = {
			versions: {
				node: "18.0.0",
				http_parser: "",
				v8: "",
				ares: "",
				uv: "",
				zlib: "",
				modules: "",
				openssl: "",
			},
		};
		expect(isNode()).toBe(true);
	});

	it("returns false when process is undefined", () => {
		// @ts-expect-error: deleting process for test
		delete globalThis.process;
		expect(isNode()).toBe(false);
	});

	it("returns false when process.versions is null", () => {
		// @ts-expect-error: mocking process for test
		globalThis.process = { versions: null };
		expect(isNode()).toBe(false);
	});

	it("returns false when process.versions.node is null", () => {
		// @ts-expect-error: mocking process for test
		globalThis.process = { versions: { node: null } };
		expect(isNode()).toBe(false);
	});

	it("returns false when process.versions.node is undefined", () => {
		// @ts-expect-error: mocking process for test
		globalThis.process = { versions: { node: undefined } };
		expect(isNode()).toBe(false);
	});
});
