export function isJsonString(value: unknown): value is string {
	if (typeof value !== "string") {
		return false;
	}

	try {
		JSON.parse(value);
		return true;
	} catch {
		return false;
	}
}

export function isJsonObject(value: unknown): value is Record<string, unknown> {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	try {
		JSON.stringify(value);
		return true;
	} catch {
		return false;
	}
}

