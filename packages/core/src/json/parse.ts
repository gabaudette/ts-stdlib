import { isJsonString } from "../types/guards/is-json";

/**
 * Safely parses a JSON string and returns the resulting value typed as `T`.
 *
 * If the input string is not valid JSON, the function returns `undefined`.
 *
 * @typeParam T - The expected type of the parsed JSON object.
 * @param jsonString - The JSON string to parse.
 * @returns The parsed object of type `T`, or `undefined` if the input is not valid JSON.
 */
export function parseJson<T>(jsonString: string): T | undefined {
	if (!isJsonString(jsonString)) {
		return undefined;
	}

	return JSON.parse(jsonString) as T;
}
