export interface NodeJSProcess {
	versions: {
		node: string;
	};
}

export interface NodeJSGlobal {
	process: NodeJSProcess;
}

/**
 * Determines if the current runtime environment is Node.js.
 *
 * @returns {boolean} `true` if running in Node.js, otherwise `false`.
 */
export function isNode(): boolean {
	return (
		typeof globalThis !== "undefined" &&
		typeof (globalThis as unknown as NodeJSGlobal).process !== "undefined" &&
		(globalThis as unknown as NodeJSGlobal).process.versions != null &&
		(globalThis as unknown as NodeJSGlobal).process.versions.node != null
	);
}
